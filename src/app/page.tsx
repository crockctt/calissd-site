"use client";
import React, { useRef, useEffect } from "react";
import Script from "next/script";

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Home() {
  const surveyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleTallySubmit(e: MessageEvent) {
      if (e.data?.event === 'Tally.FormSubmitted') {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17059308391/AjDiCISrxMMaEOfGwcY_',
            'value': 1.0,
            'currency': 'USD'
          });
        }
      }
    }
    window.addEventListener('message', handleTallySubmit);
    return () => window.removeEventListener('message', handleTallySubmit);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F3EE] flex flex-col relative font-sans">
      {/* Tally Popup Script */}
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      {/* Top Navigation Bar */}
      <nav className="sticky-nav w-full flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 bg-transparent backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <img src="/Calissdlogo.PNG" alt="CaliSSD Logo" className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg shadow-lg border-2 border-[#F7B32B] bg-white/80" />
          <div className="flex flex-col ml-3">
            <span className="heading-display text-2xl sm:text-4xl font-extrabold text-[#15304B] tracking-tight leading-tight drop-shadow-lg" style={{ letterSpacing: '-0.01em' }}>
              California Social
            </span>
            <span className="heading-display text-lg sm:text-2xl font-semibold text-[#15304B] tracking-tight leading-tight mt-1 drop-shadow-md" style={{ letterSpacing: '-0.01em' }}>
              Security Disability
            </span>
          </div>
        </div>
      </nav>
      <hr className="gold-divider" />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-12 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-tr from-[#F7B32B]/40 via-[#F6F3EE] to-[#15304B]/10 blur-2xl opacity-90" />
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl px-6 sm:px-16 py-10 sm:py-20 flex flex-col items-center sm:items-start max-w-2xl mx-auto animate-fade-in">
          <h1 className="heading-display text-4xl sm:text-6xl font-extrabold mb-2 sm:mb-4 text-[#15304B] leading-tight text-center sm:text-left drop-shadow-xl">
            Get the <span className="text-[#F7B32B] inline-block">Benefits</span> You Deserve.
          </h1>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="text-[#F7B32B] font-bold text-lg sm:text-2xl tracking-wide animate-pulse">Fast.</span>
            <span className="text-[#F7B32B] font-bold text-lg sm:text-2xl tracking-wide animate-pulse">Easy.</span>
            <span className="text-[#F7B32B] font-bold text-lg sm:text-2xl tracking-wide animate-pulse">Confidential.</span>
          </div>
          <p className="body-sans text-base sm:text-xl mb-8 sm:mb-12 text-[#15304B] font-medium max-w-xl sm:max-w-2xl text-center sm:text-left">
            Connect instantly with a top California disability attorney. Your free consultation is just one click away.
          </p>
          <button
            className="tally-open button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 sm:px-16 py-4 sm:py-6 text-lg sm:text-2xl shadow-2xl border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] hover:scale-105 transition-all duration-200 self-center sm:self-start"
            data-tally-open="mZg1Oe"
            data-tally-layout="modal"
            data-tally-width="600"
            data-tally-emoji-text=""
            data-tally-auto-close="true"
            data-tally-overlay="rgba(21,48,75,0.7)"
            style={{ cursor: 'pointer' }}
          >
            Get Your Free Consultation
          </button>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="section pt-8 pb-8">
        <h2 className="heading-display text-3xl font-extrabold text-[#15304B] mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 animate-fade-in-up">
          <div className="icon-card flex-1 items-center sm:items-start text-center sm:text-left transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            {/* Modern phone icon */}
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3" />
              <rect x="13" y="12" width="14" height="16" rx="3" fill="#fff" stroke="#15304B" strokeWidth="2" />
              <rect x="17" y="15" width="6" height="1.5" rx="0.75" fill="#F7B32B" />
              <rect x="17" y="18" width="6" height="1.5" rx="0.75" fill="#F7B32B" />
              <rect x="17" y="21" width="6" height="1.5" rx="0.75" fill="#F7B32B" />
              <circle cx="20" cy="26" r="1" fill="#F7B32B" />
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Fill Out the Form</h3>
            <p className="body-sans text-base text-[#15304B]">Tell us about your situation by completing a short form with your contact details and disability type.</p>
          </div>
          <div className="icon-card flex-1 items-center sm:items-start text-center sm:text-left transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3" />
              <circle cx="20" cy="17" r="6" stroke="#15304B" strokeWidth="2" fill="#fff" />
              <path d="M28 29c0-4-3.6-7-8-7s-8 3-8 7" stroke="#15304B" strokeWidth="2" fill="#fff" />
              <circle cx="28" cy="28" r="5" fill="#F7B32B" stroke="#15304B" strokeWidth="2" />
              <path d="M26.5 28.5l1.5 1.5 3-3" stroke="#15304B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Get Matched with an Attorney</h3>
            <p className="body-sans text-base text-[#15304B]">We connect you with a qualified disability attorney who understands your case.</p>
          </div>
          <div className="icon-card flex-1 items-center sm:items-start text-center sm:text-left transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3" />
              <path d="M14 21l5 5 7-9" stroke="#15304B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#fff" />
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Get Your Free Consultation</h3>
            <p className="body-sans text-base text-[#15304B]">The attorney will reach out to offer a free consultation and discuss your legal options.</p>
          </div>
        </div>
      </section>
      {/* Stats/Trust Section */}
      <section className="w-full py-10 sm:py-16 px-0 bg-gradient-to-b from-[#fffbe8] via-[#fff] to-[#fff]" style={{ borderTop: '3px solid #F7B32B' }}>
        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          <h3 className="heading-display text-3xl sm:text-6xl font-extrabold text-[#15304B] mb-4 sm:mb-6 text-center">We Will Connect You</h3>
          <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-10 py-8 sm:py-12 px-3 sm:px-12">
            <div className="flex flex-col items-center flex-1 border-b-2 md:border-b-0 md:border-r-2 border-[#F7B32B] pb-6 md:pb-0 md:pr-10">
              {/* Group/People Icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-3">
                <circle cx="24" cy="24" r="22" stroke="#F7B32B" strokeWidth="3" />
                <circle cx="24" cy="20" r="6" stroke="#15304B" strokeWidth="2" fill="#fff" />
                <ellipse cx="24" cy="33" rx="12" ry="7" stroke="#15304B" strokeWidth="2" fill="#fff" />
                <circle cx="14" cy="26" r="3" stroke="#15304B" strokeWidth="2" fill="#fff" />
                <circle cx="34" cy="26" r="3" stroke="#15304B" strokeWidth="2" fill="#fff" />
              </svg>
              <span className="text-4xl font-extrabold text-[#F7B32B]">100+</span>
              <span className="text-lg text-[#15304B] font-medium">People Helped</span>
            </div>
            <div className="flex flex-col items-center flex-1 pt-6 md:pt-0 md:pl-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-12 h-12 mb-3" stroke="#15304B" strokeWidth="2">
                <circle cx="16" cy="16" r="12" stroke="#15304B" strokeWidth="2"/>
                <path d="M16 10v6l4 2" stroke="#15304B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-4xl font-extrabold text-[#15304B]">11h</span>
              <span className="text-lg text-[#15304B] font-medium">Avg. Response Time</span>
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
