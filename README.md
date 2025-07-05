# Pirate Ben - Content Creator Website

A modern, responsive portfolio website for **Pirate Ben**, a multi-platform content creator specializing in gaming, music reactions, and streaming content.

## 🎯 Overview

This is the official website for Pirate Ben, showcasing his content across multiple YouTube channels and Twitch streams. The site serves as a central hub for fans to discover all his content, learn about his journey, and easily navigate to his various platforms.

### Content Channels Featured:

- **🎮 Gaming Channel** (@pirateben2011) - Epic gaming content, playthroughs, and reviews
- **🎵 Music Reactions** (@BenReacts214) - Clean music reactions with genuine takes
- **📹 Everyday Adventures** (@EverydayAdventures) - Daily life vlogs and behind-the-scenes
- **🔴 Live Streams** (Twitch: pirateben11) - Interactive live streams 3x weekly

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router and static export
- **React 19** - Latest React features with client-side data fetching
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework with custom animations
- **Radix UI** - Accessible component primitives (Accordion, Button, Card)
- **Lucide React** - Beautiful, customizable icons
- **Shadcn/ui** - Modern component library with custom theming

## 🎨 Features

### Core Features

- **Responsive Design** - Optimized for all devices with custom mobile breakpoints
- **Real-time Stats** - Live channel statistics via FlexHub API integration
- **Latest Content** - Dynamically fetched videos from YouTube RSS feeds
- **Modern UI** - Dark theme with gaming-inspired aesthetic
- **Performance Optimized** - Static generation with client-side hydration
- **SEO Friendly** - Proper meta tags and structured data
- **Accessibility** - Built with Radix UI for screen reader support

### Technical Features

- **Static Export** - Full static site generation for CDN deployment
- **CORS Proxy Fallback** - Multiple fallback strategies for YouTube RSS feeds
- **Environment-specific APIs** - Different API endpoints for development/production
- **Custom Animations** - Smooth transitions and hover effects
- **Mobile-first Design** - Custom `useIsMobile` hook for responsive behavior
- **Image Optimization** - Unoptimized images for static hosting compatibility

## 🔧 External Dependencies

### APIs Used

- **FlexHub API** - Real-time channel statistics and social media data
  - Configurable via `NEXT_PUBLIC_FLEXHUB_URL` environment variable
  - Default: `https://flexhub.ampnet.media/api/`
  - Site ID configurable via `NEXT_PUBLIC_SITE_ID` environment variable
- **YouTube RSS Feeds** - Latest video content from each channel
  - Uses CORS proxies for browser compatibility
  - Fallback strategy with multiple proxy services

### Font Dependencies

- **Montserrat** - Headers and display text
- **Inter** - Body text and UI elements

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd pirateben
```

2. **Create environment file**

Create a `.env.local` file in the root directory:

```bash
# .env.local
NEXT_PUBLIC_FLEXHUB_URL=https://flexhub.ampnet.media/api
NEXT_PUBLIC_SITE_ID=your-site-id-here
```

3. **Install dependencies**

```bash
npm install
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run export` - Generate static export
- `npm run static-build` - Build static site
- `npm run deploy` - Build and add .nojekyll file for GitHub Pages
- `npm run lint` - Run ESLint

## 📦 Static Site Generation

This project is configured as a **static site** that can be deployed to any static hosting provider. Key configurations:

- **Static Export** - `output: 'export'` in Next.js config
- **Trailing Slash** - Better compatibility with static hosting
- **Unoptimized Images** - Required for static export
- **Client-side Data Fetching** - All dynamic content loads on the client
- **No Server-side Rendering** - All content is pre-built or client-rendered

### Static Site Limitations

- No API routes or server-side functions
- No dynamic routing (all routes must be pre-defined)
- No server-side rendering or ISR
- External API calls only (FlexHub, YouTube RSS)
- Images must be unoptimized for static hosting

## 🚀 Deployment

The site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting provider**

### Build Output

After running `npm run build`, the static files are generated in the `out/` directory:

- `out/index.html` - Main page
- `out/_next/` - Next.js assets
- `out/404.html` - 404 error page

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🔧 Configuration

### YouTube Channels

Update channel information in `src/lib/constants.ts`:

```typescript
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
```

### Custom Theme

The site uses a custom dark theme with gaming-inspired colors:

- **Primary Color** - `hsl(348 100% 44%)` (Red accent)
- **Background** - `hsl(240 8% 11%)` (Dark blue-gray)
- **Secondary Background** - `hsl(261 6% 16%)` (Lighter blue-gray)
- **Custom Gradients** - Hero, accent, and card gradients
- **Custom Shadows** - Glow effects and elegant shadows
- **Custom Fonts** - Montserrat for headers, Inter for body text

### Styling

- Main styles in `src/app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Custom CSS variables for theming
- Shadcn/ui components in `src/components/ui/`

## 🌐 Environment Configuration

### Environment Variables

The site uses environment variables for configuration:

- **`NEXT_PUBLIC_FLEXHUB_URL`** - FlexHub API endpoint (defaults to `https://flexhub.ampnet.media/api`)
- **`NEXT_PUBLIC_SITE_ID`** - FlexHub site ID (required for stats API)

### Development vs Production

Environment variables can be set differently for each environment:

- **Development** - Set in `.env.local` file
- **Production** - Set in deployment platform (Vercel, Netlify, etc.)

### CORS Configuration

YouTube RSS feeds use a fallback strategy with multiple CORS proxies:

- Primary: Direct fetch (may fail due to CORS)
- Fallback 1: `https://api.allorigins.win/raw?url=`
- Fallback 2: `https://corsproxy.io/?`

## 📄 License

This project is private and proprietary to Pirate Ben.

## 💝 Credits

Designed and developed with ❤️ by [ampnet media](https://ampnet.media)

## 📞 Contact

For questions or collaboration opportunities, reach out through:

- YouTube: [@pirateben2011](https://www.youtube.com/@pirateben2011)
- Twitch: [pirateben11](https://www.twitch.tv/pirateben11)
