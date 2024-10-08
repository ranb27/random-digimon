import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/contexts/ThemeProvider";
import ThemeSwitch from "./components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Digimon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <ThemeProvider>
        <body className={inter.className}>
          <h1 className="font-bold text-2xl fixed top-2 left-2 text-base-content">
            Random your <span className="text-amber-500">Digimon</span>
          </h1>
          <ThemeSwitch />
          <main className="min-h-screen h-full w-full bg-base-200 text-base-content">
            {children}
          </main>
          <footer className="footer-center">
            <p className="text-base-content fixed bottom-2 w-full mx-auto text-xs">
              Developed by{" "}
              <a
                href="https://github.com/ranb27"
                target="_blank"
                className="font-bold text-info link"
              >
                Ranb27
              </a>
            </p>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
