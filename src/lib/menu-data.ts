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
    id: "popular",
    title: "Popular",
    storyIntro:
      "The dishes our guests can't stop ordering — tried, loved, and requested again and again.",
    heroImage: HERO_IMAGES.popular,
    bgColor: "white",
    featureSpotlight: {
      name: "Beef Stroganoff",
      price: 30,
      description:
        "Sautéed beef with onions and mushrooms in a silky cream sauce, served with mashed potatoes and pickles. A timeless classic that never disappoints.",
      image: "/images/food/beef-stroganoff.jpg",
    },
    items: [
      { name: "Alaska Finest Red Caviar 56g/2oz", price: 30, image: "/images/food/blini-red-caviar.jpg" },
      { name: "Roe Acipenser Black Caviar 56g/2oz", price: 95, image: "/images/food/blackcaviar.png" },
      { name: "Classic Borscht", price: 18, image: "/images/food/borscht.jpg" },
      { name: "Beef Stroganoff", price: 30, image: "/images/food/beef-stroganoff.jpg" },
      { name: "Boyar Style Hand Pie", price: 8, image: "/images/food/Cafe St. Petersburg_pirozhki_01092025_053.jpg" },
    ],
  },
  {
    id: "blini-caviar",
    title: "Blini & Caviar",
    storyIntro:
      "A timeless Eastern European tradition — delicate blini topped with the finest roe, served the way it's been enjoyed for generations.",
    heroImage: HERO_IMAGES.blini,
    bgColor: "cream",
    items: [
      {
        name: "Blini with Red Caviar",
        price: 22,
        description:
          "House-made golden blini served with premium Alaskan red caviar and sour cream. A celebration on a plate.",
        image: "/images/food/Cafe St. Petersburg_Blini with red caviar_01092025_005.jpg",
      },
      {
        name: "Alaska Finest Red Caviar 56g/2oz",
        price: 30,
        description:
          "Premium Alaskan salmon roe with vibrant pop, clean ocean flavor, and delicate salinity.",
        image: "/images/food/blini-red-caviar.jpg",
      },
      {
        name: "Roe Acipenser Black Caviar 56g/2oz",
        price: 95,
        description:
          "Premium Acipenser sturgeon black caviar, prized for its delicate texture and refined flavor.",
        image: "/images/food/blackcaviar.png",
      },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    storyIntro:
      "Every great meal starts with a story. Ours begins with golden pirozhki, silky pâté, and pickles made the old-fashioned way.",
    heroImage: HERO_IMAGES.appetizers,
    bgColor: "white",
    featureSpotlight: {
      name: "Layered Salmon Crepes",
      price: 19,
      description:
        "Paper-thin crêpes layered with cream cheese, house-cured salmon, briny capers, mashed avocado, and fresh dill. An elegant start to any gathering.",
      image: "/images/food/Cafe St. Petersburg_savory blini with house cured salmon_01092025_064.jpg",
    },
    items: [
      {
        name: "Layered Salmon Crepes",
        price: 19,
        description:
          "Paper-thin crêpes layered with cream cheese, house-cured salmon, briny capers, mashed avocado, fresh dill.",
        allergens: ["Fish", "Wheat", "Dairy", "Eggs"],
        image: "/images/food/Cafe St. Petersburg_savory blini with house cured salmon_01092025_064.jpg",
      },
      {
        name: "Fish Platter",
        price: 25,
        description:
          "A curated selection of house-cured and smoked fish — smoked white fish fillet, lightly salted salmon, and salted herring, served with roasted potatoes, green onions, and rye bread.",
        allergens: ["Fish", "Sulphites"],
        image: "/images/food/fish-platter-pan.jpg",
      },
      {
        name: "Meat Aspic (Kholodets)",
        price: 17,
        description:
          "Traditional slow-simmered chicken and beef aspic, set in a clear savory jelly. Served with spicy mustard and horseradish — a classic of Eastern European home cooking.",
        allergens: ["Mustard"],
      },
      {
        name: "Boyar Style Hand Pie",
        price: 8,
        description:
          "A royal assortment of golden oven-baked pirozhki — cabbage, egg & scallion, and beef — served warm, the way they've been made for centuries. Perfect for sharing.",
        allergens: ["Wheat", "Dairy", "Eggs", "Yeast"],
        image: "/images/food/Cafe St. Petersburg_pirozhki_01092025_053.jpg",
      },
      {
        name: "Herring Spread",
        price: 16,
        description:
          "Velvety house-made herring pâté blended with butter, onion, and spices. Served chilled with rye crisps — a timeless Eastern European starter.",
        allergens: ["Fish", "Dairy"],
      },
      {
        name: "Handmade Cabbage Pirozhok",
        price: 5,
        description:
          "Golden-baked savory pastry, soft yeast dough, stuffed with slow-braised cabbage, caramelized onions, garden herbs.",
        allergens: ["Wheat", "Dairy", "Eggs", "Yeast"],
        image: "/images/food/Cafe St. Petersburg_pirozhki_01092025_053.jpg",
      },
      {
        name: "Chicken Liver Pate",
        price: 17,
        description:
          "Velvet-smooth pâté finished with honey and sea salt, served with handmade crispy crostini.",
        allergens: ["Wheat", "Dairy", "Eggs", "Honey", "Sulphites"],
        image: "/images/food/chicken-liver-pate.jpg",
      },
      {
        name: "Handmade Egg & Scallion Pirozhok",
        price: 5,
        description:
          "Classic pastry with chopped hard-boiled eggs and fresh green onions sautéed in butter.",
        allergens: ["Eggs", "Wheat", "Dairy", "Yeast"],
        image: "/images/food/Cafe St. Petersburg_pirozhki_01092025_051.jpg",
      },
      {
        name: "Salo Platter",
        price: 18,
        description:
          "Pieces of cured pork lard served with mustard — traditional, bold, and melt-in-the-mouth.",
        allergens: ["Mustard", "Sulphites"],
      },
      {
        name: "Herring with Potatoes and Onion",
        price: 18,
        description:
          "Tender salted herring with fried crispy potatoes, fresh dill, pickled red onions, aromatic sunflower oil.",
        allergens: ["Fish", "Dairy", "Sulphites"],
        image: "/images/food/herring-potatoes.jpg",
      },
      {
        name: "Meat Pie / Beef Pirozhok",
        price: 5,
        description:
          "Golden oven-baked pastry stuffed with slow-simmered ground beef, sautéed onions, traditional spices.",
        allergens: ["Wheat", "Dairy", "Eggs", "Yeast"],
        image: "/images/food/Cafe St. Petersburg_pirozhki_01092025_052.jpg",
      },
      {
        name: "Meat Platter",
        price: 23,
        description:
          "Premium house-roasted meats and traditional cured selections with handmade spicy mustard and horseradish.",
        allergens: ["Mustard", "Sulphites", "Dairy", "Soy"],
        image: "/images/food/meat-platter.jpg",
      },
      {
        name: "Pickled Vegetable Starter",
        price: 15,
        description:
          "Crunchy cucumbers, tangy cabbage, juicy cherry tomatoes, house-pickled with fresh herbs, garlic, aromatic spices.",
        allergens: ["Sulphites", "Mustard"],
        image: "/images/food/pickled-veg-trio.jpg",
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
          "Fresh seasonal vegetables — tomatoes, cucumbers, radishes, and greens — lightly dressed with olive oil and lemon.",
        image: "/images/food/Cafe St. Petersburg_oliver salad_01092025_037.jpg",
      },
      {
        name: "Caesar Salad with Chicken",
        price: 16,
        description:
          "Crisp romaine, tender grilled chicken, parmesan shavings, house-made croutons, and bold Caesar dressing.",
        image: "/images/food/Cafe St. Petersburg_Caesar with chicken_01092025_014.jpg",
      },
      {
        name: "Caesar Salad with Shrimp",
        price: 23,
        description:
          "Crisp romaine, juicy sautéed shrimp, parmesan shavings, house-made croutons, and bold Caesar dressing.",
        image: "/images/food/Cafe St. Petersburg_Caesar with chicken_01092025_015.jpg",
      },
      {
        name: "Burrata with Truffle",
        price: 19,
        description:
          "Creamy burrata with marinated tomatoes, basil sauce, finished with truffle oil.",
        image: "/images/food/burrata-salad.jpg",
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
          "Traditional potato salad with peas, carrots, pickles in creamy mayonnaise, served with roasted chicken.",
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
      name: "Classic Borscht",
      price: 18,
      description:
        "Deep-ruby beet soup slow-simmered with tender beef, shredded cabbage, and root vegetables. Served with sour cream, dark rye bread, house-cured salo, and scallions. The soul of Eastern European cooking in every spoonful.",
      image: "/images/food/borscht.jpg",
    },
    items: [
      {
        name: "Classic Borscht",
        price: 18,
        description:
          "Deep-ruby beet soup slow-simmered with tender beef, shredded cabbage, root vegetables. Served with sour cream, dark rye bread, house-cured salo, scallions.",
        allergens: ["Wheat", "Dairy", "Sulphites"],
        image: "/images/food/borscht.jpg",
      },
      {
        name: "Tsar's Fish Soup",
        price: 21,
        description:
          "Rich Russian fish soup made with a concentrated fish broth, finished with premium fish, potatoes, and fresh herbs — deeper and more refined than traditional fish soup.",
        allergens: ["Fish", "Sulphites"],
      },
      {
        name: "Ukha Soup",
        price: 18,
        description:
          "A clear, delicate Russian fish broth slow-simmered with salmon, root vegetables, and fresh herbs. Light yet deeply flavorful — a staple of traditional Eastern European cooking. Served with rye bread.",
        allergens: ["Fish", "Sulphites"],
        image: "/images/food/Cafe St. Petersburg_borscht_01092025_008.jpg",
      },
      {
        name: "Mushroom Cream Soup",
        price: 16,
        description:
          "Velvet-smooth roasted mushroom soup finished with premium truffle oil and fresh herbs.",
        allergens: ["Dairy", "Wheat", "Celery"],
      },
      {
        name: "Solyanka",
        price: 18,
        description:
          "Bold tomato-based soup with house-cured and roasted meats, tangy pickles, olives, lemon. Served with sour cream and fresh bread.",
        allergens: ["Wheat", "Dairy", "Sulphites", "Mustard"],
        image: "/images/food/Cafe St. Petersburg_solyanka_01092025_067.jpg",
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
    },
    items: [
      {
        name: "Baked Salmon",
        price: 33,
        description: "Fresh salmon baked tender and flaky, finished with lemon and herbs, served with vegetables, bread and olives",
        image: "/images/food/Cafe St. Petersburg_salmon_01092025_061.jpg",
      },
      {
        name: "Beef Stroganoff",
        price: 30,
        description: "Sautéed beef with onions and mushrooms in silky cream sauce, with mashed potatoes and pickles",
        image: "/images/food/beef-stroganoff.jpg",
      },
      {
        name: "Carp Cutlets",
        price: 29,
        description: "Tender golden carp cutlets pan-seared to perfection, served with a creamy house sauce, cherry tomatoes, and fresh greens on a white plate.",
        image: "/images/food/carp-cutlets-white-plate.jpg",
      },
      {
        name: "Chicken Kiev",
        price: 30,
        description: "Chicken breast stuffed with green herb butter, breaded and fried golden, served with mashed potatoes",
        image: "/images/food/chicken-kiev.jpg",
      },
      {
        name: "Chicken Tabaka",
        price: 33,
        description: "A whole young chicken, marinated in aromatic spices and grilled under pressure until crispy golden all over. A Caucasian classic.",
        image: "/images/food/Cafe St. Petersburg_chicken kiev_01092025_017.jpg",
      },
      {
        name: "Stuffed Cabbage Rolls (Golubtsy)",
        price: 28,
        description: "Tender cabbage leaves stuffed with seasoned ground beef, rice, and herbs, slow-braised in a rich tomato-sour cream sauce.",
      },
      {
        name: "Braised Oxtail",
        price: 36,
        description: "Slow-braised oxtail until the meat falls from the bone, served in a rich deep sauce with root vegetables. Deeply warming and intensely flavorful.",
      },
      {
        name: "Duck Leg Confit",
        price: 34,
        description: "Duck leg slow-cooked in its own fat until impossibly tender, with crispy golden skin. Served with seasonal garnish.",
      },
      {
        name: "Handmade Pelmeni",
        price: 23,
        description: "Traditional dumplings filled with seasoned veal and pork",
        image: "/images/food/Cafe St. Petersburg_pelmeni_01092025_046.jpg",
      },
      {
        name: "Handmade Vareniki",
        price: 21,
        description: "Dumplings filled with potatoes, topped with creamy mushroom sauce",
        image: "/images/food/mushroom-vareniki.jpg",
      },
      {
        name: "Pozharsky Cutlet with White Sauce",
        price: 30,
        description: "Hand-chopped chicken cutlet with crispy breadcrumbs, served with mashed potatoes and our signature parsnip white sauce.",
        image: "/images/food/pazharsky-cutlet.jpg",
      },
      {
        name: "Rack of Lamb",
        price: 40,
        description: "French-trimmed, roasted to preserve natural juiciness and rich flavor.",
      },
      {
        name: "Royal Sturgeon",
        price: 38,
        description:
          "Grilled sturgeon fillet, oven-finished and served with a house honey-spiced sauce and fresh mixed greens.",
        allergens: ["Fish"],
      },
      {
        name: "Ribeye Steak",
        price: 53,
        description: "Prime ribeye grilled to order",
      },
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
      {
        name: "Mashed Potatoes",
        price: 10,
        description: "Home-style silky-smooth.",
        allergens: ["Dairy"],
      },
      {
        name: "Buckwheat (Kasha)",
        price: 10,
        description: "Classic Eastern European buckwheat groats, toasted and simmered until fluffy. Earthy, nutty, and deeply satisfying.",
      },
      {
        name: "Creamy Barley Risotto with Mushrooms",
        price: 12,
        description: "Pearl barley with mushrooms in smooth buttery sauce",
      },
      {
        name: "Roasted Brussels Sprouts with Parmesan",
        price: 10,
        description: "Oven-roasted sprouts topped with parmesan",
      },
      {
        name: "Garlic Roasted Potatoes with Mushrooms",
        price: 10,
        description: "Crispy roasted potatoes tossed with garlic and mushrooms",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    storyIntro:
      "Every Eastern European meal ends sweetly. Our cakes are layered by hand, our syrniki golden-fried to order — the way babushka made them.",
    heroImage: HERO_IMAGES.desserts,
    bgColor: "cream",
    featureSpotlight: {
      name: "Honey Cake (Medovik)",
      price: 13,
      description:
        "Paper-thin wildflower honey biscuits layered with whipped sour cream and dulce de leche. The iconic Eastern European dessert, made the traditional way with patience and care.",
      image: "/images/food/honey-cake.jpg",
    },
    items: [
      {
        name: "Poached Pear in Spiced Syrup",
        price: 13,
        description:
          "Tender pear poached in spiced amber syrup with cinnamon and vanilla, served with fresh raspberries, crushed pistachios, and fresh mint.",
        image: "/images/food/poached-pear-dessert.jpg",
      },
      {
        name: "Honey Cake (Medovik)",
        price: 13,
        description:
          "Paper-thin wildflower honey biscuits layered with whipped sour cream and dulce de leche.",
        allergens: ["Honey", "Wheat", "Dairy", "Eggs"],
        image: "/images/food/honey-cake.jpg",
      },
      {
        name: "Napoleon Cake",
        price: 13,
        description:
          "Ultra-thin buttery puff pastry layers with Madagascar vanilla pastry cream, aged 24 hours.",
        allergens: ["Wheat", "Dairy", "Eggs"],
      },
      {
        name: "Panna Cotta",
        price: 12,
        description:
          "Chilled Italian cream with vanilla, seasonal berry coulis, and fresh mint.",
        allergens: ["Dairy", "Berries"],
      },
      {
        name: "Sirniky (Farmer's Cheese Pancakes)",
        price: 15,
        description:
          "Golden pan-seared farmer's cheese pancakes with sour cream and berry jam.",
        allergens: ["Dairy", "Wheat", "Eggs"],
        image: "/images/food/Cafe St. Petersburg_syrniki_01092025_072.jpg",
      },
      {
        name: "Sour Cherry Vareniki",
        price: 14,
        description: "Hand-pleated dumplings with tart cherries, sour cream, and mixed-berry jam",
        image: "/images/food/Cafe St. Petersburg_vareniki_01092025_074.jpg",
      },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    storyIntro: "Little guests eat well too.",
    heroImage: HERO_IMAGES.kids,
    bgColor: "white",
    items: [
      { name: "Chicken Fingers with Fries", price: 12.95 },
    ],
  },
  {
    id: "desserts-drinks",
    title: "Desserts & Drinks",
    storyIntro: "Housemade desserts, signature cocktails, and Eastern European infusions to complete your meal.",
    heroImage: HERO_IMAGES.desserts,
    bgColor: "cream",
    items: [
      { name: "Napoleon Cake", price: 13, description: "Delicate layers of flaky puff pastry with light, silky cream" },
      { name: "Honey Cake (Medovik)", price: 13, description: "Soft honey sponge layered with smooth sweet cream" },
      { name: "Syrniki", price: 18, description: "Golden farmer's cheese pancakes, served with sour cream and jam" },
      { name: "Cherry Vareniki", price: 14, description: "Tender dumplings filled with sweet cherries, served with sour cream" },
      { name: "Panna Cotta", price: 12, description: "Silky vanilla cream dessert with a delicate, melt-in-your-mouth texture" },
      { name: "Waffle Tube with Condensed Milk", price: 12, description: "Crisp rolled wafer filled with rich, sweet condensed milk" },
      { name: "Waffle Tube with Cream", price: 12, description: "Light and crisp waffle filled with smooth cream" },
      { name: "Rosemary Peach Martini", price: 15, description: "Fragrant and lightly sweet, with delicate herbal notes" },
      { name: "Espresso Martini", price: 16, description: "Bold and smooth, with rich coffee and a velvety finish" },
      { name: "Pear Martini", price: 14, description: "Crisp and subtly sweet, with a fresh fruit aroma" },
      { name: "Blackcurrant-Infused Vodka", price: 11, description: "Tart and slightly sweet, with a deep berry flavor" },
      { name: "Cherry-Infused Cognac", price: 12, description: "Rich and smooth, with dark cherry and warm oak notes" },
      { name: "Grand Marnier", price: 11, description: "Orange liqueur with cognac depth, smooth and citrusy" },
      { name: "Disaronno Amaretto", price: 11, description: "Sweet almond liqueur with hints of vanilla and marzipan" },
      { name: "Frangelico", price: 10, description: "Hazelnut liqueur, nutty and lightly sweet" },
    ],
  },
];

export const menuCategoryIds = menuChapters.map((c) => c.id);
