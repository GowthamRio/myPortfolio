import { useEffect, useState, useRef } from "react";
import { Award, Briefcase, Code, Compass, Zap, Layers, RefreshCw, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { PERSONAL_INFO, STATISTICS } from "../data";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Custom live counting state for counters
  const [counts, setCounts] = useState<Record<string, number>>({
    exp: 0,
    modules: 0,
    components: 0,
    screens: 0,
    hours: 0,
  });

  useEffect(() => {
    if (isInView) {
      STATISTICS.forEach((stat) => {
        let start = 0;
        const end = stat.value;
        const duration = 1500; // ms
        const increment = end / (duration / 16); // ~60fps
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.id]: end }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({ ...prev, [stat.id]: Math.floor(start) }));
          }
        }, 16);
      });
    }
  }, [isInView]);

  const qualities = [
    {
      title: "Enterprise Banking Experience",
      desc: "Deep knowledge in financial platforms, permission architectures, multi-tenancy white labeling, and high-frequency data streams.",
      icon: Briefcase,
      color: "text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5"
    },
    {
      title: "Modular Reusable UI Architecture",
      desc: "Designing highly optimized standalone component packages reducing duplication and accelerating development cycles.",
      icon: Layers,
      color: "text-brand-blue border-brand-blue/20 bg-brand-blue/5"
    },
    {
      title: "Advanced Performance Optimizations",
      desc: "Implementing zone-free/Signals architecture, lazy loading, Webpack Module Federation, and custom OnPush change detection.",
      icon: Zap,
      color: "text-brand-purple border-brand-purple/20 bg-brand-purple/5"
    },
    {
      title: "Agile Leadership & Collaboration",
      desc: "Led front-end engineers, handled Jira sprint planning, code review cycles, and cross-team delivery for critical platform releases.",
      icon: Users,
      color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden" ref={containerRef}>
      
      {/* Decorative Blur Accent */}
      <div id="about-bg-accent" className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-blue-glow blur-[100px] pointer-events-none" />

      <div id="about-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="about-header" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div id="about-subtitle-box" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-[10px] font-mono text-brand-purple tracking-widest uppercase">
            <Compass className="w-3 h-3" />
            <span>Discover my story</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Architecting Scalable Frontends
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Bringing elite engineering craftsmanship to enterprise-grade web experiences.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div id="about-bento-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Box (7 cols) */}
          <motion.div
            id="about-story-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div id="story-text-container" className="space-y-6">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-brand-cyan" />
                The Journey of an Angular Authority
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                For over <strong className="text-brand-cyan font-medium">4 years</strong>, I have focused my development craft on building high-performance, complex software solutions. I specialize in turning complicated enterprise wireframes and banking logic models into modular, ultra-responsive web applications.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                My professional expertise thrives at the intersection of security and user experience. From architecting white-labeled multi-tenant theme modules with <strong className="text-brand-purple font-medium">zero runtime changes</strong>, to building complex process visualizations with D3, I ensure codebases are elegant, scalable, and secure.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                Currently, I am deep-diving into modern Angular capabilities (v17+ Signals, standalone structures, and optimized server-side hydration) while harnessing AI tools like Cursor and GitHub Copilot to optimize delivery efficiency by up to 40%.
              </p>
            </div>

            {/* Micro details panel */}
            <div id="story-micro-details" className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">CURRENT WORKSPACE</span>
                <span className="font-sans text-xs font-semibold text-gray-300">Chennai, Tamil Nadu, India</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">ENTERPRISE SPECIALTY</span>
                <span className="font-sans text-xs font-semibold text-brand-cyan">Fintech & ERP Orchestration</span>
              </div>
            </div>
          </motion.div>

          {/* Key Qualities Panel (5 cols) */}
          <div id="about-qualities-col" className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {qualities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  id={`quality-card-${index}`}
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-5 rounded-2xl border border-white/5 flex gap-4 hover:border-white/10 transition-colors"
                >
                  <div id={`quality-icon-frame-${index}`} className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div id={`quality-text-box-${index}`} className="space-y-1">
                    <h4 className="font-sans font-bold text-sm text-white">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Live Counters Stats Row */}
        <div id="about-counters-row" className="mt-16 pt-8 border-t border-white/5">
          <div id="counters-grid" className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {STATISTICS.map((stat, index) => (
              <motion.div
                id={`stat-counter-box-${stat.id}`}
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 relative group hover:border-brand-cyan/20 hover:bg-white/[0.04] transition-all"
              >
                <div id={`stat-value-box-${stat.id}`} className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-brand-cyan transition-colors">
                  <span>{counts[stat.id]}</span>
                  <span className="text-brand-cyan">{stat.suffix}</span>
                </div>
                <div id={`stat-label-box-${stat.id}`} className="font-sans text-[11px] text-gray-500 uppercase tracking-widest mt-1 font-medium group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
