import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon-v2.png" type="image/png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17059308391"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17059308391');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        [13:37:47.661] Running build in Washington, D.C., USA (East) – iad1
[13:37:47.662] Build machine configuration: 2 cores, 8 GB
[13:37:47.696] Cloning github.com/crockctt/calissd-site (Branch: main, Commit: f616daa)
[13:37:48.872] Cloning completed: 1.176s
[13:37:51.920] Restored build cache from previous deployment (FMre67drAB4qZw9qXeMoyxtvVnuR)
[13:37:52.552] Running "vercel build"
[13:37:52.997] Vercel CLI 43.1.0
[13:37:53.297] Installing dependencies...
[13:37:54.599] 
[13:37:54.599] up to date in 1s
[13:37:54.600] 
[13:37:54.600] 140 packages are looking for funding
[13:37:54.601]   run `npm fund` for details
[13:37:54.635] Detected Next.js version: 15.3.3
[13:37:54.638] Running "npm run build"
[13:37:54.752] 
[13:37:54.753] > calissd@0.1.0 build
[13:37:54.753] > next build
[13:37:54.753] 
[13:37:55.679]    ▲ Next.js 15.3.3
[13:37:55.680] 
[13:37:55.710]    Creating an optimized production build ...
[13:38:01.631]  ✓ Compiled successfully in 2000ms
[13:38:01.636]    Linting and checking validity of types ...
[13:38:05.266] 
[13:38:05.267] Failed to compile.
[13:38:05.267] 
[13:38:05.267] ./src/app/layout.tsx
[13:38:05.267] 28:9  Warning: Custom fonts not added in `pages/_document.js` will only load for a single page. This is discouraged. See: https://nextjs.org/docs/messages/no-page-custom-font  @next/next/no-page-custom-font
[13:38:05.267] 30:9  Warning: Prefer `next/script` component when using the inline script for Google Analytics. See: https://nextjs.org/docs/messages/next-script-for-ga  @next/next/next-script-for-ga
[13:38:05.267] 
[13:38:05.267] ./src/app/page.tsx
[13:38:05.267] 9:22  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[13:38:05.267] 
[13:38:05.268] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[13:38:05.299] Error: Command "npm run build" exited with 1
[13:38:05.509] 
[13:38:08.409] Exiting build container
      </body>
    </html>
  );
}