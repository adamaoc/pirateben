import { YOUTUBE_CHANNELS } from "./constants";

// YouTube RSS-based video fetching
interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: string;
  url: string;
  channel: string;
}

// CORS proxy URLs for fallback (free public proxies - use with caution)
const CORS_PROXIES = [
  "https://api.allorigins.win/raw?url=",
  "https://corsproxy.io/?",
];

// Get latest video from a specific channel using RSS feed
export async function getLatestVideoFromRSSFeed(
  channelId: string,
  channelName: string
): Promise<YouTubeVideo | null> {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  // Try direct fetch first, then fallback to CORS proxies
  const attempts = [
    { url: rssUrl, method: "direct" },
    ...CORS_PROXIES.map((proxy) => ({
      url: `${proxy}${encodeURIComponent(rssUrl)}`,
      method: `proxy: ${proxy}`,
    })),
  ];

  for (const attempt of attempts) {
    try {
      console.log(`🔍 Fetching ${channelName} via ${attempt.method}...`);
      console.log("📡 URL:", attempt.url);

      const response = await fetch(attempt.url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          Accept: "application/rss+xml, application/xml, text/xml",
        },
      });

      if (!response.ok) {
        console.warn(
          `⚠️ ${attempt.method} failed for ${channelName}: ${response.status} ${response.statusText}`
        );
        continue; // Try next method
      }

      const xmlText = await response.text();
      console.log(`📄 RSS response length for ${channelName}:`, xmlText.length);

      if (!xmlText || xmlText.trim().length === 0) {
        console.warn(
          `⚠️ Empty response from ${attempt.method} for ${channelName}`
        );
        continue; // Try next method
      }

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");

      // Check for XML parsing errors
      const parserError = xmlDoc.getElementsByTagName("parsererror");
      if (parserError.length > 0) {
        console.warn(
          `⚠️ XML parsing error from ${attempt.method} for ${channelName}:`,
          parserError[0].textContent
        );
        continue; // Try next method
      }

      const entries = xmlDoc.getElementsByTagName("entry");
      console.log(
        `📊 Found ${entries.length} entries for ${channelName} via ${attempt.method}`
      );

      if (entries.length === 0) {
        console.warn(
          `⚠️ No videos found via ${attempt.method} for ${channelName}`
        );
        continue; // Try next method
      }

      const latestEntry = entries[0];
      const videoId =
        latestEntry.getElementsByTagName("yt:videoId")[0]?.textContent || "";
      const title =
        latestEntry.getElementsByTagName("title")[0]?.textContent || "";
      const publishedAt =
        latestEntry.getElementsByTagName("published")[0]?.textContent || "";
      const authorName =
        latestEntry.getElementsByTagName("name")[0]?.textContent || channelName;

      if (!videoId || !title) {
        console.warn(
          `⚠️ Missing video data from ${attempt.method} for ${channelName}: videoId=${videoId}, title=${title}`
        );
        continue; // Try next method
      }

      // Get the best available thumbnail
      const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      console.log(
        `✅ Successfully fetched ${channelName} via ${attempt.method}:`,
        title
      );

      return {
        id: videoId,
        title,
        thumbnail,
        publishedAt,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        description: `Latest video from ${authorName}`,
        viewCount: "N/A",
        channel: channelName,
      };
    } catch (error) {
      console.warn(`⚠️ ${attempt.method} failed for ${channelName}:`, error);
      continue; // Try next method
    }
  }

  // All methods failed
  console.error(`❌ All fetch methods failed for ${channelName}`);
  console.error(`🚫 Possible issues:`);
  console.error(`   - CORS policy blocking all requests`);
  console.error(`   - Network connectivity issues`);
  console.error(`   - YouTube RSS feed temporarily unavailable`);
  console.error(`   - Invalid channel ID: ${channelId}`);

  return null;
}

// Get latest videos from all channels using RSS feeds
export async function getAllLatestVideosFromRSS(): Promise<YouTubeVideo[]> {
  try {
    console.log("🔍 Fetching latest videos from all channels using RSS...");
    console.log(
      `📋 Channels to fetch: ${YOUTUBE_CHANNELS.map(
        (ch) => ch.displayName
      ).join(", ")}`
    );

    // Fetch latest video from each channel simultaneously, but handle failures gracefully
    const videoPromises = YOUTUBE_CHANNELS.map(async (channel) => {
      try {
        console.log(`🎯 Starting fetch for ${channel.displayName}...`);
        const result = await getLatestVideoFromRSSFeed(
          channel.id,
          channel.displayName
        );
        if (result) {
          console.log(`✅ Successfully fetched ${channel.displayName}`);
        } else {
          console.log(`⚠️ No video found for ${channel.displayName}`);
        }
        return result;
      } catch (error) {
        console.error(`❌ Failed to fetch ${channel.displayName}:`, error);
        return null;
      }
    });

    console.log("⏳ Waiting for all channel fetches to complete...");
    const videos = await Promise.all(videoPromises);

    // Filter out null results and sort by publish date (newest first)
    const validVideos = videos.filter(
      (video) => video !== null
    ) as YouTubeVideo[];

    const sortedVideos = validVideos.sort((a, b) => {
      const dateA = new Date(a.publishedAt || 0);
      const dateB = new Date(b.publishedAt || 0);
      return dateB.getTime() - dateA.getTime();
    });

    console.log(
      `✅ Successfully fetched ${validVideos.length}/${YOUTUBE_CHANNELS.length} channels`
    );
    console.log(
      `📊 Final results: ${validVideos
        .map((v) => `${v.channel}: ${v.title.substring(0, 30)}...`)
        .join(" | ")}`
    );

    return sortedVideos;
  } catch (error) {
    console.error("❌ Error fetching videos from RSS feeds:", error);
    return [];
  }
}

// Get the most recent video across all channels using RSS
export async function getPirateBenLatestVideo(): Promise<YouTubeVideo | null> {
  try {
    console.log("🔍 Getting most recent video across all channels...");

    const allVideos = await getAllLatestVideosFromRSS();

    if (allVideos.length === 0) {
      console.log("❌ No videos found from any channel");
      return null;
    }

    // Return the most recent video (already sorted by date)
    const latestVideo = allVideos[0];
    console.log("✅ Most recent video:", latestVideo.title);

    return latestVideo;
  } catch (error) {
    console.error("❌ Error getting latest video from RSS:", error);
    return null;
  }
}

// Utility function to format view counts (1000 -> 1K, 1000000 -> 1M)
export function formatViewCount(viewCount: string): string {
  if (viewCount === "N/A" || !viewCount) return "N/A";

  const count = parseInt(viewCount);
  if (isNaN(count)) return viewCount;

  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  }
  return count.toString();
}

// Utility function to format publish dates
export function formatPublishDate(publishedAt: string): string {
  if (!publishedAt) return "Unknown";

  const publishDate = new Date(publishedAt);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - publishDate.getTime()) / 1000
  );

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;

  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

export { YOUTUBE_CHANNELS };
