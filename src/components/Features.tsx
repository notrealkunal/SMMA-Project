import React from "react";
import { motion } from "motion/react";
import { Zap, ShieldCheck, Cpu, ArrowRight, MousePointer, Eye, ThumbsUp, MessageCircle } from "lucide-react";

export default function Features() {
  return (
    <section id="features-section" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            Engineered Excellence
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6">
            Our Proprietary{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
              Growth Engine
            </span>
          </h2>
          
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            We operate custom algorithmic scraping engines and performance tracking metrics that typical agencies don't even know exist.
          </p>
        </div>

        {/* Feature 1: Alternating Layout (Mockup Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-28">
          
          {/* Mockup Display Card (Left) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl glass-card p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Card Accent Lights */}
              <div className="absolute top-0 left-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent animate-pulse" />
              
              {/* Simulated UI Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400">
                  reddit_crawler_v4.py
                </div>
              </div>

              {/* Simulated UI Content */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/3 border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                    <span>QUERY: /r/saas AND "analytics recommendation"</span>
                    <span className="text-brand-purple">ACTIVE</span>
                  </div>
                  <p className="text-sm font-sans font-medium text-white">
                    "Looking for a secure, server-side tracking tool with solid conversion mapping..."
                  </p>
                  <div className="flex items-center gap-4 text-xs text-brand-purple font-mono pt-1">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> 840 Reach</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 23 Comments</span>
                  </div>
                </div>

                {/* Floating Simulated Response Panel */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="p-4 rounded-xl bg-gradient-to-r from-brand-purple/10 to-brand-blue/5 border border-brand-purple/20 space-y-2 relative"
                >
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-brand-purple text-[8px] font-mono text-white">
                    <MousePointer className="w-2.5 h-2.5" /> High Context
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    AUTOPILOT_RESPONSE (Karma Scale: 120+)
                  </div>
                  <p className="text-sm font-sans text-gray-200">
                    "Highly recommend checking out DevSync. Built exactly for this. We migrated from legacy cookies and our attribution accuracy rose by 40%..."
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-gray-500 font-mono">
                    <span>SEEDED: 14m ago</span>
                    <span className="text-emerald-400 flex items-center gap-0.5"><ThumbsUp className="w-2.5 h-2.5" /> +42 Upvotes</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Backdrop Glow behind card */}
            <div className="absolute -inset-4 bg-brand-purple/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />
          </div>

          {/* Content (Right) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="p-2 rounded-xl bg-brand-purple/10 border border-brand-purple/20 w-fit">
              <Cpu className="w-6 h-6 text-brand-purple" />
            </div>
            
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Algorithmic Audience Listening & Contextual Seeding
            </h3>
            
            <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              Traditional agencies pay for cold emails or standard banner ads that users ignore. We scan the digital landscape continuously to intercept conversations when intent is highest.
            </p>

            <ul className="space-y-4 font-sans text-sm text-gray-300 font-light">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-brand-purple/20 text-brand-purple mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-medium">Algorithmic Subreddit Scanners:</strong> We listen to thousands of active channels to locate direct buying cues or pain points.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-brand-purple/20 text-brand-purple mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-medium">Platform-Native Tone Matching:</strong> Our content matches exact niche terminology, establishing absolute trust and value on every platform.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Alternating Layout (Content Left, Mockup Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Content (Left) */}
          <div className="lg:col-span-6 space-y-6 order-1">
            <div className="p-2 rounded-xl bg-brand-blue/10 border border-brand-blue/20 w-fit">
              <Zap className="w-6 h-6 text-brand-blue" />
            </div>
            
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Real-Time Performance Dashboards & Visual Attribution
            </h3>
            
            <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              Stop guessing which influencer or subreddit post drove revenue. Our proprietary tracking suite maps conversion routes from initial touch to ultimate conversion.
            </p>

            <ul className="space-y-4 font-sans text-sm text-gray-300 font-light">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-brand-blue/20 text-brand-blue mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-medium">Multitouch Attribution:</strong> See exactly where user touchpoints occur across Reddit, X, and direct search before checking out.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-brand-blue/20 text-brand-blue mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-medium">Live Slack Alerts:</strong> Receive beautiful real-time conversion alerts delivered directly to your company workspace channels.
                </div>
              </li>
            </ul>
          </div>

          {/* Mockup Display Card (Right) */}
          <div className="lg:col-span-6 relative order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl glass-card p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Simulated UI Content */}
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Campaign Conversion Velocity</h4>
                    <span className="text-[10px] font-mono text-gray-500">REALTIME TRACKER (Compounding weekly loop)</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                    +412.8%
                  </span>
                </div>

                {/* Simulated Chart representation */}
                <div className="h-44 flex items-end gap-2.5 pt-4">
                  {[35, 45, 30, 60, 50, 75, 95, 110, 85, 125, 140].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${val * 0.9}px` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05, duration: 0.8 }}
                        className={`w-full rounded-t ${
                          idx === 10
                            ? "bg-gradient-to-t from-brand-purple to-brand-pink shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                            : "bg-white/10 group-hover:bg-white/20 transition-colors"
                        }`}
                      />
                      <span className="text-[8px] font-mono text-gray-600">W{idx + 1}</span>
                    </div>
                  ))}
                </div>

                {/* Tiny Status Bar */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center border-t border-white/5">
                  <div>
                    <span className="block text-[8px] font-mono text-gray-500 uppercase">ATTRIBUTED CTR</span>
                    <span className="font-display font-bold text-white text-sm">8.42%</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-gray-500 uppercase">AVG CLIENT ROI</span>
                    <span className="font-display font-bold text-brand-blue text-sm">18.4x</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-gray-500 uppercase">CAC SAVINGS</span>
                    <span className="font-display font-bold text-brand-pink text-sm">-52.1%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backdrop Glow */}
            <div className="absolute -inset-4 bg-brand-blue/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
