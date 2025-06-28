"use client";

import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <Header />
      <main className="py-12 px-4 bg-white border-t border-[#F7B32B]/40 max-w-4xl mx-auto min-h-screen">
        <Link href="/" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
        
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#15304B] mb-6">Get Your Disability Benefits</h1>
          <p className="text-xl text-[#4B5A6A] mb-8 max-w-2xl mx-auto">
            The fastest way to see if you qualify is to take our free evaluation. 
            Get started in just 60 seconds.
          </p>
          
          {/* Main CTA */}
          <button
            className="bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-12 py-6 text-2xl shadow-xl border-none outline-none focus:ring-4 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] hover:scale-105 transition-all duration-200 mb-8"
            style={{ cursor: 'pointer' }}
            onClick={() => document.querySelector('.tally-open')?.dispatchEvent(new Event('click', { bubbles: true }))}
          >
            Start Free Evaluation Now
          </button>
          
          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-[#4B5A6A] font-medium mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Free & Confidential
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              California Attorneys
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Upfront Costs
            </div>
          </div>
        </div>

        {/* Simple Info Section */}
        <div className="bg-[#F6F3EE] p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-[#15304B] mb-4 text-center">Why Take Our Evaluation?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#F7B32B]/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#15304B] mb-2">Quick & Easy</h3>
              <p className="text-[#4B5A6A] text-sm">60-second survey to check your eligibility</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F7B32B]/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#15304B] mb-2">Expert Help</h3>
              <p className="text-[#4B5A6A] text-sm">Connect with experienced California attorneys</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F7B32B]/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-bold text-[#15304B] mb-2">No Risk</h3>
              <p className="text-[#4B5A6A] text-sm">Free consultation, no upfront costs</p>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <button
            className="bg-[#15304B] text-white font-bold rounded-full px-10 py-4 text-xl shadow-lg border-none outline-none focus:ring-4 focus:ring-[#15304B] focus:ring-offset-2 hover:bg-[#1a3d5a] transition-all duration-200"
            style={{ cursor: 'pointer' }}
            onClick={() => document.querySelector('.tally-open')?.dispatchEvent(new Event('click', { bubbles: true }))}
          >
            Check My Eligibility Now
          </button>
        </div>
      </main>
    </div>
  );
} 