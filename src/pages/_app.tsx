import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Coming_Soon } from "@next/font/google";

const comingSoon = Coming_Soon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-soon",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${comingSoon.variable} font-sans`}>
      <Component {...pageProps} />;
    </main>
  );
}
