import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Calendar, Check, ArrowRight, User, MessageSquare, Phone, MapPin, Clock, Sparkles } from "lucide-react";

export default function Contact() {
  // Contact Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Booking Widget State
  const [bookingDate, setBookingDate] = useState<string | null>("June 25");
  const [bookingTime, setBookingTime] = useState<string | null>("10:00 AM");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const availableDates = ["June 25", "June 26", "June 29", "June 30", "July 01"];
  const availableTimes = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setFormLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleBookingSubmit = () => {
    if (!bookingDate || !bookingTime) return;

    setBookingLoading(true);
    setTimeout(() => {
      setBookingLoading(false);
      setBookingSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background radial highlights */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[2%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

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
            Initiate Project
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6">
            Let's Engineer Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue">
              Growth Engine
            </span>
          </h2>
          
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            Fill out the brief project form below or claim an instant calendar slot to discuss compounding performance strategy directly with our founding partners.
          </p>
        </div>

        {/* Contact Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Column 1: Custom Form (Col 6) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 shadow-2xl relative"
            >
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display font-bold text-xl text-white mb-2">Project Brief Form</h3>
                      <p className="font-sans text-xs text-gray-500 font-light">
                        Provide quick project information and we will reply within 2 hours.
                      </p>
                    </div>

                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          id="name-input"
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Alex Rivera"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input text-sm text-white font-sans placeholder-gray-600 outline-none"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          id="email-input"
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input text-sm text-white font-sans placeholder-gray-600 outline-none"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message-input" className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Your Growth Goals / Channels
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4 text-gray-500">
                          <MessageSquare className="w-4 h-4" />
                        </span>
                        <textarea
                          id="message-input"
                          rows={4}
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          placeholder="Tell us about your brand, current MRR targets, and preferred active channels..."
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input text-sm text-white font-sans placeholder-gray-600 outline-none resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-sans font-bold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
                    >
                      {formLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Project Brief
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="form-success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-white">Brief Received!</h3>
                      <p className="font-sans text-sm text-gray-400 leading-relaxed font-light max-w-sm">
                        Thank you, <span className="text-white font-medium">{formName}</span>. One of our founding growth partners will ping you at <span className="text-white font-medium">{formEmail}</span> within the next 2 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormName("");
                        setFormEmail("");
                        setFormMessage("");
                      }}
                      className="text-xs font-mono text-brand-purple hover:text-white transition-colors uppercase tracking-widest underline"
                    >
                      Submit another query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Column 2: Interactive Booking Widget (Col 6) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 shadow-2xl relative"
            >
              <AnimatePresence mode="wait">
                {!bookingSubmitted ? (
                  <motion.div
                    key="booking-flow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-brand-blue" />
                        Interactive Calendar Slots
                      </h3>
                      <p className="font-sans text-xs text-gray-500 font-light">
                        Select a date and direct time slot to secure a priority strategy video session.
                      </p>
                    </div>

                    {/* Date Selector */}
                    <div className="space-y-2">
                      <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Choose Date
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {availableDates.map((date) => (
                          <button
                            key={date}
                            type="button"
                            onClick={() => setBookingDate(date)}
                            className={`px-3 py-2 rounded-full text-xs font-sans font-bold transition-all duration-200 cursor-pointer ${
                              bookingDate === date
                                ? "bg-white text-black shadow-lg"
                                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                            }`}
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selector */}
                    <div className="space-y-2">
                      <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Choose Available Hour (EDT)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setBookingTime(time)}
                            className={`px-3.5 py-2 rounded-full text-xs font-sans font-bold transition-all duration-200 cursor-pointer ${
                              bookingTime === time
                                ? "bg-white text-black shadow-lg"
                                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="p-4 rounded-xl bg-white/3 border border-white/5 flex items-center gap-3 text-xs text-gray-400 font-sans">
                      <Clock className="w-4 h-4 text-brand-purple" />
                      <span>Duration: 30-min Video Call via Google Meet</span>
                    </div>

                    {/* Booking CTA Button */}
                    <button
                      type="button"
                      onClick={handleBookingSubmit}
                      disabled={bookingLoading}
                      className="w-full py-4 rounded-xl bg-white text-black font-sans font-bold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                    >
                      {bookingLoading ? (
                        <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Confirm Priority Slot
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <Calendar className="w-7 h-7" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-white">Call Scheduled!</h3>
                      <p className="font-sans text-sm text-gray-400 leading-relaxed font-light max-w-sm">
                        Awesome! Your video conference is confirmed for <span className="text-white font-medium">{bookingDate}</span> at <span className="text-white font-medium">{bookingTime} (EDT)</span>. We've sent a calendar invite and Meet link to your primary email address.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setBookingSubmitted(false);
                        setBookingDate("June 25");
                        setBookingTime("10:00 AM");
                      }}
                      className="text-xs font-mono text-brand-blue hover:text-white transition-colors uppercase tracking-widest underline"
                    >
                      Modify booking slot
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
