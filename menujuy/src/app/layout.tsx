import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppWarpper } from "@/components/AppWarpper"



export const metadata: Metadata = {
  title: "MENU JUY",
  description: "menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <RouterProvider router={route}/>
    <html lang="en">
      <body className="font-Mitr">
        <AppWarpper>
          {children}
        </AppWarpper>
      </body>
    </html>
  );
}
