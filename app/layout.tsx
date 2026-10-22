import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oluwadarasimi Omojola — Frontend Engineer",
  description:
    "Frontend engineer specializing in complex product features, root-cause debugging, backend API integration, and reliable user interfaces.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "API Integration",
    "API Architecture",
    "State Management",
    "Product Features",
    "Root-Cause Debugging",
    "Reliable User Interfaces",
    "Resilient Applications",
    "Tailwind CSS",
    "TanStack Query",
    "Framer Motion",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Oluwadarasimi Omojola" }],
  openGraph: {
    title: "Oluwadarasimi Omojola — Frontend Engineer",
    description:
      "Frontend engineer specializing in complex product features, root-cause debugging, backend API integration, and reliable user interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
