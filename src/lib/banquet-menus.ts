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

/** $125 Classical Banquet — aligned with EN_BANQUET_Menu_125.pdf */
export const classicalBanquetMenu: BanquetCategory[] = [
  {
    id: "cold-appetizers",
    title: "Cold Appetizers",
    pickCount: 3,
    items: [
      {
        name: "Homemade Pickles (included in banquet)",
        description:
          "A delightful assortment of sauerkraut, tomatoes, and cucumbers.",
      },
      {
        name: "Bruschetta Assortment",
        description:
          "Six mini bruschettas topped with Parma ham, smoked salmon, feta, and basil-tomato salsa.",
      },
      {
        name: "Meat Platter",
        description:
          "Seasonal assortment of house-made meat delicacies. Selection subject to change.",
      },
      {
        name: "Cream Cheese, Nuts, and Dried Fruit Platter",
        description:
          "A sophisticated assortment of nuts, dried fruits, honey, and toasted wheat bread.",
      },
      {
        name: "Fish Delicacies",
        description:
          "A balanced mix of salted herring, smoked white fish fillet, and lightly salted salmon, served with roasted potatoes and green onions.",
      },
      {
        name: "Classic Chicken Liver Pâté",
        description:
          "Smooth and creamy pâté, served with honey and rye crisps.",
      },
      {
        name: "Homemade Kholodets",
        description:
          "Traditional chicken and beef aspic paired with mustard and horseradish.",
      },
      {
        name: "Eggplant Appetizer",
        description:
          "Grilled eggplant layered with basil cream cheese and cherry tomatoes.",
      },
      {
        name: "Odessa-Style Forshmack",
        description:
          "A spiced cold appetizer made from finely chopped herring fillet, onion, apple, boiled egg, and fresh herbs. Served on rice chips with bread & milk.",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    pickCount: 3,
    items: [
      {
        name: "Salad with Roasted Tomatoes, Pistachios, and Mozzarella",
        description:
          "Roasted tomatoes combined with crunchy pistachios and tender mozzarella, enhanced by a refined Dijon dressing.",
      },
      {
        name: "Vegetable Salad",
        description:
          "Fresh organic vegetables and greens: tomatoes, cucumbers, red onion, bell peppers, and homemade bryndza cheese drizzled with homemade oil.",
      },
      {
        name: "Classic Olivier Salad",
        description:
          "Blend of boiled root vegetables, eggs, green peas, and your choice of chicken or beef, garnished with dill and dressed with light homemade mayonnaise.",
      },
      {
        name: "Herring Under a Fur Coat",
        description:
          "Layered salted herring beneath potatoes, beets, carrots, eggs, and mayonnaise.",
      },
      {
        name: "Caesar with Chicken / Shrimp",
        description:
          "Crisp mix of lettuce, tender chicken or juicy shrimp, crunchy croutons, and a bold Caesar dressing.",
      },
      {
        name: "Vinaigrette",
        description:
          "The simple charm of roasted beets, potatoes, and carrots is complemented by tangy pickles and fresh herbs, dressed with olive oil and a touch of lemon juice.",
      },
      {
        name: "Smoked Eel Salad with Nut Dressing",
        description:
          "A refined mix of fresh salad greens, cucumber, nutty dressing, and smoked eel.",
      },
      {
        name: "Caribbean Salad",
        description:
          "Chicken, mango, and mixed greens topped with almonds and tossed in an orange-honey dressing.",
      },
      {
        name: '"Forest Cones" Salad',
        description: "Duck, forest cones, raspberry, and mixed greens.",
      },
      {
        name: "Nevsky Salad",
        description:
          "Green beans and chicken liver on mixed greens with a sesame sauce.",
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
        description:
          "Delicate yeast dough pastry turnovers filled with your choice of meat, braised cabbage, or egg with fresh herbs.",
      },
      {
        name: "Mushroom Julienne",
        description:
          "Porcini mushrooms baked in a creamy sauce with onions, spices, and grated cheese. Served hot in tartlets.",
      },
      {
        name: "Crêpes",
        description:
          "Homemade crêpes filled with your choice of beef or chicken with spinach and blue cheese.",
      },
      {
        name: "Stuffed Cabbage Rolls (Golubtsy)",
        description:
          "A hearty blend of pork, beef, cabbage, and rice, served with sour cream.",
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
        description:
          "Tender baked salmon served with your choice of sauce: a creamy parsnip sauce or basil sauce with crispy breadcrumbs and pancetta.",
      },
      {
        name: "Baked White Fish with Sauce of Your Choice",
        description:
          "Tender baked white fish (haddock), served with your choice of sauce: a creamy parsnip sauce or basil sauce with crispy breadcrumbs and pancetta.",
      },
      {
        name: "Duck",
        description:
          "A whole duck, slow-roasted with apples, served with a fruity berry sauce that complements the richness of the meat with a sweet and tangy balance.",
      },
      {
        name: "Baked Pork Shoulder with Garlic Butter",
        description:
          "Juicy and tender pork shoulder, slow-baked to perfection, infused with the rich aroma of garlic butter and herbs. A hearty and flavorful centerpiece for any feast.",
      },
      {
        name: "Chicken Tabaka",
        description:
          "A whole chicken marinated in a savory spiced sauce, then grilled to a crispy golden perfection.",
      },
      {
        name: "Roasted Lamb Fillet",
        description:
          "Succulent lamb meat, perfectly roasted and served with a classic demi-glace sauce that adds depth and richness to each bite.",
      },
      {
        name: "Pozharskie Cutlets",
        description:
          "Delicate and tender chopped chicken fillet cutlets, with a crispy golden crust. Served with a creamy sauce enriched with parsnip for a unique and savory touch.",
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
        description: "Crispy baked potatoes seasoned with a blend of spices.",
      },
      {
        name: "Grilled Vegetables",
        description:
          "Seasonal vegetables grilled until tender with a light smoky flavor.",
      },
      {
        name: "Rice with Vegetables",
        description: "Steamed rice with sautéed vegetables in butter.",
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
        description: "A selection of Napoleon and Honey cakes.",
      },
      {
        name: "Fruits",
        description: "Seasonal fresh fruit.",
      },
      {
        name: "Waffle Tube With Condensed Milk",
        description:
          "Crispy rolled waffle tubes filled with rich boiled condensed milk, finished with crushed nuts.",
      },
      {
        name: "Waffle Tube With Cream",
        description:
          "Delicate waffle tubes filled with sweet whipped cream—a classic Eastern European treat.",
      },
    ],
  },
];

/** $165 Premium Banquet — aligned with EN_BANQUET_Menu_165.pdf (salads: pick 4) */
export const premiumBanquetMenu: BanquetCategory[] = [
  {
    id: "cold-appetizers",
    title: "Cold Appetizers",
    pickCount: 3,
    items: [
      {
        name: "Homemade Pickles (included in banquet)",
        description:
          "A delightful assortment of sauerkraut, tomatoes, and cucumbers.",
      },
      {
        name: "Cheese Plate",
        description:
          "An assortment of exquisite cheeses: Camembert, Roquefort, and Goat cheese. Complemented by fruits and nuts.",
      },
      {
        name: "Tuna and Strawberry Tartare",
        description:
          "Finely diced fresh tuna with strawberry slices. Salmon is also available upon request.",
      },
      {
        name: "Stuffed Fish (Gefilte Fish)",
        description:
          "Patties made from carp, prepared according to a traditional recipe, and served with spicy horseradish.",
      },
      {
        name: "Smoked Salmon Carpaccio with Truffle Dressing",
        description: "Thin slices of smoked salmon drizzled with truffle sauce.",
      },
      {
        name: "Carpaccio with Tomatoes and Mozzarella",
        description:
          "An exquisite combination of fresh, juicy tomatoes, tender mozzarella, and aromatic arugula. Served with olive oil and balsamic cream.",
      },
      {
        name: "Bruschetta Assortment",
        description:
          "Six mini bruschettas topped with Parma ham, smoked salmon, feta, and basil-tomato salsa.",
      },
      {
        name: "Meat Platter",
        description:
          "Seasonal assortment of house-made meat delicacies. Selection subject to change.",
      },
      {
        name: "Cream Cheese, Nuts, and Dried Fruit Platter",
        description:
          "A sophisticated assortment of nuts, dried fruits, honey, and toasted wheat bread.",
      },
      {
        name: "Fish Delicacies",
        description:
          "A balanced mix of salted herring, smoked white fish fillet, and lightly salted salmon, served with roasted potatoes and green onions.",
      },
      {
        name: "Classic Chicken Liver Pâté",
        description:
          "Smooth and creamy pâté, served with honey and rye crisps.",
      },
      {
        name: "Homemade Kholodets",
        description:
          "Traditional chicken and beef aspic paired with mustard and horseradish.",
      },
      {
        name: "Eggplant Appetizer",
        description:
          "Grilled eggplant layered with basil cream cheese and cherry tomatoes.",
      },
      {
        name: "Odessa-Style Forshmack",
        description:
          "A spiced cold appetizer made from finely chopped herring fillet, onion, apple, boiled egg, and fresh herbs. Served on rice chips with bread & milk.",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    pickCount: 4,
    items: classicalBanquetMenu[1]!.items,
  },
  {
    id: "hot-appetizers",
    title: "Hot Appetizers",
    pickCount: 3,
    items: [
      {
        name: "Camembert in Almond Crust with Berry Sauce",
        description:
          "Creamy Camembert, encased in a crispy almond crust, served with tangy berry sauce.",
      },
      {
        name: "Pirozhki (Puff Pastry Hand Pies)",
        description:
          "Delicate yeast dough pastry turnovers filled with your choice of meat, braised cabbage, or egg with fresh herbs.",
      },
      {
        name: "Tiger Shrimp in Sauce Vierge",
        description:
          "Juicy tiger shrimp served with a fresh French sauce vierge made from olive oil, lemon juice, tomatoes, herbs, olives, and capers.",
      },
      {
        name: "Mushroom Julienne",
        description:
          "Porcini mushrooms baked in a creamy sauce with onions, spices, and grated cheese. Served hot in tartlets.",
      },
      {
        name: "Crêpes",
        description:
          "Homemade crêpes filled with your choice of beef or chicken with spinach and blue cheese.",
      },
      {
        name: "Stuffed Cabbage Rolls (Golubtsy)",
        description:
          "A hearty blend of pork, beef, cabbage, and rice, served with sour cream.",
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
        description:
          "Tender baked salmon served with your choice of sauce: a creamy parsnip sauce or basil sauce with crispy breadcrumbs and pancetta.",
      },
      {
        name: "Baked White Fish with Sauce of Your Choice",
        description:
          "Tender baked white fish (halibut), served with your choice of sauce: a creamy parsnip sauce or basil sauce with crispy breadcrumbs and pancetta.",
      },
      {
        name: "Duck",
        description:
          "A whole duck, slow-roasted with apples, served with a fruity berry sauce that complements the richness of the meat with a sweet and tangy balance.",
      },
      {
        name: "Lamb Rack with Juniper Sauce",
        description:
          "Tender lamb rack served with an aromatic juniper sauce, creating a perfectly balanced combination of earthy meat flavor and fresh pine notes.",
      },
      {
        name: "Duck Breast with Berry Sauce",
        description:
          "Juicy duck breast served with an exquisite berry sauce that enhances the rich and flavorful taste of the duck meat.",
      },
      {
        name: "Ribeye Steak, Roasted Whole",
        description:
          "A marbled ribeye steak roasted whole, preserving all the juiciness and aroma, perfectly cooked for true meat lovers.",
      },
      {
        name: "Salmon and Spinach Wellington",
        description:
          "A delicate pastry roll with a filling of salmon and spinach, perfectly combining textures and flavors to create a dish fit for a royal table.",
      },
      {
        name: "Baked Pork Shoulder with Garlic Butter",
        description:
          "Juicy and tender pork shoulder, slow-baked to perfection, infused with the rich aroma of garlic butter and herbs. A hearty and flavorful centerpiece for any feast.",
      },
      {
        name: "Chicken Tabaka",
        description:
          "A whole chicken marinated in a savory spiced sauce, then grilled to a crispy golden perfection.",
      },
      {
        name: "Roasted Lamb Fillet",
        description:
          "Succulent lamb meat, perfectly roasted and served with a classic demi-glace sauce that adds depth and richness to each bite.",
      },
      {
        name: "Pozharskie Cutlets",
        description:
          "Delicate and tender chopped chicken fillet cutlets, with a crispy golden crust. Served with a creamy sauce enriched with parsnip for a unique and savory touch.",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    pickCount: 2,
    items: [
      {
        name: "Baby Vegetables with Herbs and Parmesan",
        description:
          "Tender baby vegetables seasoned with herbs and finished with grated Parmesan.",
      },
      {
        name: "Baked Potatoes with Spices",
        description: "Crispy baked potatoes seasoned with a blend of spices.",
      },
      {
        name: "Grilled Vegetables",
        description:
          "Seasonal vegetables grilled until tender with a light smoky flavor.",
      },
      {
        name: "Rice with Vegetables",
        description: "Steamed rice served with vegetables sautéed in butter.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    pickCount: 1,
    items: classicalBanquetMenu[5]!.items,
  },
];

export const banquetTiers: BanquetTier[] = [
  {
    id: "classical",
    name: "Classical Banquet",
    price: 125,
    categories: classicalBanquetMenu,
  },
  {
    id: "premium",
    name: "Premium Banquet",
    price: 165,
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
  ],
  specials: [
    { item: "Red Caviar (100g)", price: 38 },
    { item: "Black Caviar", price: "Market Price" as const },
    { item: "Add Crepe (1) or Mini Pancakes", price: 1 },
  ],
  drinks: [
    { item: "Compote 1 liter", price: 15 },
    { item: "Tarkhun (Ester) 1 liter", price: 18 },
  ],
} as const;

export const banquetCapacity = "200";
