"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowUpRight, Globe, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="bg-white py-24 md:py-48 px-6 relative overflow-hidden" id="contact">
            {/* Subtle Gradient Glow */}
            <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-24 items-start">

                    {/* --- TEXT CONTENT --- */}
                    <div className="w-full lg:w-1/2 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-3"
                                >
                                    <Sparkles size={14} /> Global Expansion
                                </motion.span>
                                <h2 className="text-[clamp(3rem,10vw,6rem)] font-black leading-[0.85] tracking-tighter uppercase italic text-slate-950">
                                    Start the <br />
                                    <span className="text-blue-600 not-italic">Bridge.</span>
                                </h2>
                            </div>

                            <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-md leading-tight italic">
                                Seamlessly connecting Indian tech ecosystems with Japanese corporate excellence.
                            </p>

                            <div className="pt-12 space-y-6">
                                <div className="group border-b border-slate-100 pb-4">
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Direct Liaison</p>
                                    <a href="mailto:office@netsui.in" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between">
                                        office@netsui.in <ArrowUpRight size={20} />
                                    </a>
                                </div>
                                <div className="group border-b border-slate-100 pb-4">
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Regional Presence</p>
                                    <div className="text-xl font-bold text-slate-900 flex items-center justify-between">
                                        Tokyo — Bengaluru <Globe size={18} className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- ADVANCED MINIMALIST FORM --- */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-blue-900/5"
                        >
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-12"
                                    >
                                        <div className="space-y-10">
                                            {['Full Name', 'Corporate Email', 'Organization'].map((label, idx) => (
                                                <div key={idx} className="relative group">
                                                    <input
                                                        type={label.includes('Email') ? 'email' : 'text'}
                                                        required
                                                        placeholder=" "
                                                        className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition-all text-slate-900 font-bold text-lg"
                                                    />
                                                    <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[10px] peer-focus:font-black peer-focus:tracking-widest uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                                                        {label}
                                                    </label>
                                                </div>
                                            ))}

                                            <div className="relative group">
                                                <textarea
                                                    required
                                                    rows={1}
                                                    placeholder=" "
                                                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition-all text-slate-900 font-bold text-lg resize-none"
                                                />
                                                <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[10px] peer-focus:font-black peer-focus:tracking-widest uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                                                    Your Message
                                                </label>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-4 hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-blue-900/10"
                                        >
                                            Dispatch Inquiry <Send size={16} />
                                        </motion.button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16 space-y-6"
                                    >
                                        <div className="h-24 w-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h3 className="text-3xl font-black italic tracking-tighter uppercase">Message Secured</h3>
                                        <p className="text-slate-500 font-medium italic">Protocol initiated. We will respond shortly.</p>
                                        <button onClick={() => setSubmitted(false)} className="text-blue-600 text-[10px] font-black uppercase tracking-widest pt-8 hover:underline transition-all">
                                            Return to Form
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}