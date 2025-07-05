// YouTube Channels Configuration
export const YOUTUBE_CHANNELS = [
  {
    handle: "pirateben2011",
    id: "UCTzNhlbLaKGfri0l2UNRRAg",
    displayName: "Pirate Ben",
  },
  {
    handle: "BenReacts214",
    id: "UCBuiKJsK7kIuS2v2VFvZKWw",
    displayName: "Ben Reacts",
  },
  {
    handle: "EverydayAdventures",
    id: "UCf11llW0VU8Q8UPuLeKScpA",
    displayName: "Everyday Adventures",
  },
];

// YouTube Channel Types
export interface YouTubeChannel {
  handle: string;
  id: string;
  displayName: string;
}
