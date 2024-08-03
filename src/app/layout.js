import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Application",
  description: "full stack blog application using next js and mongoDb and createad by mohammad abuzer khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container" >
          <div className="wrapper" >
            <Navbar/>
        {children}
        <Footer/>
        </div>
        </div>
        </body>
    </html>
  );
}
