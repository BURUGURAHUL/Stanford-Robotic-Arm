import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stanford Manipulator Web",
  description: "Stanford Manipulator Web App",
};

export default function RootLayout({ children }) {
  const navbar = <Navbar/>
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-[8%] mt-5">
        {navbar}
        <div className="border-2 border-black rounded-xl p-10">
        {children}
        </div>
        </div>
        </body>
    </html>
  );
}
