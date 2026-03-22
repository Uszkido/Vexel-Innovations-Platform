"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-glass-border py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.svg"
              alt="Vexel Innovations Logo"
              fill
              className="object-contain transition-transform group-hover:scale-110 dark:invert-0 invert"
            />
          </div>
          <span className="text-xl font-bold font-orbitron tracking-wider text-text-strong">
            VEXEL<span className="text-brand-blue"> INNOVATIONS</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-strong/70 hover:text-brand-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-brand-blue text-white font-bold text-sm rounded-full hover:bg-text-strong hover:text-background hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,194,255,0.3)]"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 text-text-strong">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-glass-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-text-strong/90 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-4 bg-brand-blue text-white font-bold text-center rounded-xl hover:bg-text-strong transition-all shadow-[0_0_15px_rgba(0,194,255,0.3)]"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
