# Deployment Guide - Pirate Ben Static Site

This guide covers deploying the Pirate Ben website as a static site to various hosting platforms.

## 🏗️ Build Process

The site is configured for **static export** using Next.js 15 with the following settings:

- `output: 'export'` - Generates static HTML files
- `trailingSlash: true` - Better compatibility with static hosting
- `images: { unoptimized: true }` - Disables Next.js Image Optimization API

## 📦 Building for Production

### Local Build

```bash
# Install dependencies
npm install

# Build static site
npm run build
# or
npm run export
# or
npm run static-build
```

All three commands do the same thing - generate static files in the `out/` directory.

### Build Output

After building, you'll find:

- `out/` - Static HTML, CSS, JS, and assets
- `out/_next/` - Next.js generated assets
- `out/index.html` - Main page
- `out/404.html` - 404 error page

## 🚀 Deployment Platforms

### Vercel (Recommended)

**Automatic Deployment:**

1. Connect your Git repository to Vercel
2. Vercel auto-detects Next.js and handles the build
3. No additional configuration needed

**Manual Deployment:**

```bash
npm run build
npx vercel --prod
```

### Netlify

**Automatic Deployment:**

1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

**Manual Deployment:**

```bash
npm run build
# Upload the `out` folder to Netlify
```

### GitHub Pages

**Setup:**

1. Build locally: `npm run deploy` (includes `.nojekyll` file)
2. Upload `out` folder contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings

**GitHub Actions (Automatic):**
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### AWS S3 + CloudFront

```bash
# Build the site
npm run build

# Upload to S3 bucket
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### Firebase Hosting

```bash
# Build the site
npm run build

# Deploy to Firebase
firebase deploy
```

Configure `firebase.json`:

```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

## ⚠️ Important Notes

### Static Site Limitations

- **No server-side rendering** - All content is pre-built
- **No API routes** - External APIs only (like FlexHub for stats)
- **No dynamic routing** - All routes must be pre-defined
- **Client-side data fetching** - All dynamic content loads on the client

### External Dependencies

- **Stats API**: `https://flexhub.ampnet.media/api/` - Ensure this is accessible
- **YouTube RSS**: Uses CORS proxies for video fetching
- **Images**: All images are unoptimized (static hosting limitation)

### Environment Variables

No environment variables are required for the static build, but you may want to set:

- `NODE_ENV=production` for production builds
- Custom base paths for subdirectory deployments

### CORS Considerations

- YouTube RSS feeds may require CORS proxies
- Stats API calls are made from the client-side
- All external links open in new tabs

## 🔧 Troubleshooting

### Common Issues

**Build Errors:**

- Ensure all dependencies are installed: `npm ci`
- Check for TypeScript errors: `npm run lint`
- Verify no server-side code is present

**Deployment Issues:**

- Check that `out/` directory is being deployed
- Verify all external URLs are accessible
- Ensure proper CORS configuration for APIs

**Performance Issues:**

- Images are unoptimized - consider pre-optimizing
- Use CDN for better global performance
- Enable compression on hosting platform

### Optimization Tips

1. **Pre-optimize images** before adding to `public/`
2. **Use CDN** for hosting static assets
3. **Enable compression** (gzip/brotli) on hosting platform
4. **Set proper cache headers** for static assets

## 📊 Monitoring

After deployment, monitor:

- **Page load times** - Should be fast for static sites
- **API response times** - FlexHub stats API
- **Error rates** - Check for 404s or broken links
- **CORS errors** - YouTube RSS feed issues

## 🔄 CI/CD Pipeline

For automated deployments, ensure your pipeline:

1. Installs Node.js 18+
2. Runs `npm ci` for dependencies
3. Runs `npm run build` for static generation
4. Deploys the `out/` directory
5. Handles cache invalidation if needed
