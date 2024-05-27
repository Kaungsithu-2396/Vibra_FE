import { roboto, roboto_mono, nunito, notosan } from "./ui/fonts";
import "./globals.css";
import Nav from "./ui/Home/Nav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // bg-[#0b0a07]
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.className}  bg-[#020004]  text-white antialiased`}
      >
        <Nav />
        {children}
        <footer className=" bg-zinc-400/20 py-4 text-center">
          All rights reserved to Kaung Si Thu
        </footer>
      </body>
    </html>
  );
}
