import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Cashub | Dashboard financeiro",
  description: "Micro SaaS para organizar finanças pessoais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" >
      <body
        className={`${mulish.className} dark antialiased h-full`}
      >
        <div className="flex h-full flex-col overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
