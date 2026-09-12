import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0958D9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://travsior.com"),
  title: "Travsior — Your Way Abroad Starts Here | Study Abroad & Visa Consultancy",
  description:
    "Travsior helps Pakistani students and professionals move abroad with a clear, guided, and faster path. University admissions, visit visas, scholarships, and international mobility support.",
  keywords: [
    "Study Abroad Pakistan",
    "UK student visa from Pakistan",
    "Australia study visa",
    "Canada study visa Pakistan",
    "Visit visa consultancy",
    "Scholarships for Pakistani students",
    "Travsior",
  ],
  authors: [{ name: "Travsior" }],
  openGraph: {
    title: "Travsior — Your Way Abroad Starts Here",
    description:
      "Modern international mobility platform for students and professionals. Clear, guided, and faster pathway abroad.",
    url: "https://travsior.com",
    siteName: "Travsior",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travsior — Your Way Abroad Starts Here",
    description:
      "Modern international mobility platform for students and professionals. Clear, guided, and faster pathway abroad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased text-travsior-navy bg-white selection:bg-travsior-blueLight selection:text-travsior-blue">
        {children}
      </body>
    </html>
  );
}
