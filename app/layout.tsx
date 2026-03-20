// app/layout.tsx
import type { Metadata } from "next";
import { Julius_Sans_One, Syncopate, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import FloatingButton from "./component/FloatingButton";
import Footer from "./component/Footer";
// Fonts
export const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
  display: "swap",
});

export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kvillingebil",
  /*  description: "Tallbackens Vandrarhem & Apartments", */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Include both font variables */}
      <body
        className={`${syncopate.variable} ${julius.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
