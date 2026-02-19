"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Languages, ShieldCheck, Building2, Landmark } from 'lucide-react';
import Image from 'next/image';

export default function Leadership() {
    // FIX: Store the component itself (Cpu) instead of the element (<Cpu />)
    const qualifications = [
        {
            title: "Engineering Mastery",
            desc: "20+ Years in IT & Automotive Electronics. Former VP & Sales Director.",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600",
            color: "from-blue-600 to-indigo-600"
        },
        {
            title: "Legal Authority",
            desc: "Practicing Advocate with a Certificate of Practice (COP).",
            icon: Landmark,
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600",
            color: "from-blue-700 to-blue-900"
        },
        {
            title: "Linguistic Mastery",
            desc: "JLPT N1 Certified. Native-level Business Japanese precision.",
            icon: Languages,
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
            color: "from-indigo-600 to-blue-800"
        }
    ];

    return (
        <section className="bg-white py-16 md:py-44 px-4 sm:px-6 md:px-10 relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-slate-50/50 md:skew-x-[-15deg] md:translate-x-1/2 -z-10" />

            <div className="container mx-auto max-w-full relative z-10">
                {/* --- HEADER --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 mb-16 md:mb-32">
                    <div className="w-full lg:max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
                        >
                            <div className="h-[1px] w-10 md:w-16 bg-blue-600" />
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px]">
                                Institutional Governance
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[clamp(2.2rem,10vw,7.5rem)] font-black text-slate-950 tracking-tighter leading-[0.9] uppercase italic"
                        >
                            Senior <br />
                            <span className="text-blue-600 not-italic">Authority.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="w-full lg:max-w-md pt-4 md:pt-10"
                    >
                        <p className="text-lg md:text-2xl text-slate-500 font-medium leading-snug mb-6 md:mb-8 italic">
                            "We are not an agency; we are a board-led strategic asset for the Indo-Japan corridor."
                        </p>
                        <div className="flex items-center gap-4 p-4 bg-slate-50 md:bg-transparent rounded-2xl">
                            <div className="h-12 w-12 rounded-full border-2 border-blue-600 flex items-center justify-center shrink-0">
                                <ShieldCheck className="text-blue-600" size={20} />
                            </div>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-900">
                                Certified & Board-Regulated <br className="hidden sm:block" /> Private Limited Structure
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* --- BENTO GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-5 relative group h-[400px] sm:h-[500px] lg:h-[700px] overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-slate-100 shadow-xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800"
                            alt="Principal Director"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 md:group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                            <h4 className="text-white text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
                                The Principal <br /> Director
                            </h4>
                            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mt-3">
                                Board of Directors
                            </p>
                        </div>
                    </motion.div>

                    {/* Qualifications Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {qualifications.map((q, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white border border-slate-100 shadow-lg group/card ${i === 0 ? 'sm:col-span-2' : 'col-span-1'}`}
                            >
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br ${q.color} flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg`}>
                                        {/* FIX: Render the icon as a Component directly */}
                                        <q.icon size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-slate-950 uppercase tracking-tighter italic mb-3">
                                            {q.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed italic">
                                            {q.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 opacity-0 md:group-hover/card:opacity-10 transition-opacity duration-500 pointer-events-none">
                                    <Image src={q.image} alt={q.title} fill className="object-cover" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- FOOTER --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 md:mt-20 flex flex-col sm:flex-row flex-wrap gap-6 md:gap-12 justify-center items-center opacity-50"
                >
                    <div className="flex items-center gap-3">
                        <Award className="text-blue-600" size={18} />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Global ISO Standards</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Building2 className="text-blue-600" size={18} />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Corporate Governance</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}