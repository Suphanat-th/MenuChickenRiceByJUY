import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppWarpper } from "@/components/AppWarpper"

// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import Home from './page' 
const inter = Inter({ subsets: ["latin"] });

// const route = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home />
//   }
// ])

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
    // <RouterProvider router={route}/>
    <html lang="en">
      <body className={inter.className}>
        <AppWarpper>
          {children}
        </AppWarpper>
      </body>
    </html>
  );
}
