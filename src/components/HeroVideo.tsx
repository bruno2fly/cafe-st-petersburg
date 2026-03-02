"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videohome.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
      <button
        type="button"
        onClick={toggleSound}
        className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
        aria-label={muted ? "Enable sound" : "Mute"}
      >
        {muted ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
        {muted ? "Enable sound" : "Mute"}
      </button>
      <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          Best Russian Restaurant in Newton Centre
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-amber-50/95 sm:text-xl md:text-2xl">
          A hidden gem serving authentic Eastern European cuisine
        </p>
        <Link
          href="/menu"
          className="mt-8 rounded-full bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-amber-500"
        >
          Order Online
        </Link>
      </div>
    </section>
  );
}
