"use client";
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollHUD() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        /* pointer-events-none ensures you can click 'through' the HUD to text behind it */
        <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[999] pointer-events-none flex flex-col items-center gap-6">

            {/* The bar */}
            <div className="w-[1px] h-32 md:h-48 bg-white/10 relative">
                <motion.div
                    style={{ scaleY }}
                    className="absolute top-0 w-full bg-blue-600 origin-top shadow-[0_0_15px_#2563eb]"
                />
            </div>

            {/* The clickable dots need pointer-events-auto to work */}
            <div className="flex flex-col gap-4 pointer-events-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full border border-blue-500/40 hover:bg-blue-500 transition-colors cursor-pointer" />
                ))}
            </div>
        </div>
    );
}