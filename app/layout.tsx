import type { Metadata } from "next";
import { RevealObserver } from "./site-components";
import "./globals.css";

export const metadata: Metadata = {
  title: "MomentumX",
  description:
    "MomentumX is a Digital & AI Transformation company helping businesses transform through technology, intelligence, and innovation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
