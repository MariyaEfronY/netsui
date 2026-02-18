"use client";
import { ReactLenis } from 'lenis/react';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {/* INJECTING CSS DIRECTLY IN FILE */}
            <style jsx global>{`
        /* Custom Glowing Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #2563eb, #6366f1);
          border-radius: 20px;
          border: 2px solid #020617;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }

        /* Lenis Smoothness Fixes */
        html.lenis {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }
      `}</style>
            {children}
        </ReactLenis>
    );
}