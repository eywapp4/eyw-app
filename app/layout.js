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
			<head>
				<script
					defer
					src="https://umami-gkgo0gscg8kc88oowcgg8css.coolify.contentflo.io/script.js"
					data-website-id="841a82af-04b7-4ba2-9d09-0c0b381cce7b"
				></script>
			</head>
			<body className={`${inter.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
