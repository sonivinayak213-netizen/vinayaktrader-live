# VinayakTrader - Vercel-ready Next.js

This project is prepared for Vercel (Pages Router) with serverless API routes in `pages/api/*`.

Quick deploy:
1. Create GitHub repo and upload these files (root must contain package.json, pages/, components/, styles/).
2. Import repo into Vercel (Deploy). Vercel will run `npm install` and `next build` automatically.
3. Visit the deployed site and check /options, /vix, /ipo pages.

Notes:
- Public NSE endpoints sometimes block serverless fetches; if you see errors in Vercel logs (502), we can add proxy/caching or move backend to Railway/Render.
- For production trading, use a paid data API for reliability.
