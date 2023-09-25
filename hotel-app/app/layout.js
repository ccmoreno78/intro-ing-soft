import "./globals.css";
import { NavBar } from "./components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UniHotel",
  description: "Ejercicio Final Ing de Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#92a68a]`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
