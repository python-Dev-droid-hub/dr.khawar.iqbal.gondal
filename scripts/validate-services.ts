import {
  overviewWordCount,
  services,
  type Service,
} from "../data/services";

const MIN = {
  symptoms: 6,
  procedureSteps: 6,
  benefits: 6,
  recovery: 4,
  faqs: 8,
} as const;

const MIN_OVERVIEW_WORDS = 900;

type CountKey = keyof typeof MIN;

function countErrors(service: Service) {
  const errors: string[] = [];

  (Object.keys(MIN) as CountKey[]).forEach((key) => {
    const count = service[key].length;
    const min = MIN[key];
    if (count < min) {
      errors.push(`${key}: has ${count}, needs ≥ ${min}`);
    }
  });

  const overviewWords = overviewWordCount(service.overviewSections);
  if (overviewWords < MIN_OVERVIEW_WORDS) {
    errors.push(
      `overviewSections: ~${overviewWords} words, needs ≥ ${MIN_OVERVIEW_WORDS}`,
    );
  }

  if (!service.overviewSections.length) {
    errors.push("overviewSections: missing subheaded description");
  } else if (service.overviewSections.some((section) => !section.heading)) {
    errors.push("overviewSections: every block needs a subheading");
  }

  return errors;
}

function main() {
  const failures: string[] = [];

  for (const service of services) {
    const errors = countErrors(service);
    if (errors.length) {
      failures.push(`• ${service.slug}\n  - ${errors.join("\n  - ")}`);
    }
  }

  if (failures.length) {
    console.error("Service validation failed:\n");
    console.error(failures.join("\n\n"));
    console.error(
      `\nMinimums: symptoms ≥ ${MIN.symptoms}, procedureSteps ≥ ${MIN.procedureSteps}, benefits ≥ ${MIN.benefits}, recovery ≥ ${MIN.recovery}, faqs ≥ ${MIN.faqs}`,
    );
    process.exit(1);
  }

  console.log(`Validated ${services.length} services — all minimum counts met.`);
}

main();
