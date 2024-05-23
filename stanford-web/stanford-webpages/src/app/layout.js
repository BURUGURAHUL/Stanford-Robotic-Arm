import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stanford Manipulator Web",
  description: "Stanford Manipulator Web App",
};

export default function RootLayout({ children }) {
  const navbar = <Navbar/>
  const footer = <Footer/> 
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col relative pb-10">
        <div className="md:mx-[8%] mx-[5%] mt-12 md:mt-0">
        {navbar}
        <div className="border-2 border-black rounded-xl md:p-10 px-5 py-6 mt-5">
        {children}
        </div>
        </div>
        </div>
        
        {footer}
        </body>
    </html>
  );
}
