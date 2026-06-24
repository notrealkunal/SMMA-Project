import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
  onPricingClick: () => void;
  onServicesClick: () => void;
  onPortfolioClick: () => void;
  onProcessClick: () => void;
}

export default function Navbar({
  onContactClick,
  onPricingClick,
  onServicesClick,
  onPortfolioClick,
  onProcessClick
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", onClick: onServicesClick },
    { name: "Our Process", onClick: onProcessClick },
    { name: "Case Studies", onClick: onPortfolioClick },
    { name: "Pricing", onClick: onPricingClick },
  ];

  const handleMobileLinkClick = (onClick: () => void) => {
    setMobileMenuOpen(false);
    onClick();
  };

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                PromoWorks<span className="text-brand-purple">.</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="font-sans text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden bg-dark-bg/95 backdrop-blur-lg border-b border-white/5 px-4 pt-6 pb-8 shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleMobileLinkClick(link.onClick)}
                  className="text-left font-sans text-lg text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleMobileLinkClick(onContactClick)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue font-sans font-medium text-white hover:opacity-90 transition-opacity"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
