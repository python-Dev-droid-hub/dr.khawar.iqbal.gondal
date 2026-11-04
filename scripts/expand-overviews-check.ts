import { overviewWordCount, serviceOverviews } from "../data/serviceOverviews";

for (const [slug, sections] of Object.entries(serviceOverviews)) {
  console.log(slug, overviewWordCount(sections));
}
