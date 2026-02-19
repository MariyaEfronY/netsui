"use client";
import React from 'react';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                padding: 0,
                isolation: 'isolate', // Prevents rendering bleed between sections
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
            }}
        >
            {children}
        </div>
    );
}