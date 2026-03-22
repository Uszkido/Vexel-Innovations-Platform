"use client";

import { motion } from "framer-motion";
import { Shield, Users, Zap, Globe } from "lucide-react";

const STATS = [
    { label: "Systems Protected", value: "500+", icon: <Shield className="text-brand-blue" />, sub: "Across 12 industries" },
    { label: "Data Processed", value: "24.5TB", icon: <Zap className="text-brand-blue" />, sub: "Real-time AI analysis" },
    { label: "Global Users", value: "10K+", icon: <Users className="text-brand-blue" />, sub: "Trusted internationally" },
    { label: "Uptime Guaranteed", value: "99.99%", icon: <Globe className="text-brand-blue" />, sub: "Mission-critical reliability" },
];

export default function Stats() {
    return (
        <section className="py-24 bg-background border-y border-glass-border overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {STATS.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group flex items-start gap-4 p-6 rounded-3xl glass border border-glass-border hover:border-brand-blue/30 transition-all duration-300"
                        >
                            <div className="p-3 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-background transition-all duration-300">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="text-3xl font-black font-orbitron text-text-strong mb-1">{stat.value}</h3>
                                <p className="text-sm font-bold font-orbitron text-brand-blue uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-xs text-text-muted font-poppins">{stat.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
