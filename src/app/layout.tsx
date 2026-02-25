import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "AI Visibility Scores",
    description: "Monitor how your brand appears across AI platforms. Get real-time insights, competitor analysis, and actionable recommendations to boost your presence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${interSans.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
