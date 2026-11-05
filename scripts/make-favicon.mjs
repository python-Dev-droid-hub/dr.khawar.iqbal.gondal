import sharp from "sharp";
import fs from "fs";

const src = "public/images/logo.png";
const meta = await sharp(src).metadata();
const height = meta.height ?? 343;
const width = meta.width ?? 926;

// Manual crop tuned to the circular emblem only (no wordmark).
// Logo is 926x343; emblem fills ~left 310px and nearly full height.
const side = 292;
const left = 6;
const top = Math.max(0, Math.floor((height - side) / 2));

console.log({ width, height, left, top, side });

const extracted = await sharp(src)
  .extract({ left, top, width: side, height: side })
  .png()
  .toBuffer();

await sharp(extracted).toFile("public/images/logo-icon-preview.png");

function circleSvg(s) {
  return Buffer.from(
    `<svg width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg"><circle cx="${s / 2}" cy="${s / 2}" r="${s / 2}" fill="#fff"/></svg>`,
  );
}

async function makeIcon(outPath, s) {
  const resized = await sharp(extracted)
    .resize(s, s, { fit: "cover" })
    .png()
    .toBuffer();

  await sharp(resized)
    .composite([{ input: circleSvg(s), blend: "dest-in" }])
    .png()
    .toFile(outPath);
}

await makeIcon("app/icon.png", 512);
await makeIcon("app/apple-icon.png", 180);
await makeIcon("public/images/logo-icon.png", 512);
await sharp("app/icon.png").resize(48, 48).png().toFile("public/favicon.png");

// Keep a clean copy for reuse
await sharp(extracted)
  .resize(512, 512)
  .toFile("public/images/logo-icon-square.png");

console.log("done", {
  icon: fs.statSync("app/icon.png").size,
  apple: fs.statSync("app/apple-icon.png").size,
});
