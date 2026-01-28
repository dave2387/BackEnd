import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Navbar + Sidebar Layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span
              className="navbar-brand mb-0 h1"
              style={{ fontSize: "24px" }}
            >
              🚀 MyLogo
            </span>
          </div>
        </nav>

    
        <div className="container-fluid">
          <div className="row">

        
            <div
              className="col-2"
              style={{
                minHeight: "667px",
                backgroundColor: "#161a1d",
                paddingTop: "20px",
              }}
            >
              <Link
                href="/home"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                }}
              >
                Home
              </Link>

              <Link
                href="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                }}
              >
                About
              </Link>

              <Link
                href="/contactUs"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 15px",
                  display: "block",
                }}
              >
                Contact Us
              </Link>
            </div>

 
            <div className="col-9" style={{ padding: "20px" }}>
              {children}
            </div>

          </div>
        </div>
        
        <footer
          style={{
            backgroundColor: "#212529",
            color: "white",
            textAlign: "center",
            padding: "15px",
          }}
        >
          © 2026 My Website | All Rights Reserved
        </footer>

      </body>
    </html>
  );
}
