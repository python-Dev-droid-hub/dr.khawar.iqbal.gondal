import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
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
    keywords: [post.category, "laparoscopic surgery Gujrat"],
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title.length > 28 ? `${post.title.slice(0, 28)}…` : post.title },
        ]}
      />

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-card shadow-soft">
              <Image
                src={post.image.src}
                alt={post.image.alt}
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
            <div className="mt-12 rounded-card bg-teal-hero p-8 text-cream">
              <h2 className="font-serif text-2xl text-cream">
                Discuss this with a surgeon
              </h2>
              <p className="mt-3 text-sm text-cream/75">
                Online articles cannot replace a clinical consultation. Book an
                appointment for advice specific to your health.
              </p>
              <Button href="/book" variant="gold" className="mt-6">
                Book Appointment
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
