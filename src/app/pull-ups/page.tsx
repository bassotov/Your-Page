import { PullUpInfographic } from "@/components/pull-up-infographic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PullUpsPage() {
  return (
    <div className="dark min-h-screen bg-[#0a0a0a]">
      <main className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#888] hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <PullUpInfographic forceDark />
      </main>
    </div>
  );
}
