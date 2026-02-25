import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taha Amir's Portfolio — Software Engineer",
  description:
    "This is my portfiolio. I am a full-stack developer specializing in AI, Cloud, and Data Science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
