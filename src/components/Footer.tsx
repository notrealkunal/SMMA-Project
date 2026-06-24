import React from "react";
import { Sparkles, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

interface FooterProps {
  onServicesClick: () => void;
  onProcessClick: () => void;
  onPortfolioClick: () => void;
  onPricingClick: () => void;
}

export default function Footer({
  onServicesClick,
  onProcessClick,
  onPortfolioClick,
  onPricingClick
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-[#020202] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Col (Col 4) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToTop}>
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue p-[1px]">
                <div className="flex items-center justify-center w-full h-full bg-dark-bg rounded-full">
                  <Sparkles className="w-4 h-4 text-brand-purple" />
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                PromoWorks<span className="text-brand-purple">.</span>
              </span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
              High-growth creative acquisition studio engineering platform-native traction and compounding revenues for venture-backed startups and SaaS brands.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href="#twitter"
                className="p-2.5 rounded-full bg-white/3 border border-white/5 text-gray-500 hover:text-white hover:border-white/15 transition-all duration-300 hover:scale-105"
                aria-label="X Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                className="p-2.5 rounded-full bg-white/3 border border-white/5 text-gray-500 hover:text-white hover:border-white/15 transition-all duration-300 hover:scale-105"
                aria-label="Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                className="p-2.5 rounded-full bg-white/3 border border-white/5 text-gray-500 hover:text-white hover:border-white/15 transition-all duration-300 hover:scale-105"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest">
              Growth Links
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-gray-500 font-light">
              <li>
                <button onClick={onServicesClick} className="hover:text-white transition-colors cursor-pointer text-left">
                  Growth Channels
                </button>
              </li>
              <li>
                <button onClick={onProcessClick} className="hover:text-white transition-colors cursor-pointer text-left">
                  Our Methodology
                </button>
              </li>
              <li>
                <button onClick={onPortfolioClick} className="hover:text-white transition-colors cursor-pointer text-left">
                  Client Case Studies
                </button>
              </li>
              <li>
                <button onClick={onPricingClick} className="hover:text-white transition-colors cursor-pointer text-left">
                  Predictable Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick links Col (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest">
              Expertise Core
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-gray-500 font-light">
              <li>Reddit Seeding</li>
              <li>X Narrative Campaigns</li>
              <li>TikTok Spark Growth</li>
              <li>Instagram Aesthetic Scaling</li>
              <li>SEO Topical Coverage</li>
            </ul>
          </div>

          {/* Contact Details (Col 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest">
              Direct Contact
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-500 font-light">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-purple shrink-0" />
                <span className="truncate">partners@promoworks.co</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>+1 (415) 801-4422</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Row Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 gap-6">
          <p className="font-sans text-xs text-gray-600 font-light text-center sm:text-left">
            &copy; {currentYear} PromoWorks Inc. All rights reserved. Made for high-performance brands.
          </p>
          
          <button
            onClick={handleBackToTop}
            className="group px-4.5 py-2 rounded-full bg-white/3 hover:bg-white/5 border border-white/5 hover:border-white/10 text-xs font-mono text-gray-400 hover:text-white flex items-center gap-2 cursor-pointer transition-all duration-300"
          >
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
