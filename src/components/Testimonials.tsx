import { Quote, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden bg-[#030307]">
      {/* Decorative top-right glow */}
      <div id="testimonials-blur" className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-brand-cyan-glow blur-[120px] pointer-events-none" />

      <div id="testimonials-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="testimonials-header" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div id="testimonials-subtitle" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-[10px] font-mono text-brand-purple tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Colleague Endorsements</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Client & Teammate Praise
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Real testimonies regarding technical precision, code reusability, and leadership deliverables.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              id={`testimonial-card-${idx}`}
              key={test.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 relative flex flex-col justify-between hover:border-brand-purple/20 transition-all duration-300 group"
            >
              {/* Quote Mark */}
              <div id={`testimonial-quote-icon-${idx}`} className="absolute top-6 right-6 text-white/5 group-hover:text-brand-purple/15 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Text content */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-6 relative z-10">
                "{test.content}"
              </p>

              {/* Author Row */}
              <div id={`testimonial-author-${idx}`} className="flex items-center gap-3 pt-6 border-t border-white/5">
                <img
                  id={`testimonial-avatar-${idx}`}
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans font-bold text-xs text-white group-hover:text-brand-cyan transition-colors">
                    {test.name}
                  </h4>
                  <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">
                    {test.role} at <span className="text-gray-400">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
