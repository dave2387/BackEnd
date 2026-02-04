export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Client Page</h1>
        {children}
      </body>
    </html>
  );
}
