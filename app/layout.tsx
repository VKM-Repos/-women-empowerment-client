
import { cn } from "@/lib/utils";
import "./globals.css";

import { Providers } from "@/lib/utils/providers";
import { Metadata } from "next";
import { Quicksand, Sora } from 'next/font/google'




const sora = Sora({ subsets: ['latin'], variable: "--font-sora", display: 'swap', adjustFontFallback: false })
const quickSand = Quicksand({ subsets: ['latin'], variable: "--font-quickSand", display: 'swap', adjustFontFallback: false })

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
      <body className={cn(
          "antialiased",
          sora.variable,
          quickSand.variable
        )}>
        <Providers>      
          {props.children}
        </Providers>
      </body>
    </html>
  );
}