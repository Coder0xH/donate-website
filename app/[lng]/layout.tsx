import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "希漫天使 - Web3公益捐赠平台",
  description: "通过区块链技术实现透明公益，帮助更多需要帮助的人。",
  icons: {
    icon: "/logos/head-logo.png?t=1706547033",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
    const resolvedParams = await params;
    const { lng } = resolvedParams;
  return (
    <html lang={lng}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black min-h-screen`}
      >
        <Navbar lng={lng} />
        {children}
      </body>
    </html>
  );
}
