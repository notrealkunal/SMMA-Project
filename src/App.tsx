import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosMarquee from "./components/LogosMarquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset slightly for the sticky navigation bar
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handlePlanSelect = (planName: string) => {
    // Scroll directly to contact form and populate some info or highlight it
    scrollToSection("contact-section");
    // Optionally focus on the contact fields
    const nameInput = document.getElementById("name-input");
    if (nameInput) {
      nameInput.focus();
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-bg text-[#F9FAFB] overflow-x-hidden selection:bg-brand-purple selection:text-white">
      {/* Background Aurora Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[25%] right-[-10%] w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px]" />
        <div className="absolute top-[55%] left-[-10%] w-[650px] h-[650px] bg-brand-pink/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[5%] right-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[140px]" />
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue z-55 transition-all duration-100 origin-left"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Navigation */}
      <Navbar
        onServicesClick={() => scrollToSection("services-section")}
        onProcessClick={() => scrollToSection("process-section")}
        onPortfolioClick={() => scrollToSection("portfolio-section")}
        onPricingClick={() => scrollToSection("pricing-section")}
        onContactClick={() => scrollToSection("contact-section")}
      />

      {/* Main Page Sections */}
      <main>
        {/* Full screen Hero section */}
        <Hero
          onContactClick={() => scrollToSection("contact-section")}
          onServicesClick={() => scrollToSection("services-section")}
        />

        {/* Infinite logos marquee track */}
        <LogosMarquee />

        {/* Services / Channels Grid */}
        <Services />

        {/* Live Counters */}
        <Stats />

        {/* Alternating Feature Showcase */}
        <Features />

        {/* Methodology Workflow Roadmap */}
        <Process />

        {/* Showcase of Client Portfolios */}
        <Portfolio />

        {/* Agency Comparison matrix */}
        <Comparison />

        {/* Pricing retainers */}
        <Pricing onPlanSelect={handlePlanSelect} />

        {/* Authentic Customer Testimonials Carousel */}
        <Testimonials />

        {/* Interactive FAQ accordion panel */}
        <FAQ />

        {/* Input briefs and schedules */}
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer
        onServicesClick={() => scrollToSection("services-section")}
        onProcessClick={() => scrollToSection("process-section")}
        onPortfolioClick={() => scrollToSection("portfolio-section")}
        onPricingClick={() => scrollToSection("pricing-section")}
      />
    </div>
  );
}
