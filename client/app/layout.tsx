import Appbar from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import { Upload } from "@/components/Upload";
import { Wallet } from "@/components/Wallet";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wallet>
          <NavBar />
          {children}
        </Wallet>
      </body>
    </html>
  );
}
