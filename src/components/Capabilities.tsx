"use client";

import { motion } from "framer-motion";
import { Brain, ShieldCheck, Cpu, Sprout, Network } from "lucide-react";

const CAPABILITIES = [
    {
        title: "AI & Machine Learning",
        description: "Engineering neural networks and predictive systems to automate complex decision-making processes.",
        icon: <Brain size={40} className="text-brand-blue" />,
    },
    {
        title: "Cybersecurity Systems",
        description: "Building hard-locked backend protocols and encrypted architectures to secure critical digital assets.",
        icon: <ShieldCheck size={40} className="text-brand-blue" />,
    },
    {
        title: "Full-Stack Development",
        description: "Developing scalable, high-performance web and mobile applications with modern frameworks.",
        icon: <Cpu size={40} className="text-brand-blue" />,
    },
    {
        title: "Agri-Tech Solutions",
        description: "Smart farming systems integrating sensors, aquaculture monitoring, and crop management platforms.",
        icon: <Sprout size={40} className="text-brand-blue" />,
    },
    {
        title: "Platform Engineering",
        description: "Designing core tech hubs and industrial-grade platforms for diverse business ecosystems.",
        icon: <Network size={40} className="text-brand-blue" />,
    },
];

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-24 relative overflow-hidden bg-background">
            {/* Background glow shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-6">Core <span className="text-brand-blue text-gradient">Capabilities</span></h2>
                    <p className="text-text-muted max-w-2xl mx-auto font-poppins">Our expertise spans across critical tech sectors, driving innovation with a focus on security and scalability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CAPABILITIES.map((cap, idx) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group p-8 rounded-3xl border border-glass-border bg-glass backdrop-blur-sm hover:border-brand-blue/40 transition-all duration-300 overflow-hidden relative shadow-sm hover:shadow-md hover:shadow-brand-blue/10"
                        >
                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                                {cap.icon}
                            </div>

                            <div className="mb-6 p-4 w-fit rounded-2xl bg-brand-blue/5 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-background transition-all duration-300">
                                {cap.icon}
                            </div>

                            <h3 className="text-2xl font-black font-orbitron mb-4 group-hover:text-brand-blue transition-colors">{cap.title}</h3>
                            <p className="text-text-muted leading-relaxed font-poppins group-hover:text-text-strong transition-colors">{cap.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
