"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "./components/Header";

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    Tally?: {
      openPopup: (formId: string) => void;
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
        // No redirect
      }
    }
    window.addEventListener('message', handleTallySubmit);
    return () => window.removeEventListener('message', handleTallySubmit);
  }, [router]);

  // Debug Google Analytics
  useEffect(() => {
    // Check if gtag is loaded
    if (typeof window !== 'undefined') {
      console.log('🔍 Checking Google Analytics...');
      console.log('📍 Current URL:', window.location.href);
      console.log('📱 User Agent:', navigator.userAgent);
      
      // Check immediately
      if (window.gtag) {
        console.log('✅ Google Analytics gtag is already loaded!');
        sendTestEvent();
      } else {
        console.log('⏳ gtag not loaded yet, waiting...');
        
        // Check multiple times with increasing delays
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
              console.log('🔍 Checking for potential issues:');
              console.log('- Ad blocker might be active');
              console.log('- Network connectivity issues');
              console.log('- Script loading order problems');
              
              // Check if the script tag exists in DOM
              const scriptTags = document.querySelectorAll('script[src*="googletagmanager"]');
              console.log(`📜 Found ${scriptTags.length} Google Tag Manager script tags`);
              
              // Check for network errors
              const networkErrors = performance.getEntriesByType('resource')
                .filter((entry: PerformanceEntry) => entry.name.includes('googletagmanager') && entry.duration === 0);
              if (networkErrors.length > 0) {
                console.log('❌ Network errors detected for Google Tag Manager');
              }
              
              // Try to manually trigger a network request to test connectivity
              fetch('https://www.googletagmanager.com/gtag/js?id=G-PTPLFZNX4D', { method: 'HEAD' })
                .then(() => console.log('✅ Network connectivity to Google Tag Manager is working'))
                .catch(() => console.log('❌ Network connectivity to Google Tag Manager failed'));
            }
          }, attempt * 1000); // 1s, 2s, 3s, 4s, 5s
        };
        
        checkGtag(1);
      }
    }
    
    function sendTestEvent() {
      try {
        // Send a test page_view event
        window.gtag!('event', 'page_view', {
          page_title: 'Homepage',
          page_location: window.location.href,
          custom_parameter: 'debug_test'
        });
        
        console.log('✅ Test page_view event sent to GA4');
        
        // Also send a custom debug event
        window.gtag!('event', 'debug_test', {
          event_category: 'debug',
          event_label: 'homepage_load',
          value: 1
        });
        
        console.log('✅ Debug test event sent to GA4');
        
        // Check if dataLayer is working
        if (window.dataLayer) {
          console.log('✅ dataLayer is available');
          console.log('📊 Current dataLayer:', window.dataLayer);
          
          // Check if the dataLayer contains our events
          const hasPageView = window.dataLayer.some((item: unknown) => 
            (item as { event?: string }).event === 'page_view' || 
            (Array.isArray(item) && item[0] === 'event' && item[1] === 'page_view')
          );
          console.log('📊 dataLayer contains page_view event:', hasPageView);
        } else {
          console.log('❌ dataLayer is not available');
        }
        
        // Test network request to Google Analytics
        setTimeout(() => {
          const analyticsRequests = performance.getEntriesByType('resource')
            .filter((entry: PerformanceEntry) => entry.name.includes('google-analytics.com'));
          console.log('🌐 Google Analytics network requests:', analyticsRequests.length);
          if (analyticsRequests.length > 0) {
            console.log('✅ Google Analytics network requests detected');
          } else {
            console.log('❌ No Google Analytics network requests detected');
          }
        }, 2000);
        
      } catch (error) {
        console.error('❌ Error sending test event:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen home-bg flex flex-col relative font-sans">
      <Header />
      
      {/* Hero Section - Conversion Focused */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 pt-16 pb-12 bg-gradient-to-b from-[#F6F3EE] to-white">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#15304B] mb-8 leading-tight">
          See if you qualify for SSI/SSD
        </h1>
        
        <p className="text-xl text-[#4B5A6A] mb-8 max-w-2xl mx-auto">
          Get your free evaluation in 60 seconds. No obligation, no upfront costs.
        </p>
        
        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row gap-6 text-sm text-[#4B5A6A] font-medium mb-8">
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
      </section>

      {/* Embedded Form Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#15304B] mb-4">
              Get Your Free Evaluation
            </h2>
            <p className="text-lg text-[#4B5A6A] max-w-2xl mx-auto">
              Fill out the form below and a California disability attorney will contact you to discuss your case. 
              This evaluation is completely free and confidential.
            </p>
          </div>
          
          {/* Embedded Tally Form */}
          <div className="bg-[#F6F3EE] rounded-lg p-6 shadow-lg">
            <iframe
              src="https://tally.so/embed/mZg1Oe?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="SSI/SSD Eligibility Evaluation"
              className="rounded-lg"
            />
          </div>
          
          {/* Additional Trust Signals */}
          <div className="text-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#4B5A6A]">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick 60-second evaluation
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Experienced California attorneys
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                No upfront costs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#15304B] py-8 text-base bg-[#F6F3EE] border-t-0 mt-auto font-medium tracking-tight">
        <div>About | <Link href="/contact">Contact</Link> | <Link href="/privacy">Privacy Policy</Link> | <Link href="/disclaimer">Disclaimer</Link></div>
        <div className="mt-2">&copy; {new Date().getFullYear()} CaliSSD. All rights reserved.</div>
      </footer>
    </div>
  );
}
