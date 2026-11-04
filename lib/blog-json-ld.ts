import type { BlogPost } from "@/data/posts";
import { posts } from "@/data/posts";
import { doctor } from "@/data/doctor";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

const ORGANIZATION_ID = absoluteUrl("/#organization");
const PHYSICIAN_ID = absoluteUrl("/about#physician");

export function blogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": absoluteUrl("/blog#blog"),
        name: "Patient Education Blog",
        description:
          "Guides on gallbladder surgery recovery, hernia warning signs, and minimally invasive surgery.",
        url: absoluteUrl("/blog"),
        publisher: { "@id": ORGANIZATION_ID },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": absoluteUrl(`/blog/${post.slug}#article`),
          headline: post.title,
          url: absoluteUrl(`/blog/${post.slug}`),
          datePublished: post.date,
          image: post.image.src.startsWith("http")
            ? post.image.src
            : absoluteUrl(post.image.src),
        })),
      },
      breadcrumbJsonLd(
        [
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ],
        "/blog",
      ),
    ],
  };
}

export function blogPostJsonLd(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const image = post.image.src.startsWith("http")
    ? post.image.src
    : absoluteUrl(post.image.src);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: {
          "@type": "ImageObject",
          url: image,
          caption: post.image.alt,
          name: post.image.title || post.image.alt,
        },
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          "@id": PHYSICIAN_ID,
          name: doctor.name,
          url: absoluteUrl("/about"),
        },
        publisher: {
          "@type": "MedicalOrganization",
          "@id": ORGANIZATION_ID,
          name: `${doctor.name} — Laparoscopy & Surgical Centre`,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl("/images/logo-on-dark.png"),
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
        },
        articleSection: post.category,
        wordCount: post.content.join(" ").split(/\s+/).length,
        inLanguage: "en-PK",
        isAccessibleForFree: true,
        about: post.relatedServiceSlug
          ? {
              "@type": "MedicalProcedure",
              name: post.relatedServiceSlug,
              url: absoluteUrl(`/${post.relatedServiceSlug}`),
            }
          : { "@id": PHYSICIAN_ID },
      },
      breadcrumbJsonLd(
        [
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ],
        `/blog/${post.slug}`,
      ),
    ],
  };
}
