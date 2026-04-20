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
  salads: "/images/food/herring-fur-coat.jpg",
  soups: "/images/food/borscht.jpg",
  mains: "/images/food/beef-stroganoff.jpg",
  sides: "/images/food/Cafe St. Petersburg_mushroom vareniki_01092025_035.jpg",
};

export const menuChapters: MenuChapter[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    storyIntro: "Every great meal starts with a story. Ours begins with golden pirozhki, silky pâté, and pickles made the old-fashioned way.",
    heroImage: HERO_IMAGES.appetizers,
    bgColor: "white",
    featureSpotlight: {
      name: "Layered Salmon Crepes",
      price: 19,
      description: "Paper-thin crêpes layered with cream cheese, house-cured salmon, briny capers, mashed avocado, and fresh dill. An elegant start to any gathering.",
      image: "/images/food/Cafe St. Petersburg_savory blini with house cured salmon_01092025_064.jpg",
    },
    items: [
      { name: "Traditional Hand Pies (Pirozhki)", price: 5, image: "/images/food/pirozhki-new.jpg", description: "Baked hand pies filled with a variety of savory fillings, baked until golden and crispy." },
      { name: "Boyar-Style Hand Pie with Oxtail", price: 8, image: "/images/food/pirozhki-new.jpg", description: "Premium hand pies filled with braised oxtail, a traditional and hearty option." },
      { name: "Pickled Vegetable Starter", price: 15, image: "/images/food/Cafe St. Petersburg_pickled zakuska_01092025_048.jpg", description: "Crunchy cucumbers, tangy cabbage, juicy cherry tomatoes, house-pickled with fresh herbs, garlic, aromatic spices." },
      { name: "Herring Spread (Farshmak)", price: 16, image: "/images/food/herring-potatoes.jpg", description: "Velvety house-made herring pâté blended with butter, onion, and spices. Served chilled with rye crisps." },
      { name: "Chicken Liver Pâté", price: 17, image: "/images/food/chicken-liver-pate-new.jpg", description: "Velvet-smooth pâté finished with honey and sea salt, served with handmade crispy crostini." },
      { name: "Kholodets (Studen)", price: 17, image: "/images/food/kholodets-new.jpg", description: "Traditional slow-simmered chicken and beef aspic, set in a clear savory jelly. Served with spicy mustard and horseradish." },
      { name: "Herring with Potatoes & Onions", price: 18, image: "/images/food/herring-potatoes.jpg", description: "Tender salted herring with fried crispy potatoes, fresh dill, pickled red onions, aromatic sunflower oil." },
      { name: "Salo Platter", price: 18, description: "Pieces of cured pork lard served with mustard — traditional, bold, and melt-in-the-mouth." },
      { name: "Layered Salmon Crêpes", price: 19, description: "Paper-thin crêpes layered with cream cheese, house-cured salmon, briny capers, mashed avocado, fresh dill." },
      { name: "Meat Platter", price: 23, image: "/images/food/Cafe St. Petersburg_meat platter_01092025_032.jpg", description: "Premium house-roasted meats and traditional cured selections with handmade spicy mustard and horseradish." },
      { name: "Cured Fish Platter", price: 25, description: "A curated selection of house-cured and smoked fish — smoked white fish fillet, lightly salted salmon, and salted herring." },
    ],
  },
  {
    id: "caviar",
    title: "Caviar",
    storyIntro: "A timeless Eastern European tradition — delicate blini topped with the finest roe, served the way it's been enjoyed for generations.",
    heroImage: HERO_IMAGES.caviar,
    bgColor: "cream",
    items: [
      { name: "Alaska Finest Red Caviar — 2 oz (56g)", price: 30, image: "/images/food/blini-red-caviar.jpg", description: "Premium Alaskan salmon roe with vibrant pop, clean ocean flavor, and delicate salinity." },
      { name: "Roe Acipenser Black Caviar — 2 oz (56g)", price: 95, image: "/images/food/blackcaviar.png", description: "Premium Acipenser sturgeon black caviar, prized for its delicate texture and refined flavor." },
      { name: "Add Blini", price: 2, image: "/images/food/Cafe St. Petersburg_Blini with red caviar_01092025_005.jpg", description: "House-made golden blini to accompany your caviar selection." },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    storyIntro: "Light enough to start, bold enough to remember — from the beloved Olivier to creamy burrata with truffle.",
    heroImage: HERO_IMAGES.salads,
    bgColor: "cream",
    items: [
      { name: "Vinegret", price: 16, image: "/images/food/vinegret-new.jpg", description: "Beet and vegetable salad with potatoes, carrots, pickles, and onions, lightly dressed with oil." },
      { name: "Classic Garden Salad", price: 16, description: "Fresh seasonal vegetables — tomatoes, cucumbers, radishes, and greens — lightly dressed with olive oil and lemon." },
      { name: "Caesar Salad", price: 16, image: "/images/food/Cafe St. Petersburg_Caesar with chicken_01092025_014.jpg", description: "Crisp romaine, tender grilled chicken, parmesan shavings, house-made croutons, and bold Caesar dressing. Add grilled chicken $5 | Add grilled shrimp $7" },
      { name: "Olivier Salad (Classic)", price: 17, image: "/images/food/Cafe St. Petersburg_oliver salad_01092025_037.jpg", description: "Traditional potato salad with peas, carrots, pickles in creamy mayonnaise, served with roasted chicken. Substitute to grilled beef steak $2" },
      { name: "Herring Under a Fur Coat", price: 17, image: "/images/food/Cafe St. Petersburg_herring under a fur coat_01092025_027.jpg", description: "Classic layered salad of beets, potatoes, carrots, eggs, and herring with light mayonnaise." },
      { name: "Burrata with Truffle", price: 19, image: "/images/food/Cafe St. Petersburg_burrata salad_01092025_011.jpg", description: "Creamy burrata with marinated tomatoes, basil sauce, finished with truffle oil." },
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
      { name: "Mushroom Cream Soup", price: 16, image: "/images/food/mushroom-soup-new.jpg", description: "Velvet-smooth roasted mushroom soup finished with premium truffle oil and fresh herbs." },
      { name: "Classic Borscht", price: 18, image: "/images/food/Cafe St. Petersburg_borscht_01092025_008.jpg", description: "Deep-ruby beet soup slow-simmered with tender beef, shredded cabbage, root vegetables. Served with sour cream, dark rye bread, house-cured salo, scallions." },
      { name: "Solyanka", price: 18, image: "/images/food/Cafe St. Petersburg_solyanka_01092025_067.jpg", description: "Bold tomato-based soup with house-cured and roasted meats, tangy pickles, olives, lemon. Served with sour cream and fresh bread." },
      { name: "Tsar's Fish Soup", price: 21, description: "Rich Russian fish soup made with a concentrated fish broth, finished with premium fish, potatoes, and fresh herbs — deeper and more refined than traditional fish soup." },
    ],
  },
  {
    id: "main-courses",
    title: "Main Courses",
    storyIntro: "The heart of the table. From hand-folded pelmeni to slow-roasted lamb — dishes that bring everyone together.",
    heroImage: HERO_IMAGES.mains,
    bgColor: "cream",
    featureSpotlight: {
      name: "Rack of Lamb",
      price: 40,
      description: "French-trimmed rack roasted to preserve natural juiciness and rich flavor. Served with seasonal vegetables and our house jus. A showstopper for any occasion.",
      image: "/images/food/hero.jpg",
    },
    items: [
      { name: "Handmade Vareniki", price: 21, image: "/images/food/Cafe St. Petersburg_mushroom vareniki_01092025_035.jpg", description: "Dumplings filled with potatoes, topped with creamy mushroom sauce." },
      { name: "Handmade Pelmeni", price: 23, image: "/images/food/pelmeni-new.jpg", description: "Traditional dumplings filled with seasoned veal and pork." },
      { name: "Stuffed Cabbage Rolls | Golubtsy", price: 28, image: "/images/food/06-golubtsy-stuffed-cabbage.jpg", description: "Tender cabbage leaves stuffed with seasoned ground beef, rice, and herbs, slow-braised in a rich tomato-sour cream sauce." },
      { name: "Carp Cutlets", price: 29, image: "/images/food/carp-cutlets-new.jpg", description: "Tender golden carp cutlets pan-seared to perfection, served with a creamy house sauce, cherry tomatoes, and fresh greens." },
      { name: "Beef Stroganoff", price: 30, image: "/images/food/Cafe St. Petersburg_beef stroganoff_01092025_002.jpg", description: "Sautéed beef with onions and mushrooms in silky cream sauce, with mashed potatoes and pickles." },
      { name: "Chicken Kiev", price: 30, image: "/images/food/Cafe St. Petersburg_chicken kiev_01092025_017.jpg", description: "Chicken breast stuffed with green herb butter, breaded and fried golden, served with mashed potatoes." },
      { name: "Pozharsky Cutlet", price: 30, image: "/images/food/Cafe St. Petersburg_pazharsky cutlet_01092025_043.jpg", description: "Hand-chopped chicken cutlet with crispy breadcrumbs, served with mashed potatoes and our signature parsnip white sauce." },
      { name: "Chicken Tabaka", price: 33, image: "/images/food/chicken-tabaka-new.jpg", description: "A whole young chicken, marinated in aromatic spices and grilled under pressure until crispy golden all over. A Caucasian classic." },
      { name: "Baked Salmon", price: 33, image: "/images/food/Cafe St. Petersburg_salmon_01092025_061.jpg", description: "Fresh salmon baked tender and flaky, finished with lemon and herbs, served with vegetables, bread and olives." },
      { name: "Braised Oxtail", price: 36, image: "/images/food/Cafe St. Petersburg_meat platter_01092025_032.jpg", description: "Slow-braised oxtail until the meat falls from the bone, served in a rich deep sauce with root vegetables. Deeply warming and intensely flavorful." },
      { name: "Duck Leg Confit", price: 34, description: "Duck leg slow-cooked in its own fat until impossibly tender, with crispy golden skin. Served with seasonal garnish." },
      { name: "Royal Sturgeon", price: 38, description: "Grilled sturgeon fillet, oven-finished and served with a house honey-spiced sauce and fresh mixed greens." },
      { name: "Rack of Lamb", price: 40, description: "French-trimmed rack roasted to preserve natural juiciness and rich flavor. Served with seasonal vegetables and our house jus." },
      { name: "Ribeye Steak", price: 53, description: "Prime ribeye steak, hand-selected and grilled to perfection." },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    storyIntro: "The perfect companions — from silky mashed potatoes to earthy barley risotto.",
    heroImage: HERO_IMAGES.sides,
    bgColor: "white",
    items: [
      { name: "Mashed Potatoes", price: 10, description: "Home-style silky-smooth mashed potatoes." },
      { name: "Buckwheat", price: 10, description: "Buckwheat cooked in beef broth and served with mushrooms." },
      { name: "Garlic Roasted Potatoes with Mushrooms", price: 10, description: "Crispy roasted potatoes tossed with garlic and mushrooms." },
      { name: "Roasted Brussels Sprouts with Parmesan", price: 10, image: "/images/food/brussels-sprouts-new.jpg", description: "Oven-roasted sprouts topped with Parmesan." },
      { name: "Creamy Barley Risotto with Mushrooms", price: 12, description: "Pearl barley cooked in beef broth and served with mushroom sauce." },
    ],
  },
];

export const menuCategoryIds = menuChapters.map((c) => c.id);
