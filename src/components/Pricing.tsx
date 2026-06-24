import React, { useState } from "react";
import { motion } from "motion/react";
import { pricingPlans, PricingPlan } from "../data";
import { Check, Sparkles, Shield, HelpCircle } from "lucide-react";

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

export default function Pricing({ onPlanSelect }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  // Calculate prices based on period (20% discount for yearly)
  const getPrice = (monthlyPrice: string) => {
    const numeric = parseInt(monthlyPrice.replace(",", ""), 10);
    if (billingPeriod === "yearly") {
      const discounted = Math.floor(numeric * 0.8);
      return discounted.toLocaleString();
    }
    return monthlyPrice;
  };

  return (
    <section id="pricing-section" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-brand-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            Transparent Investment
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6">
            Predictable Retainers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue">
              Aggressive Growth.
            </span>
          </h2>
          
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed mb-10 font-light">
            No long commitments. Cancel or pause anytime. Select the plan that aligns with your current milestone target.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/5 p-1.5 rounded-full border border-white/5 relative">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-bold transition-all duration-300 cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                billingPeriod === "yearly"
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual Contract
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-[10px] text-emerald-400 font-bold font-mono">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {pricingPlans.map((plan: PricingPlan) => {
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative rounded-3xl p-8 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  plan.popular
                    ? "glass-card border border-brand-purple/40 shadow-[0_0_40px_rgba(99,102,241,0.25)] lg:-translate-y-4 scale-[1.01]"
                    : "glass-card border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular Badge Glow */}
                {plan.popular && plan.badge && (
                  <div className="absolute top-5 right-5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-purple text-white text-[10px] font-mono font-medium uppercase tracking-widest shadow-md">
                    <Sparkles className="w-3 h-3 text-white" />
                    {plan.badge}
                  </div>
                )}

                {/* Content Details */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="font-sans text-xs text-gray-400 leading-relaxed min-h-[50px] mb-6 font-light">
                    {plan.description}
                  </p>

                  {/* Pricing Number */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/5 mb-8">
                    <span className="font-display font-bold text-3xl sm:text-5xl text-white">
                      ${getPrice(plan.price)}
                    </span>
                    <span className="font-sans text-xs text-gray-500">
                      / {billingPeriod === "yearly" ? "mo billed annually" : "month"}
                    </span>
                  </div>

                  {/* Feature Bullets Checklist */}
                  <div className="space-y-4 mb-8">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      WHAT'S INCLUDED
                    </span>
                    <ul className="space-y-3.5 font-sans text-sm text-gray-300 font-light">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`p-0.5 rounded-full mt-0.5 ${plan.popular ? "bg-brand-purple/20 text-brand-purple" : "bg-white/15 text-gray-300"}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Selection CTA Button */}
                <button
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full py-4 rounded-xl font-sans font-bold text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
                      : "bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Small Trust Seal */}
        <div className="mt-16 text-center text-xs text-gray-500 flex flex-wrap justify-center items-center gap-3 font-sans">
          <Shield className="w-4 h-4 text-brand-purple" />
          <span>All packages include initial setup audits, competitor mapping, and continuous Slack communications.</span>
        </div>

      </div>
    </section>
  );
}
