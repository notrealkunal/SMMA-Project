import React, { useState } from "react";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { servicesData, Service } from "../data";

// Helper to resolve icon dynamically
const IconRenderer = ({ iconName, className }: { iconName: string; className: string }) => {
  // Map our custom iconName to Lucide components safely
  let IconComponent = LucideIcons.Flame; // default fallback

  if (iconName === "Twitter") {
    // Lucide doesn't always have Twitter, might be Twitter or X.
    // Let's use Twitter if available, or fall back to Send or Share
    IconComponent = (LucideIcons as any).Twitter || LucideIcons.Send;
  } else if (iconName in LucideIcons) {
    IconComponent = (LucideIcons as any)[iconName];
  }

  return <IconComponent className={className} />;
};

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Parent animation
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section id="services-section" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Light glow accents */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-purple/20 text-brand-purple text-xs font-mono font-medium mb-4 uppercase tracking-widest"
          >
            Omnichannel Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6"
          >
            Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">
              Platform Dominance
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed font-light"
          >
            We don't post and pray. We architect platform-native assets engineered specifically to match the culture, algorithm, and layout of each active acquisition channel.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {servicesData.map((service: Service) => {
            const isHovered = hoveredCard === service.id;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative rounded-3xl glass-card p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden cursor-pointer"
              >
                {/* Glow Overlay behind active card */}
                <div
                  className={`absolute -inset-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl -z-10`}
                />
                
                {/* Border Accent Line */}
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />

                <div className="flex justify-between items-start mb-6">
                  {/* Icon Circle */}
                  <div className={`p-4 rounded-xl bg-gradient-to-tr ${service.color} bg-opacity-10 flex items-center justify-center relative shadow-[0_4px_20px_rgba(0,0,0,0.25)]`}>
                    <IconRenderer iconName={service.iconName} className="w-6 h-6 text-white" />
                  </div>

                  {/* Growth Metric Accent */}
                  <div className="text-right">
                    <span className={`block font-display font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.metric}
                    </span>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      {service.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-brand-purple transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400 group-hover:text-white transition-colors duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
