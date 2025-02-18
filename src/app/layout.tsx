import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
// import { Footer } from "react-day-picker";
import Header from "../components/Header/header"


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Wallet Tracker",
  description: "One stop solution for all your wallet needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>
          {/* {header} */}
          <Header></Header>
        <main className="min-h-screen">{children}</main>
        {/* {footer} */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Thanks From #MHS</p>
          </div>

        </footer>
      </body>
    </html>
  );
}
