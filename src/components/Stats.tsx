import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Activity, DollarSign, Users, Award } from "lucide-react";

interface StatItem {
  id: string;
  targetValue: number;
  prefix: string;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats: StatItem[] = [
    {
      id: "stat-revenue",
      targetValue: 142,
      prefix: "$",
      suffix: "M+",
      label: "Client Revenue Generated",
      sublabel: "Directly attributed to our strategic funnels",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "stat-campaigns",
      targetValue: 1200,
      prefix: "",
      suffix: "+",
      label: "Campaigns Deployed",
      sublabel: "Across Reddit, X, TikTok, and Instagram",
      icon: Award,
      color: "from-brand-purple to-indigo-500",
    },
    {
      id: "stat-growth",
      targetValue: 412,
      prefix: "",
      suffix: "%",
      label: "Average Account Growth",
      sublabel: "Compounding quarterly conversion scaling",
      icon: Activity,
      color: "from-pink-500 to-brand-purple",
    },
    {
      id: "stat-reach",
      targetValue: 850,
      prefix: "",
      suffix: "M+",
      label: "Aggregated Audience Reach",
      sublabel: "Exclusive vetted creator networks",
      icon: Users,
      color: "from-cyan-500 to-brand-blue",
    },
  ];

  return (
    <section id="stats-section" className="py-24 relative overflow-hidden bg-dark-bg/40">
      {/* Decorative ambient gradients */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.id}
              stat={stat}
              triggerCount={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ stat, triggerCount }: { stat: StatItem; triggerCount: boolean; key?: string }) {
  const [value, setValue] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!triggerCount) return;

    let start = 0;
    const end = stat.targetValue;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function - easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentValue = Math.floor(easedProgress * end);

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(animate);
  }, [triggerCount, stat.targetValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl glass-card p-8 border border-white/10 transition-all duration-300 overflow-hidden group flex flex-col justify-between min-h-[220px]"
    >
      {/* Accent Corner Glow */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 rounded-full`} />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-tr ${stat.color} bg-opacity-10 text-white flex items-center justify-center shadow-lg`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          
          <div className="h-1.5 w-1.5 rounded-full bg-brand-purple animate-ping" />
        </div>

        {/* Counter Metric */}
        <div className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white mb-2">
          {stat.prefix}
          {value.toLocaleString()}
          {stat.suffix}
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold text-sm text-gray-200 uppercase tracking-widest mb-1.5 group-hover:text-brand-purple transition-colors duration-300">
          {stat.label}
        </h4>
        <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
          {stat.sublabel}
        </p>
      </div>
    </motion.div>
  );
}
