"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import router for redirection

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false); // Track redirection state

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleConsultClick = () => {
        setIsRedirecting(true);
        // Small delay to show the animation before switching pages
        setTimeout(() => {
            router.push('/register');
        }, 800);
    };

    const navLinks = [
        { name: 'Manifesto', href: '#manifesto' },
        { name: 'Leadership', href: '#leadership' },
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Services', href: '#services' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? 'py-3 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]'
                : 'py-6 bg-[#020617]/50 backdrop-blur-md border-b border-white/5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* --- LOGO Section --- */}
                <div
                    className="flex items-center gap-4 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]">
                        <Image
                            src="/logo/netsui_logo.jpeg"
                            alt="Netsui Logo"
                            fill
                            className={`object-contain transition-all duration-500 ${scrolled ? 'brightness-100' : 'brightness-110 contrast-125'}`}
                            priority
                        />
                    </div>

                    <div className={`hidden sm:flex flex-col border-l pl-4 h-10 justify-center transition-colors ${scrolled ? 'border-slate-200' : 'border-white/20'}`}>
                        <span className={`text-[8px] uppercase tracking-[0.4em] font-bold ${scrolled ? 'text-slate-400' : 'text-white/60'}`}>
                            Institutional
                        </span>
                        <span className="text-[10px] text-blue-500 font-black tracking-widest mt-0.5 uppercase">
                            熱意 Bridge
                        </span>
                    </div>
                </div>

                {/* --- DESKTOP NAV --- */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group ${scrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-600`}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <motion.button
                        onClick={handleConsultClick}
                        disabled={isRedirecting}
                        // Hover: Slight scale and a soft blue outer glow
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="relative overflow-hidden bg-blue-600 text-white px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-2 min-w-[150px] justify-center group"
                    >
                        {/* --- HOVER SHIMMER EFFECT --- */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
                        />

                        <AnimatePresence mode="wait">
                            {isRedirecting ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2"
                                >
                                    <Loader2 size={14} className="animate-spin" />
                                    <span>Initiating...</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="default"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2"
                                >
                                    Register
                                    {/* --- ANIMATED ARROW ON HOVER --- */}
                                    <motion.span
                                        variants={{
                                            initial: { x: 0 },
                                            hover: { x: 5 }
                                        }}
                                        initial="initial"
                                        whileHover="hover"
                                        className="inline-block"
                                    >
                                        <ArrowRight size={14} className="group-hover:text-white transition-colors" />
                                    </motion.span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-xl transition-all ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-[#020617] z-[110] flex flex-col p-8 pt-24"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white p-2 bg-white/5 rounded-full"
                        >
                            <X size={30} />
                        </button>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-black text-white active:text-blue-500 uppercase tracking-tighter"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto border-t border-white/10 pt-10">
                            <div className="flex items-center gap-4 text-blue-500 mb-8">
                                <Globe size={24} />
                                <span className="text-white font-bold tracking-widest uppercase text-sm">Tokyo • Bengaluru</span>
                            </div>
                            {/* MOBILE ACTION BUTTON */}
                            <button
                                onClick={handleConsultClick}
                                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex justify-center items-center gap-3"
                            >
                                {isRedirecting ? <Loader2 className="animate-spin" /> : "Initiate Strategic Briefing"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}