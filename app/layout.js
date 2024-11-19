import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Play Move Thrive",
  description: "Early Years Wales Physical Literacy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
