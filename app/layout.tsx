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
    "Portfolio of Oluwadarasimi Omojola. Frontend Engineer building reliable, accessible web applications with deep API integration, state management, and defensive systems architecture.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "API Integration",
    "TanStack Query",
    "Software Engineer",
  ],
  authors: [{ name: "Oluwadarasimi Omojola" }],
  openGraph: {
    title: "Oluwadarasimi Omojola — Frontend Engineer",
    description:
      "Frontend engineer taking ownership of complex product features, tracing root causes, and delivering resilient applications.",
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
      <body className={`${inter.className} antialiased min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
