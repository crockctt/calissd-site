"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const surveyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#F6F3EE] flex flex-col relative font-sans">
      {/* Tally Popup Script */}
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      {/* Top Navigation Bar */}
      <nav className="sticky-nav w-full flex items-center justify-between px-10 py-6 bg-[#F6F3EE]">
        <div className="flex items-center gap-4">
          <Image
            src="/Calissdlogo.PNG"
            alt="CaliSSD Logo"
            width={90}
            height={90}
            className="rounded-md self-start"
            priority
          />
          <div className="flex flex-col ml-4 justify-center h-[90px]">
            <span className="heading-display text-3xl sm:text-4xl font-bold text-[#15304B] tracking-tight leading-tight" style={{ letterSpacing: '-0.01em' }}>
              California Social
            </span>
            <span className="heading-display text-3xl sm:text-4xl font-bold text-[#15304B] tracking-tight leading-tight" style={{ letterSpacing: '-0.01em' }}>
              Security Disability
            </span>
          </div>
        </div>
        <a href="tel:6519648710" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-6 py-3 text-base shadow hover:bg-[#e6a821] transition border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2">
          Call Now: 651-964-8710
        </a>
      </nav>
      <hr className="gold-divider" />
      {/* Hero Section */}
      <section className="hero-bg section pt-20 pb-16 border-b-0">
        <h1 className="heading-display text-5xl sm:text-6xl font-extrabold mb-6 text-[#15304B] leading-tight">
          Get Help With Your Social Security Disability Claim
        </h1>
        <p className="body-sans text-2xl mb-10 text-[#15304B] font-medium max-w-2xl">
          Start your free, no-obligation consultation today. We connect you with experienced disability attorneys who can help you get the benefits you deserve—fast, easy, and confidential.
        </p>
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
          Start Free Consultation
        </button>
      </section>
      <hr className="gold-divider" />
      {/* How It Works Section */}
      <section className="section pt-8 pb-8">
        <h2 className="heading-display text-3xl font-extrabold text-[#15304B] mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="icon-card flex-1">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3" />
              <path d="M13 25v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H17l-4 3v-3a2 2 0 0 1-2-2z" stroke="#15304B" strokeWidth="2" fill="#fff" />
              <circle cx="17" cy="21" r="1" fill="#F7B32B" />
              <circle cx="20" cy="21" r="1" fill="#F7B32B" />
              <circle cx="23" cy="21" r="1" fill="#F7B32B" />
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Free Consultation</h3>
            <p className="body-sans text-base text-[#15304B]">Start with a free, no-obligation consultation to see if you qualify for Social Security Disability benefits.</p>
          </div>
          <div className="icon-card flex-1">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3" />
              <circle cx="20" cy="17" r="6" stroke="#15304B" strokeWidth="2" fill="#fff" />
              <path d="M28 29c0-4-3.6-7-8-7s-8 3-8 7" stroke="#15304B" strokeWidth="2" fill="#fff" />
              <circle cx="28" cy="28" r="5" fill="#F7B32B" stroke="#15304B" strokeWidth="2" />
              <path d="M26.5 28.5l1.5 1.5 3-3" stroke="#15304B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Matched with a Disability Attorney</h3>
            <p className="body-sans text-base text-[#15304B]">We instantly connect you with a qualified attorney who specializes in Social Security Disability cases.</p>
          </div>
          <div className="icon-card flex-1">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3" />
              <path d="M14 21l5 5 7-9" stroke="#15304B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#fff" />
            </svg>
            <h3 className="heading-display text-xl font-bold text-[#15304B] mb-2">Get the Benefits You Deserve</h3>
            <p className="body-sans text-base text-[#15304B]">Your attorney will guide you through the process and fight for the benefits you&apos;re entitled to.</p>
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
      {/* Survey Section Anchor */}
      <div ref={surveyRef}></div>
      {/* Footer */}
      <footer className="text-center text-[#15304B] py-8 text-base bg-[#F6F3EE] border-t-0 mt-auto font-medium tracking-tight">
        &copy; {new Date().getFullYear()} CaliSSD. All rights reserved.
      </footer>
    </div>
  );
}
