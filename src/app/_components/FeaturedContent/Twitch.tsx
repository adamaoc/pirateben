import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Twitch() {
  return (
    <div className="bg-card rounded-lg shadow-card-elegant overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        {/* Twitch placeholder thumbnail */}
        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Play className="w-8 h-8" />
            </div>
            <span className="text-lg font-bold">LIVE</span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href="https://www.twitch.tv/pirateben11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Live
          </a>
        </div>

        {/* Platform Badge */}
        <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
          Twitch
        </div>

        {/* Live Status */}
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
          <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
          OFFLINE
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2 line-clamp-2">
          Late Night Gaming Session
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <span>Next: Tonight 8PM EST</span>
          </div>
          <a
            href="https://www.twitch.tv/pirateben11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="shadow-glow bg-purple-600 hover:bg-purple-700"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Follow
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
