import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "GPTBot"],
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://polanaprzygody.pl/sitemap.xml",
    host: "https://polanaprzygody.pl",
  };
}
