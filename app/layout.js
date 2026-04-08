import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./fonts/AdvercaseDemo-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AdvercaseDemo-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Dorian G - JavaScript Developer",
  description:
    "Freelance JavaScript developer who focuses on creating great products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${myFont.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
