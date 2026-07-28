import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://xoanenanh.io.vn/sitemap.xml",
    host: "https://xoanenanh.io.vn",
  };
}