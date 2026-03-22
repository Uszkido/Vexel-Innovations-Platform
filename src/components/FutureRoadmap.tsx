"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

const ROADMAP = [
    {
        phase: "01",
        label: "Foundation",
        description: "Launch of core security auditing frameworks and smart surveillance systems.",
        status: "completed",
        tech: ["AI Scanning", "CCTV Integration", "Cloud Infrastructure"]
    },
    {
        phase: "02",
        label: "Agri-Scale",
        description: "Deployment of Kido Farms sensors and automated aquaculture management systems.",
        status: "active",
        tech: ["IoT Sensors", "Real-time Monitoring", "Data Visualization"]
    },
    {
        phase: "03",
        label: "Cyber-Fortress",
        description: "Enterprise-grade encryption and decentralized identity management protocols.",
        status: "scheduled",
        tech: ["Quantum Sec", "Identity Verification", "Threat Detection"]
    },
    {
        phase: "04",
        label: "Quantum Reach",
        description: "Next-gen AI research and expansion of VexelOne ecosystem globally.",
        status: "scheduled",
        tech: ["Nueral Nets", "Global Scaling", "Edge Computing"]
    }
];

export default function FutureRoadmap() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-6">Built for <span className="text-brand-blue text-gradient">Scale</span></h2>
                    <p className="text-text-muted max-w-2xl mx-auto font-poppins">Our technical roadmap is designed to solve the most complex engineering challenges of the next decade.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ROADMAP.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`p-8 rounded-3xl border ${item.status === 'active' ? 'border-brand-blue bg-brand-blue/5' : 'border-glass-border bg-glass'} backdrop-blur-sm relative group`}
                        >
                            <div className="text-5xl font-black font-orbitron text-brand-blue/10 absolute top-4 right-4">{item.phase}</div>

                            <div className="mb-6 flex items-center justify-between">
                                <h4 className="text-xl font-bold font-orbitron text-text-strong uppercase tracking-wide">{item.label}</h4>
                                {item.status === 'completed' ? <CheckCircle2 className="text-brand-blue" /> : <Circle className="text-text-muted/30" />}
                            </div>

                            <p className="text-sm text-text-muted mb-8 font-poppins">{item.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {item.tech.map(t => (
                                    <span key={t} className="text-[10px] font-black font-orbitron text-brand-blue/50 uppercase tracking-widest px-3 py-1 bg-brand-blue/5 rounded-full border border-brand-blue/10">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {item.status === 'active' && (
                                <div className="mt-8 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                                    <span className="text-[10px] font-bold font-orbitron text-brand-blue animate-pulse">UNDER DEVELOPMENT</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
