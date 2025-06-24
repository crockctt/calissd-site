import React from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <Header />
      <main className="py-12 px-4 max-w-3xl mx-auto min-h-screen">
        <Link href="/" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
        <h1 className="text-3xl font-extrabold text-[#15304B] mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-8 text-[#15304B] text-lg">
          <div>
            <h2 className="font-bold mb-2">How much does CaliSSD charge?</h2>
            <p>We offer free consultations. If you hire a lawyer, you pay nothing up front and nothing unless you win your case.</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">What happens after I fill out the form?</h2>
            <p>A real advocate will reach out to discuss your situation and next steps. If you qualify, we&apos;ll connect you with an experienced California Social Security disability attorney.</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">Is CaliSSD a law firm?</h2>
            <p>No, CaliSSD is not a law firm. We connect you with experienced California Social Security disability attorneys.</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">Who will contact me?</h2>
            <p>You&apos;ll be contacted by a knowledgeable advocate or a qualified attorney partner who specializes in Social Security disability cases.</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">What information do I need to provide?</h2>
            <p>Basic contact information and a brief description of your situation. All information is kept confidential.</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">How long does the process take?</h2>
            <p>Response times vary, but we aim to connect you with an attorney within 24 hours.</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">What if I&apos;m denied benefits?</h2>
            <p>If you&apos;re denied, your attorney can help you appeal the decision and guide you through the next steps.</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">Is my information secure?</h2>
            <p>Yes. We use industry-standard security measures to protect your data and only share it with attorney partners as needed.</p>
          </div>
        </div>
        <div className="bg-[#F7B32B]/10 rounded-xl p-6 text-center">
          <div className="text-lg text-[#15304B] mb-2 font-semibold">Didn&apos;t find your answer?</div>
          <Link href="/contact" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-6 py-3 text-base shadow-md border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200">Contact Us</Link>
        </div>
      </main>
    </div>
  );
} 