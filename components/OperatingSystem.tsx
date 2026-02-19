"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ClipboardList, Settings, ShieldCheck, Zap, Star, ArrowRight } from 'lucide-react';

// Animation variants for the "Printing" effect
const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.015, // Speed of typing
        },
    },
};

const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
        opacity: 1,
        display: "inline",
        transition: { duration: 0 }
    },
};

const TypewriterText = ({ text }: { text: string }) => (
    <motion.span variants={sentenceVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {text.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
                {char}
            </motion.span>
        ))}
    </motion.span>
);

const sections = [
    {
        id: "01",
        title: "Business Strategy Desk",
        icon: <Settings size={20} />,
        items: [
            { label: "Market Entry Architecture", desc: "Strategic GTM for Japanese SMEs and Indian Startups." },
            { label: "Sales Channel Development", desc: "10-year Sales Director expertise for lead generation." },
            { label: "JV & Partner Vetting", desc: "Deep-dive due diligence on strategic partners." }
        ]
    },
    {
        id: "02",
        title: "Japan Desk (Legal)",
        icon: <ShieldCheck size={20} />,
        items: [
            { label: "Entity Incorporation", desc: "Seamless setup of Private Limited subsidiaries." },
            { label: "Labor Law Harmonization", desc: "Aligning Indian statutes with Japanese ethics." },
            { label: "Drafting & Negotiation", desc: "N1-certified legal review of MSAs and NDAs." }
        ]
    },
    {
        id: "03",
        title: "Mindset Academy",
        icon: <Zap size={20} />,
        items: [
            { label: "Suriawase Kaihatsu", desc: "Teaching Indian teams Integrated Development." },
            { label: "A4 Summary Discipline", desc: "Toyota-style One-Page executive reporting." },
            { label: "Nemawashi Protocols", desc: "Standardizing communication to eliminate delays." }
        ]
    },
    {
        id: "04",
        title: "Talent Placement",
        icon: <Star size={20} />,
        items: [
            { label: "Technical Vetting", desc: "Candidates interviewed by former VP of Electronics." },
            { label: "Linguistic Screening", desc: "N1-level assessment of bilingual fluency." },
            { label: "Cultural Fit", desc: "Ensuring candidates understand the Zen of delivery." }
        ]
    }
];

export default function OperatingSystem() {
    return (
        <section className="bg-white py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[clamp(2.5rem,7vw,4.5rem)] font-black text-slate-950 tracking-tighter uppercase italic leading-none"
                    >
                        The <span className="text-blue-600">Netsui</span> <br />
                        Operating Protocol
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 hover:bg-white hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-10 w-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-black text-xs">
                                    {section.id}
                                </span>
                                <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight">
                                    {section.title}
                                </h3>
                            </div>

                            <div className="space-y-8">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="shrink-0 mt-1">
                                            <Check className="text-blue-600" size={16} strokeWidth={3} />
                                        </div>
                                        <div className="min-h-[60px]"> {/* Prevents layout shift during typing */}
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                                                <TypewriterText text={item.label} />
                                            </h4>
                                            <p className="text-slate-500 text-xs md:text-sm italic leading-relaxed">
                                                <TypewriterText text={item.desc} />
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}