import type { Metadata } from "next";
import { Onest, Space_Grotesk } from "next/font/google";
import { Cursor } from "@/components/cursor";
import { ScrollTop } from "@/components/scroll-top";
import { Splash } from "@/components/splash";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Naeem — Flutter Developer",
    template: "%s · Naeem Iqbal",
  },
  description:
    "Flutter developer in Karachi. Three years building high-performance mobile apps with 500K+ downloads — BLoC, Riverpod, Firebase, Agora, FFmpeg.",
  keywords: [
    "Flutter Developer",
    "Dart",
    "Karachi",
    "BLoC",
    "Riverpod",
    "Firebase",
    "Agora",
    "Muhammad Naeem",
  ],
  authors: [{ name: "Muhammad Naeem Muhammad Iqbal" }],
  openGraph: {
    title: "Muhammad Naeem — Flutter Developer",
    description:
      "3 years building high-performance mobile apps with 500K+ downloads.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className={`${onest.className} min-h-full bg-base text-ink`}>
        <Splash />
        <Cursor />
        <ScrollTop />
        {children}
      </body>
    </html>
  );
}
