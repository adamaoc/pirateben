"use client";

import { Calendar, Video, Users, Trophy } from "lucide-react";
import { useState, useEffect } from "react";

// Type definitions for the new API response
interface ChannelStat {
  type: string;
  displayName: string;
  value: string;
  lastUpdated: string;
}

interface Channel {
  id: string;
  platform: string;
  channelId: string;
  channelName: string;
  channelUrl: string;
  stats: ChannelStat[];
}

interface SocialMediaResponse {
  channels: Channel[];
  count: number;
  lastUpdated: string;
}

const StatsGrid = () => {
  const [stats, setStats] = useState<{
    subscriberCount: number;
    videoCount: number;
    totalViews: number;
    channelCount: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        console.log("📊 Fetching combined stats from all YouTube channels...");

        // Use environment variables for FlexHub URL and Site ID
        const flexhubUrl =
          process.env.NEXT_PUBLIC_FLEXHUB_URL ||
          "https://flexhub.ampnet.media/api";
        const siteId = process.env.NEXT_PUBLIC_SITE_ID;

        if (!siteId) {
          throw new Error(
            "NEXT_PUBLIC_SITE_ID environment variable is required"
          );
        }

        const response = await fetch(
          `${flexhubUrl}/public/sites/${siteId}/social-media`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: SocialMediaResponse = await response.json();

        // Aggregate stats from all YouTube channels
        let totalSubscribers = 0;
        let totalVideos = 0;
        let totalViews = 0;

        data.channels.forEach((channel) => {
          if (channel.platform === "YOUTUBE") {
            channel.stats.forEach((stat) => {
              switch (stat.type) {
                case "YOUTUBE_SUBSCRIBERS":
                  // Parse values like "1.2K" or "61"
                  totalSubscribers += parseStatValue(stat.value);
                  break;
                case "YOUTUBE_VIDEO_COUNT":
                  totalVideos += parseStatValue(stat.value);
                  break;
                case "YOUTUBE_TOTAL_VIEWS":
                  totalViews += parseStatValue(stat.value);
                  break;
              }
            });
          }
        });

        console.log("✅ Successfully fetched and aggregated YouTube stats", {
          subscribers: totalSubscribers,
          videos: totalVideos,
          views: totalViews,
          channels: data.channels.length,
        });

        setStats({
          subscriberCount: totalSubscribers,
          videoCount: totalVideos,
          totalViews: totalViews,
          channelCount: data.channels.length,
        });
      } catch (error) {
        console.error("Error fetching YouTube stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  // Helper function to parse stat values like "1.2K", "71.5K", or plain numbers
  const parseStatValue = (value: string): number => {
    const cleanValue = value.replace(/,/g, ""); // Remove commas

    if (cleanValue.includes("K")) {
      return Math.round(parseFloat(cleanValue.replace("K", "")) * 1000);
    } else if (cleanValue.includes("M")) {
      return Math.round(parseFloat(cleanValue.replace("M", "")) * 1000000);
    } else {
      return parseInt(cleanValue) || 0;
    }
  };

  // Helper function to format large numbers for display
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const displayStats = [
    {
      icon: Calendar,
      label: "Started",
      value: "2019",
      color: "text-primary",
    },
    {
      icon: Video,
      label: "Channels",
      value: loading ? "..." : stats ? stats.channelCount.toString() : "3",
      color: "text-blue-400",
    },
    {
      icon: Users,
      label: "Videos",
      value: loading ? "..." : stats ? formatNumber(stats.videoCount) : "200+",
      color: "text-green-400",
    },
    {
      icon: Trophy,
      label: "Subscribers",
      value: loading
        ? "..."
        : stats
        ? formatNumber(stats.subscriberCount)
        : "1K+",
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {displayStats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-6 text-center border border-muted hover:shadow-card-elegant transition-all duration-300 hover:scale-105"
        >
          <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
          <div className="text-3xl font-montserrat font-bold text-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-muted-foreground font-inter font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
