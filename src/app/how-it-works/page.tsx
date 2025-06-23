import React from "react";
import { FaUserFriends, FaGavel } from "react-icons/fa";
import Link from "next/link";
import Header from "../components/Header";

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <Header />
      <main className="py-12 px-4 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-[#15304B] mb-4 text-center">How It Works</h1>
        </div>
        <p className="text-lg text-[#4B5A6A] mb-10 text-center max-w-2xl mx-auto">CaliSSD makes it simple to get the Social Security disability benefits you deserve. Here&apos;s how our process works, step by step.</p>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex-1 icon-card items-center">
            <svg className="text-4xl text-[#F7B32B] mb-2" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1.18C17.4 1.84 16.3 1 15 1h-6c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 3h6v2H9V3zm10 18H5V5h2v2c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v16z"/>
            </svg>
            <h2 className="text-xl font-bold mb-2">1. See if you qualify</h2>
            <p className="text-[#15304B]">Answer a few quick questions to get started.</p>
          </div>
          <div className="flex-1 icon-card items-center">
            <FaUserFriends className="text-4xl text-[#F7B32B] mb-2" />
            <h2 className="text-xl font-bold mb-2">2. Talk to a real advocate</h2>
            <p className="text-[#15304B]">Get free, confidential advice from a California expert.</p>
          </div>
          <div className="flex-1 icon-card items-center">
            <FaGavel className="text-4xl text-[#F7B32B] mb-2" />
            <h2 className="text-xl font-bold mb-2">3. Get matched with a lawyer</h2>
            <p className="text-[#15304B]">We&apos;ll connect you with a top Social Security disability attorney.</p>
          </div>
          <div className="flex-1 icon-card items-center">
            <svg className="text-4xl text-[#F7B32B] mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 12l5 5 7-7" stroke="#F7B32B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <h2 className="text-xl font-bold mb-2">4. Get your benefits</h2>
            <p className="text-[#15304B]">Your lawyer handles the paperwork and fights for your case.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-lg border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200">Get Started</Link>
        </div>
      </main>
    </div>
  );
} 