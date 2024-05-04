

import "./globals.css";

import { Providers } from "@/lib/utils/providers";
import { Metadata } from "next";
import { Quicksand, Sora } from 'next/font/google'



const sora = Sora({ subsets: ['latin'] })

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
      <body className={sora.className}>
        <Providers>      
          {props.children}
        </Providers>
      </body>
    </html>
  );
}