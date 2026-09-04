"use client";

import { useEffect, useRef, useState } from "react";
import { Expand, X } from "lucide-react";
import { FoodImage } from "@/components/FoodImage";

type ImageLightboxProps = {
  src: string;
  alt: string;
  sizes: string;
  imageClassName?: string;
  buttonClassName?: string;
};

export function ImageLightbox({
  src,
  alt,
  sizes,
  imageClassName = "object-cover",
  buttonClassName = "",
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group/image relative block h-full w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-inset ${buttonClassName}`}
        aria-label={`View a larger image of ${alt}`}
      >
        <FoodImage
          src={src}
          alt={alt}
          fill
          className={imageClassName}
          sizes={sizes}
        />
        <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-amber-950/75 text-white opacity-90 shadow-md transition group-hover/image:scale-105 group-hover/image:bg-amber-950 group-focus-visible/image:scale-105 sm:opacity-0 sm:group-hover/image:opacity-100 sm:group-focus-visible/image:opacity-100">
          <Expand className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-amber-950/85 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged image of ${alt}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative h-[90vh] w-[90vw] max-w-6xl overflow-hidden rounded-xl bg-amber-50 shadow-2xl">
            <FoodImage
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-amber-950/85 text-white shadow-lg transition hover:bg-amber-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              aria-label="Close enlarged image"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
