import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat", 
  weight: ['400', '600', '700'], 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "CODENEXUS | GIFT Autonomous",
  description: "A 24-hour hackathon at Gandhi Institute for Technology, Bhubaneswar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased `} 
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
