const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const inputPath = path.join(__dirname, "../public/images/our-story.jpg");
const tempPath = path.join(__dirname, "../public/images/our-story-temp.jpg");

async function compress() {
  await sharp(inputPath)
    .resize(1920, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tempPath);
  fs.renameSync(tempPath, inputPath);
  console.log("Compressed our-story.jpg");
}

compress().catch(console.error);
