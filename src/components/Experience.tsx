import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Award, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import { EXPERIENCES } from "../data";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-[#020205]">
      {/* Decorative timeline glowing background line */}
      <div id="timeline-top-glow" className="absolute top-10 left-10 w-[200px] h-[200px] rounded-full bg-brand-blue-glow blur-[100px] pointer-events-none" />

      <div id="experience-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="experience-header" className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div id="experience-subtitle-box" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan tracking-widest uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>Employment Timeline</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Professional Odyssey
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Chronological log of elite frontend engineering and team leadership.
          </p>
        </div>

        {/* Timeline Layout */}
        <div id="experience-timeline" className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div id="timeline-axis" className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent pointer-events-none hidden md:block" />

          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedIndex === index;

            return (
              <div
                id={`timeline-node-wrapper-${index}`}
                key={exp.project + exp.period}
                className="relative mb-12 md:mb-16 last:mb-0"
              >
                {/* Central node ball icon */}
                <div id={`timeline-node-${index}`} className="absolute left-4 md:left-1/2 -translate-x-[9px] md:-translate-x-2.5 top-1.5 z-20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-black border-2 border-brand-cyan flex items-center justify-center shadow-lg shadow-brand-cyan/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  </div>
                </div>

                {/* Timeline Card */}
                <div id={`timeline-card-col-${index}`} className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                  <motion.div
                    id={`exp-card-${index}`}
                    initial={{ opacity: 0, x: isLeft ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`glass-card p-6 rounded-2xl border transition-all ${
                      isExpanded 
                        ? "border-brand-cyan/30 shadow-lg shadow-brand-cyan/5 bg-white/[0.03]" 
                        : "border-white/5 hover:border-white/10"
                    }`}
                  >
                    {/* Period Banner & Logo Accent */}
                    <div id={`exp-meta-row-${index}`} className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] text-brand-cyan font-semibold tracking-wider bg-brand-cyan/10 px-2.5 py-1 rounded-full uppercase">
                        {exp.period}
                      </span>
                      <span className="font-mono text-[10px] text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Job Title & Company */}
                    <div id={`exp-title-box-${index}`} className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-white leading-tight">
                        {exp.role}
                      </h3>
                      <p className="font-sans font-medium text-xs text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                        {exp.company}
                      </p>
                    </div>

                    {/* Project Specific label */}
                    {exp.project && (
                      <div id={`exp-project-badge-${index}`} className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-gray-400">
                        <FolderGit2 className="w-3.5 h-3.5 text-brand-purple" />
                        <span className="text-gray-300 font-medium">Project: {exp.project}</span>
                      </div>
                    )}

                    {/* Brief Summary */}
                    <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">
                      {exp.description}
                    </p>

                    {/* Expandable Responsibility list */}
                    <div id={`exp-responsibility-wrapper-${index}`} className="mt-4">
                      <button
                        id={`exp-collapse-btn-${index}`}
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="text-brand-cyan font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer hover:text-white transition-colors"
                      >
                        <span>{isExpanded ? "Hide Responsibilities" : "View Responsibilities"}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                      </button>

                      {isExpanded && (
                        <motion.ul
                          id={`exp-responsibilities-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pl-2 space-y-2 text-xs text-gray-300 border-l border-white/10 list-none font-light leading-relaxed"
                        >
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="relative pl-4 flex items-start gap-1">
                              <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>

                    {/* Tech Badges Used */}
                    <div id={`exp-tech-badges-${index}`} className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-white/5 text-gray-400 rounded text-[9px] font-mono tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
