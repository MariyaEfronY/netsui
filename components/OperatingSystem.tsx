"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ClipboardList, Settings, ShieldCheck, Zap, Star } from 'lucide-react';

export default function OperatingSystem() {
    const sections = [
        {
            id: "I",
            title: "Business & Strategy Desk",
            icon: <Settings className="text-blue-600" size={20} />,
            items: [
                { label: "Market Entry Architecture", desc: "Strategic GTM for Japanese SMEs and Indian Tech Startups." },
                { label: "Sales Channel Development", desc: "10-year Sales Director expertise applied to your lead generation." },
                { label: "JV & Partner Vetting", desc: "Deep-dive due diligence on potential strategic partners." }
            ]
        },
        {
            id: "II",
            title: "The \"Japan Desk\" (Legal & Compliance)",
            icon: <ShieldCheck className="text-blue-600" size={20} />,
            items: [
                { label: "Indo-Japan Entity Incorporation", desc: "Seamless setup of Private Limited subsidiaries." },
                { label: "Labor Law Harmonization", desc: "Aligning Indian labor statutes with Japanese corporate ethics." },
                { label: "Drafting & Negotiation", desc: "N1-certified legal review of MSAs, NDAs, and Service Level Agreements." }
            ]
        },
        {
            id: "III",
            title: "Leadership & Mindset Academy",
            icon: <Zap className="text-blue-600" size={20} />,
            items: [
                { label: "Suriawase Kaihatsu Coaching", desc: "Teaching Indian teams the art of \"Integrated Development.\"" },
                { label: "The A4 Summary Discipline", desc: "Training managers in the Toyota-style \"One-Page\" executive reporting." },
                { label: "Nemawashi & Horenso Protocols", desc: "Standardizing communication to eliminate project delays." },
                { label: "5-Why Root Cause Analysis", desc: "Implementing PDCA cycles in daily Indian operations." }
            ]
        },
        {
            id: "IV",
            title: "Specialized Talent Placement",
            icon: <Star className="text-blue-600" size={20} />,
            isSpecial: true,
            items: [
                { label: "Technical Vetting", desc: "Every candidate is interviewed by a former VP of Electronics." },
                { label: "Linguistic Screening", desc: "Direct N1-level assessment of bilingual fluency." },
                { label: "Cultural Fit Assessment", desc: "Ensuring candidates understand the mindset of Japanese delivery." }
            ]
        }
    ];

    return (
        <section className="bg-[#f8fbff] py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center gap-2 mb-4 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-200">
                            <ClipboardList size={14} /> The Netsui Operating System
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            Japanese Precision. <br />
                            <span className="text-blue-600">Indian Agility.</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl text-lg md:text-xl leading-relaxed italic">
                            "This checklist represents our commitment to the management methodologies that drive Global Tier-1 excellence."
                        </p>
                    </motion.div>
                </div>

                {/* Operating System Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white border rounded-[2rem] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.12)] border-slate-200`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-600 border border-blue-100">
                                    {section.id}
                                </div>
                                <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">{section.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="mt-1 h-5 w-5 rounded border-2 border-blue-200 flex items-center justify-center bg-blue-50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                                            <Check className="text-transparent group-hover:text-white" size={12} strokeWidth={4} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{item.label}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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