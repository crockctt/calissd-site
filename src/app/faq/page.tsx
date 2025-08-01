"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Head from "next/head";

export default function FAQPage() {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17240176145"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17240176145');
            `,
          }}
        />
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PTPLFZNX4D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PTPLFZNX4D');
            `,
          }}
        />
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TW66B7VH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="min-h-screen flex flex-col relative font-sans">
        <Header />
        <main className="py-12 px-4 max-w-3xl mx-auto min-h-screen">
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

          <h2 className="text-2xl font-extrabold text-[#15304B] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8 text-[#15304B] text-lg">
            <div>
              <h3 className="font-bold mb-2">How much does CaliSSD charge?</h3>
              <p>We offer free consultations. If you hire a lawyer, rates and fee structures may differ depending on the attorney and your case. Please discuss fees directly with your attorney.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What happens after I fill out the form?</h3>
              <p>A real advocate will reach out to discuss your situation and next steps. If you qualify, we&apos;ll connect you with an experienced California Social Security disability attorney.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is CaliSSD a law firm?</h3>
              <p>No, CaliSSD is not a law firm. We connect you with experienced California Social Security disability attorneys.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Who will contact me?</h3>
              <p>You&apos;ll be contacted by a knowledgeable advocate or a qualified attorney partner who specializes in Social Security disability cases.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What information do I need to provide?</h3>
              <p>Basic contact information and a brief description of your situation. All information is kept confidential.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How long does the process take?</h3>
              <p>Response times vary, but we aim to connect you with an attorney within 24 hours.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What if I&apos;m denied benefits?</h3>
              <p>If you&apos;re denied, your attorney can help you appeal the decision and guide you through the next steps.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is my information secure?</h3>
              <p>Yes. We use industry-standard security measures to protect your data and only share it with attorney partners as needed.</p>
            </div>
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