import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";


const notoSansBengali  = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"]
});


export const metadata: Metadata = {
  title: 'অ্যাপস',
  description: 'সহজেই ডাউনলোড করুন নবীন, তরুণ এবং অগ্রদূত',
  authors: [{ name: "AHNayef", url: "https://github.com/ahnayef" }],
  keywords: ["education", "career"],
  metadataBase: new URL("https://bics-apps.vercel.app"),
  themeColor: "#4b1535",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: true,
  },


  openGraph: {
    url: 'https://bics-apps.vercel.app',
    siteName: 'bics-apps',
    images: [
      {
        url: 'meta.png',
        width: 1280,
        height: 720,
        alt: 'Meta Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    creator: "bics-apps",
    site: "https://bics-apps.vercel.app",
    images: [
      {
        url: 'meta.png',
        width: 1280,
        height: 720,
        alt: 'Meta Image',
      },
    ],
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansBengali.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
