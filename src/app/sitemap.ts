import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/taryfy",
    "/pokryttia",
    "/aktsiyi",
    "/pro-nas",
    "/kontakty",
    "/dokumenty",
  ];
  const now = new Date();
  const base = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const postUrls = posts.map((p) => ({
    url: `${site.url}/aktsiyi/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...base, ...postUrls];
}
