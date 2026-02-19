"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Cpu, Scale, Brain } from 'lucide-react';
import Image from 'next/image';

// --- DATA: Storing Components as references for Type-Safety ---
const trinity = [
    {
        title: "Industrial Mastery",
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
        desc: "20 years of Automotive Electronics leadership. We understand the 'why' behind the technology."
    },
    {
        title: "Legal Authority",
        icon: Scale,
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200",
        desc: "Bedrock compliance. Merging Indian Law (COP) with Japanese corporate ethics."
    },
    {
        title: "Psychological Depth",
        icon: Brain,
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200",
        desc: "JLPT N1 mastery. We translate intent and culture, not just words."
    }
];

// --- TYPE-SAFE VARIANTS ---
const cardVariants: Variants = {
    hidden: (isEven: boolean) => ({
        opacity: 0,
        x: isEven ? 60 : -60,
        y: 40,
    }),
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
            staggerChildren: 0.15,
        }
    }
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function Philosophy() {
    return (
        <section className="bg-[#fafafa] py-16 md:py-48 px-4 sm:px-6 md:px-16 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="space-y-32 md:space-y-64">
                    {trinity.map((item, i) => (
                        <PhilosophyItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PhilosophyItem({ item, index }: { item: any, index: number }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for images
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <div ref={ref} className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center w-full`}>

            {/* --- IMAGE BASE --- */}
            <motion.div
                style={{ y: yImage }}
                className="relative w-full lg:w-[85%] aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-2xl"
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 85vw"
                />
                <div className="absolute inset-0 bg-black/30 lg:bg-black/10" />
            </motion.div>

            {/* --- AUTO-APPEARING CONTENT CARD --- */}
            <motion.div
                custom={isEven}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`
                    relative lg:absolute z-20
                    w-[95%] sm:w-[85%] lg:w-[42%] 
                    -mt-28 sm:-mt-36 lg:m-0 
                    ${isEven ? 'lg:-right-8' : 'lg:-left-8'}
                    bg-white/95 backdrop-blur-xl 
                    p-8 sm:p-10 md:p-12 
                    rounded-[2.5rem] md:rounded-[3.5rem] 
                    border border-white shadow-2xl
                    overflow-hidden
                `}
            >
                {/* Header Row */}
                <motion.div variants={textVariants} className="flex items-center justify-between mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shrink-0">
                        {/* Rendering the icon component directly */}
                        <item.icon size={26} />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">
                        Strategic Pillar 0{index + 1}
                    </span>
                </motion.div>

                {/* Title with fluid scaling and word-break protection */}
                <motion.h3
                    variants={textVariants}
                    className="text-[clamp(1.75rem,5vw,2.75rem)] font-black text-slate-950 uppercase italic tracking-tighter leading-[1.05] mb-6 break-words"
                >
                    {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                    variants={textVariants}
                    className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed italic max-w-[95%]"
                >
                    {item.desc}
                </motion.p>

                {/* Visual Accent */}
                <motion.div
                    variants={textVariants}
                    className="mt-8 h-1 w-12 bg-blue-600 rounded-full"
                />
            </motion.div>
        </div>
    );
}