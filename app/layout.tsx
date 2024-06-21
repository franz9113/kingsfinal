
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AgeVerification from "@/components/AgeVerification";

export const metadata: Metadata = {
  title: "Abdawn Limited",
  description: "Abdawn Limited",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="../assets/icons/logo.ico" />
      <body>
        {/* <AgeVerification /> */}
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
