import type { Metadata } from "next";
import { ClientWrapper } from "@/components/ClientWrapper";
import "./globals.css";

export const metadata: Metadata = {
    title: "CoupleCapital",
    description: "Personal and Shared Finance Tracker for Couples",
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "CoupleCap",
    },
    formatDetection: {
        telephone: false,
    },
};

export const viewport = {
    themeColor: "#4f46e5",
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="antialiased" suppressHydrationWarning>
            <body className="bg-background text-foreground min-h-screen pb-20 md:pb-0" suppressHydrationWarning>
                <main className="max-w-md mx-auto min-h-screen bg-slate-50 md:border-x md:border-border md:shadow-sm relative">
                    <ClientWrapper>
                        {children}
                    </ClientWrapper>
                </main>
            </body>
        </html>
    );
}
