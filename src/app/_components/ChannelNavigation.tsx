import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Music, Video, Camera, LucideIcon } from "lucide-react";
import { YOUTUBE_CHANNELS, YouTubeChannel } from "@/lib/constants";

interface ChannelConfig {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stats: string;
  color: string;
  url: string;
  channelData?: YouTubeChannel;
}

const ChannelNavigation = () => {
  // Map YouTube channels to content types with appropriate styling
  const youtubeChannels: ChannelConfig[] = [
    {
      title: "Gaming Channel",
      description:
        "Epic gaming content, playthroughs, and reviews of the latest games.",
      image: "/pirateben-yt-logo.jpg",
      icon: Gamepad2,
      stats: "150+ Videos",
      color: "text-primary",
      channelData: YOUTUBE_CHANNELS.find((ch) => ch.handle === "pirateben2011"),
      url: `https://www.youtube.com/@${
        YOUTUBE_CHANNELS.find((ch) => ch.handle === "pirateben2011")?.handle
      }`,
    },
    {
      title: "Music Reactions",
      description:
        "Clean music reactions with genuine takes on your favorite artists.",
      image: "/ben-reacts-yt-logo.jpg",
      icon: Music,
      stats: "80+ Reactions",
      color: "text-blue-400",
      channelData: YOUTUBE_CHANNELS.find((ch) => ch.handle === "BenReacts214"),
      url: `https://www.youtube.com/@${
        YOUTUBE_CHANNELS.find((ch) => ch.handle === "BenReacts214")?.handle
      }`,
    },
    {
      title: "Everyday Adventures",
      description:
        "Daily life adventures, vlogs, and behind-the-scenes content.",
      image: "/eda-yt-logo.jpg", // Reusing gaming image as placeholder
      icon: Camera,
      stats: "50+ Videos",
      color: "text-green-400",
      channelData: YOUTUBE_CHANNELS.find(
        (ch) => ch.handle === "EverydayAdventures"
      ),
      url: `https://www.youtube.com/@${
        YOUTUBE_CHANNELS.find((ch) => ch.handle === "EverydayAdventures")
          ?.handle
      }`,
    },
  ];

  // Twitch channel as the last item
  const twitchChannel: ChannelConfig = {
    title: "Live Streams",
    description:
      "Interactive live streams on Twitch with real-time chat engagement.",
    image: "/twitch-thumb-CG4jgwTG.jpg",
    icon: Video,
    stats: "3x Weekly",
    color: "text-purple-400",
    url: "https://www.twitch.tv/pirateben11",
  };

  const allChannels: ChannelConfig[] = [...youtubeChannels, twitchChannel];

  return (
    <section id="channels" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Explore My <span className="text-primary">Channels</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            From epic gaming moments to authentic music reactions, find your
            perfect content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allChannels.map((channel, index) => (
            <Card
              key={index}
              className="group gradient-card border-border overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                {channel.image ? (
                  <img
                    src={channel.image}
                    alt={channel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full gradient-accent flex items-center justify-center">
                    <channel.icon className="w-16 h-16 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`flex items-center space-x-2 mb-2`}>
                    <channel.icon className={`w-5 h-5 ${channel.color}`} />
                    <span className={`text-sm font-semibold ${channel.color}`}>
                      {channel.stats}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                  {channel.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {channel.description}
                </p>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-auto"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    Explore
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelNavigation;
