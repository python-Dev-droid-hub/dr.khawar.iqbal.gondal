import { services, type Service } from "../data/services";

function wordsFrom(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(wordsFrom).join(" ");
  if (typeof value === "object") {
    return Object.values(value as object).map(wordsFrom).join(" ");
  }
  return "";
}

function countWords(service: Service) {
  const text = wordsFrom(service).replace(/\s+/g, " ").trim();
  return text ? text.split(" ").length : 0;
}

for (const service of services) {
  const n = countWords(service);
  const status = n >= 1800 ? "OK" : "BELOW 1800";
  console.log(`${service.slug}\t${n}\t${status}`);
}
