
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import MainNavigation from "@/components/MainNavigation";

export const metadata: Metadata = {
  title: "Weather App | Live Weather & Forecasts",
  description:
    "Check current weather, hourly conditions, and a 7-day forecast for cities around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <MainNavigation/>

        <main>{children}</main>
        <Footer/>
        
        </body>
    </html>
  );
}

