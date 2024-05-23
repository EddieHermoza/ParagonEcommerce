import type { Metadata } from "next";
import { aldrich } from "./config/font";
import "./globals.css";


export const metadata: Metadata = {
  title: "Paragon Ecoomerce",
  description: "Paragon Ecoomerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={aldrich.className}>
        <div vaul-drawer-wrapper="" className="bg-background">
            {children}
          </div>
        </body>
    </html>
  );
}
