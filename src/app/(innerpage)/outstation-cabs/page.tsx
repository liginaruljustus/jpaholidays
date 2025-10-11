import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Cta3 from "../../Components/Cta/Cta3";
import DestinationDetails from "./DestinationDetails";

export const metadata = {
  title: {
    absolute: "Outstation Cabs from Kanyakumari | JP Cabs - Madurai, Rameshwaram & Kerala",
    default: "JP Cabs - Outstation Cab Service in Kanyakumari",
    template: "%s | JP Cabs - Outstation Taxi Service",
  },
  description:
    "Book reliable outstation cabs from Kanyakumari to Madurai, Rameshwaram, Trivandrum, and Kerala. JP Cabs provides 24/7 service, professional drivers, and comfortable vehicles for long-distance travel at affordable rates.",
  keywords: [
    "Outstation cabs Kanyakumari",
    "Kanyakumari to Madurai taxi",
    "Kanyakumari to Rameshwaram cab",
    "Kanyakumari to Trivandrum taxi",
    "Kerala outstation cab",
    "Long-distance taxi Kanyakumari",
    "Professional outstation cab service",
    "Kanyakumari airport transfer",
    "JP Cabs outstation service",
    "Reliable cab service Tamil Nadu",
    "Affordable outstation taxi Kanyakumari",
    "Kanyakumari travel agency",
  ],
  openGraph: {
    title: "Outstation Cabs from Kanyakumari | JP Cabs",
    description:
      "Travel comfortably from Kanyakumari to Madurai, Rameshwaram, Trivandrum, or Kerala with JP Cabs’ outstation taxi service. Clean cars, professional drivers, and 24/7 availability.",
    url: "https://jpacabs.com/outstation-cabs",
    siteName: "JP Cabs",
    images: [
      {
        url: "https://jpacabs.com/assets/img/og-outstation.jpg",
        width: 1200,
        height: 630,
        alt: "Outstation Cab Service from Kanyakumari - JP Cabs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outstation Cabs from Kanyakumari | JP Cabs",
    description:
      "Book trusted outstation cabs from Kanyakumari to Madurai, Rameshwaram, Trivandrum & Kerala. Professional drivers, clean vehicles, and 24/7 service.",
    images: ["https://jpacabs.com/assets/img/twitter-outstation.jpg"],
  },
  alternates: {
    canonical: "https://jpacabs.com/outstation-cabs",
  },
};

const LocalCabs = () => {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Outstation Cabs"
      />
      <DestinationDetails />
      <Cta3 />
    </>
  );
};

export default LocalCabs;
