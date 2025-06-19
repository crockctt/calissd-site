"use client";
import React, { useRef, useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const FAQS = [
  {q: "Who will contact me after I submit the form?", a: "A qualified California disability attorney will reach out to you for your free consultation."},
  {q: "Is my information confidential?", a: "Yes, your information is 100% confidential and only shared with a trusted attorney."},
  {q: "How much does the consultation cost?", a: "The consultation is completely free and there is no obligation to proceed."},
  {q: "How fast will I get a response?", a: "Most people receive a response within 24 hours."},
];

export default function Home() {
  const surveyRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const [faqDropdownOpen, setFaqDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

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
      <nav className={`sticky-nav w-full flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 transition-z duration-200 ${menuOpen ? 'z-30 bg-white' : 'z-50 bg-transparent backdrop-blur-md'}`}>
        <div className="flex items-center gap-4">
          <Image src="/Calissdlogo.PNG" alt="CaliSSD Logo" width={80} height={80} className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg shadow-lg border-2 border-[#F7B32B] bg-white/80" />
          <div className="flex flex-col ml-3">
            <span className="heading-display text-2xl sm:text-4xl font-extrabold text-[#15304B] tracking-tight leading-tight drop-shadow-lg" style={{ letterSpacing: '-0.01em' }}>
              California Social
            </span>
            <span className="heading-display text-lg sm:text-2xl font-semibold text-[#15304B] tracking-tight leading-tight mt-1 drop-shadow-md" style={{ letterSpacing: '-0.01em' }}>
              Security Disability
            </span>
          </div>
        </div>
        <button
          className="ml-auto flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F7B32B]/20 transition relative z-20 focus:ring-2 focus:ring-[#F7B32B]"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="5" width="28" height="3" rx="1.5" fill="#15304B" />
            <rect y="12.5" width="28" height="3" rx="1.5" fill="#15304B" />
            <rect y="20" width="28" height="3" rx="1.5" fill="#15304B" />
          </svg>
        </button>
        {/* Dropdown/modal menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 flex items-start justify-end" style={{background: 'rgba(255,255,255,0.6)', transition: 'background 0.3s'}} onClick={() => setMenuOpen(false)}>
            <div className="menu-modal bg-white shadow-2xl w-full max-w-md p-6 mt-0 sm:mt-8 mr-0 sm:mr-8 animate-fade-in-up rounded-l-2xl border-2 border-[#F7B32B] max-h-screen overflow-y-auto" style={{transform: 'translateX(0)', transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)'}} onClick={e => e.stopPropagation()} tabIndex={-1} aria-modal="true" role="dialog">
              <button className="absolute top-4 right-4 text-2xl font-bold text-[#15304B] focus:ring-2 focus:ring-[#F7B32B]" aria-label="Close menu" onClick={() => setMenuOpen(false)}>&times;</button>
              <h2 className="heading-display text-2xl font-bold text-[#15304B] mb-4">Menu</h2>
              {/* FAQ Dropdown */}
              <div className="mb-4">
                <button
                  className="w-full flex items-center justify-between py-3 px-2 font-bold text-xl text-[#15304B] bg-[#F6F3EE] rounded-lg shadow-sm hover:bg-[#F7B32B]/20 transition mb-2 focus:outline-none focus:ring-2 focus:ring-[#F7B32B]"
                  onClick={() => setFaqDropdownOpen(v => !v)}
                  aria-expanded={faqDropdownOpen}
                  aria-controls="faq-dropdown-panel"
                >
                  FAQ
                  <svg className={`ml-2 w-6 h-6 transition-transform duration-200 ${faqDropdownOpen ? 'rotate-90' : ''}`} fill="none" stroke="#15304B" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </button>
                {faqDropdownOpen && (
                  <div id="faq-dropdown-panel" className="divide-y divide-[#F7B32B]/40 bg-white rounded-lg shadow-md mt-1">
                    {FAQS.map((item, i) => (
                      <div key={i} className="border-l-4" style={{borderColor: faqOpen === i ? '#F7B32B' : 'transparent'}}>
                        <button
                          className="w-full text-left py-3 px-3 font-semibold text-[#15304B] flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#F7B32B]"
                          onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                          aria-expanded={faqOpen === i}
                          aria-controls={`faq-panel-${i}`}
                        >
                          {item.q}
                          <svg className={`ml-2 w-5 h-5 transition-transform duration-200 ${faqOpen === i ? 'rotate-90' : ''}`} fill="none" stroke="#15304B" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <div
                          id={`faq-panel-${i}`}
                          className={`faq-panel overflow-hidden transition-all duration-300 bg-[#F6F3EE] ${faqOpen === i ? 'max-h-40 py-2' : 'max-h-0 py-0'}`}
                          aria-hidden={faqOpen !== i}
                        >
                          <p className="text-[#15304B] text-base pl-4 pr-2">{item.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Contact Us Dropdown */}
              <div className="mb-8">
                <button
                  className="w-full flex items-center justify-between py-3 px-2 font-bold text-xl text-[#15304B] bg-[#F6F3EE] rounded-lg shadow-sm hover:bg-[#F7B32B]/20 transition mb-2 focus:outline-none focus:ring-2 focus:ring-[#F7B32B]"
                  onClick={() => setContactDropdownOpen(v => !v)}
                  aria-expanded={contactDropdownOpen}
                  aria-controls="contact-dropdown-panel"
                >
                  Contact Us
                  <svg className={`ml-2 w-6 h-6 transition-transform duration-200 ${contactDropdownOpen ? 'rotate-90' : ''}`} fill="none" stroke="#15304B" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </button>
                {contactDropdownOpen && (
                  <div id="contact-dropdown-panel" className="bg-white rounded-lg shadow-md mt-1 p-4">
                    {contactSuccess ? (
                      <div className="text-green-700 font-semibold mb-4">Thank you! We received your message.</div>
                    ) : (
                      <form className="flex flex-col gap-4" onSubmit={async e => {
                        e.preventDefault();
                        setContactError(null);
                        const form = e.currentTarget;
                        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                        try {
                          const res = await fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ name, email, message })
                          });
                          if (res.ok) {
                            setContactSuccess(true);
                          } else {
                            const data = await res.json();
                            console.error(data.error || 'Failed to send message.');
                            setContactError(data.error || 'Failed to send message.');
                          }
                        } catch (err) {
                          console.error(err);
                          setContactError('Failed to send message.');
                        }
                      }}>
                        <input type="text" name="name" placeholder="Your Name" className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B32B] bg-[#F6F3EE] text-lg" required />
                        <input type="email" name="email" placeholder="Your Email" className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B32B] bg-[#F6F3EE] text-lg" required />
                        <textarea name="message" placeholder="How can we help you?" className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B32B] bg-[#F6F3EE] text-lg" required />
                        <button type="submit" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-lg border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200">Send Message</button>
                        {contactError && <div className="text-red-600 font-semibold mt-2">{contactError}</div>}
                      </form>
                    )}
                    <div className="mt-4 text-[#15304B] text-base">
                      <div className="font-semibold mb-1">Or contact us directly:</div>
                      <div>Email: <a href="mailto:calileads11@gmail.com" className="underline text-[#F7B32B]">calileads11@gmail.com</a></div>
                      <div>Phone: <a href="tel:6519648710" className="underline text-[#F7B32B]">651-964-8710</a></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
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
