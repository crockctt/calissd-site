import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CaliSSD - California's Trusted Disability Law Connection",
  description: "Get a free consultation with a top Social Security Disability attorney. CaliSSD connects individuals seeking disability benefits with experienced legal representation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KFH4QS6J');
          `
        }} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/Calissdlogo.PNG" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#F6F3EE]`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFH4QS6J" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <SpeedInsights />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PTPLFZNX4D" strategy="afterInteractive" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTPLFZNX4D');
            gtag('config', 'AW-17240176145');
          `}
        </Script>
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "s67j4vqdgw");`
          }}
        />
        {children}
      </body>
    </html>
  );
}