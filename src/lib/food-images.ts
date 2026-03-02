/**
 * Maps menu items to food images from Google Drive folder:
 * https://drive.google.com/drive/folders/1u-wzW_cRzEa_cCNk2EVoZ5sSw3ixcVAz
 *
 * Download the folder and place images in public/images/food/
 * with these exact filenames (or use the simplified names after running the rename script).
 */

export const foodImageMap: Record<string, string> = {
  "Alaska Finest Red Caviar 56g/2oz": "/images/food/blini-red-caviar.jpg",
  "Roe Acipenser Black Caviar 56g/2oz": "/images/food/blini-red-caviar.jpg",
  "Beef Stroganoff": "/images/food/beef-stroganoff.jpg",
  "Classic Borscht": "/images/food/borscht.jpg",
  "Chicken Liver Pate": "/images/food/chicken-liver-pate.jpg",
  "Meat Platter": "/images/food/meat-platter.jpg",
  "Burrata with Truffle": "/images/food/burrata-salad.jpg",
  "Caesar Salad": "/images/food/caesar-chicken.jpg",
  "Herring Under a Fur Coat": "/images/food/herring-fur-coat.jpg",
  "Olivier Salad (Classic)": "/images/food/olivier-salad.jpg",
  "Chicken Kiev": "/images/food/chicken-kiev.jpg",
  "Handmade Vareniki": "/images/food/mushroom-vareniki.jpg",
  "Pozharsky Cutlet": "/images/food/pazharsky-cutlet.jpg",
  "Honey Cake (Medovik)": "/images/food/honey-cake.jpg",
};

export const heroImage = "/images/food/hero.jpg";
export const interiorImage = "/images/food/interior.jpg";

export function getFoodImage(itemName: string): string | undefined {
  return foodImageMap[itemName];
}
