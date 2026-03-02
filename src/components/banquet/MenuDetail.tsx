"use client";

import { type BanquetCategory } from "@/lib/banquet-menus";

type MenuDetailProps = {
  tierName: string;
  price: number;
  categories: BanquetCategory[];
  onClose: () => void;
  variant?: "modal" | "inline";
};

export function MenuDetail({
  tierName,
  price,
  categories,
  onClose,
  variant = "modal",
}: MenuDetailProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#3b5323]">
            ${price} {tierName} Menu
          </h3>
          <p className="mt-1 text-sm text-[#3b5323]/70">
            All packages include tea, coffee, water (still & sparkling), and soda.
          </p>
        </div>
        {variant === "modal" && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[#3b5323]/70 transition hover:bg-[#3b5323]/10 hover:text-[#3b5323]"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <div className="mt-8 space-y-8">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h4 className="font-serif text-lg font-semibold text-[#3b5323]">
              {cat.title} (pick {cat.pickCount})
            </h4>
            <ul className="mt-3 space-y-2">
              {cat.items.map((item) => (
                <li key={item.name} className="border-b border-[#3b5323]/10 pb-2 last:border-0">
                  <span className="font-medium text-[#3b5323]">{item.name}</span>
                  {item.description && (
                    <p className="mt-0.5 text-sm text-[#3b5323]/70">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm font-medium text-[#3b5323]/80">
        Included: Tea, Coffee, Water (still & sparkling), Soda
      </p>
      {variant === "inline" && (
        <button
          type="button"
          onClick={onClose}
          className="mt-6 text-sm font-medium text-[#c4a35a] hover:underline"
        >
          Collapse menu
        </button>
      )}
    </>
  );

  if (variant === "inline") {
    return <div className="space-y-6">{content}</div>;
  }

  return (
    <div className="max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8 md:p-10">
      {content}
    </div>
  );
}
