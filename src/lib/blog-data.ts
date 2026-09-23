export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // e.g. "September 23, 2026"
  image: string;
  alt: string;
  content: string[]; // array of paragraphs
  seoTitle?: string;
  seoDescription?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "classic-borscht-newton-centre",
    title: "The Story Behind Our Classic Borscht",
    excerpt:
      "Why our slow-simmered beet soup is the heart of the menu at Cafe St. Petersburg, and what makes an authentic Eastern European borscht.",
    date: "September 23, 2026",
    image: "/images/food/borscht.jpg",
    alt: "Classic Ukrainian borscht served with sour cream and dark rye bread",
    seoTitle: "Authentic Borscht in Newton Centre, MA | Cafe St. Petersburg",
    seoDescription:
      "Discover the tradition behind Cafe St. Petersburg's classic borscht — a slow-simmered beet soup with beef, cabbage, and root vegetables, served the authentic Eastern European way in Newton Centre, MA.",
    content: [
      "Few dishes represent Eastern European cooking as well as borscht. At Cafe St. Petersburg in Newton Centre, our Classic Borscht is slow-simmered with tender beef, shredded cabbage, and root vegetables until the broth turns a deep, unmistakable ruby red — the color that gives the soup its name.",
      "We serve it the traditional way: with a generous dollop of sour cream, dark rye bread on the side, and house-cured salo (cured pork fat) for guests who want the full, classic experience. It's a simple dish on paper, but getting the balance of sweetness from the beets, acidity, and richness from the broth right takes hours, not minutes.",
      "Borscht shows up across Russian, Ukrainian, and broader Eastern European tables in dozens of regional variations, but the version on our menu stays close to the classic beef-and-beet preparation our guests know and ask for. It pairs naturally with our other soups, like the tomato-forward Solyanka or the refined Tsar's Fish Soup, if you want to sample a few in one visit.",
      "If you've never tried borscht before, it's one of the easiest ways to understand what Eastern European comfort food is all about — hearty, slow-cooked, and meant to be shared at the table.",
      "Borscht is available on our regular dinner menu at Cafe St. Petersburg, 57-1 Union St, Newton Centre, MA. Call (617) 467-3555 or book a table online to try it for yourself.",
    ],
  },
  {
    id: "2",
    slug: "blini-caviar-brunch-tradition",
    title: "Blini & Caviar: A Brunch Tradition Worth Knowing",
    excerpt:
      "Blini and caviar are a cornerstone of Eastern European brunch culture. Here's what to know before you order it at Cafe St. Petersburg.",
    date: "September 23, 2026",
    image: "/images/food/blini-red-caviar.jpg",
    alt: "Blini topped with red caviar at Cafe St. Petersburg",
    seoTitle: "Blini & Caviar Brunch in Newton Centre, MA | Cafe St. Petersburg",
    seoDescription:
      "Blini and caviar have been enjoyed for generations across Eastern Europe. Learn how Cafe St. Petersburg serves this brunch tradition in Newton Centre, MA, every Sunday.",
    content: [
      "Long before caviar became a symbol of luxury dining everywhere, it was — and still is — a staple of Eastern European celebrations, holidays, and Sunday tables. At Cafe St. Petersburg, we serve it the traditional way: delicate blini (thin, buttery pancakes) topped with roe, the way it's been enjoyed for generations.",
      "Our caviar selection includes premium Alaska Finest Red Caviar, prized for its vibrant pop and clean, ocean-forward flavor, and Roe Acipenser Black Caviar, a refined sturgeon roe known for its delicate texture. Both are served with warm oladushki (small puffy pancakes) on the side — the classic pairing.",
      "Caviar and blini are especially popular during our Sunday Brunch, when guests are looking for something a little more indulgent to go along with the rest of the spread. It's also a favorite addition to celebrations and private events booked through our catering team.",
      "If it's your first time trying real Eastern European-style caviar service, start with the red caviar — it's more approachable in flavor and a great introduction before working up to the black.",
      "Join us for Sunday Brunch at Cafe St. Petersburg, 57-1 Union St, Newton Centre, MA, from 11 AM to 10 PM. Reservations recommended — call (617) 467-3555 or book online.",
    ],
  },
  {
    id: "3",
    slug: "private-events-newton-centre-venue",
    title: "Hosting Your Next Event at Cafe St. Petersburg",
    excerpt:
      "Looking for a private event venue in Newton Centre? Here's what to expect when you book a celebration, corporate gathering, or family event with us.",
    date: "September 23, 2026",
    image: "/images/food/beef-stroganoff.jpg",
    alt: "Banquet table setting for a private event at Cafe St. Petersburg",
    seoTitle: "Private Event Venue in Newton Centre, MA | Cafe St. Petersburg",
    seoDescription:
      "Cafe St. Petersburg hosts private events, celebrations, and corporate gatherings for up to 200 guests in Newton Centre, MA. See what our banquet menus and catering team can do for your next event.",
    content: [
      "Newton Centre doesn't have many venues built for real Eastern European hospitality — big shared plates, a warm dining room, and a menu that feels like a celebration on its own. That's the gap Cafe St. Petersburg fills for private events in the area.",
      "We host everything from birthdays and anniversaries to holiday parties and corporate gatherings, with banquet menus built around family-style courses: cold and hot appetizers, salads, hearty entrees, and dessert, all designed to be shared. Our banquet space accommodates groups from an intimate gathering up to 200 guests.",
      "Our team works with you on the details — headcount, dietary needs, timing — the same way we'd plan a family celebration. Every banquet menu includes a curated selection across courses, so guests get a full tasting of what Cafe St. Petersburg is known for without ordering item by item.",
      "If you're planning a wedding rehearsal dinner, a milestone birthday, or an office holiday party in the Newton, Newton Centre, or Brookline area, our catering and events team can help you build a menu and timeline that fits.",
      "Ready to start planning? Contact Cafe St. Petersburg at 57-1 Union St, Newton Centre, MA, call (617) 467-3555, or reach out through our contact page to check availability for your event.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Posts sorted newest first. */
export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
