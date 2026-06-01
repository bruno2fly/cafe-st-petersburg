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

/** Parse event date string (e.g. "Sunday, March 1, 2026") to Date at start of day local time. */
function parseEventDate(dateStr: string): Date | null {
  const match = dateStr.match(/,?\s*(\w+\s+\d+,?\s*\d{4})/);
  if (!match) return null;
  const d = new Date(match[1].trim());
  return isNaN(d.getTime()) ? null : d;
}

/** Events with date >= today (start of day), sorted by date. */
export function getUpcomingEvents(): EventItem[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => {
      const d = parseEventDate(e.date);
      return d && d >= today;
    })
    .sort((a, b) => {
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
    id: "21",
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
      "Live rock concert featuring Regina Bakhritdinova on live guitar. Soulful rock music in the spirit of true rock. 'Do you know rock? Prove it!' $50 per person - game + buffet. Teams up to 12 people. 57-1 Union St, Newton Centre, MA. silaQuiz.com",
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
    date: "Thursday, June 5, 2026",
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
    date: "Friday, June 6, 2026",
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
    date: "Thursday, June 12, 2026",
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
    date: "Friday, June 13, 2026",
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
    date: "Thursday, June 19, 2026",
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
    date: "Friday, June 20, 2026",
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
    date: "Thursday, June 26, 2026",
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
    date: "Friday, June 27, 2026",
    time: "7:00 – 10:00 PM",
    repeats: true,
    image: "/images/events/live-music.png",
    alt: "Live Music Night at Cafe St. Petersburg",
    description: "Every Friday night, immerse yourself in the elegant ambiance of live music at Cafe St. Petersburg. From soulful piano melodies to intimate acoustic performances, each evening offers a unique musical experience that perfectly complements our Eastern European atmosphere and exceptional cuisine.",
    ticketUrl: "https://www.opentable.com/r/cafe-st-petersburg-newton-center",
    eventType: "LIVE PROGRAMS",
  },

];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

/** Cached upcoming events (array). For fresh list at render time, use getUpcomingEvents(). */
export const upcomingEvents = getUpcomingEvents();
