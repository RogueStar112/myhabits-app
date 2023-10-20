import { Inter } from "next/font/google";
import "./globals.css";
import "../fonts.css";
import "../icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyHabits",
  description:
    "An app that allows you to increase good habits, and reduce bad habits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#333333]">{children}</body>
    </html>
  );
}
