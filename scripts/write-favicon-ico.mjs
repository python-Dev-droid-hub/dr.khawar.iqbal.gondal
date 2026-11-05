import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Embed PNG(s) into a Vista+ .ico container. */
function pngBuffersToIco(pngBuffers) {
  const count = pngBuffers.length;
  let offset = 6 + count * 16;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  for (const png of pngBuffers) {
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);
    const entry = Buffer.alloc(16);
    entry[0] = width >= 256 ? 0 : width;
    entry[1] = height >= 256 ? 0 : height;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += png.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

// Prefer already-generated circular logo assets
const candidates = [
  path.join(root, "public/images/logo-icon.png"),
  path.join(root, "app/icon.png"),
  path.join(root, "public/icon.png"),
];

const source = candidates.find((p) => fs.existsSync(p));
if (!source) {
  console.error("No circular logo PNG found");
  process.exit(1);
}

const png = fs.readFileSync(source);
// Single high-res PNG-in-ICO works in modern Chromium/Firefox/Safari
const ico = pngBuffersToIco([png]);

fs.writeFileSync(path.join(root, "app/favicon.ico"), ico);
fs.writeFileSync(path.join(root, "public/favicon.ico"), ico);

// Also keep a small PNG shortcut if a 48px asset exists; otherwise reuse source
const smallSrc = path.join(root, "public/favicon.png");
if (!fs.existsSync(smallSrc)) {
  fs.copyFileSync(source, smallSrc);
}

console.log("Replaced favicon.ico with circular logo from", path.relative(root, source));
console.log("ICO bytes:", ico.length);
