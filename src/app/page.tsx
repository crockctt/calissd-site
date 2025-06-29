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

  return (
    <div className="min-h-screen bg-white flex flex-col relative font-sans">
      <Header />
      
      {/* Main Content - MN Style */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Focused Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#15304B] mb-6 text-center">
            Back Injuries
          </h1>
          
          {/* Clear Description */}
          <p className="text-lg text-[#4B5A6A] mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            If you have a <strong>back injury or persistent back pain</strong>, you may be entitled to Social Security disability benefits. 
            To see if you qualify for Social Security disability for your condition, fill in the below information and a representative will contact you about your claim.
          </p>
          
          {/* Embedded Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
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
          
          {/* Trust Note */}
          <div className="text-center mt-8 text-sm text-[#4B5A6A] leading-relaxed">
            <p className="mb-4">
              The information you obtain at this site is not, nor is it intended to be, legal advice. 
              This site is not affiliated with or endorsed by the Social Security Administration or www.ssa.gov.
            </p>
            <p>
              The information you submit about yourself will be given to an independent law firm, lawyer or advocate 
              who will contact you to evaluate your potential Social Security disability claim.
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
  );
}
