"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "./components/Header";

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
    <div className="min-h-screen bg-white flex flex-col relative font-sans">
      <Header />
      
      {/* Main Content - MN Style */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Focused Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#15304B] mb-4 text-center">
            Get Your Disability Benefits
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-[#F7B32B] font-semibold mb-6 text-center">
            Free Evaluation - No Upfront Costs
          </p>
          
          {/* Clear Description */}
          <p className="text-lg text-[#4B5A6A] mb-6 text-center max-w-3xl mx-auto leading-relaxed">
            If you have a physical or mental condition that prevents you from working, you may be entitled to Social Security Disability (SSDI) or Supplemental Security Income (SSI) benefits. 
            <strong>Get your free evaluation today</strong> and a California disability attorney will contact you about your claim.
          </p>
          
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
          
          {/* Embedded Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-[#15304B] mb-2">Start Your Free Evaluation</h2>
              <p className="text-sm text-[#4B5A6A]">Takes less than 2 minutes to complete</p>
            </div>
            
            {/* Custom Form - No Duplicates */}
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              
              // Get submit button and disable it
              const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
              const originalText = submitButton.textContent;
              submitButton.disabled = true;
              submitButton.textContent = 'Submitting...';
              
              // Get form data
              const formData = new FormData(e.currentTarget);
              const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                age: formData.get('age'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                workHistory: formData.get('workHistory'),
                lastWorkDate: formData.get('lastWorkDate'),
                workType: formData.get('workType'),
                applicationStatus: formData.get('applicationStatus'),
                disabilities: formData.get('disabilities'),
                consent: formData.get('consent')
              };

              try {
                // Track conversion in Google Analytics
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-17059308391/AjDiCISrxMMaEOfGwcY_',
                    'value': 1.0,
                    'currency': 'USD'
                  });
                  
                  window.gtag('event', 'form_submit', {
                    event_category: 'lead_generation',
                    event_label: 'disability_evaluation',
                    value: 1
                  });
                }

                // Send email using EmailJS
                if (window.emailjs) {
                  const templateParams = {
                    name: `${data.firstName} ${data.lastName}`,
                    age: data.age,
                    phone: data.phone,
                    email: data.email,
                    workHistory: data.workHistory,
                    lastWorkDate: data.lastWorkDate,
                    workType: data.workType,
                    applicationStatus: data.applicationStatus,
                    disabilities: data.disabilities,
                    consent: data.consent ? 'Yes' : 'No',
                    timestamp: new Date().toLocaleString()
                  };

                  await window.emailjs.send(
                    'service_k2ciukn',
                    'template_61436xn',
                    templateParams,
                    'Ucc7MsjA1IHSzJcru'
                  );

                  console.log('✅ Email sent successfully via EmailJS');
                  
                  // Show success message
                  alert('Thanks for submitting');
                  
                  // Clear the form completely
                  e.currentTarget.reset();
                  
                  // Reset button
                  submitButton.disabled = false;
                  submitButton.textContent = originalText;
                } else {
                  throw new Error('EmailJS not loaded');
                }
                
              } catch (error) {
                console.error('Form submission error:', error);
                
                // Fallback: Store in localStorage and show manual contact info
                const leads = JSON.parse(localStorage.getItem('disability_leads') || '[]');
                leads.push({
                  ...data,
                  timestamp: new Date().toISOString()
                });
                localStorage.setItem('disability_leads', JSON.stringify(leads));
                
                alert('Thanks for submitting');
                
                // Clear the form even on error
                e.currentTarget.reset();
                
                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalText;
              }
            }}>
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#15304B] mb-2">First Name *</label>
                  <input 
                    name="firstName"
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#15304B] mb-2">Last Name *</label>
                  <input 
                    name="lastName"
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">Age *</label>
                <input 
                  name="age"
                  type="number" 
                  min="18"
                  max="120"
                  required
                  placeholder="Enter your age"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">Phone Number *</label>
                <input 
                  name="phone"
                  type="tel" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">Email *</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                />
              </div>

              {/* Work History */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">Which describes how much you have worked? *</label>
                <select 
                  name="workHistory"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="most">I have worked in MOST of the last 10 years</option>
                  <option value="some">I have worked in SOME of the last 10 years</option>
                  <option value="little">I have worked in LITTLE or NONE of the past 10 years</option>
                </select>
              </div>

              {/* Last Work Date */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">When did you last work? *</label>
                <select 
                  name="lastWorkDate"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="this-year">This year</option>
                  <option value="last-year">Last year</option>
                  <option value="2-3-years">2 to 3 years ago</option>
                  <option value="4-5-years">4 to 5 years ago</option>
                  <option value="6-plus">6 or more years ago</option>
                </select>
              </div>

              {/* Work Type */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">How would you characterize your past work? *</label>
                <select 
                  name="workType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="heavy">Heavy or Very Heavy (lift 100 lbs or more)</option>
                  <option value="medium">Medium (have to lift 50 lbs)</option>
                  <option value="light">Light (have to lift 20 lbs)</option>
                  <option value="sit-down">Sit down job</option>
                  <option value="never">Never worked</option>
                </select>
              </div>

              {/* Application Status - NO DUPLICATE */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">Have you already applied for Social Security Disability benefits? *</label>
                <select 
                  name="applicationStatus"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="denied">Yes, denied</option>
                  <option value="pending">Yes, pending</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Disabilities */}
              <div>
                <label className="block text-sm font-medium text-[#15304B] mb-2">What are your disabilities? *</label>
                <textarea 
                  name="disabilities"
                  required
                  rows={3}
                  placeholder="Please describe your physical or mental conditions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input 
                  name="consent"
                  type="checkbox" 
                  required
                  className="mt-1 w-4 h-4 text-[#F7B32B] border-gray-300 rounded focus:ring-[#F7B32B]"
                />
                <label className="text-sm text-[#4B5A6A]">
                  I agree to the privacy policy and consent to being contacted about my potential claim. *
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#F7B32B] text-[#15304B] font-bold py-4 px-6 rounded-lg hover:bg-[#FFD369] transition-colors duration-200 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Submit Free Evaluation
              </button>
            </form>
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
  );
}
