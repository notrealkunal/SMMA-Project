import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqData, FAQItem } from "../data";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1"); // Open first by default

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="faq-section" className="py-24 relative overflow-hidden bg-dark-bg/40">
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
            Answering Inquiries
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Questions
            </span>
          </h2>
          
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            Everything you need to know about our growth frameworks, contract policies, and channel strategy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item: FAQItem) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer transition-colors hover:bg-white/1"
                >
                  <div className="flex items-center gap-4">
                    {/* Category Label */}
                    <span className="hidden sm:inline-block px-2 py-1 rounded bg-white/5 text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                      {item.category}
                    </span>
                    <span className="font-display font-semibold text-white text-base sm:text-lg">
                      {item.question}
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-brand-purple" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Expandable Content with Framer Motion height animation */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-white/3 pt-4">
                        <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
