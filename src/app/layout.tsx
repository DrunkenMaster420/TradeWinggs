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
        url: "/assets/logo.webp",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        url: "/assets/logo.webp",
        sizes: "16x16",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "/assets/logo.webp",
        sizes: "180x180",
        type: "image/webp",
      },
    ],
    shortcut: "/assets/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tradewinggs - Your Brand Partner in the Digital World",
    description:
      "Professional digital marketing services including SEO, social media marketing, web development, and product trading solutions.",
    siteName: "Tradewinggs",
    images: [
      {
        url: "/assets/logo.webp",
        width: 1200,
        height: 630,
        alt: "Tradewinggs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradewinggs - Your Brand Partner in the Digital World",
    description:
      "Professional digital marketing services including SEO, social media marketing, web development, and product trading solutions.",
    images: ["/assets/logo.webp"],
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
          href="/assets/logo.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo.webp"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.webp" />
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
