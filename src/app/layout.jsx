import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "CareHaven",
  description: "This is CareHaven project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <header>
          <Navbar></Navbar>
        </header>
        {/* main content */}

        <main>{children}</main>

        {/* footer section */}
        <Footer></Footer>
      </body>
    </html>
  );
}
