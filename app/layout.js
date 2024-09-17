"use client"

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Bebas_Neue } from 'next/font/google';
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';


const bebasNeue = Bebas_Neue({
  weight: ['400'], // Adjust weight as needed
  subsets: ['latin'], // Adjust subsets as needed
  variable: '--font-bebas', // Optional CSS variable for the font
});

const rajdhani = Rajdhani({
  weight: ['400'], // Adjust weight as needed (can add more like '500', '700', etc.)
  subsets: ['latin'], // Add the subsets you need, for example 'latin'
  variable: '--font-rajdhani', // Optional CSS variable for the font
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

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const showNavbar = pathname !== '/Signin' && pathname !== '/Signup';
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} antialiased`}>
      {showNavbar && <Navbar/>}
        {children}
      </body>
    </html>
  );
}
