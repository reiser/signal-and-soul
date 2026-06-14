# Signal & Soul Story Detail Pages

**Status**: implemented
**Created**: 2026-06-14T11:11:17.320Z

## Requirements

- Dynamic story detail pages with rich editorial layout (kicker, title, hero image, body paragraphs).
- Unique slugs and custom body content for all stories in the magazine.
- Working navigation from the homepage story cards to their respective detail pages.
- Verifiable E2E test coverage for the story detail interaction.

## Acceptance

- [x] Dynamic detail route app/stories/[slug]/page.tsx exists and renders kicker, title, hero image, and 2-3 paragraphs of body.
- [ ] Each entry in STORIES in lib/content.ts has a unique slug and 2-3 paragraphs of body.
- [ ] Story cards in components/Stories.tsx link to /stories/<slug> instead of #feature.
- [ ] E2E test successfully clicks 'The case for closed-back' and asserts that a phrase from that story's body is present on the page.

## Plan

1. Update lib/content.ts to add slug and body to each story in STORIES.
2. Create app/stories/[slug]/page.tsx dynamic route with beautiful editorial styling.
3. Update components/Stories.tsx to link each story card to /stories/[slug].
4. Run E2E test to verify the navigation and content rendering.

## Verification evidence

- #1: run_e2e passed with 4/4 steps verifying the dynamic story detail page navigation and rendering
