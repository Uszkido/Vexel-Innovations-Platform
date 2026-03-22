"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Sprout, ShoppingBag, Globe } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Phone Tracking System (PTS)",
        description: "Lost/stolen phone reporting and IMEI verification. A secure backend ecosystem for device security and status verification.",
        tags: ["Security", "Full-Stack", "IMEI Tracking"],
        link: "https://pts-vexel.vercel.app",
        icon: <Smartphone size={32} className="text-brand-blue" />,
        color: "rgba(0, 194, 255, 0.1)"
    },
    {
        title: "Kido Farms",
        description: "Multi-functional agri-tech platform for crops and aquaculture management. Driving efficiency in Nigeria's agricultural sector.",
        tags: ["Agri-Tech", "IoT", "Data Management"],
        link: "#",
        icon: <Sprout size={32} className="text-brand-blue" />,
        color: "rgba(34, 197, 94, 0.1)"
    },
    {
        title: "Usama (Fashion Platform)",
        description: "Minimal UI fashion brand platform designed for e-commerce expansion, featuring high-end aesthetic and user-centric design.",
        tags: ["E-commerce", "Frontend", "UI/UX"],
        link: "https://usama-frontend.vercel.app",
        icon: <ShoppingBag size={32} className="text-brand-blue" />,
        color: "rgba(236, 72, 153, 0.1)"
    },
    {
        title: "VexelOne",
        description: "The core innovation and tech hub hub. Represents engineering and system capabilities of the entire Vexel ecosystem.",
        tags: ["Innovation Hub", "Tech Suite", "Management"],
        link: "https://vexelone.vercel.app",
        icon: <Globe size={32} className="text-brand-blue" />,
        color: "rgba(124, 58, 237, 0.1)"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-6 leading-tight">Live <span className="text-brand-blue">Platforms</span></h2>
                        <p className="text-text-muted font-poppins">A showcase of our world-class engineering across diverse industries, from security to agriculture.</p>
                    </div>

                    <Link href="#all-projects" className="group hidden md:flex items-center gap-2 text-text-muted hover:text-text-strong transition-colors duration-300">
                        <span>View all research</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {PROJECTS.map((proj, idx) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group glass relative overflow-hidden rounded-3xl border border-glass-border hover:border-brand-blue/30 transition-all duration-300"
                        >
                            {/* Visual Accent */}
                            <div
                                className="absolute top-0 right-0 w-[200px] h-[200px] blur-[100px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                                style={{ backgroundColor: proj.color }}
                            />

                            <div className="p-10 flex flex-col h-full">
                                <div className="mb-8 p-4 w-fit rounded-2xl glass border border-glass-border group-hover:scale-110 transition-transform">
                                    {proj.icon}
                                </div>

                                <h3 className="text-3xl font-black font-orbitron mb-4 leading-tight group-hover:text-brand-blue transition-colors">{proj.title}</h3>
                                <p className="text-text-muted mb-8 flex-grow leading-relaxed font-poppins">{proj.description}</p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-text-strong/10 bg-text-strong/5 text-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={proj.link}
                                    target={proj.link.startsWith('http') ? '_blank' : undefined}
                                    className="px-8 py-4 bg-brand-blue text-white font-black rounded-xl inline-flex items-center justify-center gap-2 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all duration-300"
                                >
                                    View Live Platform
                                    <ExternalLink size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
