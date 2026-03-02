import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-amber-950">
        Terms of Service
      </h1>
      <p className="mt-6 text-amber-900/85">
        This website is operated by {siteData.legalEntity}. By using this site, you
        agree to these terms. We reserve the right to update them at any time.
      </p>
      <p className="mt-4 text-amber-900/85">
        For questions, contact us at{" "}
        <a
          href={`mailto:${siteData.email}`}
          className="font-medium text-amber-700 hover:underline"
        >
          {siteData.email}
        </a>
        .
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex text-amber-700 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
