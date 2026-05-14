import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowLeft } from "lucide-react";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="container-page pt-16 md:pt-24">
        <Link
          href="/aktsiyi"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Усі публікації
        </Link>

        <header className="mx-auto mt-8 max-w-3xl space-y-5 text-center">
          <div className="flex items-center justify-center gap-3 text-xs text-[var(--color-fg-subtle)]">
            <span className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-2.5 py-1 text-[var(--color-fg-muted)]">
              {post.category}
            </span>
            <time>
              {new Date(post.date).toLocaleDateString("uk-UA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <h1 className="font-display text-3xl font-bold md:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--color-fg-muted)]">{post.excerpt}</p>
        </header>

        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-lg leading-relaxed text-[var(--color-fg-muted)]">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <div className="h-16 md:h-24" />
      <ContactCTA />
    </>
  );
}
