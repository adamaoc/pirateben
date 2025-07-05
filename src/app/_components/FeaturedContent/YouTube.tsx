"use client";

import { Play, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { getAllLatestVideosFromRSS, formatPublishDate } from "@/lib/youtube";

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

export default function YouTube() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestVideos() {
      try {
        setLoading(true);
        const latestVideos = await getAllLatestVideosFromRSS();
        console.log({ latestVideos });
        if (latestVideos && latestVideos.length > 0) {
          setVideos(latestVideos);
        } else {
          setError("No videos found from any channel");
        }
      } catch (err) {
        setError("Failed to load video data");
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestVideos();
  }, []);

  // Return individual video cards for the grid
  const renderVideoCard = (video: YouTubeVideo) => (
    <div
      key={video.id}
      className="bg-card rounded-lg shadow-card-elegant overflow-hidden"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Play className="w-4 h-4 mr-2" />
            Play
          </a>
        </div>
        {/* Channel Badge */}
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
          {video.channel}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2 line-clamp-2">
          {video.title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="w-3 h-3 mr-1" />
            {formatPublishDate(video.publishedAt)}
          </div>
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="shadow-glow">
              <ExternalLink className="w-3 h-3 mr-1" />
              Watch
            </Button>
          </a>
        </div>
      </div>
    </div>
  );

  // Loading card for each slot
  const renderLoadingCard = (index: number) => (
    <div
      key={`loading-${index}`}
      className="bg-card rounded-lg shadow-card-elegant overflow-hidden"
    >
      <div className="aspect-video bg-muted flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
      <div className="p-4">
        <div className="h-4 bg-muted rounded mb-2"></div>
        <div className="h-3 bg-muted rounded w-2/3"></div>
      </div>
    </div>
  );

  // Error card for each slot
  const renderErrorCard = (index: number) => (
    <div
      key={`error-${index}`}
      className="bg-card rounded-lg shadow-card-elegant overflow-hidden"
    >
      <div className="aspect-video bg-muted flex items-center justify-center">
        <Play className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
          Unable to load video
        </h3>
        <p className="text-xs text-muted-foreground">{error}</p>
      </div>
    </div>
  );

  // Return array of 3 video cards
  const cards = [];

  if (loading) {
    // Show 3 loading cards
    for (let i = 0; i < 3; i++) {
      cards.push(renderLoadingCard(i));
    }
  } else if (error && videos.length === 0) {
    // Show 3 error cards
    for (let i = 0; i < 3; i++) {
      cards.push(renderErrorCard(i));
    }
  } else {
    // Show available videos, pad with placeholders if needed
    const availableVideos = videos.slice(0, 3);

    availableVideos.forEach((video) => {
      cards.push(renderVideoCard(video));
    });

    // Fill remaining slots with "no more videos" cards
    for (let i = availableVideos.length; i < 3; i++) {
      cards.push(
        <div
          key={`placeholder-${i}`}
          className="bg-card rounded-lg shadow-card-elegant overflow-hidden"
        >
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-muted-foreground font-inter text-sm">
                No more videos
              </p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
              Check back later
            </h3>
            <p className="text-xs text-muted-foreground">
              More content coming soon
            </p>
          </div>
        </div>
      );
    }
  }

  return <>{cards}</>;
}
