import SmoothScroll from "./smoothScroll";

export default function RootLayout({ children }) {
  return (
    <SmoothScroll>
      <html lang="en">
        <head>
          <title>UPON HOTEL - MUGDI</title>
          <link rel="icon" type="image/png" href="/Black.png" />
        </head>
        <body>{children}</body>
      </html>
 
    </SmoothScroll>
  );
}
