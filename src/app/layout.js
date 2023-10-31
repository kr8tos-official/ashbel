import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Montserrat, Inter } from "next/font/google";
import ProgressBar from "./components/ProgressBar";
import { StateContext } from "./StateContext/Context";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ashbel Inc",
  description: "Your Best Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateContext>
        <body className={`${mont.className}  text-[white] `}>
          <ProgressBar />
          <Nav></Nav>

          {children}
          <Footer></Footer>
        </body>
      </StateContext>
    </html>
  );
}
