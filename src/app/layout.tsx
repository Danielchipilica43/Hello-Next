import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Instituto Politecnico",
  description: "Site Oficial da Instituição",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
