"use client";
import { motion, useScroll, useSpring } from 'framer-motion';

const sections = [
    { id: 'home', label: 'ENTRY' },
    { id: 'manifesto', label: 'MANIFESTO' },
    { id: 'leadership', label: 'LEADERSHIP' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' },
];

export default function ScrollHUD() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-6">
            {/* Scroll Progress Tube */}
            <div className="relative w-[2px] h-48 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    style={{ scaleY }}
                    className="absolute top-0 w-full bg-blue-600 origin-top shadow-[0_0_10px_#2563eb]"
                />
            </div>

            {/* Interactive Section Dots */}
            <div className="flex flex-col gap-5">
                {sections.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className="group relative flex items-center justify-end"
                    >
                        <span className="absolute right-8 text-[9px] font-black text-blue-400 opacity-0 group-hover:opacity-100 transition-all tracking-[0.3em] whitespace-nowrap bg-blue-950/50 px-2 py-1 rounded border border-blue-500/20 backdrop-blur-md">
                            {s.label}
                        </span>
                        <motion.div
                            whileHover={{ scale: 1.5 }}
                            className="w-2 h-2 rounded-full border border-blue-500/40 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6] transition-all"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}