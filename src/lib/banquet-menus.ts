export type BanquetCategory = {
  id: string;
  title: string;
  pickCount: number;
  items: { name: string; description?: string }[];
};

export type BanquetTier = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  categories: BanquetCategory[];
};

export const classicalBanquetMenu: BanquetCategory[] = [
  {
    id: "cold-appetizers",
    title: "Cold Appetizers",
    pickCount: 3,
    items: [
      {
        name: "Homemade Pickles (included in banquet)",
        description: "Assortment of sauerkraut, tomatoes, cucumbers",
      },
      {
        name: "Bruschetta Assortment",
        description: "Six mini bruschettas with Parma ham, smoked salmon, feta, basil-tomato salsa",
      },
      {
        name: "Meat Platter",
        description: "Seasonal house-made meat delicacies (option: include pork / exclude pork)",
      },
      {
        name: "Cream Cheese, Nuts, and Dried Fruit Platter",
        description: "Nuts, dried fruits, honey, toasted wheat bread",
      },
      {
        name: "Fish Delicacies",
        description: "Salted herring, smoked white fish fillet, lightly salted salmon with roasted potatoes and green onions",
      },
      {
        name: "Classic Chicken Liver Pâté",
        description: "Smooth pâté with honey and rye crisps",
      },
      {
        name: "Homemade Kholodets",
        description: "Chicken and beef aspic with mustard and horseradish",
      },
      {
        name: "Eggplant Appetizer",
        description: "Grilled eggplant layered with basil cream cheese and cherry tomatoes",
      },
      {
        name: "Odessa-Style Forshmack",
        description: "Spiced cold appetizer of herring fillet, onion, apple, boiled egg, fresh herbs, served on rice chips with bread & milk",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    pickCount: 3,
    items: [
      {
        name: "Burrata Salad",
        description: "Roasted tomatoes with crunchy pistachios and mozzarella, Dijon dressing",
      },
      {
        name: "Vegetable Salad",
        description: "Fresh organic vegetables, tomatoes, cucumbers, red onion, bell peppers, bryndza cheese, homemade oil",
      },
      {
        name: "Classic Olivier Salad",
        description: "Boiled root vegetables, eggs, green peas, chicken or beef, dill, light homemade mayonnaise",
      },
      {
        name: "Herring Under a Fur Coat",
        description: "Layered salted herring beneath potatoes, beets, carrots, eggs, mayonnaise",
      },
      {
        name: "Caesar with Chicken/Shrimp",
        description: "Lettuce, tender chicken or shrimp, croutons, Caesar dressing",
      },
      {
        name: "Vinaigrette",
        description: "Roasted beets, potatoes, carrots, tangy pickles, fresh herbs, olive oil, lemon",
      },
      {
        name: "Smoked Eel Salad with Nut Dressing",
        description: "Fresh greens, cucumber, nutty dressing, smoked eel",
      },
      {
        name: "Caribbean Salad",
        description: "Chicken, mango, mixed greens, almonds, orange-honey dressing",
      },
      {
        name: "Nevsky Salad",
        description: "Green beans and chicken liver on mixed greens with sesame sauce",
      },
    ],
  },
  {
    id: "hot-appetizers",
    title: "Hot Appetizers",
    pickCount: 3,
    items: [
      {
        name: "Pirozhki (Puff Pastry Hand Pies)",
        description: "Yeast dough turnovers with meat, braised cabbage, or egg with fresh herbs",
      },
      {
        name: "Mushroom Julienne",
        description: "Porcini mushrooms in creamy sauce with onions, spices, grated cheese, served in tartlets",
      },
      {
        name: "Crepes",
        description: "Homemade, filled with beef or chicken with spinach and blue cheese",
      },
      {
        name: "Stuffed Cabbage Rolls (Golubtsy)",
        description: "Pork, beef, cabbage, rice, sour cream (option: include/exclude pork)",
      },
    ],
  },
  {
    id: "entrees",
    title: "Entrees",
    pickCount: 3,
    items: [
      {
        name: "Baked Salmon with Sauce of Your Choice",
        description: "Creamy parsnip sauce or basil sauce with crispy breadcrumbs and pancetta",
      },
      {
        name: "Baked White Fish with Sauce of Your Choice",
        description: "Seasonal selection, creamy parsnip or basil sauce with breadcrumbs and pancetta",
      },
      {
        name: "Duck",
        description: "Whole duck slow-roasted with apples, fruity berry sauce",
      },
      {
        name: "Lamb Rack with Juniper Sauce",
        description: "Aromatic juniper sauce, earthy meat flavor with pine notes",
      },
      {
        name: "Baked Pork Shoulder with Garlic Butter",
        description: "Slow-baked, infused with garlic butter and herbs",
      },
      {
        name: "Chicken Tabaka",
        description: "Whole chicken marinated in spiced sauce, grilled to crispy golden perfection",
      },
      {
        name: "Roasted Lamb Fillet",
        description: "With classic demi-glace sauce",
      },
      {
        name: "Pozharskie Cutlets",
        description: "Tender chopped chicken fillet cutlets, crispy golden crust, creamy parsnip sauce",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    pickCount: 2,
    items: [
      {
        name: "Baked Potatoes with Spices",
        description: "Crispy, seasoned with spice blend",
      },
      {
        name: "Grilled Vegetables",
        description: "Seasonal vegetables, light smoky flavor",
      },
      {
        name: "Rice with Vegetables",
        description: "Steamed rice with sautéed vegetables in butter",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    pickCount: 1,
    items: [
      {
        name: "Assorted Cakes",
        description: "Selection of Napoleon and Honey cakes",
      },
      {
        name: "Fruits",
        description: "Seasonal fresh fruit",
      },
    ],
  },
];

export const premiumBanquetMenu: BanquetCategory[] = [
  {
    id: "cold-appetizers",
    title: "Cold Appetizers",
    pickCount: 3,
    items: [
      {
        name: "Homemade Pickles (included in banquet)",
        description: "Assortment of sauerkraut, tomatoes, cucumbers",
      },
      {
        name: "Bruschetta Assortment",
        description: "Six mini bruschettas with Parma ham, smoked salmon, feta, basil-tomato salsa",
      },
      {
        name: "Meat Platter",
        description: "Seasonal house-made meat delicacies (option: include pork / exclude pork)",
      },
      {
        name: "Cream Cheese, Nuts, and Dried Fruit Platter",
        description: "Nuts, dried fruits, honey, toasted wheat bread",
      },
      {
        name: "Fish Delicacies",
        description: "Salted herring, smoked white fish fillet, lightly salted salmon with roasted potatoes and green onions",
      },
      {
        name: "Classic Chicken Liver Pâté",
        description: "Smooth pâté with honey and rye crisps",
      },
      {
        name: "Homemade Kholodets",
        description: "Chicken and beef aspic with mustard and horseradish",
      },
      {
        name: "Eggplant Appetizer",
        description: "Grilled eggplant layered with basil cream cheese and cherry tomatoes",
      },
      {
        name: "Odessa-Style Forshmack",
        description: "Spiced cold appetizer of herring fillet, onion, apple, boiled egg, fresh herbs, served on rice chips with bread & milk",
      },
      {
        name: "Red Caviar 100g",
        description: "Premium Alaskan salmon roe (Premium add-on)",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    pickCount: 3,
    items: classicalBanquetMenu[1]!.items,
  },
  {
    id: "hot-appetizers",
    title: "Hot Appetizers",
    pickCount: 3,
    items: [
      ...classicalBanquetMenu[2]!.items,
      {
        name: "Layered Salmon Crêpes",
        description: "Delicate crêpes with smoked salmon and cream cheese (Premium)",
      },
    ],
  },
  {
    id: "entrees",
    title: "Entrees",
    pickCount: 3,
    items: classicalBanquetMenu[3]!.items,
  },
  {
    id: "sides",
    title: "Sides",
    pickCount: 2,
    items: classicalBanquetMenu[4]!.items,
  },
  {
    id: "desserts",
    title: "Desserts",
    pickCount: 1,
    items: [
      ...classicalBanquetMenu[5]!.items,
      {
        name: "Chocolate Fondant",
        description: "Warm chocolate cake with molten center (Premium)",
      },
    ],
  },
];

export const banquetTiers: BanquetTier[] = [
  {
    id: "classical",
    name: "Classical Banquet",
    price: 115,
    categories: classicalBanquetMenu,
  },
  {
    id: "premium",
    name: "Premium Banquet",
    price: 145,
    badge: "Recommended",
    categories: premiumBanquetMenu,
  },
];

export const additionalPricing = {
  perPerson: [
    { item: "Cold Appetizers", price: 6 },
    { item: "Hot Appetizers", price: 5 },
    { item: "Salads", price: 5 },
    { item: "Entrees", price: 8 },
    { item: "Sides", price: 3 },
    { item: "Mackerel", price: 4 },
  ],
  specials: [
    { item: "Red Caviar (100g)", price: 32 },
    { item: "Black Caviar", price: "Market Price" },
    { item: "Add Crepe or Mini Pancakes", price: 1 },
  ],
  drinks: [
    { item: "Compote 1 liter", price: 15 },
    { item: "Tarkhun (Ester) 1 liter", price: 18 },
  ],
} as const;

export const banquetCapacity = "200";
