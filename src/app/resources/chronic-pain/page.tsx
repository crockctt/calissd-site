import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

export default function ChronicPain() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <Header />
      <main className="py-12 px-4 bg-white border-t border-[#F7B32B]/40 max-w-4xl mx-auto min-h-screen">
        <Link href="/resources" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium">Back to Resources</span>
        </Link>
        
        <h1 className="text-3xl font-extrabold text-[#15304B] mb-4 text-center">Chronic Pain &amp; Physical Conditions</h1>
        <p className="text-lg text-[#4B5A6A] mb-8 text-center max-w-3xl mx-auto">
          Chronic pain and physical conditions can significantly impact your ability to work. Understanding how these conditions are evaluated for disability benefits is essential for a successful claim.
        </p>

        <div className="space-y-8">
          {/* How Chronic Pain is Evaluated */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">How Chronic Pain is Evaluated</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Objective Medical Evidence</h3>
                <p className="text-[#4B5A6A] text-sm">
                  The SSA requires objective medical evidence to support your pain claims:
                </p>
                <ul className="text-[#4B5A6A] text-sm mt-2 space-y-1">
                  <li>• Imaging studies (X-rays, MRIs, CT scans)</li>
                  <li>• Physical examination findings</li>
                  <li>• Laboratory test results</li>
                  <li>• Treatment records and medication history</li>
                  <li>• Surgical reports and post-operative notes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Functional Limitations Assessment</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Your ability to perform work-related activities is evaluated:
                </p>
                <ul className="text-[#4B5A6A] text-sm mt-2 space-y-1">
                  <li>• Sitting, standing, and walking capacity</li>
                  <li>• Lifting and carrying abilities</li>
                  <li>• Reaching, handling, and fingering</li>
                  <li>• Postural limitations (bending, stooping, kneeling)</li>
                  <li>• Environmental restrictions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Chronic Pain Conditions */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Common Chronic Pain Conditions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Back &amp; Spine Conditions</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-[#15304B]">Herniated Discs</h4>
                    <p className="text-[#4B5A6A] text-sm">Requires evidence of nerve root compression and functional limitations.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Spinal Stenosis</h4>
                    <p className="text-[#4B5A6A] text-sm">Narrowing of the spinal canal causing pain and mobility issues.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Degenerative Disc Disease</h4>
                    <p className="text-[#4B5A6A] text-sm">Progressive deterioration of spinal discs affecting movement.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Joint &amp; Arthritis Conditions</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-[#15304B]">Rheumatoid Arthritis</h4>
                    <p className="text-[#4B5A6A] text-sm">Autoimmune condition causing joint inflammation and deformity.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Osteoarthritis</h4>
                    <p className="text-[#4B5A6A] text-sm">Degenerative joint disease affecting mobility and function.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Fibromyalgia</h4>
                    <p className="text-[#4B5A6A] text-sm">Widespread pain syndrome requiring comprehensive documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Physical Conditions */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Other Physical Conditions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Neurological Conditions</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Multiple sclerosis (MS)</li>
                  <li>• Peripheral neuropathy</li>
                  <li>• Complex regional pain syndrome (CRPS)</li>
                  <li>• Post-herpetic neuralgia</li>
                  <li>• Trigeminal neuralgia</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Musculoskeletal Conditions</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Carpal tunnel syndrome</li>
                  <li>• Rotator cuff injuries</li>
                  <li>• Hip and knee replacements</li>
                  <li>• Scoliosis (severe cases)</li>
                  <li>• Amputations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Autoimmune Conditions</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Lupus (SLE)</li>
                  <li>• Sjögren&apos;s syndrome</li>
                  <li>• Scleroderma</li>
                  <li>• Ankylosing spondylitis</li>
                  <li>• Psoriatic arthritis</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Chronic Pain Syndromes</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Chronic fatigue syndrome</li>
                  <li>• Myofascial pain syndrome</li>
                  <li>• Chronic migraine</li>
                  <li>• Interstitial cystitis</li>
                  <li>• Endometriosis (severe cases)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documentation Requirements */}
          <div className="bg-[#F7B32B]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Documentation Requirements for Chronic Pain</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Medical Records</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Complete treatment history from all healthcare providers</li>
                  <li>• Imaging studies and diagnostic test results</li>
                  <li>• Medication lists and side effect documentation</li>
                  <li>• Physical therapy and rehabilitation records</li>
                  <li>• Surgical reports and post-operative notes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Pain Documentation</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Pain scale ratings over time</li>
                  <li>• Pain diary or journal entries</li>
                  <li>• Documentation of pain triggers and patterns</li>
                  <li>• Records of pain management treatments</li>
                  <li>• Statements about how pain affects daily activities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Functional Assessments</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Physical capacity evaluations</li>
                  <li>• Functional capacity assessments</li>
                  <li>• Work capacity evaluations</li>
                  <li>• Activities of daily living assessments</li>
                  <li>• Statements from family members about limitations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Treatment Compliance */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Treatment Compliance &amp; Pain Management</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Following Treatment Plans</h3>
                <p className="text-[#4B5A6A] text-sm">
                  The SSA expects you to follow prescribed treatments. Document all attempts at pain management including:
                </p>
                <ul className="text-[#4B5A6A] text-sm mt-2 space-y-1">
                  <li>• Medication compliance and side effects</li>
                  <li>• Physical therapy attendance and progress</li>
                  <li>• Alternative treatments (acupuncture, chiropractic, etc.)</li>
                  <li>• Injections and procedures</li>
                  <li>• Surgical interventions and outcomes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Pain Management Strategies</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Show that you&apos;ve tried various approaches to manage your pain:
                </p>
                <ul className="text-[#4B5A6A] text-sm mt-2 space-y-1">
                  <li>• Prescription medications and dosages</li>
                  <li>• Over-the-counter pain relievers</li>
                  <li>• Physical therapy and exercise programs</li>
                  <li>• Heat/cold therapy and other modalities</li>
                  <li>• Lifestyle modifications and accommodations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Challenges */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Common Challenges with Chronic Pain Claims</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Subjective Nature of Pain</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Pain is subjective and can&apos;t be measured like other medical conditions. Strong objective evidence and consistent documentation are crucial.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Inconsistent Medical Evidence</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Some conditions may not show up clearly on imaging or tests. Multiple sources of evidence help build a stronger case.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Treatment Gaps</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Gaps in treatment can hurt your claim. Be prepared to explain any periods without medical care (cost, access, etc.).
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Work Attempts</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Failed work attempts can actually strengthen your case by showing you&apos;ve tried to work despite your limitations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-6 py-3 text-base shadow-md border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200">
            Check My Eligibility
          </Link>
          <Link href="/contact" className="button bg-white text-[#15304B] font-bold rounded-full px-6 py-3 text-base shadow-md border border-[#F7B32B] outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#F7B32B]/20 transition-all duration-200">
            Get Legal Help
          </Link>
        </div>
      </main>
    </div>
  );
} 