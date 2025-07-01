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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon-v2.png" type="image/png" />
        <link rel="icon" href="/Calissdlogo.PNG" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PTPLFZNX4D" strategy="afterInteractive" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTPLFZNX4D');
            gtag('config', 'AW-17240176145');
            console.log('🔧 GA4 Script loaded and configured for G-PTPLFZNX4D');
          `}
        </Script>
        {/* Tally Script */}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        {/* Microsoft Clarity */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s67j4vqdgw");
          `
        }} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}