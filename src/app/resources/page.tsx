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
        <h1 className="text-3xl font-extrabold text-[#15304B] mb-8 text-center">Resource Center</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-[#F6F3EE] p-6 rounded-lg">
              <h2 className="text-xl font-bold text-[#15304B] mb-4">Understanding Benefits</h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/resources/ssi-vs-ssdi" className="text-[#15304B] underline hover:text-[#F7B32B] font-semibold">
                    SSI vs. SSDI: What's the difference?
                  </Link>
                  <div className="text-[#4B5A6A] text-sm mt-1">Learn the key differences between Supplemental Security Income (SSI) and Social Security Disability Insurance (SSDI) in California.</div>
                </li>
                <li>
                  <Link href="/resources/application-process" className="text-[#15304B] underline hover:text-[#F7B32B] font-semibold">
                    How to apply for Social Security disability in California
                  </Link>
                  <div className="text-[#4B5A6A] text-sm mt-1">Step-by-step guidance on applying for disability benefits, including tips for a successful application.</div>
                </li>
                <li>
                  <Link href="/resources/process-timeline" className="text-[#15304B] underline hover:text-[#F7B32B] font-semibold">
                    What to expect from the process
                  </Link>
                  <div className="text-[#4B5A6A] text-sm mt-1">Understand the timeline, paperwork, and what happens after you apply for benefits.</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-[#F6F3EE] p-6 rounded-lg">
              <h2 className="text-xl font-bold text-[#15304B] mb-4">Qualifying Conditions</h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/resources/disabilities-list" className="text-[#15304B] underline hover:text-[#F7B32B] font-semibold">
                    Complete List of Qualifying Disabilities
                  </Link>
                  <div className="text-[#4B5A6A] text-sm mt-1">Comprehensive list of medical conditions that qualify for Social Security disability benefits.</div>
                </li>
                <li>
                  <Link href="/resources/mental-health" className="text-[#15304B] underline hover:text-[#F7B32B] font-semibold">
                    Mental Health Conditions
                  </Link>
                  <div className="text-[#4B5A6A] text-sm mt-1">Understanding how mental health conditions qualify for disability benefits.</div>
                </li>
                <li>
                  <Link href="/resources/chronic-pain" className="text-[#15304B] underline hover:text-[#F7B32B] font-semibold">
                    Chronic Pain & Physical Conditions
                  </Link>
                  <div className="text-[#4B5A6A] text-sm mt-1">How chronic pain and physical conditions are evaluated for disability benefits.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/contact" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-6 py-3 text-base shadow-md border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200">Suggest a Resource</Link>
        </div>
      </main>
    </div>
  );
} 