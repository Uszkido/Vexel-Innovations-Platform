"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSuccess(false);
        setError(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                reset();
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-8 rounded-3xl glass border border-glass-border relative overflow-hidden bg-background">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <AnimatePresence mode="wait">
                {success ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center mb-6 border border-brand-blue/50">
                            <CheckCircle size={40} className="text-brand-blue" />
                        </div>
                        <h3 className="text-2xl font-black font-orbitron text-text-strong mb-4 uppercase tracking-widest">Message Received</h3>
                        <p className="text-text-muted max-w-sm mb-8 font-poppins text-lg">
                            Your engineering request has been logged. Our technical team will reach out shortly.
                        </p>
                        <button
                            onClick={() => setSuccess(false)}
                            className="px-8 py-3 bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-bold font-orbitron rounded-xl hover:bg-brand-blue hover:text-background transition-all"
                        >
                            Send Another
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6 relative z-10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black font-orbitron text-brand-blue uppercase tracking-[0.2em] ml-2">Full Name</label>
                                <input
                                    {...register("name")}
                                    className={`w-full bg-black/50 border ${errors.name ? 'border-red-500/50' : 'border-glass-border'} p-4 rounded-xl focus:border-brand-blue outline-none transition-all text-text-strong placeholder:text-text-muted/20`}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black font-orbitron text-brand-blue uppercase tracking-[0.2em] ml-2">Email Address</label>
                                <input
                                    {...register("email")}
                                    className={`w-full bg-black/50 border ${errors.email ? 'border-red-500/50' : 'border-glass-border'} p-4 rounded-xl focus:border-brand-blue outline-none transition-all text-text-strong placeholder:text-text-muted/20`}
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black font-orbitron text-brand-blue uppercase tracking-[0.2em] ml-2">Subject</label>
                            <input
                                {...register("subject")}
                                className={`w-full bg-black/50 border ${errors.subject ? 'border-red-500/50' : 'border-glass-border'} p-4 rounded-xl focus:border-brand-blue outline-none transition-all text-text-strong placeholder:text-text-muted/20`}
                                placeholder="What can we build for you?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black font-orbitron text-brand-blue uppercase tracking-[0.2em] ml-2">Message</label>
                            <textarea
                                {...register("message")}
                                rows={5}
                                className={`w-full bg-black/50 border ${errors.message ? 'border-red-500/50' : 'border-glass-border'} p-4 rounded-xl focus:border-brand-blue outline-none transition-all text-text-strong placeholder:text-text-muted/20 resize-none`}
                                placeholder="Share more technical details..."
                            />
                        </div>

                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-500 text-sm">
                                <AlertCircle size={18} />
                                <span>Technical error. Please try again or email us directly.</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 bg-brand-blue text-background font-black font-orbitron rounded-xl flex items-center justify-center gap-4 hover:bg-white hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 shadow-[0_0_20px_rgba(0,194,255,0.3)]"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    <span>NEGOTIATING...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    <span>TRANSMIT REQUEST</span>
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
