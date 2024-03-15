import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "UC Cryptocurrency Club",
  description: "The official website of the UC Cryptocurrency Club",
};

//components
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        
        <Navbar />
        <LandingPage />
        
        
        
        {children}</body>
    </html>
  );
}
