import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  FileDown,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrewnjvb";

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const socials = [
  { label: "GitHub", href: "https://github.com/rahulnaik8055", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahulnayak17", icon: Linkedin },
  { label: "Email", href: "mailto:sabhawatrahul82@gmail.com", icon: Mail },
  // { label: "Resume", href: "#", icon: FileDown },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const field =
    "w-full bg-transparent border-0 border-b border-white/10 rounded-none px-0 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#5EA2FF] transition-colors";

  return (
    <section id="contact" className="relative py-32 md:py-40 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease }}
          className="text-[13px] text-[#A1A1AA] tracking-[0.16em] uppercase mb-6"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.035em] font-medium max-w-4xl text-balance"
        >
          Let's build something <span className="text-[#A1A1AA]">great together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="mt-8 text-[17px] text-[#A1A1AA] max-w-2xl leading-relaxed"
        >
          Whether you have a startup idea, need help scaling an application, or are looking for a
          freelance developer, I'd be happy to discuss your project.
        </motion.p>

        <div className="grid md:grid-cols-12 gap-14 mt-20">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-7 space-y-7">
            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label className="text-[11px] text-white/40 tracking-[0.2em] uppercase">Name</label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Your name"
                  className={field}
                />
                {errors.name && <p className="text-[12px] text-red-400 mt-1">Required</p>}
              </div>
              <div>
                <label className="text-[11px] text-white/40 tracking-[0.2em] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                  placeholder="you@company.com"
                  className={field}
                />
                {errors.email && (
                  <p className="text-[12px] text-red-400 mt-1">Valid email required</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-[11px] text-white/40 tracking-[0.2em] uppercase">
                Company
              </label>
              <input {...register("company")} placeholder="Optional" className={field} />
            </div>

            <div>
              <label className="text-[11px] text-white/40 tracking-[0.2em] uppercase">
                Message
              </label>
              <textarea
                {...register("message", { required: true, minLength: 10 })}
                rows={4}
                placeholder="Tell me a little about your project, timeline, and goals."
                className={`${field} resize-none`}
              />
              {errors.message && (
                <p className="text-[12px] text-red-400 mt-1">A few more words please</p>
              )}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0A0A0A] text-[14px] font-medium hover:bg-white/90 transition disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                {status !== "sending" && (
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
              {status === "success" && (
                <span className="flex items-center gap-1.5 text-[13px] text-[#5EA2FF]">
                  <CheckCircle className="w-4 h-4" />
                  Message sent — I'll get back to you shortly.
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-1.5 text-[13px] text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Try again.
                </span>
              )}
            </div>
          </form>

          {/* Sidebar */}
          <div className="md:col-span-5 md:pl-6 md:border-l md:border-white/[0.06]">
            <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-6">Elsewhere</p>
            <ul className="space-y-1">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between py-4 border-b border-white/[0.06] hover:pl-2 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3 text-[15px] text-white/85 group-hover:text-white">
                      <s.icon className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#5EA2FF] transition-colors" />
                      {s.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 card-surface rounded-2xl p-6">
              <div className="flex items-center gap-2 text-[12px] text-white/60">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5EA2FF] animate-pulse" />
                Currently accepting freelance work
              </div>
              <p className="text-[14px] text-[#A1A1AA] mt-3 leading-relaxed">
                Average response time under 24 hours. Based in India, working with teams worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
