import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const clashDisplay = localFont({
    src: [
        {
            path: "./fonts/ClashDisplay-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/ClashDisplay-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/ClashDisplay-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/ClashDisplay-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-clash-display",
});

export const metadata: Metadata = {
    title: "Mohamed Izhar",
    description: "Mohamed Izhar's portfolio",
    robots: "index,follow",
    keywords:
        "Mohamed Izhar, Izhar, Mohamed, Mohamed Izhar's portfolio, Izhar's portfolio, Mohamed Izhar's website, Izhar's website, Mohamed Izhar's blog, Izhar's blog, Mohamed Izhar's resume, Izhar's resume, Mohamed Izhar's CV, Izhar's CV, Mohamed Izhar's contact, Izhar's contact, Mohamed Izhar's projects, Izhar's projects, Mohamed Izhar's skills, Izhar's skills, Mohamed Izhar's about, Izhar's about, Mohamed Izhar's home, Izhar's home, Mohamed Izhar's homepage, Izhar's homepage, Mohamed Izhar's landing page, Izhar's landing page, Mohamed Izhar's personal website, Izhar's personal website, Mohamed Izhar's personal blog, Izhar's personal blog, Mohamed Izhar's personal portfolio, Izhar's personal portfolio, Mohamed Izhar's personal resume, Izhar's personal resume, Mohamed Izhar's personal CV, Izhar's personal CV, Mohamed Izhar's personal contact, Izhar's personal contact",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${clashDisplay.className} font-clash overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
