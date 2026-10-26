import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sitthaphop Sukjaroen | Junior Full Stack Developer",
  description:
    "Portfolio of Sitthaphop Sukjaroen, a junior full stack developer focused on web applications, REST APIs, and relational databases.",
  openGraph: {
    title: "Sitthaphop Sukjaroen | Junior Full Stack Developer",
    description: "Selected projects, experience, skills, and contact information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
