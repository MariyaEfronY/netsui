"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe2, Scale, Users, UserCheck,
    CheckCircle2, Plus, Minus, ArrowRight, Sparkles
} from 'lucide-react';
import Image from 'next/image';

const serviceData = [
    {
        id: "market-entry",
        title: "1. Strategic Advisory & Market Entry",
        subtitle: "Indo-Japan GTM Strategy",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", // Business skyscraper/Tokyo vibe
        icon: <Globe2 className="text-blue-600" size={24} />,
        points: [
            "Indo-Japan GTM Strategy: Crafting data-driven Go-To-Market strategies.",
            "Joint Venture (JV) & M&A Advisory: Identifying strategic partners and senior-level due diligence.",
            "Sales Architecture Design: Leveraging 15 years of experience as a Sales Director in Tokyo.",
            "ODC & GCC Setup: End-to-end consulting for establishing Development Centers in Bengaluru."
        ]
    },
    {
        id: "tech-legal",
        title: "2. The \"Japan Desk\": Tech-Legal",
        subtitle: "Bridging the Legal Divide",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop", // Law/Scale aesthetic
        icon: <Scale className="text-blue-600" size={24} />,
        points: [
            "Entity Incorporation: Navigating regulatory landscapes for Indian subsidiaries.",
            "Labor Law Compliance: Aligning Indian statutes with Japanese corporate ethics.",
            "Contractual Drafting: Bilingual legal review of MSAs and NDAs.",
            "IP Protection: Specialized legal protection for hardware and automotive IP."
        ]
    },
    {
        id: "human-capital",
        title: "3. Human Capital Consulting",
        subtitle: "Leadership & Cultural Mindset",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", // Workshop/Team vibe
        icon: <Users className="text-blue-600" size={24} />,
        points: [
            "Bilingual Leadership Workshops: Training Indian managers with Monozukuri mindset.",
            "The \"Netsui\" Methodologies: Implementation of PDCA and 5-Why protocols.",
            "Cross-Cultural Management: Specialized coaching in Nemawashi and Hourensou.",
            "Psychology of Success: Bridging high-context and low-context work cultures."
        ]
    },
    {
        id: "talent-placement",
        title: "4. Elite Talent Placement",
        subtitle: "Sourcing the Top 1% of Talent",
        image: "/images/placement.avif", // Tech recruitment vibe
        icon: <UserCheck className="text-blue-600" size={24} />,
        points: [
            "Technical Vetting: Rigorous assessment by a former VP of Electronics.",
            "Linguistic Precision: In-house N1-level screening for engineers.",
            "Cultural Readiness Filter: Vetting for long-term process-driven environments."
        ]
    }
];

export default function Services() {
    return (
        <section className="bg-[#fcfdfe] py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="h-[2px] w-8 bg-blue-600" />
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                            Institutional Solutions
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter"
                    >
                        The Netsui <br />
                        <span className="text-blue-600 italic font-light">Operating System</span>
                    </motion.h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {serviceData.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: typeof serviceData[0], index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.12)] transition-all duration-500"
        >
            {/* Image Header Section */}
            <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute bottom-6 left-8 p-4 bg-white rounded-2xl shadow-xl text-blue-600 z-10">
                    {service.icon}
                </div>
            </div>

            <div className="p-8 md:p-10 pt-2">
                <div className="flex justify-between items-start mb-4">
                    <div className="max-w-[80%]">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                            {service.title}
                        </h3>
                        <p className="text-blue-600 font-bold text-[10px] md:text-xs mt-2 uppercase tracking-widest flex items-center gap-2">
                            <Sparkles size={12} /> {service.subtitle}
                        </p>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-3 rounded-full transition-all duration-300 ${isOpen ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white"
                            }`}
                    >
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-5 py-6 border-t border-slate-50 mt-4">
                                {service.points.map((point, idx) => {
                                    const [label, content] = point.split(': ');
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex gap-4"
                                        >
                                            <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                                <span className="text-slate-900 font-black">{label}:</span> {content}
                                            </p>
                                        </motion.div>
                                    );
                                })}


                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="group/btn text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mt-6 flex items-center gap-2 transition-all"
                    >
                        Explore More
                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                            <ArrowRight size={14} />
                        </motion.div>
                    </button>
                )}
            </div>
        </motion.div>
    );
}