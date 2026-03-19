export type MenuItem = {
  name: string;
  price: number;
  description?: string;
  image?: string;
  allergens?: string[];
};

export type FeatureSpotlight = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export type MenuChapter = {
  id: string;
  title: string;
  storyIntro: string;
  heroImage: string;
  bgColor: "white" | "cream";
  featureSpotlight?: FeatureSpotlight;
  items: MenuItem[];
};

const HERO_IMAGES = {
  popular: "/images/food/hero.jpg",
  blini: "/images/food/blini-red-caviar.jpg",
  appetizers: "/images/food/Cafe St. Petersburg_pirozhki_01092025_053.jpg",
  salads: "/images/food/herring-fur-coat.jpg",
  soups: "/images/food/borscht.jpg",
  mains: "/images/food/beef-stroganoff.jpg",
  sides: "/images/food/Cafe St. Petersburg_mushroom vareniki_01092025_035.jpg",
  desserts: "/images/food/honey-cake.jpg",
  kids: "/images/food/chicken-kiev.jpg",
};

export const menuChapters: MenuChapter[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    storyIntro:
      "Every great meal starts with a story. Ours begins with golden pirozhki, silky pâté, and pickles made the old-fashioned way.",
    heroImage: HERO_IMAGES.appetizers,
    bgColor: "white",
    featureSpotlight: {
      name: "Layered Salmon Crêpes",
      price: 19,
      description:
        "Layered thin crêpes filled with cream cheese, house-cured salmon, capers, and fresh dill.",
      image: "/images/food/Cafe St. Petersburg_savory blini with house cured salmon_01092025_065.jpg",
    },
    items: [
      {
        name: "Traditional Hand Pies (Pirozhki)",
        price: 5,
        description:
          "Baked hand pies filled with a variety of savory fillings. Selection varies.",
        image: "/images/food/Cafe St. Petersburg_pirozhki_01092025_053.jpg",
      },
      {
        name: "Boyar-Style Hand Pie with Oxtail",
        price: 8,
        description:
          "Smooth chicken liver pâté finished with honey and sea salt, served with thin, crispy crostini.",
        image: "/images/food/chicken-liver-pate.jpg",
      },
      {
        name: "Pickled Vegetable Starter",
        price: 15,
        description:
          "Cherry tomatoes, pickled cucumbers, cabbage, house-pickled with herbs.",
        image: "/images/food/Cafe St. Petersburg_pickled zakuska_01092025_048.jpg",
      },
      {
        name: "Herring Spread (Farshmak)",
        price: 16,
        description:
          "Traditional Eastern European herring spread blended with apples and onions, served with crisp black rye toasts.",
      },
      {
        name: "Chicken Liver Pâté",
        price: 17,
        description:
          "Smooth chicken liver pâté finished with honey and sea salt, served with thin, crispy crostini.",
        image: "/images/food/chicken-liver-pate.jpg",
      },
      {
        name: "Kholodets (Studen)",
        price: 17,
        description:
          "Traditional Eastern European meat aspic made from slow-simmered beef and chicken, served with mustard and fresh horseradish.",
      },
      {
        name: "Herring with Potatoes & Onions",
        price: 18,
        description:
          "Cured herring with tender potatoes and thinly sliced onions.",
      },
      {
        name: "Salo Platter",
        price: 18,
        description:
          "Slices of cured pork lard with mustard — traditional, bold, and melt-in-the-mouth.",
      },
      {
        name: "Meat Platter",
        price: 23,
        description:
          "Assortment of cured and roasted meats, served with mustard and horseradish.",
        image: "/images/food/meat-platter.jpg",
      },
      {
        name: "Cured Fish Platter",
        price: 25,
        description:
          "Smoked and salted red and white fish, served as a traditional cold fish appetizer.",
      },
      {
        name: "Layered Salmon Crêpes",
        price: 19,
        description:
          "Layered thin crêpes filled with cream cheese, house-cured salmon, capers, and fresh dill.",
        image: "/images/food/Cafe St. Petersburg_savory blini with house cured salmon_01092025_065.jpg",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    storyIntro:
      "Light enough to start, bold enough to remember — from the beloved Olivier to creamy burrata with truffle.",
    heroImage: HERO_IMAGES.salads,
    bgColor: "cream",
    items: [
      {
        name: "Vinegret",
        price: 16,
        description:
          "Beet and vegetable salad with potatoes, carrots, pickles, and onions, lightly dressed with oil.",
      },
      {
        name: "Classic Garden Salad",
        price: 16,
        description:
          "Cucumbers, tomatoes, radishes, and fragrant herbs. Served with sour cream, oil, or mayonnaise.",
      },
      {
        name: "Burrata with Truffle",
        price: 19,
        description:
          "Creamy burrata with marinated tomatoes, basil sauce, finished with truffle oil.",
        image: "/images/food/burrata-salad.jpg",
      },
      {
        name: "Caesar Salad",
        price: 16,
        description:
          "Romaine lettuce with parmesan and creamy Caesar dressing. Add grilled chicken +$5 or grilled shrimp +$7.",
        image: "/images/food/caesar-chicken.jpg",
      },
      {
        name: "Herring Under a Fur Coat",
        price: 17,
        description:
          "Classic layered salad of beets, potatoes, carrots, eggs, and herring with light mayonnaise.",
        image: "/images/food/herring-fur-coat.jpg",
      },
      {
        name: "Olivier Salad (Classic)",
        price: 17,
        description:
          "Traditional potato salad with peas, carrots, and pickles in creamy mayonnaise, served with roasted chicken. Substitute grilled beef steak +$2.",
        image: "/images/food/olivier-salad.jpg",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    storyIntro:
      "Slow-simmered for hours, served with soul. Our soups are meals in themselves — the way they've always been in Eastern Europe.",
    heroImage: HERO_IMAGES.soups,
    bgColor: "white",
    featureSpotlight: {
      name: "Borscht",
      price: 18,
      description:
        "Traditional Russian beet soup with beef and vegetables, served with sour cream, dark rye bread, salo (cured pork fat), and fresh scallion.",
      image: "/images/food/borscht.jpg",
    },
    items: [
      {
        name: "Mushroom Cream Soup",
        price: 16,
        description:
          "Velvety mushroom cream soup finished with aromatic truffle oil.",
      },
      {
        name: "Borscht",
        price: 18,
        description:
          "Traditional Russian beet soup with beef and vegetables, served with sour cream, dark rye bread, salo (cured pork fat), and fresh scallion.",
        image: "/images/food/borscht.jpg",
      },
      {
        name: "Solyanka",
        price: 18,
        description:
          "Hearty tomato-based soup with assorted cured meats, olives, and lemon, served with sour cream and bread.",
        image: "/images/food/Cafe St. Petersburg_solyanka_01092025_067.jpg",
      },
      {
        name: "Tsar’s Fish Soup",
        price: 21,
        description:
          "Rich Russian fish soup made with a concentrated fish broth, finished with premium fish, potatoes, and fresh herbs — deeper and more refined than traditional fish soup.",
      },
    ],
  },
  {
    id: "caviar",
    title: "Caviar",
    storyIntro:
      "A timeless Eastern European tradition — premium roe, delicate flavor, and classic pairings.",
    heroImage: HERO_IMAGES.blini,
    bgColor: "cream",
    items: [
      {
        name: "Alaska Finest Red Caviar",
        price: 30,
        description:
          "2 oz (56g). Premium Alaskan salmon roe with a vibrant pop, clean ocean flavor, and delicate salinity.",
        image: "/images/food/blini-red-caviar.jpg",
      },
      {
        name: "Roe Acipenser Black Caviar",
        price: 95,
        description:
          "2 oz (56g). Premium Acipenser sturgeon black caviar, prized for its delicate texture and clean, refined flavor.",
        image: "/images/food/blackcaviar.png",
      },
      {
        name: "Add Blini",
        price: 2,
        description:
          "Traditional Eastern European thin pancakes used to pair with caviar.",
      },
    ],
  },
  {
    id: "main-courses",
    title: "Main Courses",
    storyIntro:
      "The heart of the table. From hand-folded pelmeni to slow-roasted lamb — dishes that bring everyone together.",
    heroImage: HERO_IMAGES.mains,
    bgColor: "cream",
    featureSpotlight: {
      name: "Rack of Lamb",
      price: 40,
      description:
        "French-trimmed rack roasted to preserve natural juiciness and rich flavor. Served with seasonal vegetables and our house jus. A showstopper for any occasion.",
      image: "/images/food/meat-platter.jpg",
    },
    items: [
      { name: "Handmade Vareniki", price: 21, description: "Handmade dumplings filled with potatoes and topped with creamy white mushrooms.", image: "/images/food/mushroom-vareniki.jpg" },
      { name: "Handmade Pelmeni", price: 23, description: "Classic Eastern European dumplings, hand-formed and filled with seasoned veal and pork.", image: "/images/food/Cafe St. Petersburg_pelmeni_01092025_045.jpg" },
      { name: "Stuffed Cabbage Rolls (Golubtsy)", price: 28, description: "Veal and pork filling wrapped in cabbage leaves, gently simmered in tomato sauce and served with sour cream." },
      { name: "Carp Cutlets", price: 29, description: "Pan-seared carp cutlets with delicate texture and mild flavor, golden outside and tender inside." },
      { name: "Beef Stroganoff", price: 30, description: "Sautéed beef with onions and mushrooms in a silky cream sauce, served with mashed potatoes and pickles.", image: "/images/food/beef-stroganoff.jpg" },
      { name: "Chicken Kiev", price: 30, description: "Chicken breast stuffed with green herb butter, breaded and fried until golden, served with mashed potatoes.", image: "/images/food/chicken-kiev.jpg" },
      { name: "Pozharsky Cutlet", price: 30, description: "Hand-chopped chicken cutlet topped with crispy breadcrumbs, served with mashed potatoes.", image: "/images/food/pazharsky-cutlet.jpg" },
      { name: "Chicken Tabaka", price: 33, description: "Pan-pressed young chicken marinated with garlic and spices, then crisped to golden perfection and served juicy and aromatic." },
      { name: "Baked Salmon", price: 33, description: "Fresh salmon filet baked until tender and flaky, finished with lemon and herbs and served alongside vegetables.", image: "/images/food/Cafe St. Petersburg_salmon_01092025_061.jpg" },
      { name: "Duck Leg Confit", price: 34, description: "Slow-cooked duck leg with crêpes rolled in duck pâté and soaked in aromatic duck jus, paired with creamy mashed potatoes and sweet persimmon." },
      { name: "Braised Oxtail", price: 36, description: "Slow-braised oxtail cooked until fall-apart tender with vegetables and potatoes in a rich, savory sauce." },
      { name: "Royal Sturgeon", price: 38, description: "Grilled sturgeon filet, oven-finished and served with a house honey-spiced sauce and fresh mixed greens." },
      { name: "Rack of Lamb", price: 40, description: "Tender, French-trimmed rack of lamb with delicate marbling, roasted to preserve its natural juiciness and rich flavor." },
      { name: "Ribeye Steak", price: 53, description: "Prime ribeye steak, hand-selected and grilled to order for exceptional tenderness and flavor." },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    storyIntro:
      "The perfect companions — from silky mashed potatoes to earthy barley risotto.",
    heroImage: HERO_IMAGES.sides,
    bgColor: "white",
    items: [
      { name: "Mashed Potatoes", price: 10, description: "Home-style silky smooth mashed potatoes." },
      { name: "Buckwheat", price: 10, description: "Buckwheat cooked in beef broth and served with duck jus." },
      { name: "Garlic Roasted Potatoes with Mushrooms", price: 10, description: "Crispy roasted potatoes tossed with garlic and mushrooms.", image: "/images/food/Cafe St. Petersburg_mushroom vareniki_01092025_035.jpg" },
      { name: "Roasted Brussels Sprouts with Parmesan", price: 10, description: "Oven-roasted sprouts topped with parmesan." },
      { name: "Creamy Barley Risotto with Mushrooms", price: 12, description: "Pearl barley with mushrooms in a smooth, buttery sauce.", image: "/images/food/Cafe St. Petersburg_mushroom vareniki_01092025_035.jpg" },
    ],
  },
];

export const menuCategoryIds = menuChapters.map((c) => c.id);
