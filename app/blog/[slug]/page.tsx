import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getRelatedPosts,
  posts,
} from "@/data/posts";
import { getServiceBySlug, servicePath } from "@/data/services";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import { blogPostJsonLd } from "@/lib/blog-json-ld";
import { createPageMetadata } from "@/lib/site";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article" };
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "laparoscopic surgery Gujrat", doctorKeyword(post)],
    type: "article",
    image: post.image.src,
    imageAlt: post.image.alt,
    publishedTime: post.date,
    modifiedTime: post.date,
  });
}

function doctorKeyword(post: (typeof posts)[number]) {
  return post.relatedServiceSlug?.replace(/-/g, " ") || "general surgery Pakistan";
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const relatedService = post.relatedServiceSlug
    ? getServiceBySlug(post.relatedServiceSlug)
    : undefined;

  return (
    <>
      <JsonLd data={blogPostJsonLd(post)} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label:
              post.title.length > 28
                ? `${post.title.slice(0, 28)}…`
                : post.title,
          },
        ]}
      />

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-card shadow-soft">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                title={post.image.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <p className="text-sm text-muted">
              {formatDate(post.date)} · {post.readTime}
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            {relatedService ? (
              <aside className="mt-10 rounded-card border border-teal-950/8 bg-cream/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  Related service
                </p>
                <h2 className="mt-2 font-serif text-2xl text-heading">
                  <Link
                    href={servicePath(relatedService.slug)}
                    className="hover:text-teal-800"
                  >
                    {relatedService.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {relatedService.tagline}
                </p>
                <Link
                  href={servicePath(relatedService.slug)}
                  className="mt-4 inline-flex text-sm font-semibold text-gold-dark hover:text-teal-950"
                >
                  View {relatedService.shortTitle} details →
                </Link>
              </aside>
            ) : null}

            <div className="mt-12 rounded-card bg-teal-hero p-8 text-cream">
              <h2 className="font-serif text-2xl text-cream">
                Discuss this with a surgeon
              </h2>
              <p className="mt-3 text-sm text-cream/75">
                Online articles cannot replace a clinical consultation. Book an
                appointment for advice specific to your health.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/book" variant="gold">
                  Book Appointment
                </Button>
                <Button href="/services" variant="outline" onDark>
                  View services
                </Button>
              </div>
            </div>

            {related.length ? (
              <div className="mt-14">
                <h2 className="font-serif text-2xl text-heading">
                  Related articles
                </h2>
                <ul className="mt-5 space-y-4">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="group block rounded-card border border-teal-950/8 bg-white/80 p-5 shadow-soft transition hover:border-gold/35"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                          {item.category}
                        </p>
                        <p className="mt-2 font-serif text-xl text-heading group-hover:text-teal-800">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted">
                  Browse all guides on the{" "}
                  <Link href="/blog" className="font-semibold text-gold-dark hover:text-teal-950">
                    patient education blog
                  </Link>
                  , or learn more{" "}
                  <Link href="/about" className="font-semibold text-gold-dark hover:text-teal-950">
                    about Dr. Khawar
                  </Link>
                  .
                </p>
              </div>
            ) : null}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
