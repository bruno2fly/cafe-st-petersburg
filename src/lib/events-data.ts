const MONTH_ABBR: Record<string, string> = {
  January: "JAN", February: "FEB", March: "MAR", April: "APR", May: "MAY",
  June: "JUN", July: "JUL", August: "AUG", September: "SEP", October: "OCT",
  November: "NOV", December: "DEC",
};

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
  eventType?: string;
};

export function getDateOverlay(dateStr: string): string {
  const match = dateStr.match(/(\w+)\s+(\d+)/);
  if (!match) return "";
  const month = MONTH_ABBR[match[1]] ?? match[1].slice(0, 3).toUpperCase();
  return `${month} ${match[2]}`;
}

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
    eventType: "FAMILY PROGRAMS",
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
    eventType: "LIVE PROGRAMS",
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
    eventType: "QUIZ PROGRAMS",
  },
  {
    id: "4",
    slug: "live-parisian-gypsy-jazz-dinner",
    title: "Live Parisian Gypsy Jazz Dinner",
    date: "Thursday, March 12, 2026",
    time: "7:00 – 9:30 PM",
    repeats: false,
    image: "/images/events/2%20-%20Live%20Parisian%20Gypsy%20Jazz%20Dinner%20-%20Post%20(1).PNG",
    alt: "Live Parisian Gypsy Jazz Dinner at Cafe St. Petersburg",
    description:
      "Experience the vibrant sound of Jazz Manouche — the iconic Parisian swing style made famous in 1930s France by Django Reinhardt. Expect refined, high-tempo swing, romantic musette waltzes, and an intimate European atmosphere. Enjoy exceptional live jazz up close, delicious European cuisine, curated wines & craft cocktails, and space to listen or dance. Featuring Yuriy Levinson (Clarinet), Leo Karmiy (Double Bass), David Wright (Guitar & Vocal), and Jack Soref (Guitar). Reservations required. $10 cover charge. Call (617) 762-7830.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "5",
    slug: "ladies-night-angels-demons",
    title: "Ladies Night: Angels & Demons",
    date: "Friday, March 13, 2026",
    time: "7:00 PM",
    repeats: false,
    image: "/images/events/Angels%20%26%20Demons%20-%20Story%20(1).PNG",
    alt: "Ladies Night Angels & Demons themed night at Cafe St. Petersburg",
    description:
      "Themed night at Cafe St. Petersburg — you know the dress code. An evening of surprises, style, and atmosphere. Program details revealed after reservation.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "6",
    slug: "club-22-intellectual-quiz",
    title: "Club 22 — Intellectual Quiz",
    date: "Sunday, March 15, 2026",
    time: "5:00 PM",
    repeats: false,
    image: "/images/events/Intellectual%20Quiz%20-%20Instagram%20Post.PNG",
    alt: "Club 22 Intellectual Quiz hosted by Rovshan Askerov",
    description:
      "Join us for Club 22 — an intellectual quiz night hosted by Rovshan Askerov. Test your wits with trivia and games in a relaxed café setting. Seats are limited; advance registration is recommended.",
    ticketUrl: undefined,
    eventType: "QUIZ PROGRAMS",
  },
  {
    id: "7",
    slug: "club-22-intellectual-game",
    title: "Клуб 22 — Интеллектуальная игра с волчком",
    date: "Sunday, March 15, 2026",
    time: "5:00 PM",
    repeats: false,
    image: "/images/events/PHOTO-2026-03-04-15-43-47.JPEG",
    alt: "Клуб 22 — Интеллектуальная игра с волчком. Ведущий: Ровшан Аскеров",
    description:
      "Интеллектуальная игра с волчком в кафе «Санкт-Петербург». Ведущий — Ровшан Аскеров. Начало в 17:00. Уютная атмосфера, интересные вопросы и живое общение. Место проведения: 57 Union St, Newton Centre, MA 02459.",
    ticketUrl: undefined,
    eventType: "QUIZ PROGRAMS",
  },
  {
    id: "8",
    slug: "crazy-villains-kids-party",
    title: "Crazy Villains Kids Party",
    date: "Sunday, March 15, 2026",
    time: "11:30 AM",
    repeats: false,
    image: "/images/events/Crazy%20Villains%20Party%20-%20Story.PNG",
    alt: "Crazy Villains kids party at St Petersburg Cafe",
    description:
      "A fun-filled kids party with a villain twist! Enjoy fun games, dance & competitions for kids and parents, a creative workshop, and a bubble show. Location: St Petersburg Cafe. Call 617-467-3555 for more info.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "9",
    slug: "dark-dance-kids-party",
    title: "Dark Dance Kids Party",
    date: "Sunday, March 22, 2026",
    time: "11:30 AM",
    repeats: false,
    image: "/images/events/Dark%20Dance%20Party%20-%20Post%20(1).PNG",
    alt: "Dark Dance kids party at St Petersburg Cafe",
    description:
      "A spooky-fun kids party with an Addams Family vibe. Join us for interactive games, an adventure quest, fun competitions, and dance. Creative workshop: magic bracelets & crafts. Plus a bubble show! Call 617-467-3555.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "10",
    slug: "eurovision-after-dark",
    title: "Eurovision After Dark — International Karaoke Night",
    date: "Friday, March 27, 2026",
    time: "9:00 PM",
    repeats: false,
    image: "/images/events/Eurovision%20After%20Dark%20-Story.PNG",
    alt: "Eurovision After Dark International Karaoke Night",
    description:
      "Lights. Music. Drama. Sing your favorite European, American & global hits at our Eurovision-style karaoke night. $20 entry. An evening of fun, performance, and international flair.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "11",
    slug: "frozen-magic-party",
    title: "Frozen Magic Party",
    date: "Sunday, March 29, 2026",
    time: "11:30 AM",
    repeats: false,
    image: "/images/events/Frozen%20Magic%20-%20Post.PNG",
    alt: "Frozen Magic party at St Petersburg Cafe",
    description:
      "A magical winter-themed party for kids! Enjoy snow games and competitions, a master class (snow slime or winter clay craft), mini disco & dance battle, and a bubble show. St Petersburg Cafe — 617-467-3555.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "12",
    slug: "stand-up-valeriy-zhidkov",
    title: "Stand Up Show — Валерий Жидков",
    date: "Tuesday, March 31, 2026",
    time: "TBA",
    repeats: false,
    image: "/images/events/Valery%20Story%20-%20final.PNG",
    alt: "Stand Up Show с Валерием Жидковым в Boston",
    description:
      "Вечер стендап-комедии с Валерием Жидковым в кафе «Санкт-Петербург», Бостон. 31 марта. Адрес: 57 Union St, Newton Centre, MA. Резервации и информация: 617-467-3555.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export const upcomingEvents = events;
