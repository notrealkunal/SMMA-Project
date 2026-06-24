import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Shield, Award, Users, Zap } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onContactClick, onServicesClick }: HeroProps) {
  // Animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const glowVariants = {
    animate1: {
      scale: [1, 1.2, 1],
      x: [0, 50, 0],
      y: [0, -30, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate2: {
      scale: [1, 1.3, 1],
      x: [0, -40, 0],
      y: [0, 50, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-dark-bg"
    >
      {/* Mesh gradients & Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-full w-full -z-10 overflow-hidden">
        {/* Glow Sphere 1 */}
        <motion.div
          variants={glowVariants}
          animate="animate1"
          className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-purple/20 blur-[100px]"
        />
        {/* Glow Sphere 2 */}
        <motion.div
          variants={glowVariants}
          animate="animate2"
          className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-blue/15 blur-[120px]"
        />
        {/* Glow Sphere 3 */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] left-[45%] -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-brand-pink/10 blur-[90px]"
        />
        {/* Fine grid overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
      </div>

      {/* Floating particles - lightweight interactive visual elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-35"
            style={{
              top: `${15 + i * 12}%`,
              left: `${10 + (i * 17) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider mb-8 w-fit shadow-[0_0_15px_rgba(99,102,241,0.1)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
            Empowering Next-Gen Brands
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7.5xl leading-[0.95] tracking-tight text-white mb-6 max-w-4xl"
          >
            We Engineer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue relative">
              PromoWorks
            </span>{" "}
            for Elite Brands
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            A high-growth creative acquisition studio scaling brands across{" "}
            <span className="text-white font-semibold">Reddit, X, TikTok, Instagram</span>, and beyond. We skip typical vanity views to focus purely on conversion volume and compounding revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.35)] text-white w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={onServicesClick}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-gray-300 hover:text-white w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Growth Channels
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-y-6 gap-x-12 md:gap-x-16 text-gray-400 text-sm font-sans"
          >
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Zap className="w-4 h-4 text-brand-purple" />
              <span>412% Average Client Growth</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Users className="w-4 h-4 text-brand-pink" />
              <span>850M+ Combined Reach</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Award className="w-4 h-4 text-brand-blue" />
              <span>100% Native Authenticity Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
