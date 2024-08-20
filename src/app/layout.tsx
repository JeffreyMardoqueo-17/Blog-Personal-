// app/layout.tsx
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog - Jeff",
  description: "Blog donde realizo publicaciones sobre tecnología, trading y diferentes cosas.",
};

// Estas son las rutas de la app
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Trading', href: '/trading' },
  { label: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-lightTheme-background container mx-auto`}>
        <Navigation navItems={navItems} />
        <main className="p-2 mt-[5%]" >
          {children}
        </main>
      </body>
    </html>
  );
}
