"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import DestinationDetails from "../../../Components/MainDestination/DestinationDetails";
import Faq1 from "../../../Components/DestinationFAQ/Faq1";

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

export default function DestinationPageClient() {
  const params = useParams();
  const slug = Array.isArray(params.url) ? params.url[0] : params.url; // ✅ ensure string

  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await fetch("/data/madurai.json"); // ✅ file must be in /public/data/data.json
        const data: Record<string, Destination> = await res.json();
        setDestination(data[slug] || null);
      } catch (error) {
        console.error("Error loading destination:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!destination) {
    return <p className="text-center">Loading or not found...</p>;
  }

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title={destination.title}
      />
      <DestinationDetails destination={destination} />
      {destination.faq && <Faq1 faq={destination.faq} />}
    </div>
  );
}
