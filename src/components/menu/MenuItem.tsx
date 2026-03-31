import { FoodImage } from "@/components/FoodImage";
import type { MenuItem as MenuItemType } from "@/types/menu";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const hasImage = !!item.image;
  const hasGradientBg = item.hasGradientBg && !hasImage;

  return (
    <div className="group overflow-hidden rounded-xl border border-amber-200/40 bg-white shadow-sm transition hover:shadow-md">
      {/* Image or Gradient Background */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {hasImage ? (
          <FoodImage
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : hasGradientBg ? (
          <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
        ) : (
          <div className="h-full w-full bg-amber-50/50" />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold text-amber-950 sm:text-xl">
            {item.name}
          </h3>
          <div className="shrink-0 text-right">
            <span className="font-bold text-amber-800">
              ${item.price}
              {item.priceNote && (
                <span className="ml-1 text-sm font-medium text-amber-700">
                  {item.priceNote}
                </span>
              )}
            </span>
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
          {item.description}
        </p>

        {/* Dietary Info */}
        {item.dietaryInfo && item.dietaryInfo.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.dietaryInfo.map((info) => (
              <span
                key={info}
                className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
              >
                {info}
              </span>
            ))}
          </div>
        )}

        {/* Add-ons */}
        {item.addOns && item.addOns.length > 0 && (
          <div className="mt-3 space-y-1">
            {item.addOns.map((addOn) => (
              <p key={addOn.name} className="text-xs text-amber-800/80">
                Add {addOn.name} +${addOn.price}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
