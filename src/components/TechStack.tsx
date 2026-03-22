"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
    { name: "React / Next.js", logo: "/next.svg" },
    { name: "Node.js", logo: "/file.svg" }, // Placeholder for node
    { name: "PostgreSQL", logo: "/window.svg" }, // Placeholder
    { name: "Vercel", logo: "/vercel.svg" },
    { name: "REST APIs", logo: "/globe.svg" },
];

export default function TechStack() {
    return (
        <section id="tech" className="py-24 bg-background relative overflow-hidden border-t border-glass-border selection:bg-brand-blue selection:text-background text-foreground">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-black font-orbitron tracking-widest text-text-muted uppercase mb-8">Our Tech Stack</h2>
                    <div className="w-20 h-0.5 bg-brand-blue/30 mx-auto" />
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {TECH_STACK.map((tech, idx) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(0, 194, 255, 0.4)" }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-16 h-16 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                {/* Visual glow backdrop */}
                                <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                                >
                                    {/* We'll use names for now as logos are placeholders mostly */}
                                    <span className="text-4xl md:text-5xl font-black text-text-strong/20 group-hover:text-brand-blue transition-colors">
                                        {tech.name[0]}
                                    </span>
                                </motion.div>
                            </div>
                            <span className="text-sm font-bold font-orbitron text-text-strong/50 group-hover:text-text-strong transition-colors">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
