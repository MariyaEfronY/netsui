"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Globe } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#020617] pt-20 pb-10 overflow-hidden text-slate-300">
            {/* Background Animation: Subtle Grid & Flowing Lines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Identity Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                                N
                            </div>
                            <span className="text-white font-black text-2xl tracking-tighter uppercase">
                                NETSUI <span className="text-blue-500 font-light italic">熱意</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Bridging the Triple Gap through industrial mastery, legal precision, and linguistic depth. Specialized in the 2026 Indo-Japan technological corridor.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Expertise</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">Market Entry <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">Japan Desk (Legal) <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">Talent Placement <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">Mindset Academy <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-500 mt-1" />
                                <span>strategy@netsui.in</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 mt-1" />
                                <span>Bengaluru Hub | Tokyo Liaison</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Call to Action */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Newsletter</h4>
                        <p className="text-xs text-slate-500 italic">Get the monthly Indo-Japan Market Briefing.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Corporate Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all"
                            />
                            <button className="absolute right-2 top-2 bg-blue-600 text-white p-1.5 rounded-lg hover:bg-blue-500 transition-all">
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">
                        © {currentYear} Netsui Consultancy Services Pvt Ltd.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">Terms of Engagement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}