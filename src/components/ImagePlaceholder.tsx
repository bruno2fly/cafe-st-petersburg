type ImagePlaceholderProps = {
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export function ImagePlaceholder({
  className = "",
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br from-amber-200/40 via-amber-100/30 to-stone-200/40 ${aspectClasses[aspectRatio]} ${className}`}
      aria-hidden
    />
  );
}
