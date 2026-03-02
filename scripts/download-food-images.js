#!/usr/bin/env node
/**
 * Download food images from Google Drive folder
 * Run: node scripts/download-food-images.js
 *
 * First, ensure the folder is shared: https://drive.google.com/drive/folders/1u-wzW_cRzEa_cCNk2EVoZ5sSw3ixcVAz
 * Install: npm install gdown
 * Then run this script.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FOLDER_ID = '1u-wzW_cRzEa_cCNk2EVoZ5sSw3ixcVAz';
const OUTPUT_DIR = path.join(__dirname, '../public/images/food');

// Map of our simplified names to Drive file patterns (first file of each dish)
const IMAGE_MAP = {
  'beef-stroganoff': 'Cafe St. Petersburg_beef stroganoff_01092025_001.jpg',
  'blini-red-caviar': 'Cafe St. Petersburg_Blini with red caviar_01092025_004.jpg',
  'borscht': 'Cafe St. Petersburg_borscht_01092025_007.jpg',
  'burrata-salad': 'Cafe St. Petersburg_burrata salad_01092025_010.jpg',
  'caesar-chicken': 'Cafe St. Petersburg_Caesar with chicken_01092025_013.jpg',
  'chicken-kiev': 'Cafe St. Petersburg_chicken kiev_01092025_016.jpg',
  'chicken-liver-pate': 'Cafe St. Petersburg_chicken liver pate_01092025_019.jpg',
  'herring-fur-coat': 'Cafe St. Petersburg_herring under a fur coat_01092025_026.jpg',
  'honey-cake': 'Cafe St. Petersburg_honey cake_01092025_028.jpg',
  'meat-platter': 'Cafe St. Petersburg_meat platter_01092025_031.jpg',
  'mushroom-vareniki': 'Cafe St. Petersburg_mushroom vareniki_01092025_034.jpg',
  'olivier-salad': 'Cafe St. Petersburg_olivier salad_01092025_038.jpg',
  'pazharsky-cutlet': 'Cafe St. Petersburg_pazharsky cutlet_01092025_042.jpg',
  'hero': 'Cafe St. Petersburg_hero_01092025_022.jpg',
  'interior': 'Cafe St. Petersburg_Interior_01092025_054.jpg',
};

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('Downloading from Google Drive...');
  try {
    execSync(
      `npx gdown --folder "https://drive.google.com/drive/folders/${FOLDER_ID}" -O "${OUTPUT_DIR}" --remaining-ok`,
      { stdio: 'inherit' }
    );
    console.log('Download complete. Renaming files...');
    const files = fs.readdirSync(OUTPUT_DIR);
    for (const [shortName, driveName] of Object.entries(IMAGE_MAP)) {
      const found = files.find((f) => f.startsWith(driveName.split('_01092025')[0]));
      if (found) {
        const ext = path.extname(found);
        fs.renameSync(
          path.join(OUTPUT_DIR, found),
          path.join(OUTPUT_DIR, `${shortName}${ext}`)
        );
        console.log(`  ${found} -> ${shortName}${ext}`);
      }
    }
    console.log('Done!');
  } catch (e) {
    console.error('Download failed. Please manually download from:');
    console.error(`https://drive.google.com/drive/folders/${FOLDER_ID}`);
    console.error('Place images in public/images/food/ and rename per IMAGE_MAP in this script.');
  }
}

main();
