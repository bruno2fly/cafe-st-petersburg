import type { MenuChapter } from "@/types/menu";

export const menuChapters: MenuChapter[] = [
  {
    id: "blini-caviar",
    title: "Blini & Caviar",
    description: "Premium caviar and traditional blini",
    categories: [
      {
        id: "blini-caviar-selection",
        title: "Blini & Caviar Selection",
        items: [
          {
            id: "red-caviar",
            name: "Alaska Finest Red Caviar — 2 oz (56 g)",
            price: 30,
            description: "Premium Alaskan salmon roe with a vibrant pop, clean ocean flavor, and delicate salinity.",
            image: "/images/food/blini-red-caviar.jpg",
            dietaryInfo: ["Gluten-Free"]
          },
          {
            id: "black-caviar",
            name: "Roe Acipenser Black Caviar — 2 oz (56 g)",
            price: 95,
            description: "Premium Acipenser sturgeon black caviar, prized for its delicate texture and clean, refined flavor.",
            image: "/images/food/black-caviar.jpg",
            dietaryInfo: ["Gluten-Free"]
          },
          {
            id: "blini-add-on",
            name: "Add Blini",
            price: 2,
            description: "Traditional Eastern European thin pancakes, popular for their versatility and ability to pair with both savory and sweet toppings.",
            priceNote: "each"
          }
        ]
      }
    ]
  },
  {
    id: "appetizers",
    title: "Appetizers",
    description: "Traditional starters and small plates",
    categories: [
      {
        id: "hot-appetizers",
        title: "Hot Appetizers",
        items: [
          {
            id: "khachapuri-adjaruli",
            name: "Khachapuri Adjaruli",
            price: 25,
            description: "Traditional Georgian cheese-filled bread boat topped with a raw egg and butter. Rich, creamy, and meant to be mixed and shared.",
            image: "/images/food/khachapuri.jpg"
          },
          {
            id: "khinkali-beef-pork",
            name: "Khinkali (Beef & Pork) — 6 pieces",
            price: 19,
            description: "Hand-twisted Georgian soup dumplings filled with seasoned beef and pork in a savory broth. Traditionally eaten by hand."
          },
          {
            id: "khinkali-mushroom",
            name: "Khinkali (Mushroom) — 6 pieces",
            price: 18,
            description: "Hand-twisted Georgian dumplings filled with earthy mushrooms and herbs in a flavorful broth.",
            dietaryInfo: ["Vegetarian"]
          },
          {
            id: "chebureki",
            name: "Chebureki — 2 pieces",
            price: 19,
            description: "Crispy fried pastries filled with seasoned ground beef and onions. Golden and flaky outside, juicy inside."
          }
        ]
      },
      {
        id: "cold-appetizers",
        title: "Cold Appetizers",
        items: [
          {
            id: "assorted-pickles",
            name: "Assorted Pickles",
            price: 15,
            description: "House-made pickled vegetables: cucumbers, tomatoes, cabbage, and peppers. A tangy, refreshing start to any meal.",
            dietaryInfo: ["Vegetarian", "Vegan"]
          },
          {
            id: "eggplant-rolls",
            name: "Eggplant Rolls with Walnut Paste",
            price: 17,
            description: "Tender grilled eggplant slices rolled with a rich walnut and herb paste. A Georgian favorite.",
            dietaryInfo: ["Vegetarian", "Vegan"]
          },
          {
            id: "liver-pate",
            name: "Liver Pâté",
            price: 17,
            description: "Smooth chicken liver pâté served with honey, sea salt, and crispy crostini."
          },
          {
            id: "layered-salmon-crepes",
            name: "Layered Salmon Crêpes",
            price: 19,
            description: "Thin crêpes layered with cream cheese, house-cured salmon, capers, and dill. Light and elegant."
          }
        ]
      }
    ]
  },
  {
    id: "salads",
    title: "Salads",
    description: "Fresh and traditional Eastern European salads",
    categories: [
      {
        id: "classic-salads",
        title: "Classic Salads",
        items: [
          {
            id: "olivier-classic",
            name: "Olivier Salad (Classic)",
            price: 17,
            description: "Traditional potato salad with peas, carrots, pickles, roasted chicken, and creamy mayonnaise."
          },
          {
            id: "olivier-crab",
            name: "Olivier Salad (with Crab)",
            price: 22,
            description: "Our classic potato salad elevated with tender crab meat instead of chicken."
          },
          {
            id: "herring-fur-coat",
            name: "Herring Under a Fur Coat",
            price: 17,
            description: "Layered salad with herring, potatoes, carrots, beets, eggs, and light mayonnaise. Colorful and delicious."
          },
          {
            id: "shopskiy-salad",
            name: "Shopskiy Salad",
            price: 17,
            description: "Fresh tomatoes, cucumbers, peppers, onions, and grated sirene cheese, lightly dressed with oil.",
            dietaryInfo: ["Vegetarian"]
          }
        ]
      }
    ]
  },
  {
    id: "soups",
    title: "Soups",
    description: "Hearty traditional soups",
    categories: [
      {
        id: "traditional-soups",
        title: "Traditional Soups",
        items: [
          {
            id: "borscht",
            name: "Borscht",
            price: 18,
            description: "Traditional beet soup with beef, vegetables, and sour cream. Served with rye bread and salo (cured pork fat).",
            image: "/images/food/borscht.jpg"
          },
          {
            id: "solyanka",
            name: "Solyanka",
            price: 18,
            description: "Hearty tomato-based soup with assorted cured meats, pickles, olives, and lemon. Served with sour cream and bread."
          },
          {
            id: "mushroom-soup",
            name: "Mushroom Soup",
            price: 16,
            description: "Creamy soup with mixed wild mushrooms, herbs, and a touch of cream. Comforting and earthy.",
            dietaryInfo: ["Vegetarian"]
          }
        ]
      }
    ]
  },
  {
    id: "mains",
    title: "Main Courses",
    description: "Hearty traditional main dishes",
    categories: [
      {
        id: "dumplings",
        title: "Dumplings",
        items: [
          {
            id: "handmade-pelmeni",
            name: "Handmade Pelmeni",
            price: 23,
            description: "Traditional dumplings filled with seasoned veal and pork, served with sour cream and butter."
          },
          {
            id: "vareniki-potato",
            name: "Handmade Vareniki (Potato)",
            price: 21,
            description: "Tender dumplings filled with seasoned potatoes, topped with creamy white mushrooms and onions.",
            dietaryInfo: ["Vegetarian"]
          },
          {
            id: "vareniki-cherry",
            name: "Vareniki with Cherry",
            price: 19,
            description: "Handmade dumplings filled with sweet cherries, gently boiled and finished with butter. Served with house-made berry sauce.",
            dietaryInfo: ["Vegetarian"]
          }
        ]
      },
      {
        id: "meat-poultry",
        title: "Meat & Poultry",
        items: [
          {
            id: "beef-stroganoff",
            name: "Beef Stroganoff",
            price: 29,
            description: "Tender beef strips in a rich sour cream sauce with mushrooms and onions. Served with your choice of buckwheat, potatoes, or pasta.",
            image: "/images/food/beef-stroganoff.jpg"
          },
          {
            id: "chicken-tabaka",
            name: "Chicken Tabaka",
            price: 27,
            description: "Whole young chicken flattened and pan-seared until golden and crispy. A Georgian classic."
          },
          {
            id: "lamb-shashlik",
            name: "Lamb Shashlik",
            price: 35,
            description: "Marinated lamb skewers grilled over open flame, served with grilled vegetables and lavash bread."
          }
        ]
      },
      {
        id: "seafood",
        title: "Seafood",
        items: [
          {
            id: "baked-salmon",
            name: "Baked Salmon",
            price: 33,
            description: "Fresh Atlantic salmon fillet baked with herbs and lemon, served with seasonal vegetables."
          },
          {
            id: "sturgeon-shashlik",
            name: "Sturgeon Shashlik",
            price: 38,
            description: "Premium sturgeon steaks marinated and grilled, served with herb butter and grilled vegetables."
          }
        ]
      }
    ]
  },
  {
    id: "sides",
    title: "Sides",
    description: "Traditional accompaniments",
    categories: [
      {
        id: "traditional-sides",
        title: "Traditional Sides",
        items: [
          {
            id: "baked-potatoes",
            name: "Baked Potatoes",
            price: 10,
            description: "Rustic oven-roasted potatoes with herbs and sea salt.",
            dietaryInfo: ["Vegetarian", "Vegan"]
          },
          {
            id: "buckwheat",
            name: "Buckwheat",
            price: 10,
            description: "Traditional buckwheat groats simmered in rich beef broth for deep, savory flavor."
          },
          {
            id: "draniki",
            name: "Draniki (Potato Pancakes)",
            price: 14,
            description: "Crispy potato pancakes served in a cast-iron pan with sour cream. Golden outside, tender inside.",
            dietaryInfo: ["Vegetarian"],
            addOns: [
              { name: "Smoked Salmon", price: 7 },
              { name: "Herring", price: 5 }
            ]
          },
          {
            id: "grilled-vegetables",
            name: "Grilled Vegetables",
            price: 12,
            description: "Seasonal vegetables grilled with herbs and olive oil.",
            dietaryInfo: ["Vegetarian", "Vegan"]
          }
        ]
      }
    ]
  },
  {
    id: "desserts-drinks",
    title: "Desserts & Drinks",
    description: "Sweet endings and signature beverages",
    categories: [
      {
        id: "housemade-desserts",
        title: "Housemade Desserts",
        items: [
          {
            id: "napoleon-cake",
            name: "Napoleon Cake",
            price: 13,
            description: "Delicate layers of flaky puff pastry with light, silky cream.",
            hasGradientBg: true
          },
          {
            id: "honey-cake",
            name: "Honey Cake (Medovik)",
            price: 13,
            description: "Soft honey sponge layered with smooth sweet cream.",
            image: "/images/food/honey-cake.jpg"
          },
          {
            id: "syrniki-dessert",
            name: "Syrniki",
            price: 18,
            description: "Golden farmer cheese pancakes, served with sour cream and jam.",
            hasGradientBg: true
          },
          {
            id: "cherry-vareniki-dessert",
            name: "Cherry Vareniki",
            price: 14,
            description: "Tender dumplings filled with sweet cherries, served with sour cream.",
            hasGradientBg: true
          },
          {
            id: "panna-cotta",
            name: "Panna Cotta",
            price: 12,
            description: "Silky vanilla cream dessert with a delicate, melt-in-your-mouth texture.",
            hasGradientBg: true
          },
          {
            id: "waffle-tube-condensed",
            name: "Waffle Tube with Condensed Milk",
            price: 12,
            description: "Crisp rolled wafer filled with rich, sweet condensed milk.",
            hasGradientBg: true
          },
          {
            id: "waffle-tube-cream",
            name: "Waffle Tube with Cream",
            price: 12,
            description: "Light and crisp waffle filled with smooth cream.",
            hasGradientBg: true
          }
        ]
      },
      {
        id: "signature-cocktails",
        title: "Signature Cocktails",
        items: [
          {
            id: "rosemary-peach-martini",
            name: "Rosemary Peach Martini",
            price: 15,
            description: "Fragrant and lightly sweet, with delicate herbal notes.",
            hasGradientBg: true
          },
          {
            id: "espresso-martini",
            name: "Espresso Martini",
            price: 16,
            description: "Bold and smooth, with rich coffee and a velvety finish.",
            hasGradientBg: true
          },
          {
            id: "pear-martini",
            name: "Pear Martini",
            price: 14,
            description: "Crisp and subtly sweet, with a fresh fruit aroma.",
            hasGradientBg: true
          }
        ]
      },
      {
        id: "house-infusions",
        title: "House Infusions",
        items: [
          {
            id: "blackcurrant-vodka",
            name: "Blackcurrant-Infused Vodka",
            price: 11,
            description: "Tart and slightly sweet, with a deep berry flavor.",
            hasGradientBg: true
          },
          {
            id: "cherry-cognac",
            name: "Cherry-Infused Cognac",
            price: 12,
            description: "Rich and smooth, with dark cherry and warm oak notes.",
            hasGradientBg: true
          }
        ]
      },
      {
        id: "liqueurs-spirits",
        title: "Liqueurs & Spirits",
        items: [
          {
            id: "grand-marnier",
            name: "Grand Marnier",
            price: 11,
            description: "Orange liqueur with cognac depth, smooth and citrusy.",
            hasGradientBg: true
          },
          {
            id: "disaronno-amaretto",
            name: "Disaronno Amaretto",
            price: 11,
            description: "Sweet almond liqueur with hints of vanilla and marzipan.",
            hasGradientBg: true
          },
          {
            id: "frangelico",
            name: "Frangelico",
            price: 10,
            description: "Hazelnut liqueur, nutty and lightly sweet.",
            hasGradientBg: true
          }
        ]
      }
    ]
  }
];
