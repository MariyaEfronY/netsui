"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe2, Scale, Users, UserCheck,
    CheckCircle2, Plus, Minus, ArrowRight
} from 'lucide-react';

const serviceData = [
    {
        title: "1. Strategic Advisory & Market Entry",
        subtitle: "For Japanese firms entering India or Indian firms expanding to Japan.",
        icon: <Globe2 className="text-blue-600" size={24} />,
        points: [
            "Indo-Japan GTM Strategy: Crafting data-driven Go-To-Market strategies specifically for the Tech, Automotive, and Semiconductor sectors.",
            "Joint Venture (JV) & M&A Advisory: Identifying strategic partners, suppliers, vendors, conducting senior-level due diligence, and structuring cross-border entities.",
            "Sales Architecture Design: Leveraging 15 years of experience as a Sales Director in Tokyo to build high-performance sales teams and dealer networks.",
            "ODC & GCC Setup: End-to-end consulting for establishing Offshore Development Centers and Global Capability Centers in Bengaluru."
        ]
    },
    {
        title: "2. The \"Japan Desk\": Tech-Legal & Compliance",
        subtitle: "Bridging the legal divide with a JLPT N1-certified Advocate.",
        icon: <Scale className="text-blue-600" size={24} />,
        points: [
            "Entity Incorporation: Navigating the regulatory landscape to establish Indian Private Limited subsidiaries for Japanese corporations.",
            "Labor Law & Employment Compliance: Aligning Indian labor statutes with Japanese corporate ethics and quality standards.",
            "Contractual Drafting & Negotiation: Bilingual legal review of MSAs, NDAs, and Service Agreements, ensuring no nuance is lost between Tokyo and Bengaluru.",
            "IP Protection & Strategy: Specialized legal protection for hardware, software, and automotive IP in the Indian market."
        ]
    },
    {
        title: "3. Human Capital Consulting: Leadership & Cultural Mindset",
        subtitle: "Training the next generation of Indo-Japan business leaders.",
        icon: <Users className="text-blue-600" size={24} />,
        points: [
            "Bilingual Leadership Workshops: Training Indian managers to lead with the Monozukuri (Quality) mindset.",
            "The \"Netsui\" Methodologies: Implementation of PDCA, 5-Why, and A4 Summary reporting into daily Indian operations.",
            "Cross-Cultural Friction Management: Specialized coaching in Nemawashi (consensus building) and Hourensou (reporting) protocols.",
            "Psychology of Success: Using B.E. + M.A. (Psychology) background to bridge communication gaps between high-context (Japan) and low-context (India) work cultures."
        ]
    },
    {
        title: "4. Elite Talent Placement (Bilingual & Tech)",
        subtitle: "Sourcing the top 1% of talent for the corridor.",
        icon: <UserCheck className="text-blue-600" size={24} />,
        points: [
            "Technical Vetting: Every candidate undergoes a rigorous assessment by a former VP of Electronics—ensuring they don't just \"know\" the tech but can execute it.",
            "Linguistic Precision: In-house N1-level screening for bilingual engineers and project managers (N3 to N1).",
            "Cultural Readiness Filter: Vetting candidates for their ability to thrive in the long-term, process-driven environment of Japanese OEMs."
        ]
    }
];

export default function Services() {
    return (
        <section className="bg-[#F8FAFC] py-16 md:py-24 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl">
                <header className="mb-16 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs md:text-sm block mb-4"
                    >
                        Institutional Solutions
                    </motion.span>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
                    >
                        The Netsui Operating System
                    </motion.h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {serviceData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: typeof serviceData[0] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-[0_15px_40px_-12px_rgba(37,99,235,0.08)] flex flex-col items-start h-fit transition-shadow hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.15)]"
        >
            <div className="w-full flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    {service.icon}
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                {service.title}
            </h3>
            <p className="text-blue-600 font-semibold text-xs md:text-sm mb-6 uppercase tracking-wide">
                {service.subtitle}
            </p>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden w-full"
                    >
                        <div className="space-y-6 pt-4 border-t border-slate-50">
                            {service.points.map((point, idx) => {
                                const [label, content] = point.split(': ');
                                return (
                                    <div key={idx} className="flex gap-4">
                                        <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                            <strong className="text-slate-800">{label}:</strong> {content}
                                        </p>
                                    </div>
                                );
                            })}
                            <button className="mt-4 w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                                Enquire for {service.id} <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-4 flex items-center gap-2 hover:gap-4 transition-all"
                >
                    View Detailed Architecture <ArrowRight size={14} />
                </button>
            )}
        </motion.div>
    );
}