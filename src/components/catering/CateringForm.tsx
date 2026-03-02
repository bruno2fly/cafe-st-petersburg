"use client";

import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/lib/site-data";
import { Calendar, Clock } from "lucide-react";

const GUEST_OPTIONS = [
  "1-10",
  "10-20",
  "20-30",
  "30-40",
  "40-50",
  "50+",
] as const;

const PACKAGES = [
  { id: "classical", label: "$115 Classical", value: "classical" },
  { id: "premium", label: "Premium Package", value: "premium" },
  { id: "custom", label: "Custom Menu", value: "custom" },
] as const;

export function CateringForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors: Record<string, string> = {};
    if (!formData.get("name")) newErrors.name = "Name is required";
    if (!formData.get("email")) newErrors.email = "Email is required";
    if (!formData.get("phone")) newErrors.phone = "Phone is required";
    if (!formData.get("eventDate")) newErrors.eventDate = "Event date is required";
    if (!formData.get("guests")) newErrors.guests = "Number of guests is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 1000);
  }

  return (
    <section id="catering-form" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left: Image */}
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:order-1 lg:aspect-auto lg:min-h-[500px]">
          <Image
            src="/images/catering2.jpeg"
            alt="Cafe St. Petersburg bar and dining area"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>

        {/* Right: Form */}
        <div className="order-1 lg:order-2">
          <h2 className="font-serif text-3xl font-bold text-[#3B5323] sm:text-4xl">
            Plan Your Private Event
          </h2>
          <p className="mt-4 text-[#2C1810]/85">
            Fill out the form below and our team will get back to you shortly. Or
            call us directly at{" "}
            <a
              href={`tel:${siteData.phone.replace(/\D/g, "")}`}
              className="font-medium text-[#C4A35A] hover:text-[#d4b86a] hover:underline"
            >
              {siteData.phone}
            </a>
          </p>

          {status === "success" ? (
            <div className="mt-8 rounded-xl border border-[#3B5323]/20 bg-[#3B5323]/5 p-8 text-center">
              <p className="font-medium text-[#3B5323]">
                Thank you! We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-2xl border border-[#2C1810]/10 bg-[#F9F6F0]/50 p-6 shadow-sm sm:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                  placeholder="(617) 555-0000"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="nature"
                  className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                >
                  Nature of the Event
                </label>
                <input
                  id="nature"
                  name="nature"
                  type="text"
                  className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                  placeholder="e.g., Birthday Party or Business Dinner"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                >
                  Number of Guests <span className="text-red-500">*</span>
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                >
                  <option value="">Select number of guests</option>
                  {GUEST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.guests && (
                  <p className="mt-1 text-sm text-red-600">{errors.guests}</p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <label
                    htmlFor="eventDate"
                    className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                  >
                    Event Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      className="w-full rounded-lg border border-[#2C1810]/25 bg-white py-3 pl-4 pr-10 text-[#2C1810] transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                    />
                    <Calendar className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2C1810]/40" />
                  </div>
                  {errors.eventDate && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.eventDate}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="eventTime"
                    className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                  >
                    Event Time
                  </label>
                  <div className="relative">
                    <input
                      id="eventTime"
                      name="eventTime"
                      type="time"
                      className="w-full rounded-lg border border-[#2C1810]/25 bg-white py-3 pl-4 pr-10 text-[#2C1810] transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                    />
                    <Clock className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2C1810]/40" />
                  </div>
                </div>
              </div>

              <div>
                <span className="mb-2 block text-sm font-medium text-[#2C1810]">
                  Preferred Package
                </span>
                <div className="space-y-2">
                  {PACKAGES.map((pkg) => (
                    <label
                      key={pkg.id}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#2C1810]/15 bg-white px-4 py-3 transition hover:border-[#3B5323]/30 has-[:checked]:border-[#3B5323] has-[:checked]:ring-2 has-[:checked]:ring-[#3B5323]/25"
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.value}
                        className="h-4 w-4 border-[#2C1810]/30 text-[#3B5323] focus:ring-[#3B5323]"
                      />
                      <span className="text-[#2C1810]">{pkg.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="mb-1.5 block text-sm font-medium text-[#2C1810]"
                >
                  Questions or Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-[#3B5323] px-6 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-[#4a6b2d] disabled:opacity-70"
              >
                {status === "submitting" ? "Submitting..." : "Submit Catering Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
