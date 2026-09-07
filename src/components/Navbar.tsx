import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past threshold
      setIsScrolled(window.scrollY > 20);

      // Track scroll percentage
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollPercent(scrolled);

      // Active section highlight
      const sections = navLinks.map((l) => l.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div
        id="scroll-progress-indicator"
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple transition-all duration-75"
        style={{ width: `${scrollPercent}%` }}
      />

      <div
        id="navbar-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div id="navbar-flex" className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* <div
              id="logo-icon-box"
              className="w-8 h-8 bg-gradient-to-tr from-brand-cyan to-brand-purple rounded-lg flex items-center justify-center text-black font-black italic group-hover:scale-105 transition-transform"
            >
              G
            </div> */}
            <span
              id="logo-icon-box"
              className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue text-3xl"
            >
              G
            </span>
            <div id="logo-text-box" className="flex flex-col">
              <span className="font-display font-black text-sm tracking-tighter text-white group-hover:text-brand-cyan transition-colors">
                GOWTHAM.S
              </span>
              <span className="font-mono text-[9px] text-gray-500 tracking-wider leading-none uppercase">
                Angular Architect
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav
            id="desktop-navigation"
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => {
              const linkId = link.href.substring(1);
              const isActive = activeSection === linkId;
              return (
                <a
                  id={`nav-link-${linkId}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(linkId);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-brand-cyan bg-white/5 shadow-inner"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <div id="cta-desktop" className="hidden md:flex items-center gap-3">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md text-zinc-300">
              Available for hire ⚡
            </div>
            <a
              id="navbar-hire-me-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#050505] bg-white rounded-full overflow-hidden hover:bg-brand-cyan hover:text-black transition-colors group cursor-pointer"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div id="mobile-toggle-box" className="md:hidden flex items-center">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-nav absolute top-full left-0 right-0 border-b border-white/5 overflow-hidden"
          >
            <div
              id="mobile-links-container"
              className="px-4 pt-2 pb-6 space-y-1"
            >
              {navLinks.map((link) => {
                const linkId = link.href.substring(1);
                const isActive = activeSection === linkId;
                return (
                  <a
                    id={`mobile-nav-link-${linkId}`}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(linkId);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${
                      isActive
                        ? "text-brand-cyan bg-white/5 font-semibold"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div id="mobile-cta-box" className="pt-4 px-4">
                <a
                  id="mobile-hire-me-btn"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#050505] bg-white rounded-xl hover:bg-brand-cyan transition-colors"
                >
                  Hire Me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
