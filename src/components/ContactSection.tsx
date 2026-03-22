"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black font-orbitron mb-8 leading-tight">Start a <span className="text-brand-blue">Project</span></h2>
                        <p className="text-xl text-text-muted mb-12 font-poppins leading-relaxed">
                            Partner with Vexel Innovations to engineer your next-generation digital ecosystem. From mission-critical security to agricultural automation, we deliver.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-background transition-all">
                                    <Mail size={24} className="text-brand-blue group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-black font-orbitron text-brand-blue uppercase tracking-widest mb-1">Direct Contact</h5>
                                    <p className="text-lg text-text-strong font-bold">info@vexelinnovations.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-background transition-all">
                                    <ShieldCheck size={24} className="text-brand-blue group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-black font-orbitron text-brand-blue uppercase tracking-widest mb-1">Division HQ</h5>
                                    <p className="text-lg text-text-strong font-bold">Trust Hold Ado Shehu Ahmed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
