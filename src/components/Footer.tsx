import { ArrowUp, Award } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="bg-[#020204] border-t border-white/5 py-12 relative overflow-hidden"
    >
      {/* Tiny subtle background glow */}
      <div
        id="footer-glow"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-brand-cyan-glow blur-[100px] pointer-events-none opacity-40"
      />

      <div
        id="footer-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div
          id="footer-layout"
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright/Author details */}
          <div
            id="footer-author-box"
            className="text-center md:text-left space-y-2"
          >
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-bold text-[10px] text-brand-cyan">
                    G
                  </span>
                </div>
              </div>
              <span className="font-sans font-bold text-sm text-white">
                Gowtham S
              </span>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Made with ❤️ by Gowtham S. Copyright © 2026. All rights reserved.
            </p>
          </div>

          {/* Quick tech stack footnotes
          <div id="footer-tech-stack" className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center md:text-right">
            <span>React SPA</span>
            <span>•</span>
            <span>Tailwind v4</span>
            <span>•</span>
            <span>Motion Engine</span>
          </div> */}

          {/* Back to top scroll button */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/25 hover:bg-brand-cyan/5 transition-all group cursor-pointer"
            title="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
