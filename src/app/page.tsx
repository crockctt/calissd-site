"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Home() {
  const router = useRouter();

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
        // No redirect
      }
    }
    window.addEventListener('message', handleTallySubmit);
    return () => window.removeEventListener('message', handleTallySubmit);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F6F3EE] flex flex-col relative font-sans">
      {/* Tally Popup Script */}
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      {/* Top Navigation Bar */}
      <nav className="sticky-nav w-full flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 bg-white z-50">
        <div className="flex items-center gap-4">
          <Image src="/Calissdlogo.PNG" alt="CaliSSD Logo" width={80} height={80} className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg shadow-lg border-2 border-[#F7B32B] bg-white/80" />
          <div className="flex flex-col ml-3">
            <span className="heading-display text-2xl sm:text-4xl font-extrabold text-[#15304B] tracking-tight leading-tight drop-shadow-lg" style={{ letterSpacing: '-0.01em' }}>
              California Social Security Disability
            </span>
          </div>
        </div>
        <div className="flex gap-6 text-lg font-semibold text-[#15304B]">
          <a href="#how-it-works" className="hover:text-[#F7B32B] transition">How It Works</a>
          <a href="#faq" className="hover:text-[#F7B32B] transition">FAQ</a>
          <a href="#resources" className="hover:text-[#F7B32B] transition">Resources</a>
          <a href="#contact" className="hover:text-[#F7B32B] transition">Contact</a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[50vh] py-12 sm:py-20 bg-gradient-to-tr from-[#F7B32B]/20 via-[#F6F3EE] to-[#15304B]/10">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#15304B] mb-4 text-center drop-shadow-xl">Get the Benefits You Deserve.</h1>
        <p className="text-xl sm:text-2xl text-[#15304B] mb-8 text-center max-w-2xl">Connect instantly with a top California Social Security disability attorney. Fast, free, and confidential.</p>
        <div className="flex gap-4">
          <a href="#qualify" className="bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-[#FFD369] transition">See if You Qualify</a>
          <a href="#how-it-works" className="bg-white text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-lg border border-[#F7B32B] hover:bg-[#F7B32B]/20 transition">How It Works</a>
        </div>
      </section>
      {/* Value Proposition */}
      <section className="py-10 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#15304B] mb-4">CaliSSD makes it easy for Californians to get the Social Security disability benefits and legal help they need.</h2>
        <p className="text-lg text-[#15304B] mb-4">We connect you with experienced attorneys—no upfront cost, no obligation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <span className="bg-[#F7B32B]/20 text-[#15304B] rounded-full px-6 py-2 font-semibold">Free consultation</span>
          <span className="bg-[#F7B32B]/20 text-[#15304B] rounded-full px-6 py-2 font-semibold">Confidential and compassionate support</span>
        </div>
      </section>
      {/* How It Works */}
      <section id="how-it-works" className="py-12 px-4 bg-white border-t border-[#F7B32B]/40">
        <h2 className="text-3xl font-extrabold text-[#15304B] mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 text-center md:text-left">
            <div className="text-5xl mb-2 text-[#F7B32B] font-extrabold">1</div>
            <h3 className="text-xl font-bold mb-2">See if you qualify</h3>
            <p className="text-[#15304B]">Answer a few quick questions to get started.</p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-5xl mb-2 text-[#F7B32B] font-extrabold">2</div>
            <h3 className="text-xl font-bold mb-2">Talk to a real advocate</h3>
            <p className="text-[#15304B]">Get free, confidential advice from a California expert.</p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-5xl mb-2 text-[#F7B32B] font-extrabold">3</div>
            <h3 className="text-xl font-bold mb-2">Get matched with a lawyer</h3>
            <p className="text-[#15304B]">We&apos;ll connect you with a top California Social Security disability attorney.</p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-5xl mb-2 text-[#F7B32B] font-extrabold">4</div>
            <h3 className="text-xl font-bold mb-2">Get your benefits</h3>
            <p className="text-[#15304B]">Your lawyer handles the paperwork and fights for your case.</p>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#15304B] mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#15304B]">How much does CaliSSD charge?</h3>
            <p className="text-[#15304B]">We offer free consultations. If you hire a lawyer, you pay nothing up front and nothing unless you win.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#15304B]">What happens after I fill out the form?</h3>
            <p className="text-[#15304B]">A real advocate will reach out to discuss your situation and next steps.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#15304B]">Is CaliSSD a law firm?</h3>
            <p className="text-[#15304B]">CaliSSD connects you with experienced California Social Security disability attorneys.</p>
          </div>
        </div>
      </section>
      {/* Resource Center */}
      <section id="resources" className="py-12 px-4 bg-white border-t border-[#F7B32B]/40 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#15304B] mb-8 text-center">Resource Center</h2>
        <ul className="space-y-4 text-lg">
          <li><a href="#" className="text-[#15304B] underline hover:text-[#F7B32B]">SSI vs. SSDI: What&apos;s the difference?</a></li>
          <li><a href="#" className="text-[#15304B] underline hover:text-[#F7B32B]">How to apply for Social Security disability in California</a></li>
          <li><a href="#" className="text-[#15304B] underline hover:text-[#F7B32B]">What to expect from the process</a></li>
        </ul>
      </section>
      {/* Footer */}
      <footer className="text-center text-[#15304B] py-8 text-base bg-[#F6F3EE] border-t-0 mt-auto font-medium tracking-tight">
        <div>About | Contact | Privacy Policy | Disclaimer</div>
        <div className="mt-2">&copy; {new Date().getFullYear()} CaliSSD. All rights reserved.</div>
      </footer>
    </div>
  );
}
