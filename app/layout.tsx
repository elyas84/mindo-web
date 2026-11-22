import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans-app",
});

export const metadata: Metadata = {
  title: {
    default: "Mindo — A calmer day starts here",
    template: "%s — Mindo",
  },
  description:
    "Mindo helps you remember what matters, keep notes, and share reminders with people you choose.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-20 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-10 border-b border-line bg-canvas/90 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
            <Link
              href="/"
              className="text-sm font-semibold tracking-widest text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              MINDO
            </Link>
            <nav aria-label="Primary">
              <Link
                href="/privacy"
                className="text-sm text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-auto border-t border-line">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-widest text-brand">MINDO</p>
              <p className="mt-2 text-sm text-muted">A little more peace of mind.</p>
            </div>
            <nav aria-label="Footer">
              <Link
                href="/privacy"
                className="text-sm text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
