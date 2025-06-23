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
        <div className="space-y-6 mb-10">
          <div>
            <h2 className="text-xl font-bold text-[#15304B]">How much does CaliSSD charge?</h2>
            <p className="text-[#15304B]">We offer free consultations. If you hire a lawyer, you pay nothing up front and nothing unless you win.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#15304B]">What happens after I fill out the form?</h2>
            <p className="text-[#15304B]">A real advocate will reach out to discuss your situation and next steps.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#15304B]">Is CaliSSD a law firm?</h2>
            <p className="text-[#15304B]">CaliSSD connects you with experienced California Social Security disability attorneys.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#15304B]">Do I need to pay for a consultation?</h2>
            <p className="text-[#15304B]">No, consultations are always free and confidential.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#15304B]">What if I&apos;ve already been denied benefits?</h2>
            <p className="text-[#15304B]">You may still qualify. Our network attorneys can help you appeal and fight for your benefits.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#15304B]">How long does the process take?</h2>
            <p className="text-[#15304B]">Every case is different, but we&apos;ll help you get started quickly and keep you informed at every step.</p>
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