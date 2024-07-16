import "./globals.css";

export default function RootLayout({ children, dashboard }) {
  return (
    <html lang="en">
      <body>
        {dashboard}
        {children}
      </body>
    </html>
  );
}
