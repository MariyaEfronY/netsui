"use client";
import React from 'react';
import { Shield, Globe, Users, ArrowRight, Award, Zap } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#020617] overflow-hidden">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20 pb-12">


                {/* Hero Main Content */}
                <div className="text-center max-w-5xl mx-auto mt-12 mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-in slide-in-from-top-4 duration-700">
                        <Zap size={12} className="fill-current" /> Indo-Japan Tech-Legal Bridge
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        PASSION DEFINES <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-600">
                            EXCELLENCE
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        Strategic Advisory for the 2026 Indo-Japan Corridor. We bridge the Linguistic, Regulatory, and Mindset gaps with VP-level authority.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                        <button className="group bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl shadow-blue-600/30 flex items-center gap-3">
                            Request Strategic Briefing
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 text-slate-300 px-10 py-5 rounded-full font-bold transition-all">
                            The Netsui Manifesto
                        </button>
                    </div>
                </div>

                {/* THE NETSUI TRINITY PILLARS */}
                <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Pillar
                        icon={<Globe size={24} />}
                        title="Strategic Advisory"
                        label="VP-Level Insight"
                        desc="Leveraging 20 years of Automotive-Electronics leadership to navigate market entry and JV structuring."
                        delay="delay-[400ms]"
                    />
                    <Pillar
                        icon={<Shield size={24} />}
                        title="Tech-Legal Excellence"
                        label="N1 Certified Counsel"
                        desc="Bridging the Indian legal landscape with JLPT N1 fluency. Specializing in Corporate and Labor Law."
                        delay="delay-[600ms]"
                    />
                    <Pillar
                        icon={<Users size={24} />}
                        title="Human Capital"
                        label="The Vetted Bridge"
                        desc="Synchronizing Indian agility with Japanese quality through technical vetting and 'Suriawase' training."
                        delay="delay-[800ms]"
                    />
                </div>
            </div>
        </section>
    );
}

function Pillar({ icon, title, label, desc, delay }: any) {
    return (
        <div className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 ${delay}`}>
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-500 text-blue-400 group-hover:text-white">
                {icon}
            </div>
            <p className="text-blue-500 font-bold text-[10px] uppercase tracking-widest mb-2">{label}</p>
            <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {desc}
            </p>
        </div>
    );
}