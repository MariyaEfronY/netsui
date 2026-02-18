"use client"; // We need this for the loading state logic

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timer controls how long the logo stays on screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8s gives enough time for a premium entrance

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        <CustomCursor />

        {/* We wrap children in a motion div to fade the content in 
          smoothly once the loader is gone.
        */}
        <div className={isLoading ? "h-screen overflow-hidden" : ""}>
          {children}
        </div>
      </body>
    </html>
  );
}