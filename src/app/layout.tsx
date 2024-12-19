import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/E.svg" />
      <body className="primaryFont">{children}</body>
    </html>
  );
}
