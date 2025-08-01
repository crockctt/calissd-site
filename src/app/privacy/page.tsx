import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

export default function PrivacyPolicy() {
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
        <main className="py-12 px-4 max-w-2xl mx-auto min-h-screen">
          <Link href="/" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-[#15304B] mb-6 text-center">Privacy Policy</h1>
          <div className="space-y-6 text-[#15304B] text-base">
            <p>At CaliSSD, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
            <div>
              <h2 className="font-bold text-lg mb-2">Information We Collect</h2>
              <ul className="list-disc ml-6">
                <li>Information you provide via forms (name, contact info, case details)</li>
                <li>Technical data (IP address, browser type, device info)</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">How We Use Your Information</h2>
              <ul className="list-disc ml-6">
                <li>To connect you with qualified Social Security disability attorneys</li>
                <li>To respond to your inquiries and provide services</li>
                <li>To improve our website and services</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">Information Sharing</h2>
              <ul className="list-disc ml-6">
                <li>We do not sell your information.</li>
                <li>We may share your information with attorney partners for the purpose of providing legal services.</li>
                <li>We may disclose information if required by law.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">Data Security</h2>
              <p>We use industry-standard security measures to protect your data.</p>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">Your Choices</h2>
              <p>You may request to access, update, or delete your information by contacting us.</p>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">Contact</h2>
              <p>For privacy questions, email us at <a href="mailto:calileads11@gmail.com" className="underline hover:text-[#F7B32B]">calileads11@gmail.com</a>.</p>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">Updates</h2>
              <p>We may update this policy. Changes will be posted on this page.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 