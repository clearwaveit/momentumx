import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MomentumX",
  description: "MomentumX is a new digital services company with Momentum heritage, building websites, apps, AI tools, commerce, and digital platforms."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
