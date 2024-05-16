import "./globals.css";


export const metadata = {
  title: "Born Agile",
  description: "Born Agile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
