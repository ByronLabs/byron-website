import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({subsets: ["latin"], display: "swap"});

export const metadata: Metadata = {
  title: {
    template: "%s | Byron Labs",
    default: "Expert Cybersecurity Consultancy & Training | Byron Labs",
  },
  description:
    "Byron Labs offers cutting-edge cybersecurity services, including threat detection, vulnerability assessment, and cloud security solutions. Protect your business with expert cybersecurity consultancy and training. Learn more today.",
  keywords: [
    "cybersecurity services",
    "cybersecurity research",
    "threat detection",
    "vulnerability assessment",
    "cloud security",
    "application security",
    "governance risk compliance",
    "offensive security testing",
    "cybersecurity training",
    "threat mitigation",
    "regulatory compliance",
    "cyber threat response",
    "real-world attack simulation",
    "cybersecurity consultancy",
  ],
  authors: [
    {
      name: "Byron Labs",
      url: "https://byronlabs.io/",
    },
  ],
  publisher: "Byron Labs",
  robots: "index, follow",
  metadataBase: new URL("https://byronlabs.io/"),
  openGraph: {
    title: {
      template: "%s | Byron Labs",
      default: "Expert Cybersecurity Consultancy & Training | Byron Labs",
    },
    description:
      "Byron Labs offers cutting-edge cybersecurity services, including threat detection, vulnerability assessment, and cloud security solutions. Protect your business with expert cybersecurity consultancy and training. Learn more today.",
    url: "https://byronlabs.io/",
    siteName: "Byron Labs",
    type: "website",
    // images: [
    //   {
    //     url: "https://byronlabs.io/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Byron Labs",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | Byron Labs",
      default: "Expert Cybersecurity Consultancy & Training | Byron Labs",
    },
    description:
      "Byron Labs offers cutting-edge cybersecurity services, including threat detection, vulnerability assessment, and cloud security solutions. Protect your business with expert cybersecurity consultancy and training. Learn more today.",
    site: "@ByronLabs",
    creator: "@ByronLabs",
    // images: [
    //   {
    //     url: "https://byronlabs.io/images/twitter-image.jpg",
    //     alt: "Byron Labs",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${inter.className} dark:bg-black`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

