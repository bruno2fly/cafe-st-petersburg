import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata = {
  title: "Blog",
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-bold text-[#2C1810]">
        From Our Kitchen
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[#2C1810]/80">
        Stories, traditions, and behind-the-scenes notes from Cafe St.
        Petersburg in Newton Centre, MA.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-white shadow-md transition hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-[#C4A35A]">{post.date}</p>
              <h2 className="mt-2 font-serif text-xl font-semibold text-[#2C1810]">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-[#2C1810]/80">{post.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[#3B5323]">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
