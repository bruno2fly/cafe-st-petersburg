const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "../public/images/logo.png");
const outputPath = path.join(__dirname, "../public/images/logo.png");

async function removeBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixelCount = width * height;

  // Sample corner pixels to detect background color
  const corners = [
    0, // top-left
    (width - 1) * channels, // top-right
    (height - 1) * width * channels, // bottom-left
    (height * width - 1) * channels, // bottom-right
  ];
  let bgR = 0, bgG = 0, bgB = 0;
  for (const idx of corners) {
    bgR += data[idx];
    bgG += data[idx + 1];
    bgB += data[idx + 2];
  }
  bgR = Math.round(bgR / corners.length);
  bgG = Math.round(bgG / corners.length);
  bgB = Math.round(bgB / corners.length);

  // Tolerance for matching background (handles anti-aliasing, works for light or dark)
  const tolerance = 50;

  for (let i = 0; i < pixelCount; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const match =
      Math.abs(r - bgR) <= tolerance &&
      Math.abs(g - bgG) <= tolerance &&
      Math.abs(b - bgB) <= tolerance;

    if (match) {
      data[idx + 3] = 0; // transparent
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width, height, channels },
  })
    .png()
    .toFile(outputPath);

  console.log("Logo background removed. Saved to", outputPath);
}

removeBackground().catch(console.error);
