"use client";

import "./globals.css";
import { Bebas_Neue } from 'next/font/google';
import { Rajdhani } from "next/font/google";
import { usePathname } from 'next/navigation';
import localFont from "next/font/local";
import { AuthProvider } from "./context/AuthContext";
import Navbar2 from "../components/Navbar2";
import Providers from "../containers/providers";
import Navbar from "../components/Navbar";
import ThemeSwitch from "../components/theme-controller";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
});

const rajdhani = Rajdhani({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Optional metadata
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  const showNavbar2 = pathname !== '/Login' &&
                      !pathname.startsWith('/home/') &&
                      pathname !== '/';

  const showNavbar = pathname === '/';

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-red-200 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 antialiased`}
      >
        {/* Gradient Background */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <div className="bg-[#dbd7fb] absolute top-[-1rem] flex-1 -z-[10] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] dark:bg-[#676394]"></div>        <div className="bg-[#dbd7fb] absolute top-[-1rem] flex-1 -z-[10] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] dark:bg-[#676394]"></div>

        <Providers>
          {showNavbar && <Navbar />}
          {showNavbar2 && <Navbar2 />}
          {children}
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
