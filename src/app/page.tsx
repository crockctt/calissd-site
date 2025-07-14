"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "./components/Header";
import Head from "next/head";

// Extend window type for gtag and emailjs
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    Tally?: {
      openPopup: (formId: string) => void;
    };
    emailjs?: {
      send: (serviceId: string, templateId: string, templateParams: Record<string, unknown>, publicKey: string) => Promise<unknown>;
      init: (publicKey: string) => void;
    };
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
      }
    }
    window.addEventListener('message', handleTallySubmit);
    return () => window.removeEventListener('message', handleTallySubmit);
  }, [router]);

  // Debug Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('🔍 Checking Google Analytics...');
      console.log('📍 Current URL:', window.location.href);
      console.log('📱 User Agent:', navigator.userAgent);
      
      if (window.gtag) {
        console.log('✅ Google Analytics gtag is already loaded!');
        sendTestEvent();
      } else {
        console.log('⏳ gtag not loaded yet, waiting...');
        
        const checkGtag = (attempt: number) => {
          setTimeout(() => {
            if (window.gtag) {
              console.log(`✅ Google Analytics gtag loaded on attempt ${attempt}!`);
              sendTestEvent();
            } else if (attempt < 5) {
              console.log(`⏳ Attempt ${attempt}: gtag still not loaded, retrying...`);
              checkGtag(attempt + 1);
            } else {
              console.log('❌ Google Analytics gtag failed to load after 5 attempts');
            }
          }, attempt * 1000);
        };
        
        checkGtag(1);
      }
    }
    
    function sendTestEvent() {
      try {
        window.gtag!('event', 'page_view', {
          page_title: 'Homepage',
          page_location: window.location.href,
          custom_parameter: 'debug_test'
        });
        
        console.log('✅ Test page_view event sent to GA4');
        
        window.gtag!('event', 'debug_test', {
          event_category: 'debug',
          event_label: 'homepage_load',
          value: 1
        });
        
        console.log('✅ Debug test event sent to GA4');
        
        if (window.dataLayer) {
          console.log('✅ dataLayer is available');
          console.log('📊 Current dataLayer:', window.dataLayer);
        } else {
          console.log('❌ dataLayer is not available');
        }
        
        setTimeout(() => {
          const analyticsRequests = performance.getEntriesByType('resource')
            .filter((entry: PerformanceEntry) => entry.name.includes('google-analytics.com'));
          console.log('🌐 Google Analytics network requests:', analyticsRequests.length);
        }, 2000);
        
      } catch (error) {
        console.error('❌ Error sending test event:', error);
      }
    }
  }, []);

  // Load EmailJS
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load EmailJS script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      script.onload = () => {
        console.log('✅ EmailJS loaded successfully');
        // Initialize EmailJS
        if (window.emailjs) {
          window.emailjs.init('Ucc7MsjA1IHSzJcru');
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <Head>
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
          src="https://www.googletagmanager.com/ns.html?id=GTM-TW66B7VH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="min-h-screen bg-white flex flex-col relative font-sans">
        <Header />
        
        {/* Main Content - MN Style */}
        <main className="flex-1 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Focused Headline */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[#15304B] mb-4 text-center">
              Get Your Disability Benefits
            </h1>
            
            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm text-[#4B5A6A] font-medium">
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
                No Obligation
              </div>
            </div>
            
            {/* Embedded Tally Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <iframe
                src="https://tally.so/embed/mZg1Oe?alignLeft=1&hideTitle=1&transparentBackground=1"
                width="100%"
                height="700"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="SSI/SSD Eligibility Evaluation"
                className="rounded-lg"
              />
            </div>
            
            {/* Additional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8">
              <div className="text-center">
                <div className="bg-[#F7B32B]/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#15304B] mb-1">Quick Evaluation</h3>
                <p className="text-sm text-[#4B5A6A]">Get your results in minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-[#F7B32B]/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#15304B] mb-1">Expert Attorneys</h3>
                <p className="text-sm text-[#4B5A6A]">Experienced California lawyers</p>
              </div>
              <div className="text-center">
                <div className="bg-[#F7B32B]/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#15304B] mb-1">No Upfront Costs</h3>
                <p className="text-sm text-[#4B5A6A]">Only pay if you win</p>
              </div>
            </div>
            
            {/* Trust Note */}
            <div className="text-center mt-8 text-sm text-[#4B5A6A] leading-relaxed">
              <p className="mb-4">
                The information you obtain at this site is not, nor is it intended to be, legal advice. 
                This site is not affiliated with or endorsed by the Social Security Administration or www.ssa.gov.
              </p>
              <p>
                The information you submit about yourself will be given to an independent law firm, lawyer or advocate 
                who will contact you to evaluate your potential Social Security disability claim. This evaluation is free and confidential, and covers all qualifying disabilities.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-[#15304B] py-8 text-base bg-[#F6F3EE] border-t-0 font-medium tracking-tight">
          <div>About | <Link href="/contact">Contact</Link> | <Link href="/privacy">Privacy Policy</Link> | <Link href="/disclaimer">Disclaimer</Link></div>
          <div className="mt-2">&copy; {new Date().getFullYear()} CaliSSD. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
