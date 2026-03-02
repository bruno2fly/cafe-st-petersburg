"use client";

import { useState } from "react";

const BANQUET_VIDEO_EMBED =
  "https://drive.google.com/file/d/1lltHgRVptCe5EluhD-L_D4t5j84-8QmP/preview?start=1";

const features = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Customized Menus",
    description:
      "Choose from our curated banquet packages or work with us to create a custom menu for your event.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Full-Service Experience",
    description:
      "From setup to service, our team handles every detail so you can enjoy your celebration.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Private & Semi-Private",
    description: "Intimate dinners or large parties up to 200 guests. The space is yours.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Warm & Inviting",
    description:
      "A welcoming atmosphere designed for connection. Celebrate life and the people around your table.",
  },
];

export function FeatureGrid() {
  const [showSoundHint, setShowSoundHint] = useState(true);

  return (
    <section className="bg-[#f5f0e8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#3b5323] sm:text-4xl">
          Your Celebration, Our Passion
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="relative min-h-[280px] w-full overflow-hidden rounded-xl bg-black sm:min-h-[340px] lg:h-full">
              <iframe
                src={BANQUET_VIDEO_EMBED}
                title="Cafe St. Petersburg banquet and private events"
                allow="autoplay"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              {showSoundHint && (
                <button
                  type="button"
                  onClick={() => setShowSoundHint(false)}
                  className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-black/90"
                  aria-label="Dismiss sound hint - click the video to enable sound"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                  Click to enable sound
                </button>
              )}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col rounded-2xl border border-[#3b5323]/10 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <div className="text-[#c4a35a]">{feature.icon}</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#3b5323]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[#3b5323]/80 sm:mt-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-[#3b5323]/70">
          Menus available in English and Russian
        </p>
      </div>
    </section>
  );
}
