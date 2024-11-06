import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TanstackProviderWrapper from "@/provider/TanstackProviderWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PMTool",
  description: "An ultimate PMTool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full ml-5 mt-5`}
      >
        <TanstackProviderWrapper>{children}</TanstackProviderWrapper>
      </body>
    </html>
  );
}
