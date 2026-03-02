import Link from "next/link";

export const metadata = {
  title: "Accessibility",
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-amber-950">
        Accessibility
      </h1>
      <p className="mt-6 text-amber-900/85">
        Cafe St. Petersburg is committed to ensuring our website and restaurant are
        accessible to everyone. We strive to meet WCAG guidelines and welcome feedback
        on how we can improve.
      </p>
      <p className="mt-4 text-amber-900/85">
        If you have questions or need assistance, please contact us. We&apos;re happy to
        help.
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
