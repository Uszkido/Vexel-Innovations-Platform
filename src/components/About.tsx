"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black font-orbitron mb-8 leading-tight">
                            Innovating at the Intersection of <span className="text-brand-blue">Technology and Impact</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-brand-blue rounded-full mb-10" />
                        <p className="text-lg text-text-muted mb-8 leading-relaxed font-poppins">
                            Vexel Innovations is a division of <span className="text-text-strong font-bold">Trust Hold Ado Shehu Ahmed</span>, specializing in <span className="text-brand-blue">smart surveillance systems</span>, IT infrastructure, and integrated security services for homes, businesses, and construction sites. We build the digital nervous system of modern progress through intelligent design and engineering.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div className="p-6 rounded-2xl border border-glass-border bg-glass backdrop-blur-sm shadow-sm">
                                <h4 className="text-brand-blue font-orbitron text-xl mb-2">Vision</h4>
                                <p className="text-text-muted text-sm">Building scalable solutions for global engineering challenges.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-glass-border bg-glass backdrop-blur-sm shadow-sm">
                                <h4 className="text-brand-blue font-orbitron text-xl mb-2">Mission</h4>
                                <p className="text-text-muted text-sm">Driving innovation through AI, cybersecurity, and intelligent design.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass border border-glass-border relative flex items-center justify-center p-12">
                            <div className="absolute inset-0 bg-brand-blue opacity-5 mix-blend-overlay" />
                            <div className="relative z-10 text-center">
                                <span className="text-8xl md:text-9xl font-black text-brand-blue/10 absolute -top-10 -left-10 font-orbitron">V</span>
                                <p className="text-2xl font-orbitron text-text-strong leading-relaxed z-20">
                                    "Engineering is not just about code; it's about <span className="text-brand-blue">future-proofing</span> our world."
                                </p>
                            </div>
                        </div>
                        {/* Animated decorative dots */}
                        <div className="absolute -top-6 -right-6 flex flex-wrap gap-2 w-24">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-brand-blue/20" />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
