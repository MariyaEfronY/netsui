"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Sparkles, MessageSquare, ShieldAlert, Zap } from 'lucide-react';

export default function Manifesto() {
    const gaps = [
        {
            title: "The Linguistic Gap",
            desc: "Where nuance is lost in translation.",
            icon: <MessageSquare size={20} />
        },
        {
            title: "The Regulatory Gap",
            desc: "Where legal compliance feels like a labyrinth.",
            icon: <ShieldAlert size={20} />
        },
        {
            title: "The Mindset Gap",
            desc: "Where Indian agility and Japanese precision fail to synchronize.",
            icon: <Zap size={20} />
        }
    ];

    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">The Netsui Manifesto</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8">
                            Passion Defines Excellence
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full mb-8"></div>
                        <p className="text-xl md:text-3xl text-slate-500 font-light italic max-w-3xl leading-relaxed">
                            "The Bridge is Not Just Infrastructure; <span className="text-blue-600 font-medium italic">It is Human.</span>"
                        </p>
                    </motion.div>
                </div>

                {/* Content Body */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed"
                    >
                        <p>
                            In the shifting landscape of 2026, the Indo-Japan corridor has moved beyond simple trade.
                            We are now in an era of deep technological convergence—from Semiconductors and EV Mobility to Global Capability Centers.
                        </p>
                        <p>
                            Yet, despite the billions in investment, many ventures still falter.
                            They do not fail because of a lack of capital or technology. They fail because of a
                            <span className="block mt-2 text-blue-600 font-bold uppercase tracking-widest text-sm">The Triple Gap:</span>
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {gaps.map((gap, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03, x: 10 }}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-[#fcfdff] border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,102,255,0.1)] hover:shadow-[0_15px_35px_-10px_rgba(0,102,255,0.15)] transition-all group"
                            >
                                <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {gap.icon}
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold uppercase tracking-tight text-sm md:text-base">{gap.title}</h4>
                                    <p className="text-sm text-slate-500 leading-snug">{gap.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Closing Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-10 md:p-16 rounded-[2.5rem] bg-blue-600 text-center overflow-hidden shadow-2xl shadow-blue-200"
                >
                    {/* Abstract background shape */}
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <Sparkles className="text-blue-200" size={32} />
                        <p className="text-white text-2xl md:text-4xl font-light leading-tight max-w-2xl">
                            <span className="font-bold underline decoration-blue-300 underline-offset-8">Netsui (熱意)</span> was founded to bridge these gaps.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}