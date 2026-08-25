import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://polanaprzygody.pl";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/poznaj-nas`,
      lastModified: new Date("2026-02-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeria-zdjec`,
      lastModified: new Date("2026-02-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cennik`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terapeuci`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/umow-sie`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: new Date("2025-12-07"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/regulamin-swiadczenia-uslug`,
      lastModified: new Date("2026-01-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/logopedia`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/integracja-sensoryczna`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/psycholog-dzieciecy`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/trening-umiejetnosci-spolecznych`,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
