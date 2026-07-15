# Scroll Portfolio

A mobile-first portfolio disguised as a swipe feed. Visitors answer "Who are you to me?" and the feed reorders itself for recruiters, engineers, friends, curious visitors, classmates, or iMessage app users.

## Development

```bash
npm install
npm run dev
npm run build
```

## Content

- Core bio and links: `src/data/portfolio.ts`
- Audience routes and copy: `src/data/audiences.ts`
- Project content: `src/data/projects/`
- Resume download: place your PDF at `public/resume.pdf`

Use audience routes for targeted links:

```text
/recruiter
/engineer
/imessage-user
```

Legacy query links still redirect:

```text
/?as=recruiter
```

## Deploy

The app is ready for Vercel or any static host that supports Vite. Build output goes to `dist/`.
