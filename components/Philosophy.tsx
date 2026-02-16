"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Scale, Brain, Lightbulb } from 'lucide-react';

export default function Philosophy() {
    const trinity = [
        {
            title: "Industrial Mastery",
            icon: <Cpu size={28} />,
            desc: "Rooted in 20 years of high-level IT and Automotive Electronics leadership. We understand the \"why\" behind the technology."
        },
        {
            title: "Legal Precision",
            icon: <Scale size={28} />,
            desc: "Combining a deep knowledge of Indian Law with a Certificate of Practice (COP), ensuring that your expansion is built on a bedrock of compliance."
        },
        {
            title: "Linguistic & Psychological Depth",
            icon: <Brain size={28} />,
            desc: "With JLPT N1 mastery and a foundation in psychology, we translate not just words, but intent, culture, and leadership styles."
        }
    ];

    return (
        <section className="relative py-24 px-6 bg-white overflow-hidden">
            {/* Background Section Title (Watermark) */}
            <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
                <h2 className="text-[12rem] font-black leading-none">NETSUI</h2>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: The Definition */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-blue-600"></div>
                            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Our Core Philosophy</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                            Passion as a <span className="text-blue-600">Prerequisite.</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                The word <span className="text-slate-900 font-bold italic">Netsui</span> means "Passion." In the Japanese corporate tradition, passion is not a fleeting emotion; it is the burning perseverance required to achieve Excellence.
                            </p>
                            <p className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 rounded-r-lg text-slate-800 font-medium">
                                At Netsui, we believe that strategic consulting is hollow without this commitment. We do not offer generic advice.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: The Strategic Trinity */}
                    <div className="relative">
                        <h3 className="text-blue-900 font-bold text-xs uppercase tracking-[0.2em] mb-8 text-center lg:text-left">
                            The Strategic Trinity
                        </h3>
                        <div className="space-y-6">
                            {trinity.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 15, scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(37,99,235,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] flex gap-6 items-start transition-all"
                                >
                                    <div className="h-14 w-14 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </section>
    );
}