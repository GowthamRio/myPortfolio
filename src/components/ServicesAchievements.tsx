import { useState } from "react";
import { Award, Check, Zap, Cpu, Server, Layout, LineChart, ShieldCheck, PhoneCall, Sparkles, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { ACHIEVEMENTS, CERTIFICATIONS, SERVICES } from "../data";

export default function ServicesAchievements() {
  const [activeTab, setActiveTab] = useState<"services" | "achievements">("services");

  // Icon mapping helper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-brand-cyan" />;
      case "BarChart":
        return <LineChart className="w-5 h-5 text-brand-blue" />;
      case "GitBranch":
        return <Cpu className="w-5 h-5 text-brand-purple" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "ShieldAlert":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "MonitorMobile":
      default:
        return <Server className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden bg-[#040409]">
      {/* Background glow overlay */}
      <div id="services-blur-glow" className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-brand-purple-glow blur-[120px] pointer-events-none" />

      <div id="services-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toggle navigation panel */}
        <div id="services-tabs-row" className="flex items-center justify-center gap-4 mb-16">
          <button
            id="tab-services-btn"
            onClick={() => setActiveTab("services")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all border cursor-pointer ${
              activeTab === "services"
                ? "bg-gradient-to-r from-brand-cyan to-brand-blue border-transparent text-[#050505] shadow-lg shadow-brand-cyan/15"
                : "bg-white/5 border-white/5 text-gray-400 hover:text-white"
            }`}
          >
            Services Offered
          </button>
          <button
            id="tab-achievements-btn"
            onClick={() => setActiveTab("achievements")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all border cursor-pointer ${
              activeTab === "achievements"
                ? "bg-gradient-to-r from-brand-cyan to-brand-blue border-transparent text-[#050505] shadow-lg shadow-brand-cyan/15"
                : "bg-white/5 border-white/5 text-gray-400 hover:text-white"
            }`}
          >
            Key Achievements
          </button>
        </div>

        {/* Content displays based on selection */}
        {activeTab === "services" ? (
          <div id="services-grid-wrapper" className="space-y-12">
            <div id="services-header" className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Core Architectural Offerings
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-light">
                Tailored consulting and frontend engineering services for enterprise software solutions.
              </p>
            </div>

            <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((serv, sIdx) => (
                <motion.div
                  id={`service-card-${sIdx}`}
                  key={serv.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sIdx * 0.05 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-brand-cyan/20 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div id={`service-icon-box-${sIdx}`} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-cyan/25 transition-colors">
                      {getServiceIcon(serv.icon)}
                    </div>
                    <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-cyan transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {serv.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Quality Assured</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div id="achievements-section-wrapper" className="space-y-12">
            <div id="achievements-header" className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Spotlights & Milestones
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-light">
                Key performance multipliers and official accolades from my senior engineering tenure.
              </p>
            </div>

            <div id="achievements-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ACHIEVEMENTS.map((ach, aIdx) => (
                <motion.div
                  id={`achievement-card-${aIdx}`}
                  key={ach.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: aIdx * 0.05 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 text-center flex flex-col justify-between hover:border-brand-cyan/20 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="font-display font-black text-3xl text-brand-cyan group-hover:scale-105 transition-transform">
                      {ach.metric}
                    </div>
                    <h3 className="font-sans font-bold text-sm text-white">
                      {ach.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {ach.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center justify-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Proven Success Metric</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Block */}
        <div id="certifications-block" className="mt-20 pt-12 border-t border-white/5">
          <div id="certs-header-box" className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-brand-cyan" />
            <h3 className="font-display font-bold text-lg text-white">Verified Credentials</h3>
          </div>

          <div id="certs-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, cIdx) => (
              <motion.div
                id={`cert-card-${cIdx}`}
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.05 }}
                className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between hover:border-brand-cyan/10 transition-all hover:bg-white/[0.02] group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500">
                    <span>ID CREDENTIAL</span>
                    <span className="text-brand-purple font-bold">{cert.year}</span>
                  </div>
                  <h4 className="font-sans font-bold text-xs text-white group-hover:text-brand-cyan transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 text-[11px] leading-relaxed font-light">
                    {cert.issuer}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 mt-3 flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Safe</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
