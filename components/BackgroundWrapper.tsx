"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full px-0">
            {/* Changed px-6 or container to w-full px-0 */}
            {children}
        </div>
    );
}