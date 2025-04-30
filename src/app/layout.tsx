import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import ClientBody from "./ClientBody";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  import BackgroundImage from "@/components/BackgroundImage";
  import { Inter } from '@next/font/google';

  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "SaaS Design Inspiration Hub",
    description: "Find the best SaaS design inspirations to build your next project 10x faster.",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className={`font-inter ${inter.className}`} suppressHydrationWarning>
          <ClientBody>
            <BackgroundImage>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
            </BackgroundImage>
          </ClientBody>
        </body>
      </html>
    );
  }