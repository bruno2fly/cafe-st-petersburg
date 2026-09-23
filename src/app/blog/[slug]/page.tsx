import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data";
import { siteData } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seoTitle ?? `${post.title} | ${siteData.name}`,
    description: post.seoDescription ?? post.excerpt,
    robots: { index: false, follow: false },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#2C1810]/80 transition hover:text-[#3B5323]"
      >
        ← Back to Blog
      </Link>

      <article>
        <p className="text-sm font-medium text-[#C4A35A]">{post.date}</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
          {post.title}
        </h1>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#2C1810]/90">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#2C1810]/10 bg-[#F5F0E8] p-6 text-center">
          <p className="font-serif text-xl font-semibold text-[#2C1810]">
            Visit Cafe St. Petersburg
          </p>
          <p className="mt-2 text-[#2C1810]/85">{siteData.address}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-[#3B5323] px-6 py-3 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Book a Table
            </a>
            <Link
              href="/menu"
              className="inline-flex rounded-md border border-[#3B5323] px-6 py-3 font-semibold text-[#3B5323] transition hover:bg-[#3B5323]/10"
            >
              View Menu
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
