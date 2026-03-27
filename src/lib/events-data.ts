export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  image: string;
  alt: string;
  description?: string;
  ticketUrl?: string;
  repeats?: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    slug: "quiz-night-january",
    title: "Quiz Night: January Edition",
    date: "January 15, 2025",
    time: "7:00 PM - 9:00 PM",
    image: "/images/events/quiz-night.jpg",
    alt: "Quiz night at Cafe St. Petersburg",
    description:
      "Test your knowledge and enjoy great food at our monthly quiz night. Teams of up to 6 people compete for prizes while enjoying authentic Eastern European cuisine.",
    ticketUrl: "https://silaquiz.com/events/cafe-st-petersburg-january",
    repeats: true,
  },
  {
    id: "2",
    slug: "wine-tasting-georgian",
    title: "Georgian Wine Tasting",
    date: "January 22, 2025",
    time: "6:30 PM - 8:30 PM",
    image: "/images/events/wine-tasting.jpg",
    alt: "Georgian wine tasting event",
    description:
      "Discover the ancient wine-making traditions of Georgia with our sommelier. Sample 5 unique Georgian wines paired with traditional appetizers.",
    ticketUrl: "https://silaquiz.com/events/georgian-wine-tasting",
  },
  {
    id: "3",
    slug: "cooking-class-pelmeni",
    title: "Pelmeni Making Workshop",
    date: "February 5, 2025",
    time: "2:00 PM - 4:00 PM",
    image: "/images/events/cooking-class.jpg",
    alt: "Hands-on pelmeni making class",
    description:
      "Learn to make authentic Russian pelmeni from scratch. Our chef will guide you through the traditional techniques for perfect dumplings every time.",
    ticketUrl: "https://silaquiz.com/events/pelmeni-workshop",
  },
  {
    id: "4",
    slug: "valentines-dinner",
    title: "Valentine's Day Special Dinner",
    date: "February 14, 2025",
    time: "6:00 PM - 9:00 PM",
    image: "/images/events/valentines.jpg",
    alt: "Romantic Valentine's Day dinner",
    description:
      "Celebrate love with a special 4-course tasting menu featuring our most romantic dishes. Includes champagne toast and live acoustic music.",
  },
  {
    id: "5",
    slug: "quiz-night-february",
    title: "Quiz Night: February Edition",
    date: "February 19, 2025",
    time: "7:00 PM - 9:00 PM",
    image: "/images/events/quiz-night.jpg",
    alt: "Quiz night at Cafe St. Petersburg",
    description:
      "Test your knowledge and enjoy great food at our monthly quiz night. Teams of up to 6 people compete for prizes while enjoying authentic Eastern European cuisine.",
    ticketUrl: "https://silaquiz.com/events/cafe-st-petersburg-february",
    repeats: true,
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}

export function getUpcomingEvents(count?: number): Event[] {
  const today = new Date();
  const upcoming = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
  });
  
  if (count) {
    return upcoming.slice(0, count);
  }
  
  return upcoming;
}

export function getEventsThisMonth(): Event[] {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getMonth() === currentMonth &&
      eventDate.getFullYear() === currentYear
    );
  });
}
