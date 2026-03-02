import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Contacts",
};

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-amber-950">Contact Us</h1>
      <div className="mt-10 space-y-6 rounded-xl border border-amber-200/60 bg-amber-50/30 p-8">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Address
          </h2>
          <p className="mt-1 text-amber-950">{siteData.address}</p>
          <a
            href={siteData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-amber-700 hover:underline"
          >
            Get directions →
          </a>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Phone
          </h2>
          <a
            href={`tel:${siteData.phone.replace(/\D/g, "")}`}
            className="mt-1 block text-lg text-amber-950 hover:underline"
          >
            {siteData.phone}
          </a>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Email
          </h2>
          <a
            href={`mailto:${siteData.email}`}
            className="mt-1 block text-amber-950 hover:underline"
          >
            {siteData.email}
          </a>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Hours
          </h2>
          <ul className="mt-1 space-y-1 text-amber-950">
            <li>Thursday: {siteData.hours.thursday}</li>
            <li>Friday: {siteData.hours.friday}</li>
            <li>Saturday: {siteData.hours.saturday}</li>
            <li>Sunday: {siteData.hours.sunday}</li>
            <li>Monday–Wednesday: {siteData.hours.mondayToWednesday}</li>
          </ul>
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href={siteData.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:underline"
          >
            Facebook
          </a>
          <a
            href={siteData.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
