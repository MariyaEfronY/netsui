"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, X } from 'lucide-react';

export default function ViewCounter() {
    const [views, setViews] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetch('/api/views')
            .then(res => res.json())
            .then(data => setViews(data.count))
            .catch(() => setViews(0));
    }, []);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    if (views === null) return null;

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex flex-col items-end gap-3">

            {/* Expanded Detail Overlay */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, y: 10, scale: 0.95 }}
                        className="bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-white/10 mb-2 min-w-[240px] max-w-[90vw]"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Live Status</span>
                                <X size={14} className="text-slate-500 cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }} />
                            </div>

                            <div className="flex items-center justify-between pt-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Total Visitors</span>
                                <span className="text-xl font-mono font-black text-white">
                                    {views.toLocaleString()}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mt-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                                    Global: Tokyo • Bengaluru
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
                onMouseEnter={() => { if (window.innerWidth > 768) setIsExpanded(true); }}
                onMouseLeave={() => { if (window.innerWidth > 768) setIsExpanded(false); }}
                onClick={toggleExpand}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center bg-slate-950 border border-white/10 p-2 md:pr-6 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] group transition-all"
            >
                {/* The Scanning Icon (Always Visible) */}
                <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white relative overflow-hidden border border-white/5 shrink-0">
                    <Activity size={18} className="group-hover:text-blue-400 transition-colors z-10" />

                    <motion.div
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent pointer-events-none"
                    />
                </div>

                {/* Text Label - Hidden on Mobile (Default), Shown on Desktop (md:) */}
                <div className="hidden md:flex flex-col items-start ml-4">
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">Netsui Hub</span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Live Presence</span>
                </div>
            </motion.button>
        </div>
    );
}