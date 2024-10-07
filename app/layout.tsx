import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link In Bio",
  description: "Rocky's Link In Bio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
