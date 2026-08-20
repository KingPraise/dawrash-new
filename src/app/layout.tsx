import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DawRash International | Your Commercial Partner for West Africa",
  description: "We represent international enterprise technology and hardware providers—generating pipeline, securing vetted distributors, and closing commercial agreements across West Africa.",
  keywords: ["West Africa Business Expansion", "Commercial Partner Nigeria", "MedTech West Africa", "CleanTech Distributors Africa", "DawRash International"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
