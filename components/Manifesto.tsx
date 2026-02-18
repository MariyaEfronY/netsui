"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MessageSquare, ShieldAlert, Zap, ArrowUpRight, Minus } from 'lucide-react';

export default function Manifesto() {
    const gaps = [
        {
            title: "The Linguistic Gap",
            desc: "Where nuance is lost in translation. We bridge this with JLPT N1 native-level precision.",
            icon: <MessageSquare size={20} />,
            color: "text-blue-500"
        },
        {
            title: "The Regulatory Gap",
            desc: "Where legal compliance feels like a labyrinth. We navigate it with tech-legal mastery.",
            icon: <ShieldAlert size={20} />,
            color: "text-indigo-500"
        },
        {
            title: "The Mindset Gap",
            desc: "Where Indian agility and Japanese precision fail to synchronize.",
            icon: <Zap size={20} />,
            color: "text-cyan-500"
        }
    ];

    return (
        <section className="relative bg-[#fcfdff] py-20 md:py-32 px-4 md:px-6 overflow-hidden">

            {/* --- MOBILE-OPTIMIZED BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#eff6ff_0%,transparent_50%)] opacity-70" />
                {/* Animated "Bridge" Line */}
                <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block"
                />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* --- HEADER SECTION --- */}
                <div className="text-center mb-16 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            className="h-1 bg-blue-600 mb-6 rounded-full"
                        />
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6">
                            The Netsui Manifesto
                        </span>

                        <h2 className="text-4xl md:text-8xl font-black text-slate-950 tracking-tighter mb-8 leading-tight md:leading-none uppercase italic">
                            Passion Defines <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence</span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-500 font-medium italic max-w-3xl leading-relaxed px-4"
                        >
                            "The Bridge is not just infrastructure; <br className="md:hidden" />
                            <span className="text-slate-900 not-italic">It is a Human Architecture.</span>"
                        </motion.p>
                    </motion.div>
                </div>

                {/* --- CONTENT GRID --- */}
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start mb-24 md:mb-32">

                    {/* LEFT COLUMN: THE NARRATIVE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="flex items-center gap-4 group">
                            <Minus className="text-blue-600 group-hover:w-12 transition-all" />
                            <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
                                Navigating Tech Convergence
                            </h3>
                        </div>
                        <div className="text-slate-600 text-base md:text-xl leading-relaxed space-y-4 md:space-y-6">
                            <p>
                                In 2026, the Indo-Japan corridor transcends trade. We are building the future of
                                <span className="text-slate-950 font-bold"> Semiconductors</span> and <span className="text-slate-950 font-bold">EV Mobility</span>.
                            </p>
                            <div className="relative p-6 md:p-8 bg-white rounded-3xl border-l-8 border-blue-600 shadow-xl shadow-blue-900/5 overflow-hidden">
                                <p className="italic text-slate-500 z-10 relative">
                                    "Ventures fail not due to capital, but due to a synchronization breakdown in the Triple Gap."
                                </p>
                                <div className="absolute top-0 right-0 p-2 opacity-5">
                                    <Sparkles size={80} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: THE GAPS (MOBILE-STAGGERED) */}
                    <div className="space-y-4 md:space-y-6">
                        {gaps.map((gap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:border-blue-500/20 transition-all cursor-pointer"
                            >
                                <div className="flex items-start gap-5 md:gap-6">
                                    <div className={`h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center ${gap.color} group-hover:bg-blue-600 group-hover:text-white transition-all duration-300`}>
                                        {gap.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-slate-950 font-black uppercase tracking-tight text-sm md:text-base">
                                                {gap.title}
                                            </h4>
                                            <ArrowUpRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                        </div>
                                        <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                                            {gap.desc}
                                        </p>
                                    </div>
                                </div>
                                {/* Mobile-only progress bar for cards */}
                                <div className="absolute bottom-0 left-0 h-1 bg-blue-600/10 w-full rounded-b-[2rem] overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        className="h-full bg-blue-600/40"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- FOOTER CALLOUT (THE HUB) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] bg-slate-950 text-center overflow-hidden"
                >
                    {/* Pulsing Core Animation */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600 rounded-full blur-[80px] md:blur-[120px]"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-6 md:gap-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="p-4 rounded-full border border-dashed border-blue-500/50"
                        >
                            <Sparkles className="text-blue-500" size={32} />
                        </motion.div>

                        <h3 className="text-2xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-tight">
                            <span className="text-blue-500 underline decoration-white/20 underline-offset-8">Netsui</span> was founded <br />
                            to be the Bridge.
                        </h3>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">
                            {["Strategic", "Professional", "Technical"].map((val, idx) => (
                                <span key={idx} className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white flex items-center gap-2">
                                    <span className="h-1 w-1 bg-blue-500 rounded-full" /> {val}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}