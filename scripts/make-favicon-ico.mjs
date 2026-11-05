import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public/images/logo-icon.png");
const appIcon = path.join(root, "app/icon.png");

const source = fs.existsSync(src)
  ? src
  : fs.existsSync(appIcon)
    ? appIcon
    : null;

if (!source) {
  console.error("No logo icon found. Run scripts/make-favicon.mjs first.");
  process.exit(1);
}

/** Build a Vista+ ICO that embeds PNG payloads (no extra deps). */
function pngBuffersToIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // icon
  header.writeUInt16LE(count, 4);

  const entries = [];
  for (const png of pngBuffers) {
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);
    const entry = Buffer.alloc(16);
    entry[0] = width >= 256 ? 0 : width;
    entry[1] = height >= 256 ? 0 : height;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += png.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

const sizes = [16, 32, 48];
const pngBuffers = [];

for (const size of sizes) {
  const buf = await sharp(source)
    .resize(size, size, { fit: "cover", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  pngBuffers.push(buf);
}

const ico = pngBuffersToIco(pngBuffers);
fs.writeFileSync(path.join(root, "app/favicon.ico"), ico);
fs.writeFileSync(path.join(root, "public/favicon.ico"), ico);
await sharp(source).resize(48, 48).png().toFile(path.join(root, "public/favicon.png"));

// Ensure app/icon.png matches the circular logo (Next metadata file convention)
await sharp(source).resize(512, 512).png().toFile(path.join(root, "app/icon.png"));
await sharp(source).resize(180, 180).png().toFile(path.join(root, "app/apple-icon.png"));
await sharp(source).resize(512, 512).png().toFile(path.join(root, "public/icon.png"));
await sharp(source).resize(180, 180).png().toFile(path.join(root, "public/apple-icon.png"));

console.log("Updated favicon.ico + icon files", ico.length, "bytes");
