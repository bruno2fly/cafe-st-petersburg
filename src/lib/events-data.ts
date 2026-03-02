export type EventItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  repeats: boolean;
  image: string;
  alt: string;
  description?: string;
  ticketUrl?: string;
};

export const events: EventItem[] = [
  {
    id: "1",
    slug: "kids-wonderland",
    title: "Kids Wonderland Program in Newton MA",
    date: "Sunday, March 1, 2026",
    time: "11:30 AM – 3:30 PM",
    repeats: true,
    image: "/images/events/kids-wonderland.png",
    alt: "HUNTRIX K-POP PARTY with Rumi - Kids Wonderland",
    description:
      "Grand K-Pop Party at Cafe St. Petersburg! Music, dance, and K-Pop vibes. Get your tickets now!",
    ticketUrl: undefined,
  },
  {
    id: "2",
    slug: "lalafa",
    title: "La La Fa Первая Игра в Бостоне",
    date: "Friday, March 6, 2026",
    time: "6:30 PM – 12:50 AM",
    repeats: true,
    image: "/images/events/lalafa.png",
    alt: "ЛЯ-ЛЯ-ФА Караоке Квиз - АЙ-ЯЙ-ЯЙ ДЕВЧОНКИ",
    description:
      "ЛЯ-ЛЯ-ФА Караоке Квиз at Cafe St. Petersburg. We sing as we can, we relax as we like!",
    ticketUrl: "https://silaquiz.com/",
  },
  {
    id: "3",
    slug: "sila-mysli",
    title: "Сила Мысли Бостон №2",
    date: "Sunday, March 8, 2026",
    time: "4 – 7 PM",
    repeats: true,
    image: "/images/events/sila-mysli.png",
    alt: "Развлекательная викторина СИЛА МЫСЛИ БОСТОН",
    description:
      "Entertaining quiz at Cafe St. Petersburg. A festive quiz in honor of International Women's Day with music, questions, and prizes.",
    ticketUrl: "https://silaquiz.com/",
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export const upcomingEvents = events;
