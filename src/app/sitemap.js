import { kanyakumariData } from "../data/kanyakumariData";
import { maduraiData } from "../data/maduraiData";
import { rameswaramData } from "../data/rameswaramData";
import { keralaData } from "../data/keralaData"; // ✅ Added Kerala data import

// 🌍 Detect environment (local vs production)
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.jpaholidays.in"
    : "http://localhost:3000";

export default async function sitemap() {
  // ✅ Static pages
  const staticRoutes = [
    "/home",
    "/about",
    "/contact",
    "/car-rental",
    "/location-tour",
    "/local-cabs",
    "/outstation-cabs",
    "/airport-transfer",
    "/self-drive",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // ✅ Dynamic routes for each destination
  const kanyakumariRoutes = Object.keys(kanyakumariData).map((key) => ({
    url: `${baseUrl}${kanyakumariData[key].url}`,
    lastModified: new Date(),
  }));

  const maduraiRoutes = Object.keys(maduraiData).map((key) => ({
    url: `${baseUrl}${maduraiData[key].url}`,
    lastModified: new Date(),
  }));

  const rameswaramRoutes = Object.keys(rameswaramData).map((key) => ({
    url: `${baseUrl}${rameswaramData[key].url}`,
    lastModified: new Date(),
  }));

  const keralaRoutes = Object.keys(keralaData).map((key) => ({ // ✅ Added Kerala routes
    url: `${baseUrl}${keralaData[key].url}`,
    lastModified: new Date(),
  }));

  // ✅ Combine all
  const allRoutes = [
    ...staticRoutes,
    ...kanyakumariRoutes,
    ...maduraiRoutes,
    ...rameswaramRoutes,
    ...keralaRoutes, // ✅ Added Kerala routes to the combined array
  ];

  if (process.env.NODE_ENV !== "production") {
    console.log(
      "🗺️ Sitemap URLs:",
      allRoutes.map((r) => r.url)
    );
  }

  return allRoutes;
}