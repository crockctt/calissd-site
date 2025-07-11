import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
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
      <div className="min-h-screen flex flex-col relative font-sans">
        <Header />
        <main className="py-12 px-4 max-w-2xl mx-auto min-h-screen">
          <Link href="/" className="inline-flex items-center gap-2 text-[#15304B] hover:text-[#F7B32B] transition mb-6 group">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-[#15304B] mb-6 text-center">Disclaimer</h1>
          <div className="space-y-6 text-[#15304B] text-base">
            <p>CaliSSD is not a law firm and does not provide legal advice. We connect individuals with qualified Social Security disability attorneys in California. Submitting information through this website does not create an attorney-client relationship. Legal outcomes vary and depend on the facts of each case. For legal advice, please consult a licensed attorney.</p>
            <div>
              <h2 className="font-bold text-lg mb-2">Attorney Advertising</h2>
              <p>This website may be considered attorney advertising. Past results do not guarantee future outcomes.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 