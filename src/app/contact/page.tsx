"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

export default function ContactPage() {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager -->
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TW66B7VH');
              <!-- End Google Tag Manager -->
            `,
          }}
        />
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFH4QS6J"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="min-h-screen flex flex-col relative font-sans">
        <Header />
        <main className="py-12 px-4 max-w-2xl mx-auto min-h-screen">
          <Link href="/" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
          
          {/* Conversion CTA Section */}
          <div className="bg-[#F6F3EE] p-8 rounded-lg mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#15304B] mb-4">See if you qualify for SSI/SSD</h1>
            <p className="text-lg text-[#4B5A6A] mb-6">Get your free evaluation in 60 seconds</p>
            <button
              className="bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-10 py-4 text-xl shadow-lg border-none outline-none focus:ring-4 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] hover:scale-105 transition-all duration-200"
              style={{ cursor: 'pointer' }}
              data-tally-open="mZg1Oe"
              data-tally-layout="modal"
              data-tally-width="700"
              data-tally-emoji-text="📋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="2000"
              data-tally-hide-title="true"
              data-tally-overlay="true"
              data-tally-close-on-escape="true"
              data-tally-close-on-overlay-click="true"
            >
              Start Free Evaluation Now
            </button>
          </div>

          <h2 className="text-2xl font-extrabold text-[#15304B] mb-6 text-center">Contact Us</h2>
          <div className="text-lg text-[#15304B] text-center mb-4">Have questions? Reach out and we&apos;ll get back to you soon.</div>
          <div className="flex flex-col items-center gap-2 mb-8">
            <div>Email: <a href="mailto:calileads11@gmail.com" className="underline text-[#F7B32B]">calileads11@gmail.com</a></div>
            <div>Phone: <a href="tel:6519648710" className="underline text-[#F7B32B]">651-964-8710</a></div>
            <div>Office Hours: <span className="text-[#15304B]">Mon–Fri, 9am–5pm PT</span></div>
          </div>
          <div className="mb-8 flex justify-center">
            {/* Map Placeholder */}
            <div className="w-full h-48 bg-[#F7B32B]/10 rounded-xl flex items-center justify-center text-[#F7B32B] font-semibold text-lg">Service Area: California (Map Coming Soon)</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto w-full">
            {contactSuccess ? (
              <div className="text-green-700 font-semibold mb-4 text-center text-xl">Thank you! We received your message and will respond as soon as possible.</div>
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
                {contactError && <div className="text-red-600 font-semibold mt-2 text-center">{contactError}</div>}
              </form>
            )}
          </div>
          
          {/* Bottom CTA */}
          <div className="bg-[#F7B32B]/10 rounded-xl p-6 text-center mt-8">
            <div className="text-lg text-[#15304B] mb-4 font-semibold">Ready to see if you qualify?</div>
            <button
              className="bg-[#15304B] text-white font-bold rounded-full px-8 py-3 text-lg shadow-md border-none outline-none focus:ring-4 focus:ring-[#15304B] focus:ring-offset-2 hover:bg-[#1a3d5a] transition-all duration-200"
              style={{ cursor: 'pointer' }}
              data-tally-open="mZg1Oe"
              data-tally-layout="modal"
              data-tally-width="700"
              data-tally-emoji-text="📋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="2000"
              data-tally-hide-title="true"
              data-tally-overlay="true"
              data-tally-close-on-escape="true"
              data-tally-close-on-overlay-click="true"
            >
              Check My Eligibility Now
            </button>
          </div>
        </main>
      </div>
    </>
  );
} 