import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

// export const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
//  export const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "TaskBounty",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <div className="max-w-full overflow-x-hidden">
          <Navbar />
          <main className="w-full overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
