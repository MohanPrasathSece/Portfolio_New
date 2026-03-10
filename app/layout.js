import { Inter, Mona_Sans } from "next/font/google";
import { ReactLenis } from 'lenis/react'
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohan Prasath - Full Stack Developer & Digital Creator",
  description: "I dominate modern web experiences with expertise in website development, redesign, brand development, hosting, deployment, logo design, poster design, social media management, SEO optimization, and WordPress development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${monaSans.variable} antialiased`}
      >
        <ReactLenis />
        {children}
      </body>
    </html>
  );
}
