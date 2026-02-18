"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    const handleRegister = () => {
        setIsRedirecting(true);
        router.push("/register-form");
    };

    const navLinks = [
        { name: "Manifesto", href: "#manifesto" },
        { name: "Leadership", href: "#leadership" },
        { name: "Philosophy", href: "#philosophy" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav className="fixed top-4 sm:top-6 left-0 right-0 z-[100] flex justify-center px-4">
                <div className="w-full max-w-7xl">
                    <div
                        className={`flex items-center justify-between px-6 md:px-8 h-[60px] rounded-full border transition-all duration-500
              ${scrolled
                                ? "bg-white/95 backdrop-blur-xl shadow-2xl border-white/60 scale-[0.98] lg:scale-[0.97]"
                                : "bg-white/10 backdrop-blur-lg border-white/20"
                            }
            `}
                    >
                        {/* Navigation Logo */}
                        <div
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="cursor-pointer flex items-center shrink-0"
                        >
                            <Image
                                src="/logo/netsui_logo_bgre.png"
                                alt="Netsui Logo"
                                width={180}
                                height={60}
                                priority
                                className="
                                    h-[100px] 
                                    sm:h-[120px]
                                    lg:h-[150px]
                                    w-auto
                                    object-contain
                                    transition-all
                                    duration-300
                                    brightness-110
                                "
                            />
                        </div>

                        {/* Desktop Navigation - Switched to LG breakpoint for Tablet safety */}
                        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`group relative text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-all duration-300
                                        ${scrolled ? "text-slate-800" : "text-white"}
                                        hover:text-blue-600`}
                                >
                                    <span className="relative">
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                            ))}

                            <button
                                onClick={handleRegister}
                                className="bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
                            >
                                {isRedirecting ? (
                                    <Loader2 className="animate-spin" size={14} />
                                ) : (
                                    <>
                                        Register <ArrowRight size={14} />
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Tablet/Mobile Toggle - Now visible on screens < 1024px */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${scrolled ? "text-slate-800 bg-slate-100" : "text-white bg-white/10"
                                }`}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile/Tablet Glass Modal Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center z-[95] px-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="w-full max-w-sm bg-white/5 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
                        >
                            {/* Close button inside modal for better UX */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-slate-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col gap-6 text-center mt-4">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white/5 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-blue-600 transition-all duration-300"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowRight size={16} />
                                    </motion.a>
                                ))}

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={handleRegister}
                                    className="mt-4 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex justify-center items-center gap-2 hover:bg-blue-700 transition"
                                >
                                    {isRedirecting ? (
                                        <Loader2 className="animate-spin" size={18} />
                                    ) : (
                                        <>
                                            Register <ArrowRight size={18} />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}