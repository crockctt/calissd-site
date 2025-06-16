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
      <section className="py-20 px-4 border-b-0">
        <div className="max-w-3xl mx-auto flex flex-col justify-center items-center min-h-[480px]">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-8 max-w-2xl text-[#15304B] leading-tight text-center" style={{ letterSpacing: '-0.01em' }}>
            Need Help With Your Social Security Disability Claim?
          </h2>
          <p className="max-w-2xl text-2xl mb-12 text-[#15304B] font-medium text-center">
            Get a free, no-obligation consultation with a top disability attorney.<br className="hidden md:block" />
            We connect you with experienced lawyers who can help you get the benefits you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
            <button
              className="tally-open bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-12 py-6 text-2xl shadow-xl hover:bg-[#e6a821] transition border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2"
              data-tally-open="mZg1Oe"
              data-tally-layout="modal"
              data-tally-width="600"
              data-tally-emoji-text=""
              data-tally-auto-close="true"
              data-tally-overlay="rgba(21,48,75,0.7)"
              style={{ cursor: 'pointer', boxShadow: '0 4px 32px 0 rgba(21,48,75,0.10)' }}
            >
              Start Free Consultation Survey
            </button>
            <button
              onClick={() => setShowContact((v) => !v)}
              className="bg-white border-2 border-[#F7B32B] text-[#15304B] font-bold rounded-full px-12 py-6 text-2xl shadow-xl hover:bg-[#F7B32B]/20 transition outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2"
              style={{ boxShadow: '0 2px 16px 0 rgba(21,48,75,0.07)' }}
            >
              {showContact ? "Hide Contact Form" : "Contact Us"}
            </button>
          </div>
          {/* Collapsible Contact Form */}
          <div className={`transition-all duration-300 overflow-hidden ${showContact ? 'max-h-[1000px] mt-8' : 'max-h-0 mt-0'}`}>
            {showContact && (
              <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 border-l-8 border-[#F7B32B] mt-2" style={{ boxShadow: '0 4px 32px 0 rgba(21,48,75,0.07)' }}>
                <h3 className="text-2xl font-extrabold mb-6 text-[#15304B] pl-2" style={{ borderLeft: '6px solid #F7B32B' }}>
                  Contact Us
                </h3>
                <form className="flex flex-col gap-4">
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
                    className="bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-[#e6a821] transition border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2"
                    style={{ boxShadow: '0 2px 16px 0 rgba(21,48,75,0.07)' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Stats/Trust Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#fffbe8] via-[#fff] to-[#fff] border-y border-[#F7B32B]/30">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-[#15304B] mb-12 text-center tracking-tight" style={{ letterSpacing: '-0.01em' }}>
            We Will Connect You
          </h3>
          <div className="w-full bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-[#F7B32B] overflow-hidden" style={{ boxShadow: '0 8px 40px 0 rgba(21,48,75,0.10)' }}>
            {/* Stat 1 */}
            <div className="flex-1 flex flex-col items-center justify-center py-10 px-8 gap-2">
              {/* Handshake SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-10 h-10 mb-2" stroke="#F7B32B" strokeWidth="2">
                <path d="M6 18l6 6c1.5 1.5 4 1.5 5.5 0l8-8c1.5-1.5 1.5-4 0-5.5l-2-2c-1.5-1.5-4-1.5-5.5 0l-1 1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 14l-6-6c-1.5-1.5-4-1.5-5.5 0l-2 2c-1.5 1.5-1.5 4 0 5.5l8 8c1.5 1.5 4 1.5 5.5 0l1-1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-4xl font-extrabold text-[#F7B32B]">100+</span>
              <span className="text-lg text-[#15304B] font-medium">People Helped</span>
            </div>
            {/* Stat 2 */}
            <div className="flex-1 flex flex-col items-center justify-center py-10 px-8 gap-2">
              {/* Clock SVG Icon */}
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
      {/* Testimonials Section */}
      <section className="w-full py-20 bg-[#F6F3EE]">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-extrabold text-[#15304B] mb-10 text-center">What Our Clients Say</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Testimonial Card 1 */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#F7B32B] flex flex-col justify-between">
              <p className="text-lg text-[#15304B] mb-4">“CaliSSD made the process so easy. I got my benefits faster than I expected!”</p>
              <span className="font-bold text-[#15304B]">— Jane D.</span>
            </div>
            {/* Testimonial Card 2 */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#F7B32B] flex flex-col justify-between">
              <p className="text-lg text-[#15304B] mb-4">“The attorney I was matched with was knowledgeable and caring. Highly recommend!”</p>
              <span className="font-bold text-[#15304B]">— Mark S.</span>
            </div>
            {/* Testimonial Card 3 */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#F7B32B] flex flex-col justify-between">
              <p className="text-lg text-[#15304B] mb-4">“I was nervous about applying, but CaliSSD supported me every step of the way.”</p>
              <span className="font-bold text-[#15304B]">— Lisa W.</span>
            </div>
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
