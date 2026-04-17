"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK = "/images/food/borscht.jpg";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEEA/ALPZ+5NQ0m2eC0u5I4ncuUByMkAE4P4KUpVW6Y//2Q==";

// Helper function to enhance alt text
function enhanceAltText(originalAlt: string, src: string, useFallback: boolean): string {
  // If using fallback image, provide specific description
  if (useFallback || src === FALLBACK) {
    return "Traditional Russian borscht soup with vibrant red beet broth, served in a white bowl with sour cream garnish and fresh herbs, representing classic Eastern European cuisine at Cafe St. Petersburg";
  }
  
  // If alt text is already descriptive (more than 50 characters), use as-is
  if (originalAlt.length > 50) {
    return originalAlt;
  }
  
  // Enhance generic alt text with context
  const contextualPrefix = "Featured dish at Cafe St. Petersburg: ";
  const contextualSuffix = ", showcasing authentic Eastern European cuisine in an elegant presentation";
  
  return `${contextualPrefix}${originalAlt}${contextualSuffix}`;
}

type FoodImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FoodImage({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  sizes,
  priority,
}: FoodImageProps) {
  const [useFallback, setUseFallback] = useState(false);
  const imgSrc =
    useFallback || !src || src.startsWith("data:") ? FALLBACK : src;
  
  // Generate enhanced alt text
  const enhancedAlt = enhanceAltText(alt, imgSrc, useFallback);

  // Ensure proper sizing attributes when using fill
  const imageProps = fill
    ? {
        fill: true,
        sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      }
    : {
        width: width || 400,
        height: height || 300,
      };

  return (
    <Image
      src={imgSrc}
      alt={enhancedAlt}
      {...imageProps}
      className={className}
      priority={priority}
      placeholder="blur"
      blurDataURL={BLUR_DATA}
      onError={() => setUseFallback(true)}
      unoptimized={imgSrc === FALLBACK}
    />
  );
}