import {
  CateringHero,
  EventUnforgettable,
  OccasionGrid,
  OrderCateringCTA,
  CateringForm,
  CateringFAQ,
  GuestReviews,
  LocationMap,
} from "@/components/catering";

export const metadata = {
  title: "Catering",
  description:
    "Eastern European catering for events in Newton MA. Corporate lunches, weddings, private parties, and more. Order online or request a custom menu.",
};

export default function CateringPage() {
  return (
    <div>
      <CateringHero />
      <EventUnforgettable />
      <OccasionGrid />
      <OrderCateringCTA />
      <CateringForm />
      <CateringFAQ />
      <GuestReviews />
      <LocationMap />
    </div>
  );
}
