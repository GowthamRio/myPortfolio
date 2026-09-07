import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

import { PERSONAL_INFO } from "../data";

export default function Hero() {
  const words = [
    "Angular Development",
    "TypeScript Engineering",
    "RxJS Reactive Streams",
    "Angular Signals Architecture",
    "Standalone Component Ecosystems",
    "REST API Integrations",
    "Responsive Dashboard UX",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText !== fullWord) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const heroFrameImages = [
    {
      src: "/src/assets/content image/clgImg.avif",
      name: "University Management System",
    },
    {
      src: "/src/assets/content image/bankImg.jpg",
      name: "Banking Platform",
    },
    {
      src: "/src/assets/content image/i-turmericimg.jpg",
      name: "i-Turmeric",
    },
    {
      src: "/src/assets/content image/bpmn-training.jpg",
      name: "BPMN Workflow Tool",
    },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "./assets/CV/Gowtham_S.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Gowtham_S.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div
        id="hero-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        <div
          id="hero-grid"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
          // className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Text content (8 cols on large screens) */}
          <motion.div
            id="hero-text-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden flex flex-col justify-center shadow-2xl text-center lg:text-left space-y-6 group"
          >
            {/* Soft inner glow top right */}
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-cyan/15 transition-all duration-700" />

            {/* Status Label */}
            <div
              id="availability-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2 mx-auto lg:mx-0 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Available for New Opportunities</span>
            </div>

            <div id="hero-headings" className="space-y-2">
              <p className="font-mono text-brand-cyan text-sm tracking-widest uppercase mb-1">
                Hello, I'm
              </p>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-none">
                Gowtham S
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2 justify-center lg:justify-start">
                <div className="h-[2px] w-12 bg-white/30 hidden sm:block"></div>
                <h2 className="font-sans text-xl sm:text-2xl text-zinc-300 font-light">
                  Senior Angular Front-End Developer
                </h2>
              </div>
            </div>

            {/* Custom Typing Animation */}
            <div
              id="typing-wrapper"
              className="min-h-[40px] flex items-center justify-center lg:justify-start"
            >
              <span className="font-mono text-sm sm:text-base text-gray-400 mr-2">
                Specializing in
              </span>
              <span className="font-mono text-sm sm:text-base text-brand-cyan font-bold tracking-wide border-r-2 border-brand-cyan pr-1 animate-pulse">
                {currentText}
              </span>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Architecting enterprise-grade banking solutions and scalable
              university management systems with 4 years of expertise in Angular
              Signals and high-performance UI.
            </p>

            {/* Buttons Row */}
            <div
              id="hero-actions-container"
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <button
                id="hero-btn-projects"
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-white text-black font-bold rounded-xl text-sm transition-all shadow-lg hover:bg-brand-cyan hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                id="hero-btn-resume"
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold backdrop-blur-sm text-white hover:bg-white/10 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </button>

              <button
                id="hero-btn-hire"
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-transparent border border-white/5 text-gray-500 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
              >
                Hire Me
              </button>
            </div>

            {/* Social Icons with custom motion triggers */}
            <div
              id="hero-social-links"
              className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-white/5 max-w-md mx-auto lg:mx-0"
            >
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mr-2">
                CONNECT:
              </span>

              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                id="hero-social-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                id="hero-social-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                id="hero-social-phone"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all"
                title="Call Me"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Premium workspace artwork (5 cols on large screens) */}
          <motion.div
            style={{ margin: "10px", marginRight: "20px" }}
            id="hero-graphic-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full max-w-[640px] lg:max-w-none">
              <div className="flex flex-row gap-2 sm:gap-3 pb-2 justify-start">
                {heroFrameImages.map((frame, index) => (
                  <div
                    key={`hero-image-frame-${index}`}
                    className="relative w-[calc(25%-0.375rem)] min-w-[110px] sm:min-w-[120px] lg:min-w-[130px] h-[180px] sm:h-[200px] lg:h-[220px] rounded-2xl overflow-visible group shrink-0"
                  >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card p-1.5 border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <img
                        src={frame.src}
                        alt={`Hero frame ${index + 1}`}
                        className="w-full h-full object-cover rounded-[0.9rem]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 max-w-[90%]">
                      <div className="glass-card px-2.5 py-1.5 rounded-full border border-white/10 shadow-lg backdrop-blur-md whitespace-nowrap">
                        <p className="font-mono text-[9px] sm:text-[10px] text-gray-300 uppercase tracking-widest text-center">
                          {frame.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating micro-dashboard badge widget */}
              {/* <div
                id="hero-floating-badge"
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-2xl backdrop-blur-md"
              >
                <div
                  id="badge-circle"
                  className="w-3.5 h-3.5 rounded-full bg-brand-cyan animate-ping absolute"
                />
                <div
                  id="badge-circle-static"
                  className="w-3.5 h-3.5 rounded-full bg-brand-cyan relative"
                />
                <div id="badge-text-box">
                  <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                    Active State
                  </p>
                  <p className="font-sans text-xs font-bold text-white">
                    Angular OnPush Enabled
                  </p>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background circle */}
      <div
        id="decorative-bg-circle"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-radial-gradient opacity-30 pointer-events-none"
      />
    </section>
  );
}
