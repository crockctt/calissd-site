import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

export default function MentalHealth() {
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
        
        <h1 className="text-3xl font-extrabold text-[#15304B] mb-4 text-center">Mental Health Conditions &amp; Disability Benefits</h1>
        <p className="text-lg text-[#4B5A6A] mb-8 text-center max-w-3xl mx-auto">
          Mental health conditions can qualify for Social Security disability benefits when they significantly impact your ability to work. Understanding how these conditions are evaluated is crucial for a successful claim.
        </p>

        <div className="space-y-8">
          {/* How Mental Health Conditions Are Evaluated */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">How Mental Health Conditions Are Evaluated</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Functional Limitations</h3>
                <p className="text-[#4B5A6A] text-sm">
                  The SSA evaluates how your mental health condition affects your ability to:
                </p>
                <ul className="text-[#4B5A6A] text-sm mt-2 space-y-1">
                  <li>• Understand, remember, and apply information</li>
                  <li>• Interact with others</li>
                  <li>• Concentrate, persist, and maintain pace</li>
                  <li>• Adapt and manage yourself</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Medical Evidence Requirements</h3>
                <p className="text-[#4B5A6A] text-sm">
                  You&apos;ll need documentation from mental health professionals including:
                </p>
                <ul className="text-[#4B5A6A] text-sm mt-2 space-y-1">
                  <li>• Psychiatric evaluations and diagnoses</li>
                  <li>• Treatment records and medication history</li>
                  <li>• Hospitalization records (if applicable)</li>
                  <li>• Therapy notes and progress reports</li>
                  <li>• Statements from treating physicians</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qualifying Mental Health Conditions */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Qualifying Mental Health Conditions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Mood Disorders</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-[#15304B]">Major Depressive Disorder</h4>
                    <p className="text-[#4B5A6A] text-sm">Must show persistent depressive symptoms that significantly impact daily functioning and work capacity.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Bipolar Disorder</h4>
                    <p className="text-[#4B5A6A] text-sm">Requires documentation of manic and depressive episodes that affect work performance.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Persistent Depressive Disorder</h4>
                    <p className="text-[#4B5A6A] text-sm">Long-term depression that interferes with work activities and social functioning.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Anxiety &amp; Trauma Disorders</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-[#15304B]">Generalized Anxiety Disorder</h4>
                    <p className="text-[#4B5A6A] text-sm">Excessive anxiety that interferes with concentration and work performance.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Post-Traumatic Stress Disorder (PTSD)</h4>
                    <p className="text-[#4B5A6A] text-sm">Flashbacks, nightmares, and avoidance behaviors that impact work ability.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#15304B]">Panic Disorder</h4>
                    <p className="text-[#4B5A6A] text-sm">Recurrent panic attacks that prevent consistent work attendance and performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Qualifying Conditions */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Other Qualifying Mental Health Conditions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Psychotic Disorders</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Schizophrenia</li>
                  <li>• Schizoaffective disorder</li>
                  <li>• Delusional disorder</li>
                  <li>• Brief psychotic disorder</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Personality Disorders</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Borderline personality disorder</li>
                  <li>• Avoidant personality disorder</li>
                  <li>• Obsessive-compulsive personality disorder</li>
                  <li>• Paranoid personality disorder</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Neurodevelopmental Disorders</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Autism spectrum disorder</li>
                  <li>• Attention deficit hyperactivity disorder (ADHD)</li>
                  <li>• Intellectual disability</li>
                  <li>• Learning disorders</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-3">Eating Disorders</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Anorexia nervosa</li>
                  <li>• Bulimia nervosa</li>
                  <li>• Binge eating disorder</li>
                  <li>• Avoidant/restrictive food intake disorder</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips for Mental Health Claims */}
          <div className="bg-[#F7B32B]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Tips for Mental Health Disability Claims</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Documentation is Key</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Keep detailed records of all mental health treatment</li>
                  <li>• Document how symptoms affect daily activities</li>
                  <li>• Maintain a symptom diary or journal</li>
                  <li>• Get statements from family members about your limitations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Treatment Compliance</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Follow your treatment plan consistently</li>
                  <li>• Attend all therapy sessions and appointments</li>
                  <li>• Take medications as prescribed</li>
                  <li>• Report side effects to your healthcare providers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Work History Impact</h3>
                <ul className="text-[#4B5A6A] text-sm space-y-1">
                  <li>• Document work absences due to mental health</li>
                  <li>• Keep records of performance issues</li>
                  <li>• Note any accommodations you&apos;ve needed</li>
                  <li>• Document any job changes due to symptoms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Challenges */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Common Challenges with Mental Health Claims</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Invisible Illness Stigma</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Mental health conditions are often misunderstood. Strong medical documentation and detailed functional assessments are crucial to overcome this challenge.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Inconsistent Symptoms</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Mental health symptoms can vary day-to-day. Documenting patterns, triggers, and overall functional limitations helps establish the severity of your condition.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Treatment Gaps</h3>
                <p className="text-[#4B5A6A] text-sm">
                  Gaps in treatment can hurt your claim. If you&apos;ve had periods without treatment, be prepared to explain why (cost, access, stigma, etc.).
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