import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Diha Anfeu Nio Julaynda | Fullstack Developer",
  description: "Portofolio Nio - Fullstack Developer dengan fokus pada Frontend. Mahasiswa Teknik Informatika UNESA 2023.",
  keywords: ["Nio", "Diha Anfeu Nio Julaynda", "Fullstack Developer", "Frontend Developer", "UNESA", "Teknik Informatika", "React", "Next.js", "Tailwind CSS"],
  authors: [{ name: "Diha Anfeu Nio Julaynda" }],
  creator: "Diha Anfeu Nio Julaynda",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nio-portfolio.vercel.app",
    title: "Diha Anfeu Nio Julaynda | Fullstack Developer",
    description: "Portofolio Nio - Fullstack Developer dengan fokus pada Frontend. Mahasiswa Teknik Informatika UNESA 2023.",
    siteName: "Nio Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
