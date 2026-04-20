/**
 * Maps menu items to food images from the professional photo shoot.
 * Photos are in public/images/food/ directory.
 * Updated April 2026 — full menu coverage.
 */

export const foodImageMap: Record<string, string> = {
  // APPETIZERS
  "Layered Salmon Crepes": "/images/food/savory-blini-salmon.jpg",
  "Layered Salmon Crêpes": "/images/food/savory-blini-salmon.jpg",
  "Traditional Hand Pies (Pirozhki)": "/images/food/pirozhki-meat.jpg",
  "Boyar-Style Hand Pie with Oxtail": "/images/food/pirozhki-meat.jpg",
  "Pickled Vegetable Starter": "/images/food/pickled-veg-trio.jpg",
  "Herring Spread (Farshmak)": "/images/food/herring-potatoes.jpg",
  "Chicken Liver Pâté": "/images/food/chicken-liver-pate.jpg",
  "Chicken Liver Pate": "/images/food/chicken-liver-pate.jpg",
  "Kholodets (Studen)": "/images/food/Cafe St. Petersburg_pickled zakuska_01092025_048.jpg",
  "Herring with Potatoes & Onions": "/images/food/herring-potatoes.jpg",
  "Salo Platter": "/images/food/Cafe St. Petersburg_pickled zakuska_01092025_050.jpg",
  "Meat Platter": "/images/food/meat-platter.jpg",
  "Cured Fish Platter": "/images/food/fish-platter-pan.jpg",
  "Alaska Finest Red Caviar — 2 oz (56g)": "/images/food/blini-red-caviar.jpg",
  "Alaska Finest Red Caviar 56g/2oz": "/images/food/blini-red-caviar.jpg",
  "Roe Acipenser Black Caviar — 2 oz (56g)": "/images/food/blackcaviar.png",
  "Roe Acipenser Black Caviar 56g/2oz": "/images/food/blackcaviar.png",
  "Add Blini": "/images/food/blini-red-caviar.jpg",

  // SALADS
  "Vinegret": "/images/food/beet-cream-eggplant.jpg",
  "Classic Garden Salad": "/images/food/pickled-veg-trio.jpg",
  "Caesar Salad": "/images/food/caesar-chicken.jpg",
  "Olivier Salad (Classic)": "/images/food/olivier-salad.jpg",
  "Herring Under a Fur Coat": "/images/food/herring-fur-coat.jpg",
  "Burrata with Truffle": "/images/food/burrata-salad.jpg",

  // SOUPS
  "Classic Borscht": "/images/food/borscht.jpg",
  "Mushroom Cream Soup": "/images/food/04-mushroom-cream-soup.jpg",
  "Solyanka": "/images/food/solyanka.jpg",
  "Tsar's Fish Soup": "/images/food/ukha-fish-soup.jpg",

  // MAIN COURSES
  "Handmade Vareniki": "/images/food/mushroom-vareniki.jpg",
  "Handmade Pelmeni": "/images/food/01-pelmeni.jpg",
  "Stuffed Cabbage Rolls | Golubtsy": "/images/food/golubtsy-stuffed-cabbage.jpg",
  "Carp Cutlets": "/images/food/carp-cutlets.jpg",
  "Beef Stroganoff": "/images/food/beef-stroganoff.jpg",
  "Chicken Kiev": "/images/food/chicken-kiev.jpg",
  "Pozharsky Cutlet": "/images/food/pazharsky-cutlet.jpg",
  "Chicken Tabaka": "/images/food/chicken-tabaka.jpg",
  "Baked Salmon": "/images/food/salmon-provencal-pan.jpg",
  "Braised Oxtail": "/images/food/meat-platter.jpg",
  "Duck Leg Confit": "/images/food/meat-platter.jpg",
  "Royal Sturgeon": "/images/food/fish-platter-pan.jpg",
  "Rack of Lamb": "/images/food/meat-platter.jpg",
  "Ribeye Steak": "/images/food/meat-platter.jpg",

  // DESSERTS (using existing dessert images)
  "Honey Cake (Medovik)": "/images/food/honey-cake.jpg",
  "Syrniki (Cheese Pancakes)": "/images/food/Cafe St. Petersburg_syrniki_01092025_070.jpg",
  "Chocolate Dessert": "/images/food/chocolate-tuile-dessert.jpg",
  "Poached Pear": "/images/food/poached-pear-dessert.jpg",
};

export const heroImage = "/images/food/hero.jpg";
export const interiorImage = "/images/food/interior.jpg";

export function getFoodImage(itemName: string): string | undefined {
  return foodImageMap[itemName];
}
