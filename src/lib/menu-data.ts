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
  appetizers: "/images/food/pirozhki-new.jpg",
  caviar: "/images/food/blini-red-caviar.jpg",
  salads: "/images/food/Cafe St. Petersburg_Caesar with chicken_01092025_014.jpg",
  soups: "/images/food/borscht.jpg",
  mains: "/images/food/beef-stroganoff.jpg",
  sides: "/images/food/Cafe St. Petersburg_mushroom vareniki_01092025_035.jpg",
  desserts: "/images/food/honey-cake.jpg",
};

export const menuChapters: MenuChapter[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    storyIntro: "Every great meal starts with a story. Ours begins with golden pirozhki, house-pickled vegetables, and cured fish platters made the old-fashioned way.",
    heroImage: HERO_IMAGES.appetizers,
    bgColor: "white",
    items: [
      {
        name: "Traditional Hand Pies (Pirozhki)",
        price: 7,
        image: "/images/food/pirozhki-new.jpg",
        description: "Baked hand pies filled with a variety of savory fillings. Selection varies — ask your server for details.",
      },
      {
        name: "Boyar-Style Hand Pie with Oxtail",
        price: 9,
        description: "House-made puff pastry filled with slow-braised oxtail and potatoes.",
      },
      {
        name: "Pickled Vegetable Starter",
        price: 17,
        image: "/images/food/Cafe St. Petersburg_pickled zakuska_01092025_048.jpg",
        description: "Cherry tomatoes, pickled cucumbers, and cabbage, house-pickled with herbs.",
      },
      {
        name: "Herring with Potatoes & Onions",
        price: 19,
        image: "/images/food/herring-potatoes.jpg",
        description: "Cured herring with tender potatoes and thinly sliced onions.",
      },
      {
        name: "Classic Chicken Liver Pâté",
        price: 17,
        image: "/images/food/chicken-liver-pate-new.jpg",
        description: "Smooth and creamy pâté, served with honey and rye crisps.",
      },
      {
        name: "Salo Platter",
        price: 18,
        description: "Pieces of cured pork lard with mustard — traditional, bold, and melt-in-the-mouth.",
      },
      {
        name: "Meat Platter",
        price: 29,
        image: "/images/food/Cafe St. Petersburg_meat platter_01092025_032.jpg",
        description: "Assortment of cured and roasted meats, served with mustard.",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    storyIntro: "Fresh, simple, and satisfying — light enough to start, bold enough to remember.",
    heroImage: HERO_IMAGES.salads,
    bgColor: "cream",
    items: [
      {
        name: "Classic Garden Salad",
        price: 16,
        description: "Cucumbers, tomatoes, radishes, and fragrant herbs. Served with sour cream, oil, or mayonnaise.",
      },
      {
        name: "Caesar Salad",
        price: 16,
        image: "/images/food/Cafe St. Petersburg_Caesar with chicken_01092025_014.jpg",
        description: "Romaine lettuce with parmesan and creamy caesar dressing. Add Chicken +$5 | Add Shrimp +$7",
      },
      {
        name: "Classic \"Olivier\" Salad",
        price: 17,
        image: "/images/food/olivier-salad.jpg",
        description: "Boiled root vegetables, eggs, green peas, and chicken, garnished with dill and dressed with light homemade mayonnaise.",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    storyIntro: "Slow-simmered for hours, served with soul. Our soups are meals in themselves — the way they've always been in Eastern Europe.",
    heroImage: HERO_IMAGES.soups,
    bgColor: "white",
    featureSpotlight: {
      name: "Classic Borscht",
      price: 18,
      description: "Deep-ruby beet soup slow-simmered with tender beef, shredded cabbage, and root vegetables. Served with sour cream, dark rye bread, house-cured salo, and scallions. The soul of Eastern European cooking in every spoonful.",
      image: "/images/food/borscht.jpg",
    },
    items: [
      {
        name: "Borscht",
        price: 18,
        image: "/images/food/Cafe St. Petersburg_borscht_01092025_008.jpg",
        description: "Traditional Russian beet soup with beef and vegetables, served with sour cream, dark rye bread, salo (cured pork fat) on a side.",
      },
      {
        name: "Solyanka",
        price: 18,
        image: "/images/food/solyanka-new.jpg",
        description: "Hearty tomato-based soup with assorted cured meats, olives, and lemon, served with sour cream on a side.",
      },
      {
        name: "Tsar's Fish Soup",
        price: 21,
        description: "Rich Russian fish soup made with a concentrated fish broth, finished with premium fish, potatoes, and fresh herbs — deeper and more refined than traditional fish soup.",
      },
    ],
  },
  {
    id: "caviar",
    title: "Caviar",
    storyIntro: "A timeless Eastern European tradition — delicate blini topped with the finest roe, served the way it's been enjoyed for generations.",
    heroImage: HERO_IMAGES.caviar,
    bgColor: "cream",
    items: [
      {
        name: "Alaska Finest Red Caviar — 2 oz (56g)",
        price: 38,
        image: "/images/food/blini-red-caviar.jpg",
        description: "Premium Alaskan salmon roe with a vibrant pop, clean ocean flavor, and delicate salinity.",
      },
      {
        name: "Roe Acipenser Black Caviar — 2 oz (56g)",
        price: 95,
        image: "/images/food/blackcaviar.png",
        description: "Premium Acipenser sturgeon black caviar, prized for its delicate texture and refined flavor.",
      },
      {
        name: "Add Oladushki",
        price: 1,
        image: "/images/food/Cafe St. Petersburg_Blini with red caviar_01092025_005.jpg",
        description: "Traditional small puffy pancakes — perfect with caviar (per each).",
      },
    ],
  },
  {
    id: "main-courses",
    title: "Main Courses",
    storyIntro: "The heart of the table. From hand-folded pelmeni to a perfectly grilled ribeye — dishes that bring everyone together.",
    heroImage: HERO_IMAGES.mains,
    bgColor: "white",
    items: [
      {
        name: "Handmade Vareniki",
        price: 24,
        image: "/images/food/Cafe St. Petersburg_mushroom vareniki_01092025_035.jpg",
        description: "Handmade dumplings filled with potatoes and topped with creamy white mushrooms.",
      },
      {
        name: "Handmade Pelmeni",
        price: 26,
        image: "/images/food/pelmeni-new.jpg",
        description: "Classic Eastern European dumplings, hand-formed and filled with seasoned veal and pork.",
      },
      {
        name: "Stuffed Cabbage Rolls | Golubtsy",
        price: 32,
        image: "/images/food/06-golubtsy-stuffed-cabbage.jpg",
        description: "Veal and pork filling wrapped in cabbage leaves, gently simmered in tomato sauce and served with sour cream.",
      },
      {
        name: "Pozharsky Cutlet",
        price: 32,
        image: "/images/food/Cafe St. Petersburg_pazharsky cutlet_01092025_043.jpg",
        description: "Hand-chopped chicken cutlet topped with crispy breadcrumbs, served with mashed potatoes.",
      },
      {
        name: "Baked Salmon",
        price: 35,
        image: "/images/food/Cafe St. Petersburg_salmon_01092025_061.jpg",
        description: "Fresh salmon fillet baked until tender and flaky, finished with lemon and herbs and served alongside vegetables.",
      },
      {
        name: "Ribeye Steak",
        price: 66,
        image: "/images/food/cafe-st-pete-ribeye-steak.png",
        description: "Prime ribeye steak, hand-selected and grilled to order for exceptional tenderness and flavor. Can be grilled or pan fried.",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    storyIntro: "The perfect companions to any main course.",
    heroImage: HERO_IMAGES.sides,
    bgColor: "cream",
    items: [
      {
        name: "Buckwheat",
        price: 10,
        description: "Buckwheat cooked in beef broth and served with duck jus.",
      },
      {
        name: "Garlic Roasted Potatoes with Mushrooms",
        price: 10,
        description: "Crispy roasted potatoes tossed with garlic and mushrooms.",
      },
      {
        name: "Roasted Brussels Sprouts with Parmesan",
        price: 10,
        image: "/images/food/brussels-sprouts-new.jpg",
        description: "Oven-roasted sprouts topped with parmesan.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    storyIntro: "A sweet finish to the journey — classic Eastern European bakes made in-house, layer by layer.",
    heroImage: HERO_IMAGES.desserts,
    bgColor: "white",
    items: [
      {
        name: "Napoleon Cake",
        price: 13,
        description: "Layer upon layer of flaky pastry sheets separated by sweet pastry cream, a classic indulgence with a delicate crunch.",
      },
      {
        name: "Honey Cake",
        price: 13,
        image: "/images/food/honey-cake.jpg",
        description: "Moist, multi-layered spiced cake sweetened with honey and finished with a light cream frosting.",
      },
      {
        name: "Syrniki",
        price: 18,
        image: "/images/food/Cafe St. Petersburg_syrniki_01092025_070.jpg",
        description: "Lightly pan-fried farmer's cheese pancakes, golden on the outside and soft within, served with jam or sour cream for a sweet finish.",
      },
      {
        name: "Cherry Vareniki",
        price: 18,
        image: "/images/food/Cafe St. Petersburg_vareniki_01092025_073.jpg",
        description: "Tender dumplings filled with sweet cherries, served with sour cream.",
      },
    ],
  },
];

export const menuCategoryIds = menuChapters.map((c) => c.id);
