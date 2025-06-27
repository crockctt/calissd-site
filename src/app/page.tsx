/* eslint-disable react/no-unescaped-entities */
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
      {/* Hero Section - Purpose Driven */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 pt-12 pb-8 bg-gradient-to-b from-[#F6F3EE] to-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#15304B] mb-3 max-w-xl leading-tight drop-shadow-lg">
          <span className="block">Struggling With Disability Benefits?</span>
          <span className="block">We&#39;re On Your Side.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#4B5A6A] mb-6 max-w-xl">
          Fast, free help from real California advocates. No cost. No obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <button
            className="bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-lg border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200 mb-2 sm:mb-0"
            style={{ cursor: 'pointer' }}
            onClick={() => document.querySelector('.tally-open')?.dispatchEvent(new Event('click', { bubbles: true }))}
          >
            Get My Free Disability Evaluation
          </button>
        </div>
        <div className="mt-4 text-[#4B5A6A] text-base font-medium">
          100% confidential. Takes 60 seconds. You pay nothing unless you win.
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
      {/* How It Works (duplicated from /how-it-works) */}
      <section className="py-12 px-4 bg-white border-t border-[#F7B32B]/40">
        <h2 className="text-3xl font-extrabold text-[#15304B] mb-4 text-center">How It Works</h2>
        <p className="text-lg text-[#4B5A6A] mb-10 text-center max-w-2xl mx-auto">CaliSSD makes it simple to get the Social Security disability benefits you deserve. Here's how our process works, step by step.</p>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex-1 icon-card items-center">
            {/* Icon 1 - plain clipboard SVG (no checkmark) */}
            <svg className="text-4xl text-[#F7B32B] mb-2" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1.18C17.4 1.84 16.3 1 15 1h-6c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 3h6v2H9V3zm10 18H5V5h2v2c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v16z"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">1. See if you qualify</h3>
            <p className="text-[#15304B]">Answer a few quick questions to get started.</p>
          </div>
          <div className="flex-1 icon-card items-center">
            {/* Icon 2 */}
            <svg className="text-4xl text-[#F7B32B] mb-2" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C15.64 13.1 17 14.28 17 15.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <h3 className="text-xl font-bold mb-2">2. Talk to a real advocate</h3>
            <p className="text-[#15304B]">Get free, confidential advice from a California expert.</p>
          </div>
          <div className="flex-1 icon-card items-center">
            {/* Icon 3 */}
            <svg className="text-4xl text-[#F7B32B] mb-2" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            <h3 className="text-xl font-bold mb-2">3. Get matched with a lawyer</h3>
            <p className="text-[#15304B]">We'll connect you with a top Social Security disability attorney.</p>
          </div>
          <div className="flex-1 icon-card items-center">
            {/* Icon 4 - simple checkmark SVG */}
            <svg className="text-4xl text-[#F7B32B] mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 12l5 5 7-7" stroke="#F7B32B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">4. Get your benefits</h3>
            <p className="text-[#15304B]">Your lawyer handles the paperwork and fights for your case.</p>
          </div>
        </div>
      </section>
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-white to-[#F6F3EE]"></div>
      {/* Footer */}
      <footer className="text-center text-[#15304B] py-8 text-base bg-[#F6F3EE] border-t-0 mt-auto font-medium tracking-tight">
        <div>About | <Link href="/contact">Contact</Link> | <Link href="/privacy">Privacy Policy</Link> | <Link href="/disclaimer">Disclaimer</Link></div>
        <div className="mt-2">&copy; {new Date().getFullYear()} CaliSSD. All rights reserved.</div>
      </footer>
    </div>
  );
}
