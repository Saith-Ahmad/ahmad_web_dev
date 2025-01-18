import type { Metadata } from "next";
import Head from 'next/head';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ahmad Web Dev" />
        <meta
          property="og:description"
          content="A Fullstack developer solution to your customized web requirements"
        />
        <meta property="og:image" content="https://ahmad-web-dev.vercel.app/preview.png" />
        <meta property="og:url" content="https://ahmad-web-dev.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmad Web Dev" />
        <meta
          name="twitter:description"
          content="A Fullstack developer solution to your customized web requirements"
        />
        <meta name="twitter:image" content="https://ahmad-web-dev.vercel.app/preview.png" />
      </Head>

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
