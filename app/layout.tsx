import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEDUCATEX Community",
  description:
    "Educational-first surgical intelligence community for early supporters, surgeons, and institutional collaborators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
