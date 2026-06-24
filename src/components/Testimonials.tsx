import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonialsData, Testimonial } from "../data";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Set up autoplay
  useEffect(() => {
    autoPlayRef.current = nextTestimonial;
  });

  useEffect(() => {
    if (isHovered) return;

    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };

    const interval = setInterval(play, 6000); // rotate every 6 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials-section" className="py-24 relative overflow-hidden bg-dark-bg/60">
      {/* Background visual highlights */}
      <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] rounded-full bg-brand-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            Client Reviews
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
            Endorsed by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">
              Growth Leaders
            </span>
          </h2>
        </div>

        {/* Carousel Window */}
        <div
          className="relative min-h-[420px] md:min-h-[340px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-3xl glass-card p-8 sm:p-12 border border-white/10 relative overflow-hidden">
                {/* Subtle Watermark Quote Icon */}
                <Quote className="absolute right-8 top-8 w-32 h-32 text-white/2 pointer-events-none" />
                
                {/* Left: Avatar + Badge (Col 4) */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4 border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-8">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-purple to-brand-pink rounded-full blur-sm opacity-60 animate-pulse" />
                    <img
                      src={current.avatar}
                      alt={current.name}
                      referrerPolicy="no-referrer"
                      className="relative w-20 h-20 rounded-full object-cover border border-white/10"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {current.name}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 font-light">
                      {current.role} at <span className="text-gray-300 font-normal">{current.company}</span>
                    </p>
                  </div>

                  {/* Trust outcome tag */}
                  <span className="inline-block px-3 py-1 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-[10px] font-mono text-brand-purple uppercase tracking-widest font-bold">
                    {current.metric}
                  </span>
                </div>

                {/* Right: Review Statement + Star Rating (Col 8) */}
                <div className="md:col-span-8 flex flex-col space-y-4 md:pl-4 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 text-glow-purple" />
                    ))}
                  </div>

                  {/* Body Copy */}
                  <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-light italic">
                    "{current.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer hover:scale-[1.05]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? "bg-brand-purple w-6" : "bg-white/10"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer hover:scale-[1.05]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
