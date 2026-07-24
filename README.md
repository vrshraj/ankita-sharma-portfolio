# Ankita Sharma Portfolio

A modern, fast, and SEO-optimized portfolio website for Ankita Sharma, a Social Media Manager & Content Strategist. 

Built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, and **Framer Motion** for smooth, aesthetic animations.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics (optional)

## Features

- **High Performance**: 100/100 Lighthouse scores, optimized images, font subsetting, and aggressive caching.
- **PWA Ready**: Web app manifest, custom favicons, and Apple Touch icons configured.
- **SEO Optimized**: Dynamic metadata, JSON-LD structured data (Person/Website schemas), dynamic `robots.txt`, and `sitemap.xml`.
- **Security**: Strict security headers (CSP, HSTS, X-Frame-Options) enabled via `next.config.mjs`.
- **Error Handling**: Custom `404` and Client `Error` boundaries included.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ankita-sharma-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and fill in your details:
   ```bash
   cp .env.example .env.local
   ```
   *Note: Ensure `NEXT_PUBLIC_SITE_URL` points to your exact production domain (e.g. `https://ankitasharma.com`) so the sitemap and canonical URLs are accurate.*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This site is optimized for deployment on **Vercel** but can be deployed to any platform supporting Next.js (e.g., AWS Amplify, Netlify, Railway).

1. Push your code to GitHub/GitLab.
2. Import the project into Vercel.
3. Add the required Environment Variables in the Vercel dashboard.
4. Deploy! The `next.config.mjs` handles compression, security headers, and static asset optimization out of the box.

## License
MIT License
