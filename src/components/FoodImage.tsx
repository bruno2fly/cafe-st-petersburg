"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK = "/images/food/borscht.jpg";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEEA/ALPZ+5NQ0m2eC0u5I4ncuUByMkAE4P4KUpVW6Y//2Q==";

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

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={BLUR_DATA}
      onError={() => setUseFallback(true)}
      unoptimized={imgSrc === FALLBACK}
    />
  );
}
