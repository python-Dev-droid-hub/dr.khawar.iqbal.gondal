import { permanentRedirect } from "next/navigation";
import { getServiceBySlug, servicePath, services } from "@/data/services";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/** Old `/services/[slug]` URLs permanently redirect to root `/[slug]`. */
export default function LegacyServiceDetailRedirect({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (service) permanentRedirect(servicePath(service.slug));
  permanentRedirect("/services");
}
