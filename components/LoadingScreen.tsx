"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
            <div className="relative flex flex-col items-center justify-center">

                {/* --- COMPACT CIRCULAR HUD --- */}
                {/* Reduced container size from w-64 to w-40 */}
                <div className="relative flex items-center justify-center w-40 h-40">

                    {/* Outer Rotating Ring - Slower & Thinner */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-dashed border-blue-500/10 rounded-full"
                    />

                    {/* Middle Notched Ring - Sharper focus */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border border-transparent border-t-blue-500/30 border-b-blue-500/30 rounded-full"
                    />

                    {/* Center Glow Core - Sized down to match */}
                    <motion.div
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute w-20 h-20 bg-blue-600 rounded-full blur-[40px]"
                    />

                    {/* Logo: Slightly smaller for the compact HUD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <Image
                            src="/logo/netsui_logo_bgre.png"
                            alt="Netsui Logo"
                            width={120}
                            height={120}
                            priority
                            className="h-30 md:h-30 w-auto object-contain brightness-110 contrast-125"
                        />
                    </motion.div>
                </div>

                {/* Minimal Status Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 flex flex-col items-center gap-2"
                >
                    <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                className="w-1 h-1 bg-blue-500 rounded-full"
                            />
                        ))}
                    </div>

                </motion.div>

            </div>
        </motion.div>
    );
}