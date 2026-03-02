"use client";

import { useState, useEffect } from "react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("section");
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setVisible(heroBottom < 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToInquiry = () => {
    document.getElementById("banquet-inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#3b5323]/20 bg-[#f5f0e8]/98 p-4 shadow-lg backdrop-blur-sm lg:hidden">
      <button
        type="button"
        onClick={scrollToInquiry}
        className="w-full rounded-full bg-[#c4a35a] py-4 font-semibold text-[#2d401a] transition hover:bg-[#d4b86a]"
      >
        Inquire Now
      </button>
    </div>
  );
}
