import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hampstead Gems",
  description: "Our favourite stores in Hampstead. You can buy cheese or meat at 10+ places, but there's the best one. We got you covered.",
  alternates: {
    canonical: "https://barbash.in/hampstead",
  },
  openGraph: {
    title: "Hampstead Gems | Pasha Barbashin",
    description: "Our favourite stores in Hampstead. You can buy cheese or meat at 10+ places, but there's the best one. We got you covered.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pasha Barbashin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hampstead Gems | Pasha Barbashin",
    description: "Our favourite stores in Hampstead. You can buy cheese or meat at 10+ places, but there's the best one. We got you covered.",
    images: ["/og-image.png"],
  },
};

export default function HampsteadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
