import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Rubik } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import FrontHeader from "@/components/shared/FrontHeader";
import Footer from "@/components/shared/Footer";

const FiraCode = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Ahmad Web Dev",
  description: "A Fullstack developer solution to your customized web requirements",
  metadataBase: new URL("https://ahmad-web-dev.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Ahmad Web Dev",
    description: "A Fullstack developer solution to your customized web requirements",
    url: "https://ahmad-web-dev.vercel.app",
    type: "website",
    images: [
      {
        url: "https://ahmad-web-dev.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmad Web Dev Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Web Dev",
    description: "A Fullstack developer solution to your customized web requirements",
    images: ["https://ahmad-web-dev.vercel.app/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <GoogleAnalytics gaId="G-5CY0BCPM1G" />
      <body className={`${FiraCode.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FrontHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
