import { Metadata } from "next";
import path from "path";
import fs from "fs/promises";
import BreadCumb from "../../../../Components/Common/BreadCumb";
import DestinationDetails from "./DestinationPageClient";

type FAQ = { title: string; content: string };

type InnerPage = {
  header: string;
  tage: string;
  img: string;
  description: string;
  faq?: FAQ[];
};

type TourItem = {
  img: string;
  location: string;
  title: string;
  rating: string;
  day: string;
  number: string;
  price: string;
  url: string;
  innerpage?: InnerPage;
};

type DestinationData = Record<string, TourItem[]>;

// Route params
interface PageParams {
  url: string;
  pageUrl: string;
}

// ✅ Metadata generation for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { url: firstSlug, pageUrl: lastSlug } = await params;

  const filePath = path.join(process.cwd(), "src", "data", "family.json");
  const jsonData: DestinationData = JSON.parse(await fs.readFile(filePath, "utf-8"));

  const category = jsonData[firstSlug];
  const matchedTour = category?.find((item) => item.url.endsWith(lastSlug));

  if (!matchedTour || !matchedTour.innerpage) {
    return {
      title: "Tour Not Found",
      description: "The requested tour does not exist or has been moved.",
      alternates: { canonical: "https://www.jpaholidays.in/tour-packages" },
      robots: "noindex, nofollow",
    };
  }

  const destination = matchedTour.innerpage;

  return {
    title: destination.header,
    description: destination.description.slice(0, 160), // first 160 chars for SEO
    alternates: { canonical: `https://www.jpaholidays.in/tour-packages/${firstSlug}/${lastSlug}` },
    robots: "index, follow",
  };
}

// ✅ Page component
export default async function Page({ params }: { params: Promise<PageParams> }) {
  const { url: firstSlug, pageUrl: lastSlug } = await params;

  const filePath = path.join(process.cwd(), "src", "data", "family.json");
  const jsonData: DestinationData = JSON.parse(await fs.readFile(filePath, "utf-8"));

  const category = jsonData[firstSlug];
  if (!Array.isArray(category)) {
    return <p>{`Category "${firstSlug}" not found in JSON.`}</p>;
  }

  const matchedTour = category.find((item) => item.url.endsWith(lastSlug));
  if (!matchedTour) {
    return <p>{`Tour "${lastSlug}" not found in category "${firstSlug}".`}</p>;
  }

  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title={matchedTour.innerpage?.header ?? matchedTour.title}
      />
      {matchedTour.innerpage && <DestinationDetails innerpage={matchedTour.innerpage} />}
    </>
  );
}
