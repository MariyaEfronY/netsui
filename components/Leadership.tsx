"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Scale, Languages, ShieldCheck } from 'lucide-react';

export default function Leadership() {
    const qualifications = [
        {
            title: "Engineering Mastery",
            desc: "20+ Years in IT & Automotive Electronics (Former VP & Sales Director).",
            icon: <Briefcase size={24} />,
            color: "bg-blue-600"
        },
        {
            title: "Legal Authority",
            desc: "Practicing Advocate with a Certificate of Practice (COP).",
            icon: <Scale size={24} />,
            color: "bg-blue-700"
        },
        {
            title: "Linguistic Mastery",
            desc: "JLPT N1 Certified (Native-level Business Japanese).",
            icon: <Languages size={24} />,
            color: "bg-blue-800"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Institutional Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="text-blue-600" size={20} />
                            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Our Leadership Structure</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
                            Institutional Stability. <br />
                            <span className="text-blue-600 italic font-light">Senior Expertise.</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                            Netsui is a Private Limited Board of Directors bringing decades of combined experience from the heart of Tokyo and the tech hubs of India. <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-8">We are not an agency; we are a strategic asset.</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:block h-40 w-40 border-2 border-slate-100 rounded-full p-2"
                    >
                        <div className="h-full w-full bg-slate-50 rounded-full flex flex-col items-center justify-center text-center">
                            <span className="text-blue-600 font-black text-3xl">20+</span>
                            <span className="text-slate-400 text-[8px] uppercase tracking-widest leading-tight">Years of<br />Leadership</span>
                        </div>
                    </motion.div>
                </div>

                {/* The Principal Director Profile Card */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white border border-slate-100 p-8 md:p-16 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(37,99,235,0.05)]"
                    >
                        <div className="grid lg:grid-cols-12 gap-12 items-center">

                            {/* Profile Image/Badge Placeholder */}
                            <div className="lg:col-span-4 flex flex-col items-center">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 flex items-center justify-center relative shadow-inner">
                                    <Award size={80} className="text-blue-200" />
                                    <div className="absolute -bottom-4 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl">
                                        Principal Director
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications Grid */}
                            <div className="lg:col-span-8 space-y-8">
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 border-b border-slate-50 pb-4">
                                    The Principal Director Profile
                                </h3>

                                <div className="grid md:grid-cols-1 gap-6">
                                    {qualifications.map((q, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 10 }}
                                            className="flex items-start gap-6 group/item"
                                        >
                                            <div className={`h-12 w-12 shrink-0 ${q.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20`}>
                                                {q.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-slate-900 font-bold text-lg group-hover/item:text-blue-600 transition-colors">{q.title}</h4>
                                                <p className="text-slate-500 leading-relaxed italic">{q.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}