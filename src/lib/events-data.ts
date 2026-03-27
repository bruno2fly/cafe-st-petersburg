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
    slug: "wine-tasting-january",
    title: "Wine Tasting: Georgian Wines",
    date: "January 15, 2024",
    time: "7:00 PM",
    image: "/images/events/wine-tasting.jpg",
    alt: "Georgian wine tasting event",
    description: "Join us for an evening exploring the unique flavors of Georgian wines, paired with traditional appetizers.",
    ticketUrl: "https://silaquiz.com/wine-tasting",
  },
  {
    id: "2",
    slug: "cooking-class-february",
    title: "Cooking Class: Handmade Pelmeni",
    date: "February 8, 2024",
    time: "6:00 PM",
    image: "/images/events/cooking-class.jpg",
    alt: "Pelmeni cooking class",
    description: "Learn to make authentic handmade pelmeni from scratch with our head chef.",
    ticketUrl: "https://silaquiz.com/cooking-class",
  },
  {
    id: "3",
    slug: "live-music-saturday",
    title: "Live Music Night",
    date: "Every Saturday",
    time: "8:00 PM",
    image: "/images/events/live-music.jpg",
    alt: "Live music performance",
    description: "Enjoy live acoustic performances every Saturday evening while you dine.",
    repeats: true,
  },
];

export function getEventBySlug(slug: string): Event | null {
  return events.find(event => event.slug === slug) || null;
}

export function getUpcomingEvents(): Event[] {
  // For demo purposes, return all events
  // In a real app, you'd filter by date
  return events;
}

export function getEventsThisMonth(): Event[] {
  // For demo purposes, return all events
  // In a real app, you'd filter by current month
  return events;
}

export function getDateOverlay(date: Date): Event[] {
  // Return events for a specific date to show as calendar overlays
  // For demo purposes, return events that match the date string
  const dateStr = date.toLocaleDateString('en-US', { 
    month: 'long',
    day: 'numeric', 
    year: 'numeric'
  });
  
  return events.filter(event => {
    // Handle repeating events
    if (event.repeats) {
      return true; // Show repeating events on all dates for demo
    }
    
    // Match specific dates
    return event.date.includes(dateStr) || event.date.includes(date.getDate().toString());
  });
}