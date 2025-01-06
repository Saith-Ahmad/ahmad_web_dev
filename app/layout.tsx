import type { Metadata } from "next";
import { Rubik } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import FrontHeader from "@/components/shared/FrontHeader";

const FiraCode = Rubik({ subsets: ['latin'] , weight:['300','400', '500', '600','700','800', '900'  ]})



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${FiraCode.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <FrontHeader/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
