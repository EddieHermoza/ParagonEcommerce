import type { Metadata } from "next";
import { aldrich } from "./config/font";
import "./globals.css";
import { Toaster } from "@/components/ui";


export const metadata: Metadata = {
  title: "Paragon Ecoomerce",
  description: "Paragon Ecoomerce mein ioru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scrollbar-thin scrollbar-track-background scrollbar-thumb-primary">
      <body className={ `${aldrich.className} `}>
          <div vaul-drawer-wrapper="" className="bg-background ">
            {children}
          </div>
          <Toaster/>
        </body>
    </html>
  );
}
