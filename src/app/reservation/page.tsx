import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Reservation",
};

export default function ReservationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-[#2C1810]">
        Reserve Your Table
      </h1>
      <p className="mt-4 text-lg text-[#2C1810]/80">
        Book a table for a quiet dinner, family gathering, or celebration. Experience
        Zastolye—the Eastern European tradition of the lavish feast.
      </p>
      <a
        href={siteData.reservationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
      >
        Book a Table
      </a>
      <p className="mt-6 text-[#2C1810]/80">
        Or call us:{" "}
        <a
          href={`tel:${siteData.phone.replace(/\D/g, "")}`}
          className="font-semibold text-[#3B5323] hover:underline"
        >
          {siteData.phone}
        </a>
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-medium text-[#3B5323] hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
