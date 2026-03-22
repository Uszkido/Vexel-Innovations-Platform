import type { Metadata } from "next";
import { Inter, Orbitron, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vexel Innovations | Engineering the Future",
  description: "Building intelligent systems for security, agriculture, and digital innovation. Leaders in AI, Cybersecurity, and Full-Stack Engineering.",
  keywords: ["AI", "Cybersecurity", "Agri-Tech", "Full-Stack Software", "Vexel Innovations", "Digital Platforms"],
  openGraph: {
    title: "Vexel Innovations | Engineering the Future",
    description: "Building intelligent systems for security, agriculture, and digital innovation.",
    url: "https://vexel-innovations.vercel.app",
    siteName: "Vexel Innovations",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vexel Innovations - Engineering the Future",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vexel Innovations | Engineering the Future",
    description: "Building intelligent systems for security, agriculture, and digital innovation.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${orbitron.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-brand-blue selection:text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           {children}
           <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
