import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./lib/providers";
import Footer from "./components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EYW Physical Literacy",
  description: "Early Years Wales Physical Literacy App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
