"use client";

import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(128,128,128,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="px-4 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm shadow-sm"
                    >
                        Engineering the Future
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black font-orbitron text-text-strong leading-tight mb-6">
                        <span className="text-gradient block">VEXEL</span>
                        INNOVATIONS
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-text-muted font-poppins mb-12">
                        Building intelligent systems for security, agriculture, and digital innovation.
                        We engineer scalable solutions for real-world problems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link
                            href="#projects"
                            className="group px-8 py-4 bg-text-strong text-background font-bold rounded-xl flex items-center gap-2 hover:bg-brand-blue hover:text-background hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,194,255,0.3)]"
                        >
                            Explore Projects
                            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="#live-platforms"
                            className="px-8 py-4 bg-transparent border border-text-muted/20 text-text-strong font-bold rounded-xl flex items-center gap-2 hover:bg-text-strong/5 hover:border-text-strong transition-all duration-300"
                        >
                            View Live Platforms
                            <ExternalLink size={20} />
                        </Link>
                    </div>
                </motion.div>

                {/* Floating elements animation */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="mt-20 opacity-20 hidden md:block"
                >
                    <div className="w-[100px] h-[100px] border border-text-strong/20 rotate-45 mx-auto relative">
                        <div className="absolute inset-2 border border-brand-blue/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
