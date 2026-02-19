"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, Linkedin, Globe, Zap } from 'lucide-react';
import Image from 'next/image'; // Ensure you import Image

const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const columnVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#020617] pt-32 pb-12 overflow-hidden border-t border-white/5">

            {/* --- ADVANCED BACKGROUND WATERMARK --- */}
            <div className="absolute top-10 left-[-5%] pointer-events-none select-none">
                <h2 className="text-[20vw] font-black text-white/[0.02] leading-none uppercase italic tracking-tighter">
                    Netsui
                </h2>
            </div>

            <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

                    {/* 1. LOGO & MISSION (Spans 5 cols) */}
                    <motion.div variants={columnVariants} className="md:col-span-5 space-y-10">
                        <div className="space-y-8">
                            {/* --- BRAND LOGO SLOT --- */}
                            <div className="flex flex-col gap-6">
                                {/* Increased h-16 to h-24 and w-48 to w-72 */}
                                <div className="relative h-40 w-72 transition-transform hover:scale-105 duration-500">
                                    <Image
                                        src="/logo/netsui_logo_bgre.png"
                                        alt="Netsui Logo"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                                {/* Visual anchor line adjusted to match larger logo */}
                                <div className="h-[2px] w-16 bg-blue-600" />
                            </div>

                            <p className="text-slate-400 text-lg font-medium leading-relaxed italic max-w-md">
                                Empowering the 2026 Indo-Japan corridor through technical vetting, legal harmonization, and cultural synchronization.
                            </p>
                        </div>

                        <div className="flex gap-6">
                            {[
                                { Icon: Linkedin, label: 'LinkedIn' },
                                { Icon: Globe, label: 'Global' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -2, color: '#3b82f6' }}
                                    className="text-slate-500 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest"
                                    href="#"
                                >
                                    <social.Icon size={18} /> {social.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2. NAVIGATION (Spans 3 cols) */}
                    <motion.div variants={columnVariants} className="md:col-span-3 space-y-8">
                        <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Expertise</h4>
                        <ul className="space-y-4">
                            {['Strategy Desk', 'Legal Office', 'Talent Audit', 'Academy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-300 hover:text-white font-bold text-sm uppercase tracking-tighter transition-all block group">
                                        <span className="group-hover:mr-2 transition-all inline-block opacity-30">/</span> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* 3. LIAISON (Spans 4 cols) */}
                    <motion.div variants={columnVariants} className="md:col-span-4 space-y-8">
                        <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Liaison</h4>
                        <div className="space-y-6">
                            <div className="group cursor-pointer border-l-2 border-white/5 pl-6 hover:border-blue-600 transition-all duration-500">
                                <p className="text-[10px] text-slate-500 font-black uppercase mb-1 tracking-widest">Direct Strategy</p>
                                <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">liaison@netsui.in</p>
                            </div>
                            <div className="group cursor-pointer border-l-2 border-white/5 pl-6 hover:border-blue-600 transition-all duration-500">
                                <p className="text-[10px] text-slate-500 font-black uppercase mb-1 tracking-widest">Regional Hubs</p>
                                <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">Bengaluru / Tokyo</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <motion.div
                    variants={columnVariants}
                    className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8"
                >
                    <div className="flex items-center gap-4">

                        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                            © {currentYear} Netsui Consultancy
                        </p>
                    </div>

                    <div className="flex gap-8">
                        {['Privacy', 'Engagement'].map((link) => (
                            <a key={link} href="#" className="text-[10px] font-black text-slate-600 hover:text-blue-500 uppercase tracking-widest transition-all">
                                {link}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Subtle light leak to ground the footer */}
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-600/5 blur-[120px] pointer-events-none" />
        </footer>
    );
}