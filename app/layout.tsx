import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "SLOP.TECHNOLOGY — Oracle-Grade Narrative Engine",
  description:
    "Premium operator console that generates provenance-linked media packs from Logic Packages.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
