import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "We're Hiring",
};

export default function HiringPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-amber-950">
        We&apos;re Hiring
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-amber-900/85">
        Join the team at Cafe St. Petersburg. We&apos;re always looking for passionate
        people who love great food and warm hospitality.
      </p>
      <p className="mt-4 text-amber-900/85">
        Send your resume and a brief note to{" "}
        <a
          href={`mailto:${siteData.email}`}
          className="font-medium text-amber-700 hover:underline"
        >
          {siteData.email}
        </a>
        , or stop by in person at {siteData.address}.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
