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
  description: "Ex-consultant turned indie hacker. Building products with a soul, agentising operations in BCG X.",
  authors: [{ name: "Pasha Barbashin" }],
  creator: "Pasha Barbashin",
  alternates: {
    canonical: "https://barbash.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barbash.in",
    title: "Pasha Barbashin",
    description: "Ex-consultant turned indie hacker. Building products with a soul, agentising operations in BCG X.",
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
    description: "Ex-consultant turned indie hacker. Building products with a soul, agentising operations in BCG X.",
    creator: "@pasha_barbashin",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pasha Barbashin",
  url: "https://barbash.in",
  jobTitle: "Indie Hacker",
  worksFor: { "@type": "Organization", name: "BCG X" },
  sameAs: [
    "https://www.linkedin.com/in/bassotov/",
    "https://x.com/pasha_barbashin",
    "https://www.youtube.com/@pashalika",
    "https://t.me/bassotov_blog",
    "https://github.com/bassotov",
    "https://open.spotify.com/artist/1mkiGsuSOF25ft6cRMEktM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
