import { useState } from "react";
import { FolderGit2, Eye, Github, Sparkles, AlertCircle, RefreshCw, Layers, CheckCircle2, FileCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Enterprise" | "Dashboard" | "Workflow">("All");
  const [activeProject, setActiveProject] = useState<string | null>(null);

  // Patented BPMN simulation state
  const [bpmnVersion, setBpmnVersion] = useState<"A" | "B" | "diff">("diff");
  const [selectedBpmnNode, setSelectedBpmnNode] = useState<string | null>("node-3");

  const categories = ["All", "Enterprise", "Dashboard", "Workflow"] as const;

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  // BPMN Simulator nodes configuration
  const bpmnNodes = [
    { id: "node-1", label: "Client Request Init", state: "unchanged", type: "start" },
    { id: "node-2", label: "Enforce JWT Token Auth", state: "unchanged", type: "process" },
    { id: "node-3", label: "PATENTED: XML Validation check", state: "modified", desc: "Optimized XML parse algorithms in version B reducing audit times by 70%.", type: "process" },
    { id: "node-4", label: "Check OnPush Component State", state: "added", desc: "Added in version B to enforce fine-grained Angular state checks.", type: "process" },
    { id: "node-5", label: "Deploy to Sandbox", state: "removed", desc: "Deprecated in version B. Sub-flows consolidated directly.", type: "process" },
    { id: "node-6", label: "Banking Gateway Ingress", state: "unchanged", type: "end" }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Aurora glow */}
      <div id="projects-bg-blur" className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-cyan-glow blur-[140px] pointer-events-none" />

      <div id="projects-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="projects-header" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div id="projects-subtitle-box" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-mono text-brand-blue tracking-widest uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Deliverables</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Enterprise Masterpieces
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Real-world enterprise systems deployed to secure, multi-tenant banking and university client modules.
          </p>
        </div>

        {/* Filter Categories Row */}
        <div id="projects-categories" className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`project-cat-btn-${cat.toLowerCase()}`}
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

        {/* Projects Cards Grid */}
        <div id="projects-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between group"
              >
                
                {/* Project Image Frame */}
                <div id={`project-image-box-${project.id}`} className="relative aspect-video w-full overflow-hidden bg-black/40 border-b border-white/5">
                  <img
                    id={`project-img-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-750"
                    referrerPolicy="no-referrer"
                  />
                  <div id={`project-overlay-${project.id}`} className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 font-mono text-[9px] font-bold text-brand-cyan bg-black/75 border border-brand-cyan/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Card Content body */}
                <div id={`project-content-${project.id}`} className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Reusable mini-expander details */}
                  <div className="pt-2">
                    <button
                      id={`project-detail-btn-${project.id}`}
                      onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                      className="text-gray-400 hover:text-brand-cyan transition-colors text-[10px] font-mono uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                    >
                      {activeProject === project.id ? "Hide Spec Details" : "View Architecture Specs"}
                    </button>

                    {activeProject === project.id && (
                      <motion.div
                        id={`project-expandable-${project.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 text-xs text-gray-300 font-light leading-relaxed border-t border-white/5 pt-3 space-y-2"
                      >
                        <p>{project.longDescription}</p>
                        <div className="space-y-1 pl-1">
                          <p className="font-semibold text-white font-sans text-[11px] uppercase tracking-wider">Core Features:</p>
                          {project.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5 text-[11px]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Tech stack badges */}
                  <div id={`project-tech-${project.id}`} className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-500 font-mono tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Patent Demonstration Interactive Simulation block */}
        <div id="bpmn-simulator-card" className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-[#07070a]/90">
          <div id="bpmn-decor-blur" className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-brand-purple-glow blur-[100px] pointer-events-none" />

          <div id="bpmn-flex-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div id="bpmn-instructions" className="lg:col-span-5 space-y-4">
              <div id="bpmn-award-tag" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/20 text-[10px] font-mono text-brand-purple tracking-widest uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Patented BPMN R&D Integration</span>
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                BPMN Flow Compare Tool
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                This is a live representation of Gowtham's patented consolidated XML workflow comparer. Change the version state below to witness how the diff engine highlights step transformations immediately on the banking canvas!
              </p>

              {/* Version Selector Buttons */}
              <div id="bpmn-selectors" className="flex items-center gap-2 pt-2">
                <button
                  id="bpmn-v-a-btn"
                  onClick={() => { setBpmnVersion("A"); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all border cursor-pointer ${
                    bpmnVersion === "A"
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white/5 border-transparent text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Schema A
                </button>
                <button
                  id="bpmn-v-b-btn"
                  onClick={() => { setBpmnVersion("B"); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all border cursor-pointer ${
                    bpmnVersion === "B"
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white/5 border-transparent text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Schema B
                </button>
                <button
                  id="bpmn-v-diff-btn"
                  onClick={() => { setBpmnVersion("diff"); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all border cursor-pointer ${
                    bpmnVersion === "diff"
                      ? "bg-brand-cyan/15 border-brand-cyan/30 text-brand-cyan"
                      : "bg-white/5 border-transparent text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Diff Compare Engine
                </button>
              </div>

              {/* Selected Node Inspector detail display */}
              {selectedBpmnNode && (
                <div id="node-inspector-box" className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 mt-4 animate-fade-in">
                  <div className="flex items-center gap-1.5">
                    <FileCode className="w-4 h-4 text-brand-cyan" />
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">XML Node Inspector</span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    {bpmnNodes.find(n => n.id === selectedBpmnNode)?.label}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {bpmnNodes.find(n => n.id === selectedBpmnNode)?.desc || "This step remains unchanged between versions. Stable execution path ensured."}
                  </p>
                  <div className="flex items-center justify-between text-[9px] font-mono pt-1">
                    <span className="text-gray-500">Node Ref ID</span>
                    <span className="text-brand-cyan font-bold uppercase">{selectedBpmnNode}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Simulated Interactive Diagram Drawing Canvas */}
            <div id="bpmn-canvas-col" className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/5 relative min-h-[300px] flex flex-col justify-between">
              <div className="flex justify-between items-center pb-3 border-b border-white/5 text-[10px] font-mono text-gray-500 mb-6">
                <span>INTERACTIVE CANVAS</span>
                <span className="text-emerald-400">ACTIVE COMPILER READY</span>
              </div>

              {/* Graphical Nodes List */}
              <div id="bpmn-graphic-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {bpmnNodes.map((node) => {
                  // Determine node visibility based on version selected
                  if (bpmnVersion === "A" && node.state === "added") return null;
                  if (bpmnVersion === "B" && node.state === "removed") return null;

                  let borderClass = "border-white/10 hover:border-white/20";
                  let stateLabel = "";
                  let stateLabelColor = "text-gray-500";

                  if (bpmnVersion === "diff") {
                    if (node.state === "added") {
                      borderClass = "border-emerald-500/40 bg-emerald-950/20";
                      stateLabel = "added";
                      stateLabelColor = "text-emerald-400";
                    } else if (node.state === "removed") {
                      borderClass = "border-red-500/40 bg-red-950/20 line-through opacity-60";
                      stateLabel = "removed";
                      stateLabelColor = "text-red-400";
                    } else if (node.state === "modified") {
                      borderClass = "border-amber-500/40 bg-amber-950/20";
                      stateLabel = "modified";
                      stateLabelColor = "text-amber-400";
                    }
                  }

                  const isCurrentlySelected = selectedBpmnNode === node.id;

                  return (
                    <div
                      id={`bpmn-element-${node.id}`}
                      key={node.id}
                      onClick={() => setSelectedBpmnNode(node.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${borderClass} ${
                        isCurrentlySelected ? "ring-1 ring-brand-cyan bg-[#09090d]" : "bg-[#050505]/65"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-sans font-semibold text-xs text-white">
                          {node.label}
                        </span>
                        {stateLabel && (
                          <span className={`font-mono text-[8px] uppercase font-bold tracking-wider ${stateLabelColor}`}>
                            {stateLabel}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-gray-500 mt-2 font-mono">
                        <span>{node.type.toUpperCase()} STEP</span>
                        <span className={isCurrentlySelected ? "text-brand-cyan" : "text-gray-500"}>
                          {isCurrentlySelected ? "ACTIVE" : "CLICK"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status and instruction tip */}
              <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-500 border-t border-white/5 pt-4">
                <AlertCircle className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Tip: Click any node block to inspect its XML metadata schema.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
