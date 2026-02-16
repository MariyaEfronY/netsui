"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
            {/* Animated Floating Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 120, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[150px] pointer-events-none"
            />

            {/* Subtle Moving Grid Pattern */}
            <motion.div
                initial={{ backgroundPosition: "0 0" }}
                animate={{ backgroundPosition: "40px 40px" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}