import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";

export default function PatientEducation() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Patient Education"
            title="Guides for clearer decisions"
            description="Practical articles on recovery, hernia warning signs, and minimally invasive surgery."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={0.05 * index}>
              <article className="interactive-card flex h-full flex-col overflow-hidden rounded-card border border-teal-950/5 bg-white/80 shadow-soft">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="gold">{post.category}</Badge>
                  <h3 className="mt-4 font-serif text-2xl text-heading">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-teal-800"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-xs text-muted">{post.readTime}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-gold-dark hover:text-teal-950"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
