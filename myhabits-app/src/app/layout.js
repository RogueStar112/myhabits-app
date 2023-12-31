import { Inter } from "next/font/google";
import "./globals.css";
import "../fonts.css";
import "../icons.css";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyHabits",
  description:
    "An app that allows you to increase good habits, and reduce bad habits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <script
          src="https://kit.fontawesome.com/c36ba6cddf.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body className="bg-[#333333]">{children}</body>
    </html>
  );
}
