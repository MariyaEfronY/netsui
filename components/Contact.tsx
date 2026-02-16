"use client";
import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Send, ArrowUpRight, Globe2 } from 'lucide-react';

export default function Contact() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) }
    };

    return (
        <section className="bg-white py-32 px-6" id="contact">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* --- MINIMALIST INFO --- */}
                    <div className="space-y-16">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-6xl font-light tracking-tighter text-slate-900 mb-6">
                                Let's build the <br />
                                <span className="font-black text-blue-600">Corridor.</span>
                            </h2>
                            <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                                Strategic technology transformation and partnership inquiries for the 2026 Indo-Japan bridge.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-4">Direct Liaison</p>
                                <div className="space-y-2">
                                    <a href="mailto:sales@netsui.in" className="flex items-center gap-3 text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors group">
                                        sales@netsui.in <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                                    </a>
                                    <a href="mailto:careers@netsui.in" className="flex items-center gap-3 text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors group">
                                        careers@netsui.in <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                                    </a>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-4">Locations</p>
                                <p className="text-slate-800 font-bold flex items-center gap-2">
                                    <Globe2 size={16} className="text-blue-600" /> Bengaluru / Tokyo
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- CLEAN ANIMATED FORM --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: cubicBezier(0.16, 1, 0.3, 1) }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <form className="space-y-12">
                            <div className="group relative">
                                <input
                                    type="text"
                                    required
                                    className="peer w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition-all text-slate-900 font-medium"
                                />
                                <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blue-600 peer-focus:font-bold peer-valid:-top-4 peer-valid:text-[10px]">
                                    YOUR NAME
                                </label>
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    required
                                    className="peer w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition-all text-slate-900 font-medium"
                                />
                                <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blue-600 peer-focus:font-bold peer-valid:-top-4 peer-valid:text-[10px]">
                                    EMAIL ADDRESS
                                </label>
                            </div>

                            <div className="group relative">
                                <textarea
                                    required
                                    rows={1}
                                    className="peer w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition-all text-slate-900 font-medium resize-none"
                                ></textarea>
                                <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blue-600 peer-focus:font-bold peer-valid:-top-4 peer-valid:text-[10px]">
                                    HOW CAN WE HELP?
                                </label>
                            </div>

                            <motion.button
                                whileHover={{ gap: '24px' }}
                                className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-[0.4em] text-xs pt-4 group transition-all"
                            >
                                Send Message
                                <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-all">
                                    <Send size={16} />
                                </div>
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}