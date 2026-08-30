import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "DevMind", description: "Your long-term memory for software development." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
