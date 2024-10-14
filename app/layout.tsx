import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";

const ftRegolaNeueRegular = localFont({
  src: "./fonts/FTRegolaNeue-Regular.otf",
  variable: "--font-ft-regola-neue-regular",
  weight: "400",
});

const ftRegolaNeueMedium = localFont({
  src: "./fonts/FTRegolaNeue-Medium.otf",
  variable: "--font-ft-regola-neue-medium",
  weight: "500",
});

const ftRegolaNeueSemibold = localFont({
  src: "./fonts/FTRegolaNeue-Semibold.otf",
  variable: "--font-ft-regola-neue-semibold",
  weight: "600"
});

const robotoMono = localFont({
  src: "./fonts/RobotoMono-Regular.ttf",
  variable: "--font-roboto-mono",
  weight: "400",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
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
        className={`${ftRegolaNeueMedium.variable} ${ftRegolaNeueRegular.variable} ${ftRegolaNeueSemibold.variable} ${robotoMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
