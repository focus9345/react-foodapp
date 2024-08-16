import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
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
    <html lang="en" className="dark scroll-smooth focus:scroll-auto" suppressHydrationWarning>
      <body className={inter.className}>
      <Providers>
        
        <div className="flex flex-col justify-between">
          <Header />
          <PageWrapper >
            {children}
          </PageWrapper>
          <Footer />
        </div>
      
        </Providers>
      </body>
    </html>
  );
}
