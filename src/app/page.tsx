"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const surveyRef = useRef<HTMLDivElement>(null);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F3EE] flex flex-col relative font-sans">
      {/* Tally Popup Script */}
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      {/* Top Navigation Bar */}
      <nav className="w-full flex flex-col border-b-2 border-[#F7B32B] bg-[#F6F3EE] shadow-none z-20 pb-2">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 pt-6 pb-3 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/Calissdlogo.PNG"
              alt="CaliSSD Logo"
              width={90}
              height={90}
              className="opacity-95 drop-shadow-none rounded-md"
              priority
            />
          </div>
          {/* Tagline */}
          <div className="flex-1 flex flex-col items-center md:items-center text-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#15304B] tracking-wide font-serif" style={{ letterSpacing: '0.01em' }}>
              California Social Security Disability
            </span>
          </div>
          {/* Call Now + Badge */}
          <div className="flex flex-col items-center md:items-end gap-2 flex-shrink-0">
            <a href="tel:6519648710" className="bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-6 py-3 text-base shadow hover:bg-[#e6a821] transition border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2">
              Call Now: 651-964-8710
            </a>
            <span className="mt-1 inline-block bg-[#15304B] text-white text-xs font-semibold rounded-full px-4 py-1 tracking-wide shadow" style={{ letterSpacing: '0.04em' }}>
              California Based
            </span>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero-bg section pt-24 pb-16 border-b-0">
        <h1 className="heading-display text-5xl sm:text-6xl font-extrabold mb-6 text-[#15304B] leading-tight">
          California Social Security Disability
        </h1>
        <p className="body-sans text-2xl mb-10 text-[#15304B] font-medium max-w-2xl">
          Get a free, no-obligation consultation with a top disability attorney.<br className="hidden md:block" />
          We connect you with experienced lawyers who can help you get the benefits you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-2">
          <button
            className="tally-open button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-12 py-6 text-2xl shadow-xl border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2"
            data-tally-open="mZg1Oe"
            data-tally-layout="modal"
            data-tally-width="600"
            data-tally-emoji-text=""
            data-tally-auto-close="true"
            data-tally-overlay="rgba(21,48,75,0.7)"
            style={{ cursor: 'pointer' }}
          >
            Start Free Consultation Survey
          </button>
          <button
            onClick={() => setShowContact((v) => !v)}
            className="button bg-white border-2 border-[#F7B32B] text-[#15304B] font-bold rounded-full px-12 py-6 text-2xl shadow-xl hover:bg-[#F7B32B]/20 outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2"
          >
            {showContact ? "Hide Contact Form" : "Contact Us"}
          </button>
        </div>
        <div className={`transition-all duration-300 overflow-hidden ${showContact ? 'max-h-[1000px] mt-8' : 'max-h-0 mt-0'}`}>
          {showContact && (
            <div className="card w-full max-w-lg mt-2 border-l-8 border-[#F7B32B]">
              <h3 className="heading-display text-2xl font-extrabold mb-6 text-[#15304B] pl-2" style={{ borderLeft: '6px solid #F7B32B' }}>
                Contact Us
              </h3>
              <form className="flex flex-col gap-4 body-sans">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B32B] bg-[#F6F3EE] text-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B32B] bg-[#F6F3EE] text-lg"
                  required
                />
                <input
                  type="text"
                  name="message"
                  placeholder="How can we help you?"
                  className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B32B] bg-[#F6F3EE] text-lg"
                  required
                />
                <button
                  type="submit"
                  className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-lg border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      <hr className="gold-divider" />
      {/* How It Works Section */}
      <section className="section pt-8 pb-8">
        <h2 className="heading-display text-3xl font-extrabold text-[#15304B] mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="icon-card flex-1">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3"/><path d="M13 20h14M20 13v14" stroke="#15304B" strokeWidth="3" strokeLinecap="round"/></svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Exclusive, Pre-Qualified Leads</h3>
            <p className="body-sans text-base text-[#15304B]">We connect you only with people who are actively seeking help with their disability claim—no cold calls, no recycled leads.</p>
          </div>
          <div className="icon-card flex-1">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3"/>
              <path d="M18 10l-4 10h6l-2 10 8-12h-6l2-8z" fill="#15304B"/>
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Real-Time Connection</h3>
            <p className="body-sans text-base text-[#15304B]">Your information is delivered instantly to a qualified attorney, so you get help fast—often within hours.</p>
          </div>
          <div className="icon-card flex-1">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3"/>
              <path d="M20 12v12M14 24c0 2 2 4 6 4s6-2 6-4M14 24h12M16 24c0 1.1-1.34 2-3 2s-3-.9-3-2M34 24c0 1.1-1.34 2-3 2s-3-.9-3-2" stroke="#15304B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Expert Legal Guidance</h3>
            <p className="body-sans text-base text-[#15304B]">Get matched with experienced Social Security Disability attorneys who know how to win your case.</p>
          </div>
        </div>
      </section>
      <hr className="gold-divider" />
      {/* Stats/Trust Section */}
      <section className="w-full py-16 px-0 bg-gradient-to-b from-[#fffbe8] via-[#fff] to-[#fff]">
        <div className="max-w-none w-full px-0">
          <h3 className="heading-display text-5xl sm:text-6xl font-extrabold text-[#15304B] mb-12 pl-8">We Will Connect You</h3>
          <div className="flex flex-col md:flex-row justify-between items-stretch w-full gap-0">
            <div className="flex-1 flex flex-col items-start justify-center py-10 px-8 gap-2 border-r-2 border-[#F7B32B]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-10 h-10 mb-2" stroke="#F7B32B" strokeWidth="2">
                <path d="M6 18l6 6c1.5 1.5 4 1.5 5.5 0l8-8c1.5-1.5 1.5-4 0-5.5l-2-2c-1.5-1.5-4-1.5-5.5 0l-1 1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 14l-6-6c-1.5-1.5-4-1.5-5.5 0l-2 2c-1.5 1.5-1.5 4 0 5.5l8 8c1.5 1.5 4 1.5 5.5 0l1-1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-4xl font-extrabold text-[#F7B32B]">100+</span>
              <span className="text-lg text-[#15304B] font-medium">People Helped</span>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center py-10 px-8 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-10 h-10 mb-2" stroke="#15304B" strokeWidth="2">
                <circle cx="16" cy="16" r="12" stroke="#15304B" strokeWidth="2"/>
                <path d="M16 10v6l4 2" stroke="#15304B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-4xl font-extrabold text-[#15304B]">11h</span>
              <span className="text-lg text-[#15304B] font-medium">Avg. Response Time</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="gold-divider" />
      {/* Testimonials Section */}
      <section className="section py-20 bg-[#F6F3EE]">
        <h3 className="heading-display text-3xl font-extrabold text-[#15304B] mb-10">What Our Clients Say</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-start items-stretch">
          {/* Testimonial Card 1 */}
          <div className="card flex-1 border-l-4 border-[#F7B32B]">
            <p className="body-sans text-lg text-[#15304B] mb-4">“CaliSSD made the process so easy. I got my benefits faster than I expected!”</p>
            <span className="font-bold text-[#15304B]">— Jane D.</span>
          </div>
          {/* Testimonial Card 2 */}
          <div className="card flex-1 border-l-4 border-[#F7B32B]">
            <p className="body-sans text-lg text-[#15304B] mb-4">“The attorney I was matched with was knowledgeable and caring. Highly recommend!”</p>
            <span className="font-bold text-[#15304B]">— Mark S.</span>
          </div>
          {/* Testimonial Card 3 */}
          <div className="card flex-1 border-l-4 border-[#F7B32B]">
            <p className="body-sans text-lg text-[#15304B] mb-4">“I was nervous about applying, but CaliSSD supported me every step of the way.”</p>
            <span className="font-bold text-[#15304B]">— Lisa W.</span>
          </div>
        </div>
      </section>
      {/* Survey Section Anchor */}
      <div ref={surveyRef}></div>
      {/* Footer */}
      <footer className="text-center text-[#15304B] py-8 text-base bg-[#F6F3EE] border-t-0 mt-auto font-medium tracking-tight">
        &copy; {new Date().getFullYear()} CaliSSD. All rights reserved.
      </footer>
    </div>
  );
}
