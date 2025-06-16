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
      {/* How It Works Section */}
      <section className="section pt-8 pb-8">
        <h2 className="heading-display text-3xl font-extrabold text-[#15304B] mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="icon-card flex-1">
            {/* Modern message icon */}
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#F7B32B" strokeWidth="3" />
              <path d="M12 26v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H16l-4 3v-3a4 4 0 0 1-4-4z" fill="#fff" stroke="#15304B" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="16" cy="22" r="1.2" fill="#F7B32B" />
              <circle cx="20" cy="22" r="1.2" fill="#F7B32B" />
              <circle cx="24" cy="22" r="1.2" fill="#F7B32B" />
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
      {/* Stats/Trust Section */}
      <section className="w-full py-16 px-0 bg-gradient-to-b from-[#fffbe8] via-[#fff] to-[#fff]" style={{ borderTop: '3px solid #F7B32B' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="heading-display text-5xl sm:text-6xl font-extrabold text-[#15304B] mb-6 text-center">We Will Connect You</h3>
          <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row justify-center items-center gap-10 py-12 px-6 md:px-12">
            <div className="flex flex-col items-center flex-1 border-b-2 md:border-b-0 md:border-r-2 border-[#F7B32B] pb-8 md:pb-0 md:pr-10">
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
            <div className="flex flex-col items-center flex-1 pt-8 md:pt-0 md:pl-10">
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
