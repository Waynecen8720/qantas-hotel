import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Qantas Hotels",
  description: "Earn or Use Qantas Points when you book hotels and accommodation via Qantas Hotels. Book last minute hotel deals, cheap hotels and luxury stay here.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
