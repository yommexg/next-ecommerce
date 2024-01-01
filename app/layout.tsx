import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/model-provider";
import ToastProvdier from "@/providers/toast-provider";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yom Next Store",
  description: "Stored created by Yomi-Olugbodi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvdier />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
