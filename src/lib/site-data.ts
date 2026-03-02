export const siteData = {
  name: "Cafe St. Petersburg",
  tagline: "A Taste of Eastern Europe",
  legalEntity: "GEM PARTNERS LLC",
  address: "57-1 Union St, Newton Centre, MA 02459",
  phone: "(617) 467-3555",
  email: "cafestpetersburg@gmail.com",
  social: {
    facebook: "https://www.facebook.com/CafeStPetersburg",
    instagram: "https://www.instagram.com/cafestpetersburg/",
  },
  hours: {
    thursday: "5 PM – 11 PM",
    friday: "5 PM – 1 AM",
    saturday: "12 PM – 1 AM",
    sunday: "12 PM – 10 PM",
    mondayToWednesday: "Closed",
  },
  catering: {
    hours: {
      friday: "5 PM – 1 AM",
      saturday: "12 PM – 1 AM",
      sunday: "12 PM – 10 PM",
    },
    serviceAreas: ["Newton", "Newton Centre", "Brookline"],
    capacity: "20 to 200 guests",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=57-1+Union+St,+Newton+Centre,+MA+02459",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.0!2d-71.19!3d42.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE5JzQ4LjAiTiA3McKwMTEnMjQuMCJX!5e0!3m2!1sen!2sus!4v1",
} as const;

export const navLinks = {
  main: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Catering" },
    { href: "/events", label: "Events" },
    { href: "/reservation", label: "Reservation" },
    { href: "/banquet", label: "Banquet" },
    { href: "/our-story", label: "Our Story" },
    { href: "/hiring", label: "We're Hiring" },
    { href: "/contacts", label: "Contacts" },
  ],
  more: [] as { href: string; label: string }[],
  footer: [
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Catering" },
    { href: "/events", label: "Events" },
    { href: "/reservation", label: "Reservation" },
    { href: "/banquet", label: "Banquet" },
    { href: "/our-story", label: "Our Story" },
    { href: "/hiring", label: "We're Hiring" },
    { href: "/contacts", label: "Contacts" },
    { href: "/menu", label: "Order Online" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
  ],
} as const;

export const featuredDishes = [
  {
    id: "1",
    name: "Alaska Finest Red Caviar 56g/2oz",
    price: 30.0,
    image: "/images/food/blini-red-caviar.jpg",
    alt: "Red salmon caviar with blini",
  },
  {
    id: "2",
    name: "Roe Acipenser Black Caviar 56g/2oz",
    price: 95.0,
    image: "/images/food/blini-red-caviar.jpg",
    alt: "Premium caviar with blini",
  },
  {
    id: "3",
    name: "Classic Borscht",
    price: 18.0,
    image: "/images/food/borscht.jpg",
    alt: "Classic Eastern European borscht soup",
  },
  {
    id: "4",
    name: "Beef Stroganoff",
    price: 30.0,
    image: "/images/food/beef-stroganoff.jpg",
    alt: "Beef stroganoff with creamy sauce",
  },
] as const;

export { upcomingEvents } from "./events-data";

export const testimonials = [
  {
    name: "Sky O.",
    text: "Amazing atmosphere—it felt like stepping into Eastern Europe. The owner even came by our table to greet us. Such a special place.",
    source: "via Google",
  },
  {
    name: "Regina G.",
    text: "We came for an event and had an absolute blast. The food was incredible and the staff couldn't have been friendlier.",
    source: "via Google",
  },
  {
    name: "Kaitlyn A.",
    text: "Came in on a Sunday night and our server was extremely kind. Best stroganoff I've ever had, and the ambience was perfect.",
    source: "via Yelp",
  },
] as const;

export const features = [
  "Catering",
  "Delivery",
  "Takeout",
  "Dine In",
  "Great Cocktails",
] as const;

export const galleryImages = [
  { src: "/images/food/interior.jpg", alt: "Cafe St. Petersburg dining interior" },
  { src: "/images/food/borscht.jpg", alt: "Classic borscht soup" },
  { src: "/images/food/blini-red-caviar.jpg", alt: "Caviar and blini" },
  { src: "/images/food/hero.jpg", alt: "Signature dishes at Cafe St. Petersburg" },
  { src: "/images/food/meat-platter.jpg", alt: "Meat platter" },
  { src: "/images/food/beef-stroganoff.jpg", alt: "Beef stroganoff" },
  { src: "/images/food/chicken-kiev.jpg", alt: "Chicken Kiev" },
  { src: "/images/food/burrata-salad.jpg", alt: "Burrata salad" },
  { src: "/images/food/honey-cake.jpg", alt: "Honey cake (Medovik)" },
] as const;

export const faqs = [
  {
    q: "What are you known for?",
    a: "We're known for authentic Eastern European cuisine with a strong Georgian influence. Think rich borscht, tender beef stroganoff, delicate caviar, and hearty shared plates that bring people together.",
  },
  {
    q: "What meals do you serve?",
    a: "We serve lunch and dinner. Thursday we open at 5 PM; Friday through Sunday we offer both lunch and dinner service. Check our hours for exact times.",
  },
  {
    q: "Do you offer delivery or takeout?",
    a: "Yes. You can order online for takeout or delivery. Ordering through our website saves on fees and helps support our local business.",
  },
  {
    q: "Where are you located?",
    a: "We're at 57-1 Union Street in Newton Centre, Massachusetts—a cozy spot that feels like a hidden gem in the heart of the village.",
  },
  {
    q: "What areas do you serve?",
    a: "For catering, we serve Newton, Newton Centre, and Brookline. We can accommodate events from 20 to 200 guests.",
  },
] as const;
