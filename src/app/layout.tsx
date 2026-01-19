import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://barbash.in"),
  title: {
    default: "Pasha Barbashin",
    template: "%s | Pasha Barbashin",
  },
  description: "Shipping products, getting in shape, delivering on 9-5",
  authors: [{ name: "Pasha Barbashin" }],
  creator: "Pasha Barbashin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barbash.in",
    title: "Pasha Barbashin",
    description: "Shipping products, getting in shape, delivering on 9-5",
    siteName: "Pasha Barbashin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pasha Barbashin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasha Barbashin",
    description: "Shipping products, getting in shape, delivering on 9-5",
    creator: "@pashab2002",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
