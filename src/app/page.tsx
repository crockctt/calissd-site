"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "./components/Header";

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
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
      {/* Tally Popup Script */}
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      
      {/* Hero Section - Conversion Focused */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 pt-16 pb-20 bg-gradient-to-b from-[#F6F3EE] to-white">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#15304B] mb-12 leading-tight">
          See if you qualify for SSI/SSD
        </h1>
        
        {/* Main CTA Button */}
        <button
          className="bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-12 py-6 text-2xl shadow-xl border-none outline-none focus:ring-4 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] hover:scale-105 transition-all duration-200 mb-12"
          style={{ cursor: 'pointer' }}
          onClick={() => document.querySelector('.tally-open')?.dispatchEvent(new Event('click', { bubbles: true }))}
        >
          Start Free Evaluation Now
        </button>
        
        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row gap-8 text-sm text-[#4B5A6A] font-medium">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Free & Confidential
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            California Attorneys
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No Upfront Costs
          </div>
        </div>
      </section>

      {/* Simple Benefits Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#15304B] mb-8">
            Get the benefits you deserve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#F7B32B]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#15304B] mb-2">Quick Evaluation</h3>
              <p className="text-[#4B5A6A]">60-second survey to check your eligibility</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#F7B32B]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#15304B] mb-2">Expert Help</h3>
              <p className="text-[#4B5A6A]">Connect with experienced California attorneys</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#F7B32B]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#F7B32B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#15304B] mb-2">No Risk</h3>
              <p className="text-[#4B5A6A]">Free consultation, no upfront costs</p>
            </div>
          </div>
          
          {/* Secondary CTA */}
          <button
            className="bg-[#15304B] text-white font-bold rounded-full px-10 py-4 text-xl shadow-lg border-none outline-none focus:ring-4 focus:ring-[#15304B] focus:ring-offset-2 hover:bg-[#1a3d5a] transition-all duration-200"
            style={{ cursor: 'pointer' }}
            onClick={() => document.querySelector('.tally-open')?.dispatchEvent(new Event('click', { bubbles: true }))}
          >
            Check My Eligibility Now
          </button>
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
