import type { Metadata } from "next";
import localFont from "next/font/local";
import {poppins} from "@/app/ui/fonts";
import {inter} from "@/app/ui/fonts";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Books Cart - Opened with 💖 by HassanRJ",
  description: "Unleash the Power Of Knowledge - Explore a world of books that will take you on a journey of discovery and imagination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.className} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
