import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "CareHaven",
  description: "This is CareHaven project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar></Navbar>
        </header>

        <main>{children}</main>

        <footer>

        </footer>
      </body>
    </html>
  );
}
