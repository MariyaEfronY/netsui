"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Position of the cursor
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics (No lag, very responsive)
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Triggers expansion on buttons, links, or specific 'data-cursor' elements
            const isClickable = target.closest('button, a, [role="button"], .cursor-pointer');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* The Outer Ring */}
            <motion.div
                style={{
                    translateX: x,
                    translateY: y,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    width: isHovering ? 80 : 32,
                    height: isHovering ? 80 : 32,
                    backgroundColor: isHovering ? "rgba(37, 99, 235, 0.1)" : "transparent",
                    border: isHovering ? "1px solid rgba(37, 99, 235, 0.5)" : "1.5px solid rgba(37, 99, 235, 0.8)",
                }}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            />

            {/* The Inner Dot */}
            <motion.div
                style={{
                    translateX: x,
                    translateY: y,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-600 rounded-full pointer-events-none z-[10000] hidden md:block"
            />
        </>
    );
}