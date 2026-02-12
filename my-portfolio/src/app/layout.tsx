import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next"
import React from "react";
import Navbar from '@/components/Navbar';
import  Container  from "@/components/Container";
import Header from './../components/Header';

const inter = Inter({
  subsets: ['latin'],           // only load latin characters → smaller file
  variable: '--font-inter',     // CSS variable name we'll use
  weight: ['300', '400', '500', '600', '700'], // choose only the weights you need
  display: 'swap',              // prevents invisible text (FOUT → FOIT)
});

export const metadata = {
  title: "Mahdi Mohammadi - Portfolio",
  description: "A portfolio website showcasing my work and projects as a full-stack developer and CS student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className= 'antialiased'
      >
        <Container>
          <Header />
          {children}
        </Container>
        <Navbar />
      </body>
    </html>
  );
}
