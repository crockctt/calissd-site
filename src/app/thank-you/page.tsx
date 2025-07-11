import Link from "next/link";
import Script from "next/script";
import Head from "next/head";

export default function ThankYou() {
  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KFH4QS6J');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFH4QS6J"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F3EE] px-4">
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17240176145/RUz7CM-WlusaEJHs4JxA',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </Script>
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-16 flex flex-col items-center animate-fade-in">
          <h1 className="heading-display text-4xl sm:text-5xl font-extrabold text-[#15304B] mb-4 text-center">Thank You!</h1>
          <p className="body-sans text-lg sm:text-xl text-[#15304B] mb-8 text-center max-w-xl">
            Your information has been received. A qualified California disability attorney will reach out to you soon for your free consultation.
          </p>
          <Link href="/" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-xl border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
} 