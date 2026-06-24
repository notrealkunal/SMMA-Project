import React from "react";
import { Sparkles, Activity, Layers, Zap, Flame, Compass, Target, Sun } from "lucide-react";

export default function LogosMarquee() {
  const logos = [
    { name: "VOLT TECH", icon: Zap, color: "text-blue-400" },
    { name: "NEXUS AI", icon: Sparkles, color: "text-purple-400" },
    { name: "ZEPHYR CO", icon: Compass, color: "text-cyan-400" },
    { name: "KINETIC MEDIA", icon: Activity, color: "text-pink-400" },
    { name: "APEX GLOBAL", icon: Target, color: "text-emerald-400" },
    { name: "CORE PROTOCOL", icon: Layers, color: "text-indigo-400" },
    { name: "FLUID CAPITAL", icon: Sun, color: "text-rose-400" },
    { name: "IGNITE LABS", icon: Flame, color: "text-amber-400" },
  ];

  // Double the array to ensure perfect seamless loop
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section id="marquee-section" className="py-12 bg-dark-bg/80 border-y border-white/5 relative overflow-hidden">
      {/* Visual background fade overlay for left and right edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="font-mono text-[10px] sm:text-xs tracking-widest text-gray-500 uppercase">
          TRUSTED BY ACCELERATED STARTUPS & HIGH-PERFORMANCE BRANDS
        </p>
      </div>

      <div className="flex overflow-hidden relative w-full py-4">
        <div className="animate-infinite-marquee flex items-center gap-12 sm:gap-20">
          {marqueeItems.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 group cursor-pointer"
              >
                <div className={`p-2 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/10 ${logo.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-display font-semibold text-sm sm:text-base tracking-widest text-gray-400 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
