"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="relative pt-32 pb-16 bg-background border-t border-glass-border overflow-hidden">
            {/* Background glow shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="relative w-12 h-12">
                                <Image src="/logo.svg" alt="Vexel Innovations Logo" fill className="object-contain dark:invert-0 invert" />
                            </div>
                            <span className="text-2xl font-bold font-orbitron text-text-strong">VEXEL<span className="text-brand-blue"> INNOVATIONS ⚡</span></span>
                        </Link>

                        <p className="text-text-muted max-w-sm font-poppins text-lg leading-relaxed">
                            Engineering the next generation of intelligent infrastructure and digital ecosystems.
                        </p>

                        <div className="flex gap-4">
                            <Link href="https://github.com/vexel-innovations" target="_blank" className="p-3 rounded-full glass border border-glass-border hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-300">
                                <Github size={24} />
                            </Link>
                            <Link href="https://linkedin.com/company/vexel-innovations" target="_blank" className="p-3 rounded-full glass border border-glass-border hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-300">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="mailto:info@vexelinnovations.com" className="p-3 rounded-full glass border border-glass-border hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-300">
                                <Mail size={24} />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xl font-bold font-orbitron text-brand-blue">Navigation</h4>
                        <div className="flex flex-col gap-4 text-text-muted font-poppins">
                            <Link href="#about" className="hover:text-text-strong transition-colors">About Us</Link>
                            <Link href="#capabilities" className="hover:text-text-strong transition-colors">Capabilities</Link>
                            <Link href="#projects" className="hover:text-text-strong transition-colors">Platforms</Link>
                            <Link href="#tech" className="hover:text-text-strong transition-colors">Tech Stack</Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xl font-bold font-orbitron text-brand-blue">Get In Touch</h4>
                        <div className="space-y-6">
                            <Link href="mailto:info@vexelinnovations.com" className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl glass border border-glass-border group-hover:bg-brand-blue/10 transition-all duration-300">
                                    <Mail size={20} className="text-brand-blue group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold font-orbitron text-text-muted uppercase tracking-widest">Email Us</h5>
                                    <p className="text-text-strong group-hover:text-brand-blue transition-all">info@vexelinnovations.com</p>
                                </div>
                            </Link>

                            <button className="w-full py-4 glass border border-glass-border font-black font-orbitron rounded-xl hover:bg-brand-blue hover:text-background hover:border-brand-blue transition-all duration-300 shadow-[0_0_20px_rgba(0,194,255,0.2)]">
                                Start a Project
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-text-muted text-sm font-bold font-orbitron mb-2">
                            VEXEL INNOVATIONS &copy; {currentYear} | ALL RIGHTS RESERVED
                        </p>
                        <p className="text-text-strong/50 text-xs font-medium uppercase tracking-[0.2em]">
                            A Division of <span className="text-text-muted">Trust Hold Ado Shehu Ahmed</span>
                        </p>
                    </div>

                    <div className="flex gap-8 text-[10px] font-black font-orbitron text-text-strong/50 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-brand-blue transition-colors">Terms</Link>
                        <a href="/cac-certificate.pdf" target="_blank" className="hover:text-brand-blue transition-colors">CAC Certificate</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
