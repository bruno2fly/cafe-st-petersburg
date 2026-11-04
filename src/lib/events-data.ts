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
  /** Ticketed event: shown first and highlighted with a "Tickets" badge. */
  featured?: boolean;
  /** Poster is a wide (Eventbrite 2:1) banner rather than a portrait flyer. */
  imageWide?: boolean;
  /** Exact start/end with time zone, used for Google Event schema. */
  startISO?: string;
  endISO?: string;
  /** Paragraphs for the "What to expect" section. */
  body?: string[];
  highlights?: string[];
  schedule?: string[];
  /** Lines for the "Tickets" section, e.g. "Audience ticket: $25". */
  priceLines?: string[];
  /** Ticket types for Google Event schema. */
  offers?: { name: string; price: number }[];
  seoTitle?: string;
  seoDescription?: string;
};

export function getDateOverlay(dateStr: string): string {
  const match = dateStr.match(/(\w+)\s+(\d+)/);
  if (!match) return "";
  const month = MONTH_ABBR[match[1]] ?? match[1].slice(0, 3).toUpperCase();
  return `${month} ${match[2]}`;
}

/** Parse event date string (e.g. "Sunday, March 1, 2026") to Date at start of day local time. */
function parseEventDate(dateStr: string): Date | null {
  const match = dateStr.match(/,?\s*(\w+\s+\d+,?\s*\d{4})/);
  if (!match) return null;
  const d = new Date(match[1].trim());
  return isNaN(d.getTime()) ? null : d;
}

/** Events with date >= today (start of day), sorted by date. */
/** Event titles temporarily hidden from the site (kept in data, easy to restore). */
const HIDDEN_TITLES = ["Live Piano Night"];

export function getUpcomingEvents(): EventItem[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => {
      if (HIDDEN_TITLES.includes(e.title)) return false;
      const d = parseEventDate(e.date);
      return d && d >= today;
    })
    .sort((a, b) => {
      // Ticketed (featured) events always come first, then by date.
      if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
      const da = parseEventDate(a.date)?.getTime() ?? 0;
      const db = parseEventDate(b.date)?.getTime() ?? 0;
      return da - db;
    });
}

/** Single next upcoming event (event of the week). */
export function getEventOfTheWeek(): EventItem | null {
  const upcoming = getUpcomingEvents();
  return upcoming.length > 0 ? upcoming[0] : null;
}

/** Events in the current month (any day), sorted by date. Used for events page when filter is "All". */
export function getEventsThisMonth(): EventItem[] {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth();
  return events
    .filter((e) => {
      const d = parseEventDate(e.date);
      return d && d.getFullYear() === thisYear && d.getMonth() === thisMonth;
    })
    .sort((a, b) => {
      const da = parseEventDate(a.date)?.getTime() ?? 0;
      const db = parseEventDate(b.date)?.getTime() ?? 0;
      return da - db;
    });
}

export const events: EventItem[] = [
  // ===== Ticketed events (featured). To add a new one, copy a block below. =====
  {
    id: "t-karaoke-nov6",
    slug: "karaoke-battle-newton-nov-6",
    title: "Karaoke Battle: $500 Cash Prize",
    date: "Friday, November 6, 2026",
    time: "Doors 8 PM · Battle 9 PM",
    repeats: false,
    featured: true,
    imageWide: true,
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1197134260%2F3004228937633%2F1%2Foriginal.20261103-003755?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=2f56d8a91df11a8058b87760a26f14a4",
    alt: "Karaoke battle night at Café St. Petersburg, Newton MA",
    description:
      "Karaoke Battle with a $500 cash prize. Judges and the audience pick the winner. Songs in English or Russian, no experience needed. Audience $25, singers $40.",
    body: [
      "Think you have the best voice in town? Take the stage at the biggest karaoke night in Newton and compete for a $500 cash prize. Judges and the audience pick the winner together, and you can sing in English or Russian. No experience needed.",
      "Not singing? Grab an audience ticket, cheer for your favorites and help choose the champion. After the battle, the open mic is yours until 1 AM. One of the most fun things to do in Newton Centre on a Friday night.",
    ],
    highlights: [
      "1st place: $500 cash",
      "2nd & 3rd place: a dinner table for your team",
      "Judges + audience pick the winner",
      "Songs in English or Russian",
      "No experience needed",
    ],
    schedule: ["8:00 PM: Doors open", "9:00 PM: Karaoke battle", "11:00 PM – 1:00 AM: Open mic"],
    priceLines: ["Audience ticket: $25", "Singer ticket: $40 (only 16 singer spots)"],
    offers: [
      { name: "Audience ticket", price: 25 },
      { name: "Singer ticket", price: 40 },
    ],
    startISO: "2026-11-06T20:00:00-05:00",
    endISO: "2026-11-07T01:00:00-05:00",
    seoTitle: "Karaoke Battle $500 Prize · Newton, MA · Nov 6 | Café St. Petersburg",
    seoDescription:
      "Karaoke Battle in Newton, MA on Fri, Nov 6. Doors 8 PM. Win $500 cash! Sing in English or Russian. Audience $25, singers $40, only 16 spots. Get tickets now.",
    ticketUrl: "https://www.eventbrite.com/e/2003818159055?aff=oddtdtcreator",
    eventType: "ENTERTAINMENT",
  },
  {
    id: "t-rock-nov12",
    slug: "rock-hits-live-violin-guitar-nov-12",
    title: "Rock Hits Live: Violin & Electric Guitar",
    date: "Thursday, November 12, 2026",
    time: "Doors 7 PM · Concert 7:30 PM",
    repeats: false,
    featured: true,
    imageWide: true,
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1197001085%2F3004228937633%2F1%2Foriginal.20261031-213805?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=a5bf4c93c98c5503e9d36f9525f29129",
    alt: "Rock Hits Live violin and electric guitar concert at Café St. Petersburg, Newton MA",
    description:
      "Queen, Bon Jovi, Nirvana, Måneskin, Kino and Zemfira played live on violin and electric guitar, followed by DJ and dancing. Tickets $40.",
    body: [
      "A night of rock anthems played live on violin and electric guitar: Queen, Bon Jovi, Nirvana, Måneskin, Kino and Zemfira. Settle in for the concert at 7:30 PM, then stay for the DJ and dancing from around 9 PM.",
      "Dinner and drinks are available from our menu, so you can make a full evening of it. Live music in Newton, MA at a restaurant with live music near Boston.",
    ],
    highlights: [
      "Queen, Bon Jovi, Nirvana, Måneskin, Kino, Zemfira",
      "Violin & electric guitar, played live",
      "DJ & dancing after the concert",
    ],
    schedule: ["7:00 PM: Doors open", "7:30 PM: Concert", "~9:00 PM: DJ & dancing"],
    priceLines: ["$40 per person", "Dinner & drinks from the menu"],
    offers: [{ name: "General admission", price: 40 }],
    startISO: "2026-11-12T19:30:00-05:00",
    endISO: "2026-11-12T22:00:00-05:00",
    seoTitle: "Rock Hits Live: Violin & Guitar · Newton Centre · Nov 12",
    seoDescription:
      "Queen, Bon Jovi, Nirvana, Kino & more live on violin and electric guitar. Thu, Nov 12, 7:30 PM in Newton Centre, MA, then DJ & dancing. $40. Get tickets.",
    ticketUrl: "https://www.eventbrite.com/e/2004171324382",
    eventType: "LIVE MUSIC",
  },
  {
    id: "t-jazz-nov19",
    slug: "gypsy-jazz-swing-night-nov-19",
    title: "Gypsy Jazz & Swing Night",
    date: "Thursday, November 19, 2026",
    time: "7:00 – 10:00 PM",
    repeats: false,
    featured: true,
    imageWide: true,
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1196481654%2F3004228937633%2F1%2Foriginal.20261024-002002?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=85f79171e15be686abcc5768b6a543e2",
    alt: "Gypsy jazz and swing night at Café St. Petersburg, Newton MA",
    description:
      "Gypsy jazz, swing and French chanson live: saxophone & clarinet, guitar, double bass, piano and vocals. Tickets $10, limited seating.",
    body: [
      "An evening of gypsy jazz, swing and French chanson performed live on saxophone & clarinet, guitar, double bass, piano and vocals. A jazz night in the Boston area with a warm Eastern European dinner to match.",
      "Dinner and drinks are available from our menu. Seating is limited, so get your tickets early.",
    ],
    highlights: [
      "Gypsy jazz, swing & French chanson",
      "Saxophone & clarinet, guitar, double bass, piano & vocals",
      "Limited seating",
    ],
    schedule: ["7:00 – 10:00 PM: Live gypsy jazz & swing"],
    priceLines: ["$10 per person", "Dinner & drinks from the menu", "Limited seating"],
    offers: [{ name: "General admission", price: 10 }],
    startISO: "2026-11-19T19:00:00-05:00",
    endISO: "2026-11-19T22:00:00-05:00",
    seoTitle: "Gypsy Jazz & Swing Night in Newton, MA · Nov 19",
    seoDescription:
      "Live gypsy jazz, swing & French chanson in Newton, MA. Thu, Nov 19, 7–10 PM at Café St. Petersburg. Tickets just $10, limited seating. Get your tickets now.",
    ticketUrl: "https://www.eventbrite.com/e/2003845166836",
    eventType: "LIVE MUSIC",
  },
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
  // ===== APRIL 2026 EVENTS =====
  {
    id: "13",
    slug: "lalafa-april-3",
    title: "Ля-Ля-Фа Караоке Квиз — По Коням!",
    date: "Friday, April 3, 2026",
    time: "6:30 PM",
    repeats: false,
    image: "/images/events/lalafa-april3.png",
    alt: "Ля-Ля-Фа Караоке Квиз — По Коням! at Cafe St. Petersburg",
    description:
      "Ля-Ля-Фа Караоке Квиз — По Коням! A fun karaoke quiz night at Cafe St. Petersburg. Sing, laugh, and compete. 57 Union St, Newton Centre, MA.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "14",
    slug: "happy-easter-family-party",
    title: "Happy Easter Family Party",
    date: "Sunday, April 5, 2026",
    time: "11:30 AM",
    repeats: false,
    image: "/images/events/happy-easter-april5.png",
    alt: "Happy Easter Family Party at Cafe St. Petersburg",
    description:
      "Celebrate Easter with the whole family! Magic show, games, dance, activities, and a festive atmosphere for kids and parents. 57 Union St, Newton Centre, MA. Call 617-762-7830.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "15",
    slug: "mafia-quiz-april-9",
    title: "Сила Мысли — Мафия Бостон",
    date: "Thursday, April 9, 2026",
    time: "6:30 PM",
    repeats: false,
    image: "/images/events/mafia-april9.png",
    alt: "Сила Мысли — Мафия Бостон at Cafe St. Petersburg",
    description:
      "Развлекательная викторина Сила Мысли + игра Мафия at Cafe St. Petersburg. An entertaining quiz and Mafia game night. 57 Union St, Newton Centre, MA.",
    ticketUrl: undefined,
    eventType: "QUIZ PROGRAMS",
  },
  {
    id: "16",
    slug: "super-magic-show-april-12",
    title: "Super Magic Show Party",
    date: "Sunday, April 12, 2026",
    time: "11:30 AM – 1:30 PM",
    repeats: false,
    image: "/images/events/super-magic-show-april24.png",
    alt: "Super Magic Show Party for kids at Cafe St. Petersburg",
    description:
      "An amazing magic show party for kids! Magic performance, fun games, dancing, and kids lunch included. $75 per child, $125 for 2 kids. Reserve now: 617-762-7830.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "17",
    slug: "barynya-duet-april-16",
    title: "Barynya Duet — Elina Karokhina & Mikhail Smirnov",
    date: "Thursday, April 16, 2026",
    time: "7:00 PM",
    repeats: false,
    image: "/images/events/barynya-april16.png",
    alt: "Barynya Duet Live at Cafe St. Petersburg — Jewish, Gypsy, Ukrainian & Russian Music",
    description:
      "An unforgettable evening of live music with the acclaimed Barynya Duet — Elina Karokhina and Mikhail Smirnov from New York. Featuring Jewish, Gypsy, Ukrainian & Russian music and dance. 57 Union St, Newton Centre, MA.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "18",
    slug: "lalafa-super-90s-april-17",
    title: "Ля-Ля-Фа Караоке Квиз — Super 90s",
    date: "Friday, April 17, 2026",
    time: "6:30 PM",
    repeats: false,
    image: "/images/events/lalafa-super90s-april17.png",
    alt: "Ля-Ля-Фа Super 90s Karaoke Quiz at Cafe St. Petersburg",
    description:
      "Ля-Ля-Фа Караоке Квиз goes Super 90s! Sing your favorite hits from the 90s in a fun, festive atmosphere. 57 Union St, Newton Centre, MA.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "19",
    slug: "super-magic-show-april-24",
    title: "Super Magic Show Party",
    date: "Sunday, April 24, 2026",
    time: "11:30 AM – 1:30 PM",
    repeats: false,
    image: "/images/events/super-magic-show-april12.png",
    alt: "Super Magic Show Party for kids at Cafe St. Petersburg",
    description:
      "Another magical Sunday for kids! Amazing magic show, games, dancing, and kids lunch included. $75 per child, $125 for 2 kids. Reserve now: 617-762-7830.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "20",
    slug: "vuyko-show-april-24-25",
    title: "Ukrainian Вечорниці — VUYKO SHOW",
    date: "Friday, April 24, 2026",
    time: "8:00 PM",
    repeats: false,
    image: "/images/events/vuyko-show-april24.png",
    alt: "Ukrainian Вечорниці VUYKO SHOW — Вперше в Бостоні",
    description:
      "Вперше в Бостоні! Two nights of vibrant Ukrainian entertainment, music, and culture presented by VUYKO SHOW. Enjoy authentic Ukrainian Вечорниці (traditional evening celebrations) with live performances. Savor our signature Ukrainian menu featuring fresh caviar, traditional borscht, hearty main courses, and decadent desserts. April 24–25. 57 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "21",
    slug: "vuyko-show-april-25",
    title: "Ukrainian Вечорниці — VUYKO SHOW",
    date: "Saturday, April 25, 2026",
    time: "7:00 PM",
    repeats: false,
    image: "/images/events/vuyko-show-april24.png",
    alt: "Ukrainian Вечорниці VUYKO SHOW — Вперше в Бостоні",
    description:
      "Вперше в Бостоні! Two nights of vibrant Ukrainian entertainment, music, and culture presented by VUYKO SHOW. Enjoy authentic Ukrainian Вечорниці (traditional evening celebrations) with live performances. Savor our signature Ukrainian menu featuring fresh caviar, traditional borscht, hearty main courses, and decadent desserts. April 24–25. 57 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "23",
    slug: "kids-sunday-program-apr19",
    title: "Every Sunday Kids Program",
    date: "Sunday, April 19, 2026",
    time: "11:30 AM",
    repeats: true,
    image: "/images/events/kids-sunday-program.png",
    alt: "Every Sunday Kids Program at Cafe St. Petersburg",
    description:
      "Every Sunday at Cafe St. Petersburg — a magical kids program featuring magic shows, games, dance, crafts, and tons of fun. Perfect for families. 57 Union St, Newton Centre, MA. Call 617-762-7830.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "22",
    slug: "kids-sunday-program-apr26",
    title: "Every Sunday Kids Program",
    date: "Sunday, April 26, 2026",
    time: "11:30 AM",
    repeats: true,
    image: "/images/events/kids-sunday-program.png",
    alt: "Every Sunday Kids Program at Cafe St. Petersburg",
    description:
      "Every Sunday at Cafe St. Petersburg — a magical kids program featuring magic shows, games, dance, crafts, and tons of fun. Perfect for families. 57 Union St, Newton Centre, MA. Call 617-762-7830.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "25",
    slug: "kids-frozen-party-may3",
    title: "Kids Frozen Party",
    date: "Sunday, May 3, 2026",
    time: "11:30 AM",
    repeats: false,
    image: "/images/events/kids-party-frozen-may17.png",
    alt: "Kids Frozen Party at Cafe St. Petersburg",
    description:
      "Join us for a magical Frozen-themed kids party! Music, games, crafts, and fun for the whole family. 57 Union St, Newton Centre, MA. Call 617-762-7830.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "26",
    slug: "tequila-night-may5",
    title: "Tequila Night",
    date: "Monday, May 5, 2026",
    time: "7:00 PM",
    repeats: false,
    image: "/images/events/tequila-night-may5.png",
    alt: "Tequila Night at Cafe St. Petersburg",
    description:
      "Celebrate Cinco de Mayo with a special Tequila Night at Cafe St. Petersburg. Premium tequila cocktails, live music, and an unforgettable evening. 57 Union St, Newton Centre, MA.",
    ticketUrl: undefined,
    eventType: "THEMED NIGHTS",
  },
  {
    id: "27",
    slug: "tasting-menu-may7",
    title: "Thursday Tasting Experience",
    date: "Thursday, May 7, 2026",
    time: "7:00 PM",
    repeats: true,
    image: "/images/events/may-tasting-menu-may7.png",
    alt: "Thursday Tasting Menu at Cafe St. Petersburg",
    description:
      "A curated multi-course tasting menu experience. Limited seats — reservations required. 57 Union St, Newton Centre, MA. Call 617-762-7830.",
    ticketUrl: undefined,
    eventType: "DINING",
  },
  {
    id: "28",
    slug: "thursday-jazz-may8",
    title: "Thursday Jazz Night",
    date: "Thursday, May 8, 2026",
    time: "7:00 PM",
    repeats: true,
    image: "/images/events/may-thursday-jazz-may8.png",
    alt: "Thursday Jazz Night at Cafe St. Petersburg",
    description:
      "Live jazz every Thursday at Cafe St. Petersburg. Enjoy the finest Russian-American cuisine with live music in an intimate setting.",
    ticketUrl: undefined,
    eventType: "LIVE MUSIC",
  },
  {
    id: "29",
    slug: "mothers-day-may10",
    title: "Mother's Day Celebration",
    date: "Sunday, May 10, 2026",
    time: "11:30 AM",
    repeats: false,
    image: "/images/events/mothers-day-may10.png",
    alt: "Mother's Day Celebration at Cafe St. Petersburg",
    description:
      "Celebrate the special women in your life with a delicious brunch and elegant dinner. Reservations recommended. 57 Union St, Newton Centre, MA. Call 617-762-7830.",
    ticketUrl: undefined,
    eventType: "SPECIAL EVENTS",
  },
  {
    id: "30",
    slug: "belarusian-event-may12",
    title: "Belarusian Cultural Evening",
    date: "Tuesday, May 12, 2026",
    time: "7:00 PM",
    repeats: false,
    image: "/images/events/belarusian-event-may12.png",
    alt: "Belarusian Cultural Evening at Cafe St. Petersburg",
    description:
      "A special evening celebrating Belarusian culture with live music, traditional cuisine, and community gathering at Cafe St. Petersburg.",
    ticketUrl: undefined,
    eventType: "CULTURAL EVENTS",
  },
  {
    id: "31",
    slug: "jazz-night-may14",
    title: "Jam Session / Kvartirnik — Regina Bakhritdinova",
    date: "Wednesday, May 14, 2026",
    time: "7:30 PM",
    repeats: false,
    image: "/images/events/jam-session-kvartirnik-may14.png",
    alt: "Jam Session Kvartirnik with Regina Bakhritdinova and Berklee graduates at Cafe St. Petersburg",
    description:
      "GEM CLUB presents: Jam Session / Kvartirnik with Regina Bakhritdinova and graduates of Berklee College of Music in Boston. Musicians: bring your instruments and let&apos;s jam together! $20 entry. 57 Union St, Newton Centre, MA.",
    ticketUrl: undefined,
    eventType: "LIVE MUSIC",
  },
  {
    id: "32",
    slug: "la-la-fa-rock-may15",
    title: "La La Fa: ROCK Night — Ля-Ля-ФА",
    date: "Thursday, May 15, 2026",
    time: "6:30 PM – 7:45 PM",
    repeats: false,
    image: "https://lh3.googleusercontent.com/d/1jAjo3fJYe3iq7RY06QdcA5NnVdxhagY5=w500",
    alt: "La La Fa ROCK Night - Ля-Ля-ФА with Regina Bakhritdinova",
    description:
      "Live rock concert featuring Regina Bakhritdinova on live guitar. Soulful rock music in the spirit of true rock. 'Do you know rock? Prove it!' $50 per person. Teams up to 12 people. 57-1 Union St, Newton Centre, MA. silaQuiz.com",
    ticketUrl: "https://silaquiz.com/",
    eventType: "ENTERTAINMENT",
  },
  {
    id: "34",
    slug: "kids-sunday-may17",
    title: "Every Sunday Kids Program",
    date: "Sunday, May 17, 2026",
    time: "11:30 AM",
    repeats: true,
    image: "/images/events/kids-sunday-program.png",
    alt: "Every Sunday Kids Program at Cafe St. Petersburg",
    description:
      "Every Sunday at Cafe St. Petersburg — a magical kids program featuring magic shows, games, dance, crafts, and tons of fun. Perfect for families.",
    ticketUrl: undefined,
    eventType: "FAMILY PROGRAMS",
  },
  {
    id: "35",
    slug: "live-parisian-gypsy-jazz-may21",
    title: "Live Parisian Gypsy Jazz Dinner",
    date: "Wednesday, May 21, 2026",
    time: "7:00 PM – 9:30 PM",
    repeats: false,
    image: "https://lh3.googleusercontent.com/d/1j-qVwkXcDp9eRgEbpAxHEXY9TrxmTGGG=w500",
    alt: "Live Parisian Gypsy Jazz Dinner at Cafe St. Petersburg",
    description:
      "Experience the vibrant sound of Jazz Manouche — the iconic Parisian swing style made famous in 1930s France by Django Reinhardt. Featuring Yuriy Levinson (Clarinet), Leo Karmiy (Double Bass), David Wright (Guitar & Vocal), Rebecca Mac (Violin). Exceptional live jazz up close, delicious European cuisine, curated wines & craft cocktails. Reservations required. $10 cover charge. Call (617) 762-7830.",
    ticketUrl: undefined,
    eventType: "LIVE MUSIC",
  },

  {
    id: "36",
    slug: "belarusian-party-may22",
    title: "Belarusian Party — Беларуские вячорки",
    date: "Friday, May 22, 2026",
    time: "8:00 PM",
    repeats: false,
    image: "https://lh3.googleusercontent.com/d/1wV00xgFEJ3V5mFuvbYjTXOyTDWnigyWv=w500",
    alt: "Belarusian Party with Svyatoslav Yarmolenko & Alla Slavina",
    description:
      "Join us for an authentic Belarusian celebration! Soulful live music, traditional cuisine, unforgettable emotions. Featuring Svyatoslav Yarmolenko (soloist of the ensemble 'Svabry') and Alla Slavina (international festival laureate). 57-1 Union St, Newton Centre, MA. Call (617) 762-7830.",
    ticketUrl: undefined,
    eventType: "LIVE MUSIC",
  },
  {
    id: "37",
    slug: "sunday-brunch-may24",
    title: "Sunday Brunch",
    date: "Sunday, May 24, 2026",
    time: "11:30 AM",
    repeats: true,
    image: "/images/events/may-brunch-may24.png",
    alt: "Sunday Brunch at Cafe St. Petersburg",
    description:
      "Enjoy a luxurious Sunday Brunch at Cafe St. Petersburg featuring Russian-American cuisine and live music.",
    ticketUrl: undefined,
    eventType: "DINING",
  },
  {
    id: "38",
    slug: "hidden-gem-may28",
    title: "Hidden Gem Night",
    date: "Thursday, May 28, 2026",
    time: "7:00 PM",
    repeats: false,
    image: "/images/events/may-hidden-gem-may28.png",
    alt: "Hidden Gem Night at Cafe St. Petersburg",
    description:
      "Discover the Hidden Gem — a special curated evening with surprise performances and exclusive menu items.",
    ticketUrl: undefined,
    eventType: "SPECIAL EVENTS",
  },

  // June 2026 - Signature Tasting Experience (Every Thursday)
  {
    id: "39",
    slug: "signature-tasting-experience-june-5",
    title: "Signature Tasting Experience",
    date: "Thursday, June 4, 2026",
    time: "7:00 – 9:30 PM",
    repeats: true,
    image: "/images/events/signature-tasting-experience.png",
    alt: "Signature Tasting Experience at Cafe St. Petersburg",
    description: "Experience Boston's first authentic Eastern European tasting menu. Join us for an unforgettable culinary journey featuring traditional flavors, expertly paired wines, and the warm hospitality that defines our heritage. Each Thursday, discover the depth and richness of Eastern European cuisine in an intimate setting.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "TASTING PROGRAMS",
  },
  {
    id: "40",
    slug: "live-music-june-6",
    title: "Live Music Night",
    date: "Friday, June 5, 2026",
    time: "7:00 – 10:00 PM",
    repeats: true,
    image: "/images/events/live-music.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description: "Every Friday night, immerse yourself in the elegant ambiance of live music at Cafe St. Petersburg. From soulful piano melodies to intimate acoustic performances, each evening offers a unique musical experience that perfectly complements our Eastern European atmosphere and exceptional cuisine.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "41",
    slug: "signature-tasting-experience-june-12",
    title: "Signature Tasting Experience",
    date: "Thursday, June 11, 2026",
    time: "7:00 – 9:30 PM",
    repeats: true,
    image: "/images/events/signature-tasting-experience.png",
    alt: "Signature Tasting Experience at Cafe St. Petersburg",
    description: "Experience Boston's first authentic Eastern European tasting menu. Join us for an unforgettable culinary journey featuring traditional flavors, expertly paired wines, and the warm hospitality that defines our heritage. Each Thursday, discover the depth and richness of Eastern European cuisine in an intimate setting.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "TASTING PROGRAMS",
  },
  {
    id: "42",
    slug: "live-music-june-13",
    title: "Live Music Night",
    date: "Friday, June 12, 2026",
    time: "7:00 – 10:00 PM",
    repeats: true,
    image: "/images/events/live-music.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description: "Every Friday night, immerse yourself in the elegant ambiance of live music at Cafe St. Petersburg. From soulful piano melodies to intimate acoustic performances, each evening offers a unique musical experience that perfectly complements our Eastern European atmosphere and exceptional cuisine.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "43",
    slug: "signature-tasting-experience-june-19",
    title: "Signature Tasting Experience",
    date: "Thursday, June 18, 2026",
    time: "7:00 – 9:30 PM",
    repeats: true,
    image: "/images/events/signature-tasting-experience.png",
    alt: "Signature Tasting Experience at Cafe St. Petersburg",
    description: "Experience Boston's first authentic Eastern European tasting menu. Join us for an unforgettable culinary journey featuring traditional flavors, expertly paired wines, and the warm hospitality that defines our heritage. Each Thursday, discover the depth and richness of Eastern European cuisine in an intimate setting.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "TASTING PROGRAMS",
  },
  {
    id: "44",
    slug: "live-music-june-20",
    title: "Live Music Night",
    date: "Friday, June 19, 2026",
    time: "7:00 – 10:00 PM",
    repeats: true,
    image: "/images/events/live-music.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description: "Every Friday night, immerse yourself in the elegant ambiance of live music at Cafe St. Petersburg. From soulful piano melodies to intimate acoustic performances, each evening offers a unique musical experience that perfectly complements our Eastern European atmosphere and exceptional cuisine.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "45",
    slug: "signature-tasting-experience-june-26",
    title: "Signature Tasting Experience",
    date: "Thursday, June 25, 2026",
    time: "7:00 – 9:30 PM",
    repeats: true,
    image: "/images/events/signature-tasting-experience.png",
    alt: "Signature Tasting Experience at Cafe St. Petersburg",
    description: "Experience Boston's first authentic Eastern European tasting menu. Join us for an unforgettable culinary journey featuring traditional flavors, expertly paired wines, and the warm hospitality that defines our heritage. Each Thursday, discover the depth and richness of Eastern European cuisine in an intimate setting.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "TASTING PROGRAMS",
  },
  {
    id: "46",
    slug: "live-music-june-27",
    title: "Live Music Night",
    date: "Friday, June 26, 2026",
    time: "7:00 – 10:00 PM",
    repeats: true,
    image: "/images/events/live-music.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description: "Every Friday night, immerse yourself in the elegant ambiance of live music at Cafe St. Petersburg. From soulful piano melodies to intimate acoustic performances, each evening offers a unique musical experience that perfectly complements our Eastern European atmosphere and exceptional cuisine.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "47",
    slug: "evening-of-live-jazz-june18",
    title: "An Evening of Live Jazz",
    date: "Thursday, June 18, 2026",
    time: "7:00 – 9:30 PM",
    repeats: false,
    image: "/images/events/evening-live-jazz-june18.png",
    alt: "An Evening of Live Jazz featuring Gypsy jazz, swing, and klezmer at Cafe St. Petersburg",
    description:
      "Join us for a night of fine dining and live music — Gypsy jazz, swing, and klezmer in a warm, intimate atmosphere. Featuring Yuriy Levinson (Clarinet), Leo Karmiy (Double Bass), David Wright (Guitar & Vocal), and Jack Soref (Guitar). Cover charge: $10. Reserve your table or purchase tickets in advance.",
    ticketUrl: "https://buy.stripe.com/14AcMY8aB2gWeXedE53Nm00",
    eventType: "LIVE PROGRAMS",
  },

  // ===== JULY 2026 EVENTS =====
  {
    id: "48",
    slug: "bbq-shashlyk-night-july2",
    title: "BBQ & Shashlyk Night",
    date: "Wednesday, July 2, 2026",
    time: "6:00 PM",
    repeats: false,
    image: "/images/events/bbq-shashlyk-night-july2.png",
    alt: "BBQ & Shashlyk Night — GEM CLUB Events by St. Petersburg",
    description:
      "An unforgettable evening of authentic BBQ & Shashlyk at Cafe St. Petersburg, presented by GEM CLUB. Fire-grilled meats, rich flavors, and a warm, festive atmosphere. Pre-orders are recommended.",
    ticketUrl: "tel:6177627830",
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "49",
    slug: "shashlyk-outdoor-party-july3",
    title: "Shashlyk Outdoor Party",
    date: "Thursday, July 3, 2026",
    time: "2:00 PM",
    repeats: false,
    image: "/images/events/shashlyk-outdoor-party-july3.png",
    alt: "Shashlyk Outdoor Party — GEM CLUB Events by St. Petersburg",
    description:
      "Celebrate the 4th of July weekend with an outdoor Shashlyk Party! Presented by GEM CLUB at Cafe St. Petersburg. Pre-order required — limited availability.",
    ticketUrl: "tel:6177627830",
    eventType: "SPECIAL EVENTS",
  },
  {
    id: "50",
    slug: "fifa-finals-watch-party-july19",
    title: "FIFA Finals Watch Party",
    date: "Sunday, July 19, 2026",
    time: "3:00 PM",
    repeats: false,
    image: "/images/events/fifa-finals-watch-party-july19.png",
    alt: "FIFA Finals Watch Party at Cafe St. Petersburg",
    description:
      "Watch the FIFA Finals live on our TVs! A Taste of Eastern Europe meets World Cup fever. 57 Union St, Newton Centre, MA. Reserve now: (617) 762-7830.",
    ticketUrl: "tel:6177627830",
    eventType: "SPECIAL EVENTS",
  },
  {
    id: "51",
    slug: "evening-of-live-jazz-july23",
    title: "An Evening of Live Jazz",
    date: "Thursday, July 23, 2026",
    time: "7:00 – 9:30 PM",
    repeats: false,
    image: "/images/events/evening-live-jazz-july23-v2.png",
    alt: "An Evening of Live Jazz featuring Gypsy jazz, swing, and klezmer at Cafe St. Petersburg",
    description:
      "Join us for an elegant night of fine dining and exceptional live music in a warm, intimate atmosphere \u2014 virtuoso improvisation, soulful melodies, and the unmistakable energy of European jazz tradition. Immerse yourself in the spirit of Gypsy jazz, the rhythm of swing, and the expressive charm of klezmer, paired with exquisite cuisine and fine wines. Featuring Yuriy Levinson (Clarinet), Leo Karmiy (Double Bass), David Wright (Guitar & Vocal), and Jack Soref (Guitar). Cover charge: $10. 57 Union St, Newton Centre, MA.",
    ticketUrl: undefined,
    eventType: "LIVE PROGRAMS",
  },

  // ===== August/September 2026 Special Events =====
  {
    id: "110",
    slug: "alexander-druz-aug26",
    title: "Интеллектуальные игры в моей жизни — вечер с Александром Друзем",
    date: "Wednesday, August 26, 2026",
    time: "6:30 PM – 10 PM",
    repeats: false,
    image: "/images/events/alexander-druz-aug26.png",
    alt: "Творческий вечер с Александром Друзем — Интеллектуальные игры в моей жизни",
    description:
      "26 августа Cafe St. Petersburg приглашает вас на особенный вечер с легендарным знатоком Александром Друзем. Со сцены Александр Друзь расскажет о роли интеллектуальных игр в своей жизни, поделится историями из-за кулис легендарной программы. Программа: 6:30 PM — буфет, 7:45 PM — начало творческого вечера. Стоимость: посещение — $50, буфет — $30, VIP-пакет — $100 (только 12 гостей). 57-1 Union St, Newton Centre, MA. Звоните (617) 762-7830.",
    ticketUrl: "https://www.eventbrite.com/e/1997879412103",
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "111",
    slug: "attention-question-aug27",
    title: "«Внимание, вопрос!» — авторская игра Александра Друзя",
    date: "Thursday, August 27, 2026",
    time: "6:30 PM – 10 PM",
    repeats: false,
    image: "/images/events/attention-question-aug27.png",
    alt: "«Внимание, вопрос!» — авторская интеллектуальная игра Александра Друзя",
    description:
      "В этот четверг в Cafe St. Petersburg состоится уникальное событие: Александр Друзь лично проведёт свою авторскую интеллектуальную игру от первого вопроса до финального раунда. Формат: не более 12 команд, до 8 игроков в каждой. Стоимость: участие в игре — $50 с человека, ужин — $25 с человека. 57-1 Union St, Newton Centre, MA. Звоните (617) 762-7830.",
    ticketUrl: "https://www.eventbrite.com/e/1997884252581",
    eventType: "LIVE PROGRAMS",
  },
  {
    id: "112",
    slug: "vs-guitar-duo-sep2",
    title: "Rhythms of the World: Vs Guitar Duo",
    date: "Wednesday, September 2, 2026",
    time: "8 PM – 10 PM",
    repeats: false,
    image: "/images/events/vs-guitar-duo-sep2.png",
    alt: "Vs Guitar Duo — Vadim Kolpakov & Sasha Kolpakov Jr. live at Cafe St. Petersburg",
    description:
      "Experience an unforgettable evening with Vs Guitar Duo, featuring internationally acclaimed guitarists Vadim Kolpakov & Sasha Kolpakov Jr. Representing the third generation of the renowned Kolpakov musical dynasty, Vadim and Sasha bring together Romani music, Flamenco, Jazz, Latin rhythms, and world music. Vadim has performed at Carnegie Hall, Wembley Stadium, and Madison Square Garden, and toured worldwide with Madonna's Sticky & Sweet Tour. Tickets: Performance $50, Buffet $30, VIP $100 (includes first-row seating, buffet, and meet & greet). 57-1 Union St, Newton Centre, MA.",
    ticketUrl: "https://www.eventbrite.com/e/rhythms-of-the-world-vs-guitar-duo-tickets-1997903915393",
    eventType: "LIVE PROGRAMS",
  },

  {
    id: "113",
    slug: "live-parisian-gypsy-jazz-dinner-sep17",
    title: "Live Parisian Gypsy Jazz Dinner",
    date: "Thursday, September 17, 2026",
    time: "7:00 – 9:30 PM",
    repeats: false,
    image: "/images/events/live-parisian-gypsy-jazz-dinner-sep17.png",
    alt: "Live Parisian Gypsy Jazz Dinner at Cafe St. Petersburg",
    description:
      "Experience the vibrant sound of Jazz Manouche — the iconic Parisian swing style made famous in 1930s France by Django Reinhardt. Expect refined, high-tempo swing, romantic musette waltzes, and an intimate European atmosphere. Enjoy exceptional live jazz up close, delicious European cuisine, curated wines & craft cocktails, and space to listen or dance. Featuring Yuriy Levinson (Clarinet), Leo Karmiy (Double Bass), David Wright (Guitar & Vocal), and Jack Soref (Guitar). Reservations required. $10 cover charge. 57 Union St, Newton Centre, MA. Call (617) 762-7830.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1/experiences/gypsy-jazz-night-2?utm_source=toast.app&partySize=2&date=2026-09-17&time=19:00",
    eventType: "LIVE PROGRAMS",
  },

  {
    id: "114",
    slug: "lou-gevorkyan-live-sep3",
    title: "Lou Gevorkyan Live in Boston — Acoustic Concert",
    date: "Thursday, September 3, 2026",
    time: "8:00 PM",
    repeats: false,
    image: "/images/events/lou-gevorkyan-live-sep3.png",
    alt: "Lou Gevorkyan (Louna, ex-Tracktor Bowling) acoustic concert at Cafe St. Petersburg",
    description:
      "An intimate acoustic concert with Lou Gevorkyan (Louna, ex-Tracktor Bowling) — favorite hits, covers, and surprises. 57 Union St, Newton Centre, MA.",
    ticketUrl: "https://www.eventbrite.com/e/lou-live-in-boston-tickets-1999047113730?aff=ebdsoporgprofile",
    eventType: "LIVE PROGRAMS",
  },

  // ===== Live Music — Every Friday & Saturday (Aug–Dec 2026) =====
  {
    id: "72",
    slug: "live-music-friday-aug21",
    title: "Live Music",
    date: "Friday, August 21, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "73",
    slug: "live-music-friday-aug28",
    title: "Live Music",
    date: "Friday, August 28, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "74",
    slug: "live-music-friday-sep4",
    title: "Live Music",
    date: "Friday, September 4, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "75",
    slug: "live-music-friday-sep11",
    title: "Live Music",
    date: "Friday, September 11, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "76",
    slug: "live-music-friday-sep18",
    title: "Live Music",
    date: "Friday, September 18, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "77",
    slug: "live-music-friday-sep25",
    title: "Live Music",
    date: "Friday, September 25, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "78",
    slug: "live-music-friday-oct2",
    title: "Live Music",
    date: "Friday, October 2, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "79",
    slug: "live-music-friday-oct9",
    title: "Live Music",
    date: "Friday, October 9, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "80",
    slug: "live-music-friday-oct16",
    title: "Live Music",
    date: "Friday, October 16, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "81",
    slug: "live-music-friday-oct23",
    title: "Live Music",
    date: "Friday, October 23, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "82",
    slug: "live-music-friday-oct30",
    title: "Live Music",
    date: "Friday, October 30, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "84",
    slug: "live-music-friday-nov13",
    title: "Live Music",
    date: "Friday, November 13, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "85",
    slug: "live-music-friday-nov20",
    title: "Live Music",
    date: "Friday, November 20, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "86",
    slug: "live-music-friday-nov27",
    title: "Live Music",
    date: "Friday, November 27, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "87",
    slug: "live-music-friday-dec4",
    title: "Live Music",
    date: "Friday, December 4, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "88",
    slug: "live-music-friday-dec11",
    title: "Live Music",
    date: "Friday, December 11, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "89",
    slug: "live-music-friday-dec18",
    title: "Live Music",
    date: "Friday, December 18, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "90",
    slug: "live-music-friday-dec25",
    title: "Live Music",
    date: "Friday, December 25, 2026",
    time: "8:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "91",
    slug: "live-music-saturday-aug22",
    title: "Live Music",
    date: "Saturday, August 22, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "92",
    slug: "live-music-saturday-aug29",
    title: "Live Music",
    date: "Saturday, August 29, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "93",
    slug: "live-music-saturday-sep5",
    title: "Live Music",
    date: "Saturday, September 5, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "94",
    slug: "live-music-saturday-sep12",
    title: "Live Music",
    date: "Saturday, September 12, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "95",
    slug: "live-music-saturday-sep19",
    title: "Live Music",
    date: "Saturday, September 19, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "96",
    slug: "live-music-saturday-sep26",
    title: "Live Music",
    date: "Saturday, September 26, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "97",
    slug: "live-music-saturday-oct3",
    title: "Live Music",
    date: "Saturday, October 3, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "98",
    slug: "live-music-saturday-oct10",
    title: "Live Music",
    date: "Saturday, October 10, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "99",
    slug: "live-music-saturday-oct17",
    title: "Live Music",
    date: "Saturday, October 17, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "100",
    slug: "live-music-saturday-oct24",
    title: "Live Music",
    date: "Saturday, October 24, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "101",
    slug: "live-music-saturday-oct31",
    title: "Live Music",
    date: "Saturday, October 31, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "102",
    slug: "live-music-saturday-nov7",
    title: "Live Music",
    date: "Saturday, November 7, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "103",
    slug: "live-music-saturday-nov14",
    title: "Live Music",
    date: "Saturday, November 14, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "104",
    slug: "live-music-saturday-nov21",
    title: "Live Music",
    date: "Saturday, November 21, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "105",
    slug: "live-music-saturday-nov28",
    title: "Live Music",
    date: "Saturday, November 28, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "106",
    slug: "live-music-saturday-dec5",
    title: "Live Music",
    date: "Saturday, December 5, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "107",
    slug: "live-music-saturday-dec12",
    title: "Live Music",
    date: "Saturday, December 12, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "108",
    slug: "live-music-saturday-dec19",
    title: "Live Music",
    date: "Saturday, December 19, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "109",
    slug: "live-music-saturday-dec26",
    title: "Live Music",
    date: "Saturday, December 26, 2026",
    time: "7:00 PM – 1:00 AM",
    repeats: true,
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description:
      "Join us for an unforgettable evening of live music every Friday & Saturday at Cafe St. Petersburg. Talented vocalists and musicians bring soulful performances to our elegant dining room — the perfect soundtrack for a night of exceptional Eastern European cuisine, curated cocktails, and great company. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },

  // ===== Live Piano Night — Every Thursday (Aug–Dec 2026) =====
  {
    id: "52",
    slug: "live-piano-night-aug20",
    title: "Live Piano Night",
    date: "Thursday, August 20, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "53",
    slug: "live-piano-night-aug27",
    title: "Live Piano Night",
    date: "Thursday, August 27, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "54",
    slug: "live-piano-night-sep3",
    title: "Live Piano Night",
    date: "Thursday, September 3, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "55",
    slug: "live-piano-night-sep10",
    title: "Live Piano Night",
    date: "Thursday, September 10, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "56",
    slug: "live-piano-night-sep17",
    title: "Live Piano Night",
    date: "Thursday, September 17, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "57",
    slug: "live-piano-night-sep24",
    title: "Live Piano Night",
    date: "Thursday, September 24, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "58",
    slug: "live-piano-night-oct1",
    title: "Live Piano Night",
    date: "Thursday, October 1, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "59",
    slug: "live-piano-night-oct8",
    title: "Live Piano Night",
    date: "Thursday, October 8, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "60",
    slug: "live-piano-night-oct15",
    title: "Live Piano Night",
    date: "Thursday, October 15, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "61",
    slug: "live-piano-night-oct22",
    title: "Live Piano Night",
    date: "Thursday, October 22, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "62",
    slug: "live-piano-night-oct29",
    title: "Live Piano Night",
    date: "Thursday, October 29, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "63",
    slug: "live-piano-night-nov5",
    title: "Live Piano Night",
    date: "Thursday, November 5, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "64",
    slug: "live-piano-night-nov12",
    title: "Live Piano Night",
    date: "Thursday, November 12, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "65",
    slug: "live-piano-night-nov19",
    title: "Live Piano Night",
    date: "Thursday, November 19, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "66",
    slug: "live-piano-night-nov26",
    title: "Live Piano Night",
    date: "Thursday, November 26, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "67",
    slug: "live-piano-night-dec3",
    title: "Live Piano Night",
    date: "Thursday, December 3, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "68",
    slug: "live-piano-night-dec10",
    title: "Live Piano Night",
    date: "Thursday, December 10, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "69",
    slug: "live-piano-night-dec17",
    title: "Live Piano Night",
    date: "Thursday, December 17, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "70",
    slug: "live-piano-night-dec24",
    title: "Live Piano Night",
    date: "Thursday, December 24, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "71",
    slug: "live-piano-night-dec31",
    title: "Live Piano Night",
    date: "Thursday, December 31, 2026",
    time: "7:00 – 9:00 PM",
    repeats: true,
    image: "/images/events/live-piano-night.png",
    alt: "Live Piano Night at Cafe St. Petersburg",
    description:
      "Join us every Thursday for an intimate evening of live piano music at Cafe St. Petersburg. Relax with soulful melodies, exceptional Eastern European cuisine, and curated wines in a warm, elegant setting. 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://toast.app/r/cafe-st-petersburg-57-union-st-1",
    eventType: "LIVE MUSIC",
  },
  {
    id: "72",
    slug: "kids-halloween-party-nov1",
    title: "Kids Halloween Party",
    date: "Sunday, November 1, 2026",
    time: "11 AM – 1 PM",
    repeats: false,
    image: "/images/events/kids-halloween-party-nov1.png",
    alt: "Kids Halloween Party at Cafe St. Petersburg - November 1",
    description:
      "Bring the kids for a spooky-fun Halloween party at Cafe St. Petersburg! Costumes, games, and Halloween treats for ages 4 and up. Kids tickets $50 (one child) or $90 for two siblings, kids meal $25. Parents enjoy 15% off the brunch menu and mimosas on the house! 57-1 Union St, Newton Centre, MA. Call (617) 467-3555.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "FAMILY PROGRAMS",
  },
];

/** UTC offset for America/New_York on a given date, e.g. "-05:00". */
function nyOffset(y: number, m: number, d: number): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    timeZoneName: "shortOffset",
  }).formatToParts(new Date(Date.UTC(y, m, d, 12)));
  const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT-5";
  const mm = tz.match(/GMT([+-])(\d+)(?::(\d+))?/);
  if (!mm) return "-05:00";
  return `${mm[1]}${mm[2].padStart(2, "0")}:${(mm[3] ?? "00").padStart(2, "0")}`;
}

/** Start/end in ISO 8601 with New York time zone, for schema.org Event. */
export function getEventStartEnd(e: EventItem): { start?: string; end?: string } {
  if (e.startISO) return { start: e.startISO, end: e.endISO };
  const day = parseEventDate(e.date);
  if (!day) return {};
  const times = [...e.time.matchAll(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?/gi)].slice(0, 2);
  const fmt = (dt: Date) => {
    const y = dt.getUTCFullYear(), m = dt.getUTCMonth(), d = dt.getUTCDate();
    const p = (n: number) => String(n).padStart(2, "0");
    return `${y}-${p(m + 1)}-${p(d)}T${p(dt.getUTCHours())}:${p(dt.getUTCMinutes())}:00${nyOffset(y, m, d)}`;
  };
  const base = Date.UTC(day.getFullYear(), day.getMonth(), day.getDate());
  if (times.length === 0) {
    const y = day.getFullYear(), m = day.getMonth(), d = day.getDate();
    return { start: `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}` };
  }
  const to24 = (t: RegExpMatchArray, fallback?: string) => {
    let h = parseInt(t[1], 10) % 12;
    const mer = (t[3] ?? fallback ?? "PM").toUpperCase();
    if (mer === "PM") h += 12;
    return h * 60 + (t[2] ? parseInt(t[2], 10) : 0);
  };
  const startMin = to24(times[0], times[1]?.[3]);
  const start = new Date(base + startMin * 60000);
  if (!times[1]) return { start: fmt(start) };
  let endMin = to24(times[1]);
  if (endMin <= startMin) endMin += 24 * 60;
  return { start: fmt(start), end: fmt(new Date(base + endMin * 60000)) };
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

/** Cached upcoming events (array). For fresh list at render time, use getUpcomingEvents(). */
export const upcomingEvents = getUpcomingEvents();
