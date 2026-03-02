#!/usr/bin/env node
/**
 * Rename downloaded food images from Google Drive to simplified names.
 * 
 * 1. Download folder from: https://drive.google.com/drive/folders/1u-wzW_cRzEa_cCNk2EVoZ5sSw3ixcVAz
 * 2. Extract to public/images/food/
 * 3. Run: node scripts/rename-food-images.js
 */

const fs = require('fs');
const path = require('path');

const FOOD_DIR = path.join(__dirname, '../public/images/food');

const RENAME_MAP = [
  [/beef stroganoff.*001/, 'beef-stroganoff.jpg'],
  [/Blini with red caviar.*004/, 'blini-red-caviar.jpg'],
  [/borscht.*007/, 'borscht.jpg'],
  [/burrata salad.*010/, 'burrata-salad.jpg'],
  [/Caesar with chicken.*013/, 'caesar-chicken.jpg'],
  [/chicken kiev.*016/, 'chicken-kiev.jpg'],
  [/chicken liver pate.*019/, 'chicken-liver-pate.jpg'],
  [/herring under a fur coat.*026/, 'herring-fur-coat.jpg'],
  [/honey cake.*028/, 'honey-cake.jpg'],
  [/meat platter.*031/, 'meat-platter.jpg'],
  [/mushroom vareniki.*034/, 'mushroom-vareniki.jpg'],
  [/olivier salad.*038/, 'olivier-salad.jpg'],
  [/pazharsky cutlet.*042/, 'pazharsky-cutlet.jpg'],
  [/hero.*022/, 'hero.jpg'],
  [/Interior.*054/, 'interior.jpg'],
];

if (!fs.existsSync(FOOD_DIR)) {
  console.error('Run this from project root. Create public/images/food/ and add downloaded images first.');
  process.exit(1);
}

const files = fs.readdirSync(FOOD_DIR);
let renamed = 0;

for (const [pattern, newName] of RENAME_MAP) {
  const regex = new RegExp(pattern, 'i');
  const found = files.find((f) => regex.test(f));
  if (found) {
    const oldPath = path.join(FOOD_DIR, found);
    const newPath = path.join(FOOD_DIR, newName);
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`${found} -> ${newName}`);
      renamed++;
    }
  }
}

console.log(`Renamed ${renamed} files.`);
