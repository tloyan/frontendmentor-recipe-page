import "./globals.css";
import { Young_Serif, Outfit } from "next/font/google"
import { jsonLd } from "./jsonLd";
export { metadata } from './metadata'

const young_serif = Young_Serif({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-young-serif"
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: "--font-outfit"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${young_serif.variable} ${outfit.variable} antialiased h-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
