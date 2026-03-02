import Link from "next/link";

export const metadata = {
  title: "Reservation",
};

export default function ReservationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-amber-950">
        Reserve Your Table
      </h1>
      <p className="mt-4 text-lg text-amber-900/80">
        Book a table for a quiet dinner, family gathering, or celebration. Experience
        Zastolye—the Russian tradition of the lavish feast.
      </p>
      <p className="mt-8 text-amber-800">
        Call us to reserve:{" "}
        <a
          href="tel:6174673555"
          className="font-semibold text-amber-700 hover:underline"
        >
          (617) 467-3555
        </a>
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
