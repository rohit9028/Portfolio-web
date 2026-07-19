import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { slideInLeft, slideInRight, fadeUp } from "@/animations/variants";
import { PERSONAL, EMAILJS_CONFIG } from "@/constants";

const contactInfo = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: PERSONAL.location, href: undefined },
];

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const form = formRef.current;
    if (!form) return false;
    const data = new FormData(form);
    const newErrors: FormErrors = {};

    const name = (data.get("from_name") as string)?.trim();
    const email = (data.get("from_email") as string)?.trim();
    const subject = (data.get("subject") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!subject) newErrors.subject = "Subject is required";
    if (!message) newErrors.message = "Message is required";
    else if (message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey,
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="contact.send()"
          title="Let's Build Something"
          highlight="Together"
          description="Have an internship opening, a project, or just want to say hi? Send me a message directly!"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2">
            <Reveal variants={slideInLeft}>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="glass-card flex items-center gap-4 p-4 transition-colors hover:border-secondary/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary">
                      <item.icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs text-text-dim">{item.label}</p>
                      <p className="text-sm text-text-muted">{item.value}</p>
                    </div>
                  </a>
                ))}

                <div className="flex gap-3">
                  <a
                    href={PERSONAL.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card flex flex-1 items-center justify-center gap-2 p-3.5 text-sm text-text-muted hover:text-secondary"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                  <a
                    href={PERSONAL.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card flex flex-1 items-center justify-center gap-2 p-3.5 text-sm text-text-muted hover:text-secondary"
                  >
                    <FaLinkedin size={16} /> LinkedIn
                  </a>
                </div>

                <div className="glass-card overflow-hidden !rounded-2xl">
                  <iframe
                    title="Location map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=80.85%2C26.75%2C81.05%2C26.95&layer=mapnik"
                    className="h-48 w-full grayscale invert-[0.92] contrast-[0.9] filter"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="lg:col-span-3">
            <Reveal variants={slideInRight}>
              <div className="glass-card relative overflow-hidden p-7 sm:p-9">
                {/* Decorative gradient corner */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-highlight/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-secondary/15 to-primary/10 blur-3xl" />

                <div className="relative">
                  {/* Form Header */}
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-highlight/20 text-secondary">
                      <Send size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">Send me a Message</h3>
                      <p className="text-xs text-text-dim">I'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name & Email row */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <Reveal variants={fadeUp} index={0}>
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-text-muted"
                          >
                            <User size={12} className="text-secondary" /> Your Name
                          </label>
                          <div className="relative">
                            <input
                              id="contact-name"
                              type="text"
                              name="from_name"
                              placeholder="Rohit Singh"
                              autoComplete="name"
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                              onChange={() => errors.name && setErrors((p) => ({ ...p, name: undefined }))}
                              className={`contact-input ${errors.name ? "!border-red-500/60" : ""} ${focusedField === "name" ? "!border-secondary/60" : ""}`}
                            />
                            {focusedField === "name" && (
                              <motion.div
                                layoutId="input-glow"
                                className="absolute inset-0 -z-10 rounded-xl bg-secondary/5"
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              />
                            )}
                          </div>
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="mt-1 text-xs text-red-400"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </Reveal>

                      {/* Email */}
                      <Reveal variants={fadeUp} index={1}>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-text-muted"
                          >
                            <Mail size={12} className="text-secondary" /> Your Email
                          </label>
                          <div className="relative">
                            <input
                              id="contact-email"
                              type="email"
                              name="from_email"
                              placeholder="you@example.com"
                              autoComplete="email"
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                              onChange={() => errors.email && setErrors((p) => ({ ...p, email: undefined }))}
                              className={`contact-input ${errors.email ? "!border-red-500/60" : ""} ${focusedField === "email" ? "!border-secondary/60" : ""}`}
                            />
                            {focusedField === "email" && (
                              <motion.div
                                layoutId="input-glow"
                                className="absolute inset-0 -z-10 rounded-xl bg-secondary/5"
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              />
                            )}
                          </div>
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="mt-1 text-xs text-red-400"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </Reveal>
                    </div>

                    {/* Subject */}
                    <Reveal variants={fadeUp} index={2}>
                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-text-muted"
                        >
                          <ArrowRight size={12} className="text-secondary" /> Subject
                        </label>
                        <div className="relative">
                          <input
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Project Collaboration / Internship / Freelance"
                            onFocus={() => setFocusedField("subject")}
                            onBlur={() => setFocusedField(null)}
                            onChange={() => errors.subject && setErrors((p) => ({ ...p, subject: undefined }))}
                            className={`contact-input ${errors.subject ? "!border-red-500/60" : ""} ${focusedField === "subject" ? "!border-secondary/60" : ""}`}
                          />
                          {focusedField === "subject" && (
                            <motion.div
                              layoutId="input-glow"
                              className="absolute inset-0 -z-10 rounded-xl bg-secondary/5"
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            />
                          )}
                        </div>
                        <AnimatePresence>
                          {errors.subject && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="mt-1 text-xs text-red-400"
                            >
                              {errors.subject}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </Reveal>

                    {/* Message */}
                    <Reveal variants={fadeUp} index={3}>
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-text-muted"
                        >
                          <MessageSquare size={12} className="text-secondary" /> Message
                        </label>
                        <div className="relative">
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project, idea, or just say hello..."
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            onChange={() => errors.message && setErrors((p) => ({ ...p, message: undefined }))}
                            className={`contact-input resize-none ${errors.message ? "!border-red-500/60" : ""} ${focusedField === "message" ? "!border-secondary/60" : ""}`}
                          />
                          {focusedField === "message" && (
                            <motion.div
                              layoutId="input-glow"
                              className="absolute inset-0 -z-10 rounded-xl bg-secondary/5"
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            />
                          )}
                        </div>
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="mt-1 text-xs text-red-400"
                            >
                              {errors.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </Reveal>

                    {/* Hidden field for receiver (used by EmailJS template) */}
                    <input type="hidden" name="to_name" value={PERSONAL.firstName} />

                    {/* Submit Button */}
                    <Reveal variants={fadeUp} index={4}>
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={status !== "sending" ? { scale: 1.02, y: -2 } : {}}
                        whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                        className="btn-gradient w-full !py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        <AnimatePresence mode="wait">
                          {status === "idle" && (
                            <motion.span
                              key="idle"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="inline-flex items-center gap-2"
                            >
                              <Send size={15} /> Send Message
                            </motion.span>
                          )}
                          {status === "sending" && (
                            <motion.span
                              key="sending"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="inline-flex items-center gap-2"
                            >
                              <Loader2 size={15} className="animate-spin" /> Sending...
                            </motion.span>
                          )}
                          {status === "success" && (
                            <motion.span
                              key="success"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="inline-flex items-center gap-2"
                            >
                              <CheckCircle2 size={15} /> Message Sent Successfully!
                            </motion.span>
                          )}
                          {status === "error" && (
                            <motion.span
                              key="error"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="inline-flex items-center gap-2"
                            >
                              <XCircle size={15} /> Failed to send. Try again!
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </Reveal>
                  </form>

                  {/* Success / Error Toast */}
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400"
                      >
                        <CheckCircle2 size={18} className="shrink-0" />
                        <div>
                          <p className="font-medium">Message delivered!</p>
                          <p className="mt-0.5 text-xs text-emerald-400/70">
                            Thank you for reaching out. I'll reply to your email soon.
                          </p>
                        </div>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mt-5 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400"
                      >
                        <XCircle size={18} className="shrink-0" />
                        <div>
                          <p className="font-medium">Something went wrong!</p>
                          <p className="mt-0.5 text-xs text-red-400/70">
                            Please try again or contact me directly at {PERSONAL.email}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
