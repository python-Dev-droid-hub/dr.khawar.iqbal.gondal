import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import { formatDate } from "@/lib/utils";

import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Patient Education Blog — Surgery & Recovery Guides",
  description:
    "Guides on gallbladder surgery recovery, hernia warning signs, and minimally invasive surgery for patients in Gujrat and Mandi Bahauddin.",
  path: "/blog",
  keywords: ["gallbladder surgery recovery", "hernia symptoms Pakistan"],
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Health insights"
        description="Practical guidance on surgery, recovery, and when to seek specialist care."
        image={pageBanners.blog}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="section-padding">
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={0.05 * index}>
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-teal-950/5 bg-white/80 shadow-soft">
                <Link href={`/blog/${post.slug}`} className="relative block h-48">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    {post.category}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl text-heading">
                    <Link href={`/blog/${post.slug}`} className="hover:text-teal-800">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 text-xs text-muted">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
