import React from "react";
import { motion } from "motion/react";
import { comparisonData } from "../data";
import { Check, X, Sparkles, HelpCircle } from "lucide-react";

export default function Comparison() {
  return (
    <section id="comparison-section" className="py-24 relative overflow-hidden bg-dark-bg/40">
      {/* Decorative gradients */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
            The Studio Advantage
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6">
            Why High-Growth Startups{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Choose PromoWorks
            </span>
          </h2>
          
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            We are built to move at the speed of modern internet culture. No bloated teams, no vanity metrics—just continuous compounding momentum.
          </p>
        </div>

        {/* Modern Comparison Table / Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl glass-card overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Table Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center bg-white/2 border-b border-white/5 p-6 font-display font-bold text-sm text-gray-400 uppercase tracking-widest">
            <div className="md:col-span-4 text-left">STRATEGY MATRIX</div>
            <div className="md:col-span-4 mt-4 md:mt-0 text-left md:text-center text-brand-purple flex items-center justify-start md:justify-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-purple" /> PROMOWORKS
            </div>
            <div className="md:col-span-4 mt-2 md:mt-0 text-left md:text-right text-gray-500">TRADITIONAL AGENCY</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-white/1 transition-all duration-200 gap-4 md:gap-0"
              >
                {/* Feature Column */}
                <div className="md:col-span-4 text-left font-display font-medium text-white text-base">
                  {row.feature}
                </div>

                {/* Aura Advantage Column */}
                <div className="md:col-span-4 text-left md:text-center md:px-4 bg-brand-purple/5 border border-brand-purple/20 md:border-0 rounded-xl p-4 md:p-0">
                  <div className="flex flex-col md:items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 font-sans font-medium text-sm text-gray-200">
                      <div className="p-0.5 rounded-full bg-brand-purple/20 text-brand-purple">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      {row.agency.text}
                    </span>
                  </div>
                </div>

                {/* Traditional Agency Column */}
                <div className="md:col-span-4 text-left md:text-right md:pl-4 opacity-75">
                  <div className="flex flex-col md:items-end justify-center gap-2">
                    <span className="inline-flex items-center md:flex-row-reverse gap-1.5 font-sans text-sm text-gray-400 font-light">
                      <div className="p-0.5 rounded-full bg-red-500/10 text-red-400">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      {row.traditional.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
