import { roboto, roboto_mono } from "./ui/fonts";
import "./globals.css";
import Nav from "./ui/Home/Nav";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto_mono.className} bg-[#0b0a07]  text-white antialiased`}
            >
                <Nav />
                {children}
            </body>
        </html>
    );
}
