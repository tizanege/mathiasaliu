import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hon. Mathias Aliu | A New Voice for Etsako Central",
  description: "Official campaign website for Hon. Mathias Aliu, candidate for Etsako Central State House of Assembly, Edo State.",
  keywords: ["Mathias Aliu", "Etsako Central", "Edo State", "House of Assembly", "Election", "Campaign"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
