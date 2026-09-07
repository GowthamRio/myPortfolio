import { useState, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage(
        "Please complete all required fields (Name, Email, Message).",
      );
      setFormState("error");
      return;
    }

    setFormState("submitting");

    const subject = `Portfolio Contact Form - ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden bg-[#030305]"
    >
      {/* Background glow circle */}
      <div
        id="contact-bg-glow"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan-glow blur-[150px] pointer-events-none"
      />

      <div
        id="contact-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Title */}
        <div
          id="contact-header"
          className="text-center max-w-3xl mx-auto mb-20 space-y-3"
        >
          <div
            id="contact-subtitle-box"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan tracking-widest uppercase"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white text-glow-cyan">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Drop an email, make a call, or fill the secure digital terminal
            below to initiate a collaboration.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          id="contact-grid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
        >
          {/* Form Side (7 cols) */}
          <div id="contact-form-col" className="lg:col-span-7">
            <motion.div
              id="contact-form-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              {/* Submit Success Overlay */}
              <AnimatePresence>
                {formState === "success" && (
                  <motion.div
                    id="contact-success-panel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#050505]/95 z-30 flex flex-col items-center justify-center p-6 text-center space-y-4"
                  >
                    <div
                      id="success-icon-box"
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400"
                    >
                      <CheckCircle2 className="w-8 h-8 animate-bounce" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">
                      Payload Received Successfully!
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-sm font-light">
                      Thank you for reaching out. Gowtham S will inspect your
                      message and follow up within 24 hours.
                    </p>
                    <button
                      id="dismiss-success-btn"
                      onClick={() => setFormState("idle")}
                      className="px-5 py-2.5 rounded-full text-xs font-bold text-[#050505] bg-brand-cyan hover:bg-white transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form
                id="contact-terminal-form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* <div id="form-header-terminal" className="flex items-center justify-between pb-3 border-b border-white/5 mb-2 text-[10px] font-mono text-gray-500">
                  <span>SECURE CONNECT TERMINAL</span>
                  <span className="text-brand-cyan">PORT 443 SSL READY</span>
                </div> */}

                <div
                  id="form-row-1"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="space-y-1">
                    <label
                      htmlFor="form-name"
                      className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider"
                    >
                      Your Name <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-[#08080d]/80 rounded-xl border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/45 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="form-email"
                      className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider"
                    >
                      Your Email <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 bg-[#08080d]/80 rounded-xl border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/45 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="form-phone"
                    className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider"
                  >
                    Your Phone (Optional)
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 555-019-2834"
                    className="w-full px-4 py-3 bg-[#08080d]/80 rounded-xl border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/45 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="form-message"
                    className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider"
                  >
                    Your Message <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project, opportunity, or timeline requirement..."
                    className="w-full px-4 py-3 bg-[#08080d]/80 rounded-xl border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/45 transition-colors resize-none"
                  />
                </div>

                {/* Error message */}
                {formState === "error" && (
                  <div
                    id="form-error-banner"
                    className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-[#050505] bg-gradient-to-r from-brand-cyan to-brand-blue hover:shadow-lg hover:shadow-brand-cyan/15 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {formState === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#050505] border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Coordinates Sidebar (5 cols) */}
          <div
            id="contact-info-col"
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <motion.div
              id="contact-info-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-full space-y-8"
            >
              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-white">
                  Direct Coordinates
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Want to bypass form submission? You can ping me directly at my
                  email or phone lines. I am always open to discuss remote work,
                  contractual consulting, and permanent Angular opportunities.
                </p>

                {/* Visual Direct Links */}
                <div id="info-links-stack" className="space-y-4 pt-2">
                  <a
                    id="sidebar-link-email"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-brand-cyan/20 hover:bg-white/[0.03] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/5 border border-brand-cyan/15 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-gray-500 uppercase block tracking-wider">
                        EMAIL DIRECT
                      </span>
                      <span className="font-sans text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  <a
                    id="sidebar-link-phone"
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-brand-cyan/20 hover:bg-white/[0.03] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 border border-brand-blue/15 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-gray-500 uppercase block tracking-wider">
                        CALL DIRECT
                      </span>
                      <span className="font-sans text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  {/* GORGEOUS BENTO LOCATION CARD */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 relative overflow-hidden group">
                    <div className="w-full sm:w-28 h-24 bg-white/5 rounded-xl border border-white/5 overflow-hidden flex flex-col items-center justify-center relative shrink-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-cyan/20 via-transparent to-transparent opacity-50" />
                      <div className="text-center z-10 space-y-0.5">
                        <p className="text-xl">🇮🇳</p>
                        <p className="text-[10px] font-bold text-white tracking-widest uppercase">
                          CHENNAI
                        </p>
                        <p className="text-[7px] text-zinc-500 font-mono">
                          13.08° N, 80.27° E
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-xs font-bold text-white mb-1">
                        Based in South India
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                        Currently open to Senior Frontend opportunities
                        worldwide, supporting on-site, hybrid, and fully remote
                        workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Social networks block */}
              <div
                id="sidebar-socials-block"
                className="pt-6 border-t border-white/5 space-y-4"
              >
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">
                  Core Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    id="sidebar-social-linkedin"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-brand-cyan/10 border border-white/5 hover:border-brand-cyan/20 rounded-xl font-sans text-xs text-gray-400 hover:text-brand-cyan font-semibold transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    id="sidebar-social-github"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-brand-cyan/10 border border-white/5 hover:border-brand-cyan/20 rounded-xl font-sans text-xs text-gray-400 hover:text-brand-cyan font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                {/* SMALL BENTO UPDATE CARD */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between mt-4">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      LATEST UPDATE
                    </p>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-300">
                      Successfully optimized banking dashboard performance by
                      40% using Angular Signals
                    </p>
                    <p className="text-[9px] text-zinc-500 mt-1 italic">
                      Aug 2026
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
