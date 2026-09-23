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
    date: "August 8, 2026",
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
    date: "August 26, 2026",
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
    date: "September 12, 2026",
    image: "/images/blog/private-events-banquet-room.png",
    alt: "Elegant banquet room set up for a private event at Cafe St. Petersburg with gold-accented table settings",
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
  {
    id: "4",
    slug: "live-music-dinner-newton-ma",
    title: "Where to Find Live Music & Dinner in Newton, MA",
    excerpt:
      "Looking for a restaurant with live music in Newton, MA? Here's what a night out at Cafe St. Petersburg actually looks like.",
    date: "August 15, 2026",
    image: "/images/events/live-music-fri-sat.png",
    alt: "Live music performance during dinner at Cafe St. Petersburg",
    seoTitle: "Live Music & Dinner in Newton, MA | Cafe St. Petersburg",
    seoDescription:
      "Cafe St. Petersburg pairs authentic Eastern European dinner with live music every week in Newton Centre, MA — live jazz and piano on Thursdays, live music Fridays and Saturdays.",
    content: [
      "If you're searching for somewhere in Newton, MA to get dinner and live music in the same night, you don't need to plan two stops. Cafe St. Petersburg in Newton Centre runs live music as a regular part of the week, not a once-in-a-while special.",
      "Thursdays bring an intimate evening of live jazz and live piano — soulful, low-key, and built around conversation over dinner. Fridays and Saturdays step it up with live music sets that run later into the night, matching the energy of our extended weekend hours.",
      "The dining room is set up for exactly this kind of night: warm lighting, shared plates, and a menu built around dishes meant to linger over — borscht, caviar and blini, hand-folded pelmeni, and a full dessert list if you're staying for the whole set.",
      "Because live music nights fill up, especially on weekends, we'd recommend booking ahead rather than walking in and hoping for a table.",
      "Catch live music and dinner at Cafe St. Petersburg, 57-1 Union St, Newton Centre, MA. Check our events calendar for this week's schedule, or call (617) 467-3555 to reserve a table.",
    ],
  },
  {
    id: "5",
    slug: "best-date-night-newton-ma",
    title: "Best Date Night Ideas in Newton, MA",
    excerpt:
      "Planning a date night in Newton, MA? Here's why Cafe St. Petersburg works for everything from a first date to an anniversary.",
    date: "September 3, 2026",
    image: "/images/food/beef-stroganoff.jpg",
    alt: "Romantic dinner table setting at Cafe St. Petersburg",
    seoTitle: "Best Date Night Restaurant in Newton, MA | Cafe St. Petersburg",
    seoDescription:
      "Candlelight, live music, and authentic Eastern European dinner — see why Cafe St. Petersburg in Newton Centre, MA is a top pick for date night.",
    content: [
      "A good date night restaurant needs a few things to line up at once: a room that feels intentional, a menu worth talking about, and enough going on that the night doesn't run out of things to enjoy. In Newton, MA, that's exactly the case we'd make for Cafe St. Petersburg.",
      "Start with something to share — caviar and blini is the obvious move, or split a plate of pirozhki while you look over the rest of the menu. From there, a bowl of Classic Borscht or the Beef Stroganoff makes for a warm, comforting main that feels like it was made for slow dinners, not quick ones.",
      "Time it around a Thursday, Friday, or Saturday and you'll likely have live music playing in the background — piano and jazz earlier in the week, livelier sets on weekends. It's the kind of detail that turns a normal dinner into an actual date night.",
      "Save room for dessert. Napoleon Cake and Honey Cake are both built for sharing two forks, one plate, and no rush to leave.",
      "Book your date night table at Cafe St. Petersburg, 57-1 Union St, Newton Centre, MA. Reserve online or call (617) 467-3555 — weekend nights go first.",
    ],
  },
  {
    id: "6",
    slug: "what-to-order-eastern-european-restaurant",
    title: "What to Order at an Eastern European Restaurant",
    excerpt:
      "New to Eastern European food? Here's a simple guide to what to order, from borscht to pelmeni to honey cake.",
    date: "August 19, 2026",
    image: "/images/food/pirozhki-new.jpg",
    alt: "Assortment of Eastern European appetizers at Cafe St. Petersburg",
    seoTitle: "What to Order at an Eastern European Restaurant | Cafe St. Petersburg",
    seoDescription:
      "A first-timer's guide to Eastern European food — what to order at appetizers, soup, main course, and dessert, using the menu at Cafe St. Petersburg in Newton Centre, MA as a guide.",
    content: [
      "Eastern European food can feel unfamiliar if you've never sat down with a full menu before, but it's built the same way most great cuisines are: shared starters, a proper soup course, a hearty main, and a dessert worth saving room for. Here's how to order your way through it.",
      "Start with appetizers. Traditional hand pies (pirozhki) are a classic, easy entry point — golden, baked, and filled with savory fillings. If you want to go further, a cured fish or pickled vegetable platter shows off the sour, briny flavors that define a lot of the cuisine.",
      "Don't skip the soup course. Borscht — a slow-simmered beet soup with beef and vegetables — is the dish most people have heard of, and for good reason. If you want something different, Solyanka (a tangy, tomato-based soup with cured meats) is a great second order.",
      "For the main course, dumplings are the move: Pelmeni (meat-filled) or Vareniki (potato or mushroom-filled) are both hand-folded and comforting. If you're not a dumpling person, Beef Stroganoff or a grilled Ribeye Steak are safer, still-authentic options.",
      "Finish with dessert. Honey Cake (Medovik) and Napoleon Cake are the two classics — both multi-layered, both built for sharing. Syrniki, pan-fried farmer's cheese pancakes, are a good pick if you want something lighter.",
      "You can try this exact lineup at Cafe St. Petersburg, 57-1 Union St, Newton Centre, MA. View the full menu online or call (617) 467-3555 with questions before you visit.",
    ],
  },
  {
    id: "7",
    slug: "birthday-celebration-newton-ma",
    title: "Where to Celebrate a Birthday in Newton, MA",
    excerpt:
      "Looking for a birthday dinner spot in Newton, MA? Here's what to know about celebrating at Cafe St. Petersburg, from a table for two to a full private party.",
    date: "September 18, 2026",
    image: "/images/food/honey-cake.jpg",
    alt: "Honey cake dessert for a birthday celebration at Cafe St. Petersburg",
    seoTitle: "Birthday Dinner & Party Venue in Newton, MA | Cafe St. Petersburg",
    seoDescription:
      "From a birthday dinner for two to a private party for 200, see how Cafe St. Petersburg in Newton Centre, MA handles birthday celebrations.",
    content: [
      "Birthdays in Newton, MA don't have to mean choosing between a nice dinner or a real party — Cafe St. Petersburg can handle either, depending on how big you want to go.",
      "For a smaller celebration, a regular dinner reservation works fine. Order shared plates across a few courses — caviar and blini to start, a main like Beef Stroganoff or Ribeye, and Honey Cake or Napoleon Cake to close it out. If it lands on a Thursday, Friday, or Saturday, there's a good chance live music will be part of the night too.",
      "For a bigger group, our banquet menus are built exactly for this. Family-style courses across cold and hot appetizers, salads, entrees, and dessert mean everyone eats well without ordering individually, and our space accommodates groups from a small private gathering up to 200 guests.",
      "Either way, the same idea holds: birthdays are better with shared food and a room that has some life to it, not a quiet corner table.",
      "To book a birthday dinner or private party, contact Cafe St. Petersburg, 57-1 Union St, Newton Centre, MA. Call (617) 467-3555 or reach out through our contact page to check dates and group sizes.",
    ],
  },
  {
    id: "8",
    slug: "what-are-pelmeni-guide",
    title: "What Are Pelmeni? A Complete Guide",
    excerpt:
      "Pelmeni are one of the most iconic Eastern European dishes. Here's what they are, how they're different from vareniki, and how we serve them.",
    date: "August 30, 2026",
    image: "/images/food/pelmeni-new.jpg",
    alt: "Handmade pelmeni dumplings at Cafe St. Petersburg",
    seoTitle: "What Are Pelmeni? Complete Guide | Cafe St. Petersburg",
    seoDescription:
      "Pelmeni are traditional Eastern European dumplings filled with meat. Learn what they are, how they differ from vareniki, and how to order them at Cafe St. Petersburg in Newton Centre, MA.",
    content: [
      "Pelmeni are small, hand-folded dumplings that show up across Russian and broader Eastern European cooking, usually filled with a seasoned meat mixture and served simply — often with sour cream, butter, or a light broth. If you've never had them, think of them as a cousin to ravioli or pierogi, but with their own distinct dough and filling ratio.",
      "At Cafe St. Petersburg, our Handmade Pelmeni are filled with seasoned veal and pork, hand-formed the traditional way rather than machine-pressed. That difference matters — hand-folded dumplings hold their shape and texture better than mass-produced versions.",
      "A common question is how pelmeni differ from vareniki, since both are dumplings on the same menu. The short answer: pelmeni are meat-filled, while vareniki are typically filled with something else — potatoes and mushrooms in our savory version, or sweet cherries in our dessert Cherry Vareniki. Same technique, different fillings, different place in the meal.",
      "Pelmeni work well as a main course on their own, or alongside a bowl of borscht if you want the fuller Eastern European meal experience in one sitting.",
      "Try our Handmade Pelmeni at Cafe St. Petersburg, 57-1 Union St, Newton Centre, MA. View the full menu online or call (617) 467-3555 to reserve a table.",
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
