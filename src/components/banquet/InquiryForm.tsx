"use client";

import { useState, FormEvent } from "react";
import { Calendar, Clock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventNature: string;
  guestCount: string;
  eventDate: string;
  eventTime: string;
  message: string;
  preferredPackage: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  eventNature: "",
  guestCount: "",
  eventDate: "",
  eventTime: "",
  message: "",
  preferredPackage: "",
};

const PACKAGES = [
  { id: "classical", label: "$115 Classical", value: "$115 Classical" },
  { id: "premium", label: "$145 Premium", value: "$145 Premium" },
  { id: "unsure", label: "Not sure yet", value: "Not sure yet" },
] as const;

type FormErrors = Partial<Record<keyof FormData, string>>;

export function InquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData(initialFormData);
    setErrors({});
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-[#3B5323]/20 bg-[#3B5323]/5 p-8 text-center">
        <p className="font-medium text-[#3B5323]">
          Thank you! We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-[#2C1810]/10 bg-[#F9F6F0]/50 p-6 shadow-sm sm:p-8"
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
          type="text"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
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
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
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
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
          placeholder="(617) 555-0000"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="eventNature"
          className="mb-1.5 block text-sm font-medium text-[#2C1810]"
        >
          Nature of the Event
        </label>
        <input
          id="eventNature"
          type="text"
          value={formData.eventNature}
          onChange={(e) => updateField("eventNature", e.target.value)}
          className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
          placeholder="e.g., Birthday Party or Business Dinner"
        />
      </div>

      <div>
        <label
          htmlFor="guestCount"
          className="mb-1.5 block text-sm font-medium text-[#2C1810]"
        >
          Number of Guests
        </label>
        <input
          id="guestCount"
          type="number"
          min={1}
          value={formData.guestCount}
          onChange={(e) => updateField("guestCount", e.target.value)}
          className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
          placeholder="e.g., 50"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative">
          <label
            htmlFor="eventDate"
            className="mb-1.5 block text-sm font-medium text-[#2C1810]"
          >
            Event Date
          </label>
          <div className="relative">
            <input
              id="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={(e) => updateField("eventDate", e.target.value)}
              className="w-full rounded-lg border border-[#2C1810]/25 bg-white py-3 pl-4 pr-10 text-[#2C1810] transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
            />
            <Calendar className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2C1810]/40" />
          </div>
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
              type="time"
              value={formData.eventTime}
              onChange={(e) => updateField("eventTime", e.target.value)}
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
                name="preferredPackage"
                value={pkg.value}
                checked={formData.preferredPackage === pkg.value}
                onChange={(e) => updateField("preferredPackage", e.target.value)}
                className="h-4 w-4 border-[#2C1810]/30 text-[#3B5323] focus:ring-[#3B5323]"
              />
              <span className="text-[#2C1810]">{pkg.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-[#2C1810]"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="w-full rounded-lg border border-[#2C1810]/25 bg-white px-4 py-3 text-[#2C1810] placeholder-[#2C1810]/50 transition focus:border-[#3B5323] focus:outline-none focus:ring-2 focus:ring-[#3B5323]/25"
          placeholder="Any special requests or questions?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#3B5323] px-6 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-[#4a6b2d]"
      >
        Send Inquiry
      </button>
      <p className="text-center text-sm text-[#2C1810]/70">
        We typically respond within 24 hours
      </p>
    </form>
  );
}
