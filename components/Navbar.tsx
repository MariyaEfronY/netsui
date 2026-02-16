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
        router.push("/register");
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
            {/* Floating Rounded Glass Navbar */}
            <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
                <div className="w-full max-w-6xl">
                    <div
                        className={`flex items-center justify-between px-8 h-[75px] rounded-full border transition-all duration-500
              ${scrolled
                                ? "bg-white/95 backdrop-blur-xl shadow-2xl border-white/60 scale-[0.97]"
                                : "bg-white/10 backdrop-blur-lg border-white/20"
                            }
            `}
                    >
                        {/* Responsive Logo */}
                        <div
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="cursor-pointer flex items-center shrink-0"
                        >
                            <Image
                                src="/logo/netsui_logo.png"
                                alt="Netsui Logo"
                                width={220}
                                height={120}
                                priority
                                className="
      h-[28px] 
      md:h-[36px] 
      lg:h-[42px] 
      w-auto 
      object-contain 
      transition-all 
      duration-300
      drop-shadow-sm
    "
                            />
                        </div>


                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300
                    ${scrolled ? "text-slate-800" : "text-white"
                                        }
                    hover:text-blue-600`}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <button
                                onClick={handleRegister}
                                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
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

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden transition-colors duration-300 ${scrolled ? "text-slate-800" : "text-white"
                                }`}
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Glass Modal Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[90] px-6"
                    >
                        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
                            <div className="flex flex-col gap-7 text-center">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold uppercase text-white hover:text-blue-400 transition"
                                    >
                                        {link.name}
                                    </a>
                                ))}

                                <button
                                    onClick={handleRegister}
                                    className="mt-4 bg-blue-600 text-white py-3 rounded-full font-bold uppercase tracking-wider flex justify-center items-center gap-2 hover:bg-blue-700 transition"
                                >
                                    {isRedirecting ? (
                                        <Loader2 className="animate-spin" size={18} />
                                    ) : (
                                        <>
                                            Register <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
