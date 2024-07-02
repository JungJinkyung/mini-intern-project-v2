import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weird Sector intern Project",
  description: "weird sector intern project"
};

export default ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <main className="flex flex-col">
          <Header />
          <div className="min-h-[650px]">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
};
