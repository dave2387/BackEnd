export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Auth Page</h1>
        {children}
      </body>
    </html>
  );
}
