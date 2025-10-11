import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Cta3 from "../../Components/Cta/Cta3";
import DestinationDetails from "./DestinationDetails";

export const metadata = {
  title: {
    absolute: "Local Cab Service in Kanyakumari | JP Cabs - Kerala, Madurai & Rameshwaram Taxi",
    default: "JP Cabs - Best Local Taxi Services in Kanyakumari",
    template: "%s | JP Cabs - Kanyakumari Taxi Service",
  },
  description:
    "JP Cabs offers affordable and reliable local cab services in Kanyakumari, Kerala, Madurai, and Rameshwaram. Book clean, comfortable taxis for local sightseeing, airport transfers, and outstation trips with 24/7 service.",
  keywords: [
    "Kanyakumari local cab",
    "Kanyakumari taxi service",
    "Kanyakumari car rental",
    "Kanyakumari to Trivandrum taxi",
    "Kanyakumari to Madurai cab",
    "Kanyakumari to Rameshwaram taxi",
    "Kerala cab service",
    "Madurai taxi from Kanyakumari",
    "Rameshwaram cab from Kanyakumari",
    "Kanyakumari sightseeing cab",
    "best taxi service in Kanyakumari",
    "local cabs in Kanyakumari",
    "affordable cab service Kanyakumari",
    "JP Cabs Kanyakumari",
    "tour packages Kanyakumari",
  ],
  openGraph: {
    title: "Local Cab Service in Kanyakumari | JP Cabs - Kerala, Madurai & Rameshwaram Taxi",
    description:
      "Book trusted local cabs in Kanyakumari with JP Cabs. 24/7 taxi service for Kerala, Madurai, Rameshwaram, and Trivandrum. Clean cars, professional drivers, and affordable fares.",
    url: "https://jpacabs.com/local-cabs",
    siteName: "JP Cabs",
    images: [
      {
        url: "https://jpacabs.com/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JP Cabs - Local Cab Service in Kanyakumari",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Cab Service in Kanyakumari | JP Cabs",
    description:
      "Book local cabs and taxis in Kanyakumari, Kerala, Madurai & Rameshwaram with JP Cabs. Reliable, affordable, and available 24/7.",
    images: ["https://jpacabs.com/assets/img/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://jpacabs.com/local-cabs",
  },
};

const LocalCabs = () => {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Local Cab"
      />
      <DestinationDetails />
      <Cta3 />
    </>
  );
};

export default LocalCabs;
