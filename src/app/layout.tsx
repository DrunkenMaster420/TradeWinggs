import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Prevents hydration issues with font loading
});

export const metadata: Metadata = {
  title: "Tradewings - Your Brand Partner in the Digital World",
  description:
    "Professional digital marketing services including SEO, social media marketing, web development, and product trading solutions.",
  keywords:
    "digital marketing, SEO, social media, web development, branding, Gwalior",
  authors: [{ name: "Tradewings" }],
  creator: "Tradewings",
  publisher: "Tradewings",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Use your SVG logo as favicon
  icons: {
    icon: [
      {
        url: "/assets/logo.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/assets/logo.jpg",
        sizes: "16x16",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/assets/logo.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
    shortcut: "/assets/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tradewings - Your Brand Partner in the Digital World",
    description:
      "Professional digital marketing services including SEO, social media marketing, web development, and product trading solutions.",
    siteName: "Tradewings",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tradewings Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradewings - Your Brand Partner in the Digital World",
    description:
      "Professional digital marketing services including SEO, social media marketing, web development, and product trading solutions.",
    images: ["/assets/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Additional favicon formats for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo.jpg"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffa238" />
        <meta name="msapplication-TileColor" content="#ffa238" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
