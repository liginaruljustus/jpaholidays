import { Metadata } from "next";
import path from "path";
import fs from "fs/promises";
import DestinationPageClient from "./DestinationPageClient";

type FAQ = {
  title: string;
  content: string;
};

type Destination = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  images: string[];
  mapEmbed: string;
  faq?: FAQ[];
  meta_title?: string;
  meta_description?: string;
  canonical?: string;
  robots?: string;
};

// ✅ Metadata must await params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ url: string }>;
}): Promise<Metadata> {
  const { url: slug } = await params; // ✅ must await

  const filePath = path.join(process.cwd(), "src", "data", "data.json");
  const jsonData = JSON.parse(await fs.readFile(filePath, "utf-8"));

  const destination: Destination | null = jsonData[slug] || null;

  if (!destination) {
    return {
      title: "Destination Not Found",
      description: "The requested destination does not exist or has been moved.",
      alternates: {
        canonical: "https://www.example.com/destinations",
      },
      robots: "noindex, nofollow",
    };
  }

  return {
    title: destination.meta_title || destination.title,
    description:
      destination.meta_description ||
      `Explore ${destination.title} and plan your journey with us.`,
    alternates: {
      canonical: destination.canonical,
    },
    robots: destination.robots || "index, follow",
  };
}

// ✅ Page must also await params
export default async function Page({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;

  return <DestinationPageClient />;
}
