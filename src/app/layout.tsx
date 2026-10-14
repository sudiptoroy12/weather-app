
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atmos Weather | Live Weather & Forecasts",
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
      <body>{children}</body>
    </html>
  );
}

