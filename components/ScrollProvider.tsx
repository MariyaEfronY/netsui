"use client";
import { ReactLenis } from 'lenis/react';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <style jsx global>{`
  /* 1. Force the root font-size up */
  html {
    font-size: 18px; /* Standardize base size */
  }

  /* 2. Responsive Text Scaling (The Clamp Method) */
  h1 {
    font-size: clamp(2.5rem, 8vw, 9rem) !important;
    line-height: 0.9 !important;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 5rem) !important;
    line-height: 1.1 !important;
  }

  p {
    font-size: clamp(1rem, 1.2vw, 1.25rem) !important;
    max-width: 75ch; /* Prevents lines from getting too long/hard to read */
    line-height: 1.6;
  }

  /* 3. Anti-Shrink Fix */
  /* This prevents Framer Motion from making text look 'thin' or 'small' during animations */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  /* 4. Full Width Reset */
  .container {
    max-width: 100% !important;
    padding-left: 5vw !important;
    padding-right: 5vw !important;
  }
`}</style>
      {children}
    </ReactLenis>
  );
}