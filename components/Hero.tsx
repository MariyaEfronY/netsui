"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Globe, Users, ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#020617] overflow-hidden pt-24 pb-20">

            {/* --- BACKGROUND ARCHITECTURE --- */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
                        alt="Global Tech Background"
                        fill
                        priority
                        className="object-cover brightness-[0.2] contrast-[1.2]"
                    />
                </motion.div>

                {/* Tactical Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

                {/* --- KINETIC DATA LINES --- */}
                {/* These SVG paths animate a "pulse" along the grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-40">
                    <motion.path
                        d="M 0 400 L 2000 400"
                        stroke="rgba(59, 130, 246, 0.5)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="100 1000"
                        animate={{ strokeDashoffset: [-1100, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M 400 0 L 400 2000"
                        stroke="rgba(99, 102, 241, 0.5)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="100 1000"
                        animate={{ strokeDashoffset: [-1100, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* --- HERO TEXT SECTION --- */}
                <div className="text-center max-w-5xl mx-auto mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-[9rem] font-black text-white mb-8 tracking-tighter leading-[0.8] uppercase italic"
                    >
                        PASSION <span className="text-blue-600">DEFINES</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-100 to-indigo-500">
                            EXCELLENCE.
                        </span>
                    </motion.h1>

                    <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12">
                        Strategic Advisory for the <span className="text-white italic">2026 Corridor</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/register-form">
                            <button className="group bg-blue-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-4 transition-all hover:bg-white hover:text-blue-600 shadow-xl shadow-blue-600/20">
                                Register Now
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* --- TRINITY PILLARS WITH IMAGE ICONS --- */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <Pillar
                        icon={<Globe size={24} />}
                        title="Strategic Advisory"
                        label="VP-Level Insight"
                        desc="Navigating JV structuring and market entry with 20 years of technical leadership."
                        img="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=500"
                        index={0}
                    />
                    <Pillar
                        icon={<Shield size={24} />}
                        title="Tech-Legal Excellence"
                        label="N1 Certified Counsel"
                        desc="Bridging regulatory gaps with JLPT N1 native fluency and corporate law expertise."
                        img="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
                        index={1}
                    />
                    <Pillar
                        icon={<Users size={24} />}
                        title="Human Capital"
                        label="The Vetted Bridge"
                        desc="Synchronizing Indian agility with Japanese 'Suriawase' quality through elite vetting."
                        img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500"
                        index={2}
                    />
                </div>
            </div>
        </section>
    );
}

function Pillar({ icon, title, label, desc, img, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-[#0f172a]/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[3rem] overflow-hidden"
        >
            {/* Animated Hover Background Image (Subtle) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <Image src={img} alt={title} fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            </div>

            {/* --- ICON PORTAL --- */}
            <div className="relative w-16 h-16 mb-8">
                {/* Spinning Portal Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-blue-500/30 rounded-2xl"
                />
                {/* Icon Container */}
                <div className="absolute inset-2 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 z-10">
                    {icon}
                </div>
            </div>

            <div className="relative z-10">
                <p className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4">{label}</p>
                <h3 className="text-white font-bold text-2xl mb-4 tracking-tight leading-tight">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                    {desc}
                </p>
            </div>

            {/* Corner Accent Line */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
        </motion.div>
    );
}