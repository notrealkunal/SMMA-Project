import React from "react";
import { motion } from "motion/react";
import { processSteps } from "../data";
import { Sparkles, Compass, Lightbulb, Send, BarChart2 } from "lucide-react";

const stepIcons = [Compass, Lightbulb, Send, BarChart2];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { height: "0%" },
    visible: {
      height: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const itemVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  });

  return (
    <section id="process-section" className="py-24 relative overflow-hidden bg-dark-bg/50">
      {/* Background glow effects */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
            How We Execute
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6"
          >
            Our Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink">
              Methodology
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed font-light"
          >
            A scientific, feedback-driven blueprint refined across hundreds of campaigns. No guesswork, no delays—just pure high-tempo scaling.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Connecting Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-12 bottom-12 w-[2px] bg-white/5">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full bg-gradient-to-b from-brand-blue via-brand-purple to-brand-pink origin-top"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-16 md:gap-20"
          >
            {processSteps.map((step, idx) => {
              const IconComponent = stepIcons[idx];
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants(idx)}
                  className={`flex flex-col md:flex-row relative ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left Side (or Right Side depending on parity) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"}`}>
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 mb-4 text-brand-purple">
                      <IconComponent className="w-5 h-5 text-brand-blue" />
                    </div>
                    
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed font-light max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-1.5 flex items-center justify-center z-20">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-dark-bg border border-white/10 group-hover:border-brand-purple transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple animate-pulse" />
                      {/* Step Number with Glow */}
                      <span className="absolute -top-6 text-[10px] font-mono text-brand-blue font-bold tracking-widest text-glow-blue">
                        PHASE {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Right Side Empty space for layout balance */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
