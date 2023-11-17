
import "./globals.css";

import { Providers } from "@/lib/utils/providers";
import { Metadata } from "next";
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Women Empowerment",
  description: "",
  keywords: ["Women", "Empowerment", "Directory", "Community"],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          {props.children}
        </Providers>
      </body>
    </html>
  );
}