import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

export default function DisabilitiesList() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <Header />
      <main className="py-12 px-4 bg-white border-t border-[#F7B32B]/40 max-w-6xl mx-auto min-h-screen">
        <Link href="/resources" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium">Back to Resources</span>
        </Link>
        
        <h1 className="text-3xl font-extrabold text-[#15304B] mb-4 text-center">Complete List of Qualifying Disabilities</h1>
        <p className="text-lg text-[#4B5A6A] mb-8 text-center max-w-3xl mx-auto">
          The Social Security Administration (SSA) maintains a comprehensive list of medical conditions that automatically qualify for disability benefits. This list is known as the &quot;Blue Book&quot; or Listing of Impairments.
        </p>

        <div className="space-y-8">
          {/* Musculoskeletal System */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Musculoskeletal System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Back &amp; Spine Conditions</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Herniated discs with nerve root compression</li>
                  <li>• Spinal stenosis</li>
                  <li>• Degenerative disc disease</li>
                  <li>• Scoliosis (severe cases)</li>
                  <li>• Spinal fusion complications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Joint &amp; Limb Conditions</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Severe arthritis (rheumatoid, osteoarthritis)</li>
                  <li>• Joint replacements with complications</li>
                  <li>• Amputations</li>
                  <li>• Fractures that don&apos;t heal properly</li>
                  <li>• Chronic pain syndromes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cardiovascular System */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Cardiovascular System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Heart Conditions</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Congestive heart failure</li>
                  <li>• Coronary artery disease</li>
                  <li>• Heart attacks (with complications)</li>
                  <li>• Cardiomyopathy</li>
                  <li>• Heart valve disorders</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Vascular Conditions</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Peripheral artery disease</li>
                  <li>• Deep vein thrombosis</li>
                  <li>• Aortic aneurysms</li>
                  <li>• Hypertension (severe cases)</li>
                  <li>• Blood clotting disorders</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Respiratory System */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Respiratory System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Lung Conditions</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Chronic obstructive pulmonary disease (COPD)</li>
                  <li>• Emphysema</li>
                  <li>• Chronic bronchitis</li>
                  <li>• Asthma (severe cases)</li>
                  <li>• Pulmonary fibrosis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Other Respiratory</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Sleep apnea (with complications)</li>
                  <li>• Cystic fibrosis</li>
                  <li>• Lung cancer</li>
                  <li>• Pulmonary hypertension</li>
                  <li>• Respiratory failure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mental Health Conditions */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Mental Health Conditions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Mood Disorders</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Major depressive disorder</li>
                  <li>• Bipolar disorder</li>
                  <li>• Persistent depressive disorder</li>
                  <li>• Seasonal affective disorder</li>
                  <li>• Postpartum depression</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Anxiety &amp; Trauma</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Generalized anxiety disorder</li>
                  <li>• Post-traumatic stress disorder (PTSD)</li>
                  <li>• Panic disorder</li>
                  <li>• Social anxiety disorder</li>
                  <li>• Obsessive-compulsive disorder (OCD)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Neurological Conditions */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Neurological Conditions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Brain &amp; Nervous System</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Multiple sclerosis (MS)</li>
                  <li>• Parkinson&apos;s disease</li>
                  <li>• Epilepsy</li>
                  <li>• Traumatic brain injury (TBI)</li>
                  <li>• Cerebral palsy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Other Neurological</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Amyotrophic lateral sclerosis (ALS)</li>
                  <li>• Huntington&apos;s disease</li>
                  <li>• Alzheimer&apos;s disease</li>
                  <li>• Dementia</li>
                  <li>• Peripheral neuropathy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cancer &amp; Immune System */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Cancer &amp; Immune System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Cancer Types</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Breast cancer (advanced stages)</li>
                  <li>• Lung cancer</li>
                  <li>• Colon cancer</li>
                  <li>• Leukemia</li>
                  <li>• Lymphoma</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Immune Disorders</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Lupus (SLE)</li>
                  <li>• Rheumatoid arthritis</li>
                  <li>• HIV/AIDS</li>
                  <li>• Sjögren&apos;s syndrome</li>
                  <li>• Scleroderma</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Digestive System */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Digestive System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Gastrointestinal</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Crohn&apos;s disease</li>
                  <li>• Ulcerative colitis</li>
                  <li>• Irritable bowel syndrome (severe)</li>
                  <li>• Liver disease (cirrhosis)</li>
                  <li>• Pancreatitis (chronic)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Other Digestive</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Celiac disease (with complications)</li>
                  <li>• Gastroparesis</li>
                  <li>• Gastroesophageal reflux disease (GERD)</li>
                  <li>• Diverticulitis (chronic)</li>
                  <li>• Gallbladder disease (chronic)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Endocrine System */}
          <div className="bg-[#F6F3EE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#15304B] mb-4">Endocrine System</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Diabetes &amp; Thyroid</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Diabetes mellitus (with complications)</li>
                  <li>• Diabetic neuropathy</li>
                  <li>• Diabetic retinopathy</li>
                  <li>• Hypothyroidism (severe)</li>
                  <li>• Hyperthyroidism (severe)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#15304B] mb-2">Other Endocrine</h3>
                <ul className="text-[#4B5A6A] space-y-1 text-sm">
                  <li>• Addison&apos;s disease</li>
                  <li>• Cushing&apos;s syndrome</li>
                  <li>• Pituitary disorders</li>
                  <li>• Parathyroid disorders</li>
                  <li>• Adrenal insufficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#F7B32B]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#15304B] mb-4">Important Notes</h3>
          <ul className="text-[#4B5A6A] space-y-2">
            <li>• <strong>Severity matters:</strong> The condition must be severe enough to prevent substantial gainful activity (SGA)</li>
            <li>• <strong>Duration requirement:</strong> The condition must be expected to last at least 12 months or result in death</li>
            <li>• <strong>Medical evidence:</strong> You must have sufficient medical documentation to support your claim</li>
            <li>• <strong>Not all conditions listed:</strong> Even if your condition isn&apos;t on this list, you may still qualify</li>
            <li>• <strong>Consult an attorney:</strong> A qualified disability attorney can help evaluate your specific case</li>
          </ul>
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