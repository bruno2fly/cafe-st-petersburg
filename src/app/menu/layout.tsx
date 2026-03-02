import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our full menu of authentic Eastern European cuisine. Blini & caviar, appetizers, soups, main courses, desserts, and more.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
