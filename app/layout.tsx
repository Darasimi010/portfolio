import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwadarasimi Omojola | Software Developer",
  description:
    "Portfolio of a Software Developer specializing in React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' makes the anchor links (#about, #contact) scroll nicely
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
