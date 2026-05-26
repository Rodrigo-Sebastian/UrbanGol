import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { CartProvider } from "./context/CartContext";
import { ClerkProvider } from "@clerk/nextjs"
import Footer from "./components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});


export const metadata: Metadata = {
  title: "UrbanGol | Officiell Onlinebutik",
  description: "Den bästa onlinebutiken för fotbollsfantaster. Hitta de senaste trenderna som retrotröjor för män och kvinnor. Handla nu och se fantastisk ut med vårt breda urval av kläder och accessoarer.",
  keywords: "fotbollskläder, retrotröjor, onlinebutik, fotbollsmode, fotbollsaccessoarer, sportkläder, lagtröjor, urbant mode, kläder för fotbollsfantaster",
  robots: "index, follow",
  authors:[
    {name: "Rodrigo Sebastian", url: "https://github.com/Rodrigo-Sebastian"}
  ],
  icons:{
    icon:"/images/urbangol-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${lato.variable}`}>
        <body>
        <CartProvider>
        <Nav />
          {children}
        <Footer />
        </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
