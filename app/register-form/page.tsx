"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, MapPin, CheckCircle2, Loader2, ArrowRight, Sparkles } from 'lucide-react';

export default function UserRegistration() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        gender: 'Prefer not to say',
        location: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, email: formData.email.toLowerCase() }),
            });
            if (res.ok) setSubmitted(true);
        } catch (err) {
            console.error("Critical failure during node initialization");
        } finally {
            setLoading(false);
        }
    };

    // FIX: Explicitly typing Variants to resolve Next.js build errors
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const inputVariants: Variants = {
        hidden: { opacity: 0, y: 25, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 15,
                stiffness: 100
            }
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 overflow-hidden">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    className="text-center bg-white/5 border border-white/10 p-10 sm:p-16 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative"
                >
                    <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: 'spring', damping: 10, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <CheckCircle2 size={80} className="text-blue-500 mx-auto mb-6" />
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white italic uppercase tracking-tighter">Identity Verified</h2>
                    <p className="text-slate-400 mt-4 font-bold uppercase text-[10px] tracking-[0.4em]">Node established in Netsui.OS</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-10 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all shadow-lg"
                    >
                        Initialize New Entry
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-4 sm:p-8 relative overflow-hidden [perspective:1200px]">
            {/* Dynamic Background Orbs */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/15 rounded-full blur-[120px]"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-xl z-10"
            >
                <div className="bg-[#0f172a]/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-14 shadow-2xl">
                    <header className="mb-10 relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "50px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1.5 bg-blue-600 mb-6 rounded-full"
                        />
                        <h1 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter flex items-center gap-3">
                            Join <span className="text-blue-600">Netsui</span>
                            <motion.span
                                animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                <Sparkles className="text-blue-400" size={24} />
                            </motion.span>
                        </h1>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em] mt-3">
                            Join with Us
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {/* Full Name */}
                        <motion.div variants={inputVariants} className="sm:col-span-2 group">
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                                <input
                                    required type="text" placeholder="LEGAL FULL NAME"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700"
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>
                        </motion.div>

                        {/* Email - Forced Lowercase View */}
                        <motion.div variants={inputVariants} className="group">
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                                <input
                                    required type="email" placeholder="email address"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-bold lowercase tracking-widest focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700 placeholder:uppercase"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value.toLowerCase() })}
                                />
                            </div>
                        </motion.div>

                        {/* Phone */}
                        <motion.div variants={inputVariants} className="group">
                            <div className="relative">
                                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                                <input
                                    required type="tel" placeholder="CONTACT NUMBER"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </motion.div>

                        {/* Gender Select */}
                        <motion.div variants={inputVariants}>
                            <div className="relative">
                                <select
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-blue-600/50 outline-none transition-all appearance-none cursor-pointer"
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                >
                                    <option className="bg-slate-900" value="Prefer not to say">GENDER: SELECT</option>
                                    <option className="bg-slate-900" value="Male">MALE</option>
                                    <option className="bg-slate-900" value="Female">FEMALE</option>
                                    <option className="bg-slate-900" value="Other">OTHER</option>
                                </select>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div variants={inputVariants} className="group">
                            <div className="relative">
                                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                                <input
                                    type="text" placeholder="LOCATION (CITY)"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={inputVariants} className="sm:col-span-2 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(37, 99, 235, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-6 rounded-[1.5rem] font-black uppercase tracking-[0.4em] text-[10px] flex justify-center items-center gap-4 shadow-xl transition-all disabled:opacity-50 group overflow-hidden"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <>
                                        Authorize Registration
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </form>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-10 space-y-2 opacity-60"
                >
                    <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.6em]">
                        Netsui Unified Interface v2.0
                    </p>
                    <div className="flex justify-center gap-3">
                        <div className="h-[1px] w-8 bg-blue-900" />
                        <div className="h-[1px] w-8 bg-blue-900" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}