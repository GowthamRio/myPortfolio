import { useState } from "react";
import { Sparkles, Layers, Sliders, Play, Code2, Zap, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS } from "../data";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Frontend" | "Angular Expertise" | "Backend Knowledge" | "Tools">("All");
  const [activeSignalPlayground, setActiveSignalPlayground] = useState<"signal" | "rxjs" | "legacy">("signal");
  
  // Simulated reactive state for playground
  const [counterVal, setCounterVal] = useState(1);
  const [multiplier, setMultiplier] = useState(10);

  const categories = ["All", "Frontend", "Angular Expertise", "Backend Knowledge", "Tools"] as const;

  const filteredSkills = selectedCategory === "All" 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden bg-white/[0.01]">
      {/* Background Accent */}
      <div id="skills-bg-glow" className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-purple-glow blur-[120px] pointer-events-none" />

      <div id="skills-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div id="skills-header" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div id="skills-subtitle-box" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Expertise Spectrum</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Elite Technical Arsenal
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            An overview of frameworks, architecture concepts, and technologies honed over years of development.
          </p>
        </div>

        {/* Filter Categories */}
        <div id="skills-categories-row" className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`skill-cat-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-brand-cyan to-brand-blue border-transparent text-[#050505] shadow-lg shadow-brand-cyan/15 font-bold"
                  : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-5 rounded-2xl border border-white/5 relative group overflow-hidden"
              >
                {/* Neon hover border accent */}
                <div id={`skill-glowing-glow-${index}`} className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-blue w-0 group-hover:w-full transition-all duration-500" />
                
                <div id={`skill-label-row-${index}`} className="flex items-center justify-between mb-3">
                  <span className="font-sans font-semibold text-white text-sm group-hover:text-brand-cyan transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>

                {/* Animated Progress bar */}
                <div id={`skill-bar-outer-${index}`} className="space-y-2">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      id={`skill-bar-inner-${index}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span>PROFICIENCY</span>
                    <span className="text-brand-cyan font-bold">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Angular Concept Architecture Interactive Playground */}
        <div id="skills-playground-box" className="mt-20 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div id="playground-glowing-blob" className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-brand-cyan-glow blur-[80px] pointer-events-none" />

          <div id="playground-header-flex" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div id="playground-pitch" className="lg:col-span-5 space-y-4">
              <div id="playground-tag" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/20 text-[10px] font-mono text-brand-purple tracking-widest uppercase font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                <span>Angular Architecture Demo</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Interactive State Engine
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                As a Senior Developer, I avoid reactive leak traps. Toggle the tabs to see how modern <strong className="text-brand-cyan font-medium">Angular Signals</strong> solve the over-rendering and memory leaks present in legacy NgModules or nested RxJS subscribers.
              </p>

              {/* Selector Tabs */}
              <div id="playground-tabs" className="flex flex-col gap-2 pt-2">
                <button
                  id="tab-signal-btn"
                  onClick={() => setActiveSignalPlayground("signal")}
                  className={`px-4 py-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all border ${
                    activeSignalPlayground === "signal"
                      ? "bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan"
                      : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" />
                    1. Modern Signals (Angular v16+)
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/5">0 leaks</span>
                </button>

                <button
                  id="tab-rxjs-btn"
                  onClick={() => setActiveSignalPlayground("rxjs")}
                  className={`px-4 py-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all border ${
                    activeSignalPlayground === "rxjs"
                      ? "bg-brand-purple/10 border-brand-purple/30 text-brand-purple"
                      : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                    2. RxJS Declarative Pipelines
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/5">Pipe logic</span>
                </button>

                <button
                  id="tab-legacy-btn"
                  onClick={() => setActiveSignalPlayground("legacy")}
                  className={`px-4 py-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all border ${
                    activeSignalPlayground === "legacy"
                      ? "bg-red-500/10 border-red-500/30 text-red-400"
                      : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    3. Legacy NgModules / AngularJS
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/5">Boilerplate</span>
                </button>
              </div>
            </div>

            {/* Interactive Demonstration Panel */}
            <div id="playground-display" className="lg:col-span-7 p-6 rounded-2xl bg-[#09090d]/80 border border-white/5">
              <div id="playground-display-header" className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase">Interactive State Sandbox</span>
              </div>

              {/* Core interactive counter simulation */}
              <div id="playground-interactive-body" className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 mb-4">
                <div id="interactive-controls" className="space-y-2">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Simulation Inputs</span>
                  <div className="flex items-center gap-2">
                    <button
                      id="sim-dec-btn"
                      onClick={() => setCounterVal(Math.max(1, counterVal - 1))}
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded font-mono text-sm cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-white px-4 text-sm">{counterVal}</span>
                    <button
                      id="sim-inc-btn"
                      onClick={() => setCounterVal(counterVal + 1)}
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded font-mono text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Multiplier:</span>
                    <select
                      id="sim-multiplier-select"
                      value={multiplier}
                      onChange={(e) => setMultiplier(Number(e.target.value))}
                      className="bg-white/5 text-gray-300 text-xs rounded px-2 py-0.5 border border-white/5 cursor-pointer focus:outline-none"
                    >
                      <option value="10">10x</option>
                      <option value="100">100x</option>
                      <option value="1000">1000x</option>
                    </select>
                  </div>
                </div>

                <div id="interactive-results" className="text-right shrink-0">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">Computed State</span>
                  <span className="font-display font-black text-3xl text-brand-cyan block">
                    {(counterVal * multiplier).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">⚡ Glitch-Free Re-rendering</span>
                </div>
              </div>

              {/* Dynamic Codebox Output based on Tab selection */}
              <div id="playground-display-code" className="rounded-xl overflow-hidden border border-white/5 font-mono text-xs text-gray-300">
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                  <span>architecture-snippet.ts</span>
                  <span className="text-brand-cyan uppercase">TypeScript</span>
                </div>
                
                <div className="p-4 bg-black/40 overflow-x-auto leading-relaxed max-h-[160px]">
                  {activeSignalPlayground === "signal" && (
                    <pre className="text-cyan-400">
{`// Modern Declarative Signals (Glitch-free / OnPush ready)
import { signal, computed } from '@angular/core';

export class StatsComponent {
  // Fine-grained state signals
  readonly count = signal(${counterVal});
  readonly mult = signal(${multiplier});

  // Automatically computed reactive dependency
  readonly total = computed(() => this.count() * this.mult());
  
  increment() {
    this.count.update(v => v + 1); // Triggers visual update ONLY
  }
}`}
                    </pre>
                  )}

                  {activeSignalPlayground === "rxjs" && (
                    <pre className="text-purple-400">
{`// RxJS Declarative pipelines (Subscription managed)
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export class StatsComponent {
  private readonly count$ = new BehaviorSubject(${counterVal});
  private readonly mult$ = new BehaviorSubject(${multiplier});

  // Multi-stream combination
  readonly total$ = combineLatest([this.count$, this.mult$]).pipe(
    map(([count, mult]) => count * mult)
  );

  // MUST remember to unsubscribe to avoid leaks!
}`}
                    </pre>
                  )}

                  {activeSignalPlayground === "legacy" && (
                    <pre className="text-red-400">
{`// Legacy boilerplate-heavy NgModule configuration
@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, LegacyFormsModule],
  exports: [StatsComponent]
})
export class StatsModule {
  // Heavy rendering cycle triggered via zoneJS on ANY action
  // No fine-grained updates, slow and laggy on large pages
}`}
                    </pre>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
