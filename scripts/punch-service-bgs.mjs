import fs from "fs";
import path from "path";
import { PNG } from "pngjs";
import jpeg from "jpeg-js";

const dir = path.resolve("public/images/services");
const files = [
  "gallbladder.jpg",
  "hernia.jpg",
  "appendix.jpg",
  "digestive.jpg",
  "general.jpg",
];

function punch(data, width, height) {
  const idx = (x, y) => (y * width + x) * 4;
  const samples = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [4, 4],
    [width - 5, 4],
    [Math.floor(width / 2), 2],
  ];

  let r = 0;
  let g = 0;
  let b = 0;
  for (const [x, y] of samples) {
    const i = idx(x, y);
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }
  r /= samples.length;
  g /= samples.length;
  b /= samples.length;

  const thresh = 42;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = idx(x, y);
      const dr = Math.abs(data[i] - r);
      const dg = Math.abs(data[i + 1] - g);
      const db = Math.abs(data[i + 2] - b);
      const dist = (dr + dg + db) / (thresh * 3);
      if (dist < 1) {
        data[i + 3] = Math.min(data[i + 3], Math.round(dist * dist * 255));
      }
    }
  }

  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[idx(x, y) + 3] > 16) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 10;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(height - 1, maxY + pad);

  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;
  const out = new PNG({ width: cw, height: ch });
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const si = idx(minX + x, minY + y);
      const di = (y * cw + x) * 4;
      out.data[di] = data[si];
      out.data[di + 1] = data[si + 1];
      out.data[di + 2] = data[si + 2];
      out.data[di + 3] = data[si + 3];
    }
  }
  return out;
}

for (const file of files) {
  const buf = fs.readFileSync(path.join(dir, file));
  const decoded = jpeg.decode(buf, { useTArray: true });
  const rgba = Buffer.from(decoded.data);
  const out = punch(rgba, decoded.width, decoded.height);
  const name = file.replace(".jpg", ".png");
  fs.writeFileSync(path.join(dir, name), PNG.sync.write(out));
  console.log("wrote", name, `${out.width}x${out.height}`);
}
