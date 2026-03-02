# Food Images Setup

The site uses food photography from the [Cafe St. Petersburg Google Drive folder](https://drive.google.com/drive/folders/1u-wzW_cRzEa_cCNk2EVoZ5sSw3ixcVAz).

## How to Add the Images

1. **Download the folder** from Google Drive:
   - Open https://drive.google.com/drive/folders/1u-wzW_cRzEa_cCNk2EVoZ5sSw3ixcVAz
   - Select all files (Ctrl+A or Cmd+A)
   - Right-click → Download
   - Extract the zip file

2. **Place images in the project**:
   - Copy all image files into `public/images/food/`

3. **Rename the files** (run from project root):
   ```bash
   node scripts/rename-food-images.js
   ```
   This renames files to simplified names (e.g., `beef-stroganoff.jpg`, `borscht.jpg`).

## Image Mapping

| Menu Item | Image File |
|-----------|------------|
| Beef Stroganoff | beef-stroganoff.jpg |
| Blini with Red Caviar | blini-red-caviar.jpg |
| Borscht | borscht.jpg |
| Burrata Salad | burrata-salad.jpg |
| Caesar with Chicken | caesar-chicken.jpg |
| Chicken Kiev | chicken-kiev.jpg |
| Chicken Liver Pate | chicken-liver-pate.jpg |
| Herring Under a Fur Coat | herring-fur-coat.jpg |
| Honey Cake | honey-cake.jpg |
| Meat Platter | meat-platter.jpg |
| Mushroom Vareniki | mushroom-vareniki.jpg |
| Olivier Salad | olivier-salad.jpg |
| Pozharsky Cutlet | pazharsky-cutlet.jpg |
| Hero (banner) | hero.jpg |
| Interior | interior.jpg |

Until the images are added, the site will show Unsplash placeholder images as fallbacks.
