import "./globals.css";

export const metadata = {
  title: "Dorian G - JavaScript Developer",
  description:
    "Freelance JavaScript developer who focuses on creating great products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
