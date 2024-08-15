import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/navigation";
import Header  from "@/components/layout/header";
import PageWrapper from "@/components/layout/wrapper";
import Footer from "@/components/layout/footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Food Order Application",
  description: "For Demo Purposes Only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={inter.className}>
        <Navigation />
        <Header />
        <PageWrapper >
        {children}
        </PageWrapper>
        <Footer />
        
      </body>
    </html>
  );
}
