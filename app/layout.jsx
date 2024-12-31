import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  // variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Cerano",
  description: "peace and harmony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body
        className={`${inter.className} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
