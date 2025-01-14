import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theming/theme-provider";
import AnimatedCursorClient from "@/components/ui/animated-cursor-client"; // Client component for lazy loading
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajayaditya - Full Stack Next.js Developer",
  description:
    "Full Stack Next.js Developer specializing in building modern, scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Ajayaditya" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="description" content={metadata.description as string} />
        <meta
          name="keywords"
          content={(metadata.keywords as string[]).join(", ")}
        />
        <meta name="author" content={metadata.authors as string} />
        <meta name="viewport" content={metadata.viewport as string} />
        <meta name="robots" content={metadata.robots as string} />
        <title>{metadata.title as string}</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedCursorClient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
