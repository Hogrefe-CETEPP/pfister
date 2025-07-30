import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pfister",
  description: "As pirâmides Coloridas de Pfister",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased relative`}>
        <img src="/barra.png" className="fixed left-0" alt="borda" />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
