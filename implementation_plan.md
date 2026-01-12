# Performance Optimization Implementation Plan

This plan aims to improve the PageSpeed Insights score by addressing LCP (Largest Contentful Paint) and implementing code splitting.

## User Review Required
> [!NOTE]
> This change introduces a `Loading` spinner that will appear briefly when navigating between pages due to code splitting.

## Proposed Changes

### Core Optimization
#### [MODIFY] [index.html](file:///c:/test_ai/pj-residence/index.html)
- Add `<link rel="preload" as="image" href="/images/hero-1.webp">` to the `<head>` to prioritize the Hero image loading (Fixes LCP).

### Component Architecture
#### [NEW] [Loading.jsx](file:///c:/test_ai/pj-residence/src/components/Loading/Loading.jsx)
- Create a reusable loading spinner component for suspense fallbacks.

#### [NEW] [Loading.css](file:///c:/test_ai/pj-residence/src/components/Loading/Loading.css)
- Styling for the loading spinner.

### Code Splitting
#### [MODIFY] [App.jsx](file:///c:/test_ai/pj-residence/src/App.jsx)
- Convert all page imports to `React.lazy` dynamic imports.
- Wrap `<Routes>` with `<Suspense fallback={<Loading />}>`.

## Verification Plan

### Automated Tests
- Run `npm run build` to verify the build process creates split chunks (look for multiple `.js` files in `dist/assets`).
- Run `npm run preview` to serve the production build locally.

### Manual Verification
- **LCP Verify**: Open Network tab in DevTools, reload the page, and check that `hero-1.webp` is loaded with "High" priority or earlier in the waterfall.
- **Code Splitting**: Navigate to different pages (e.g., /rooms, /contact) and verify that new JS chunks are requested in the Network tab.
- **Loading State**: Verify the loading spinner appears briefly on slow connections (can simulate "Slow 3G" in DevTools).
