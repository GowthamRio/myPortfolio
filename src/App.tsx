import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ServicesAchievements from "./components/ServicesAchievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorRingPos, setCursorRingPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  // Preloading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Detect pointer device and track mouse coordinates for premium cursor
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      if (!window.matchMedia("(pointer: fine)").matches) return;
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Lagging ring effect for premium cursor
  useEffect(() => {
    let reqId: number;

    const updateRing = () => {
      setCursorRingPos((prev) => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        return {
          x: prev.x + dx * 0.15, // speed coefficient
          y: prev.y + dy * 0.15,
        };
      });
      reqId = requestAnimationFrame(updateRing);
    };

    if (isDesktop) {
      reqId = requestAnimationFrame(updateRing);
    }

    return () => cancelAnimationFrame(reqId);
  }, [cursorPos, isDesktop]);

  return (
    <>
      {/* Custom Animated Cursor (Desktop only, never overrides standard pointer actions) */}
      <AnimatePresence>
        {isDesktop && !loading && (
          <div id="custom-cursor-root">
            {/* Core center dot */}
            <div
              id="cursor-dot"
              className="fixed w-1.5 h-1.5 bg-brand-cyan rounded-full pointer-events-none z-[9999]"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
            {/* Outer lagging ring */}
            <div
              id="cursor-ring"
              className="fixed w-8 h-8 border border-brand-cyan/40 rounded-full pointer-events-none z-[9998] transition-all duration-75"
              style={{
                left: `${cursorRingPos.x}px`,
                top: `${cursorRingPos.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Preloader loading animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center text-center space-y-6"
          >
            {/* Glowing Logo Frame */}
            <div
              id="preloader-logo-frame"
              className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-cyan p-[1px] animate-pulse"
            >
              <div
                id="preloader-logo-inner"
                className="w-full h-full bg-[#050505] rounded-[23px] flex items-center justify-center"
              >
                <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue text-3xl">
                  G
                </span>
              </div>
            </div>

            {/* Pulsing Status indicators */}
            <div id="preloader-status-box" className="space-y-2">
              <h1 className="font-display font-bold text-sm tracking-widest text-white uppercase flex items-center gap-2 justify-center">
                <Sparkles className="w-4 h-4 text-brand-cyan animate-spin-slow" />
                <span>Compiler Booting</span>
              </h1>
              <p className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                Gowtham S • Angular Front-End Architect
              </p>
            </div>

            {/* Glowing loading line */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <div className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue animate-loading-bar absolute left-0 w-1/3 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Canvas App */}
      <div
        id="app-canvas-container"
        className="relative z-10 min-h-screen selection:bg-brand-cyan selection:text-[#050505]"
      >
        {/* Dynamic Background Effects */}
        <BackgroundEffects />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Modular Sections list */}
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <ServicesAchievements />
          <Testimonials />
          <Contact />
        </main>

        {/* Page Footer */}
        <Footer />
      </div>

      {/* Additional global tailwind styling variables for custom animations */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
          @keyframes loading-bar {
            0% { left: -33%; width: 33%; }
            50% { left: 50%; width: 50%; }
            100% { left: 100%; width: 33%; }
          }
          .animate-loading-bar {
            animation: loading-bar 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </>
  );
}
