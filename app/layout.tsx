import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";


const notoSansBengali  = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"]
});

export const metadata: Metadata = {
 title: 'অ্যাপস',
  description: 'সহজেই ডাউনলোড করুন নবীন, তরুণ এবং অগ্রদূত '
};

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
