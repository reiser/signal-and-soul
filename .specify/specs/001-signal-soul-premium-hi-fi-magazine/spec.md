# Signal & Soul - Premium Hi-Fi Magazine

**Status**: building
**Created**: 2026-06-14T12:02:34.198Z

## Requirements

- Premium, glossy editorial design for a high-end sound & hi-fi magazine called 'Signal & Soul'
- Sticky header navigation with links to key sections (Stories, Reviews, Features, Gear)
- Bold editorial hero featuring a flagship story with rich typography and high-impact imagery
- Interactive Stories grid with cards that link to individual dynamic article pages under /stories/[slug]
- Dedicated Reviews section with rating badges and technical specs for premium audio gear
- Long-form immersive Feature section with a parallax-like editorial layout
- Visual Gear gallery showcasing beautiful close-ups of vacuum tubes, turntables, and headphones
- Newsletter subscription form with success state and a comprehensive footer
- Next.js 15 compliant dynamic routing using async params resolution
- Git integration with remote push to 'fresh-build' branch

## Acceptance

- [ ] Homepage renders with sticky navigation, bold editorial hero, stories grid, reviews section, long-form feature, gear gallery, and newsletter footer
- [ ] Clicking a story card navigates to /stories/[slug] and displays the full article with Next.js 15 async params resolution
- [ ] All images are real, high-quality Unsplash photos sourced via curate_images
- [ ] No dead links or placeholder hrefs exist; all navigation and cards are fully wired
- [ ] Git repository is connected to git@github.com:reiser/signal-and-soul.git and pushed to branch 'fresh-build'
- [ ] E2E tests verify homepage rendering and successful navigation to a story detail page

## Plan

1. Source high-quality hi-fi and audio-related images using curate_images
2. Create the editorial content and stories data module to share between homepage and detail pages
3. Update app/globals.css and app/layout.tsx for a premium, glossy editorial aesthetic (serif typography, deep dark/gold/monochrome accents)
4. Build the sticky navigation, hero, reviews, feature, gear gallery, and newsletter components on the homepage (app/page.tsx)
5. Build the dynamic story detail page (app/stories/[slug]/page.tsx) using Next.js 15 async params
6. Connect the Git repository and push the code to the 'fresh-build' branch
7. Run E2E tests to verify rendering and interactive navigation, then open the preview
