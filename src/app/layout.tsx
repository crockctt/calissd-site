import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#F6F3EE]`}>
        {/* eslint-disable-next-line react/no-danger */}
        {/* prettier-ignore */}
        {/* Google Tag Manager (noscript) */}
        {/* The following HTML comments are for clarity and will not appear in the final HTML, but match Google's snippet */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFH4QS6J" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <SpeedInsights />
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, \"clarity\", \"script\", \"s67j4vqdgw\");`
          }}
        />
        {children}
      </body>
    </html>
  );
}