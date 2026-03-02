import { Briefcase, Heart, Gift, Wine } from "lucide-react";

export const cateringOccasions = [
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Lunches, meetings, and company parties.",
    Icon: Briefcase,
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Rehearsal dinners, receptions, and cocktail hours.",
    Icon: Heart,
  },
  {
    id: "private",
    title: "Private Parties",
    description: "Birthdays, anniversaries, and family gatherings.",
    Icon: Gift,
  },
  {
    id: "holiday",
    title: "Holiday Parties",
    description: "Festive meals for any celebration.",
    Icon: Wine,
  },
] as const;

export const cateringFAQs = [
  {
    q: "What areas do you serve?",
    a: "We serve Newton, Newton Centre, Brookline, and surrounding areas.",
  },
  {
    q: "How much advance notice is required?",
    a: "We recommend at least 3–5 business days for most orders. Larger events may require more notice.",
  },
  {
    q: "Can you accommodate dietary restrictions (gluten-free, vegan, allergies)?",
    a: "Yes, we can accommodate most dietary needs. Please mention any restrictions in your request.",
  },
  {
    q: "Do you require a minimum order amount?",
    a: "Please contact us for minimum order details based on your event size and location.",
  },
  {
    q: "Do you provide plates, napkins, and cutlery?",
    a: "Yes, we can provide plates, napkins, cutlery, and serving equipment. Let us know what you need.",
  },
] as const;

export const cateringReviews = [
  {
    name: "Natalia M.",
    text: "This restaurant is truly a gem! The food is absolutely delicious and has that comforting, homemade taste that makes you feel right at home. Every dish is full of authentic flavor and prepared with so much care. The staff is polite, attentive, and always makes you feel welcome. On top of that, they often host fun and interesting events...",
    fullText:
      "This restaurant is truly a gem! The food is absolutely delicious and has that comforting, homemade taste that makes you feel right at home. Every dish is full of authentic flavor and prepared with so much care. The staff is polite, attentive, and always makes you feel welcome. On top of that, they often host fun and interesting events that make every visit special.",
  },
  {
    name: "Nozanin S.",
    text: "Food was delicious, the staff was incredibly kind, and the manager even came over to introduce herself and offered us complimentary champagne. Amazing experience, best Russian food in Massachusetts",
    fullText:
      "Food was delicious, the staff was incredibly kind, and the manager even came over to introduce herself and offered us complimentary champagne. Amazing experience, best Russian food in Massachusetts",
  },
  {
    name: "Steven P.",
    text: "Family Birthday Dinner. Superb menu and service, from seating through departure. Beef Stroganoff and the pork/beef dumplings were perfect. Plus Friday night is live music and dancing, at least many patrons were dancing to the lively Russian and European music...",
    fullText:
      "Family Birthday Dinner. Superb menu and service, from seating through departure. Beef Stroganoff and the pork/beef dumplings were perfect. Plus Friday night is live music and dancing, at least many patrons were dancing to the lively Russian and European music. Highly recommend!",
  },
] as const;

export const cateringGalleryImages = [
  {
    src: "/images/catering.jpeg",
    alt: "Catered buffet spread and event setup",
  },
  {
    src: "/images/catering2.jpeg",
    alt: "Cafe St. Petersburg catering display",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    alt: "Braised meat dish with garnish on dark plate",
  },
] as const;
