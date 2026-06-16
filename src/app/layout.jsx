import SmoothScroll from "./smoothScroll";

export default function RootLayout({ children }) {
  return (
    <SmoothScroll>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SmoothScroll>
  );
}
