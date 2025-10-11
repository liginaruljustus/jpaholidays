import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Cta3 from "../../Components/Cta/Cta3";
import DestinationDetails from "./DestinationDetails";

export const metadata = {
  title: {
    absolute: "Self Drive Car Rental in Kanyakumari | JP Cabs Tamil Nadu",
    default: "JP Cabs - Self Drive Car Rental & Cab Service in Kanyakumari",
    template: "%s | JP Cabs - Self Drive Car Service",
  },
  description:
    "JP Cabs offers the best self drive car rental service in Kanyakumari, Madurai, Rameshwaram & Kerala. Choose from a wide range of vehicles for local trips and long drives. Enjoy affordable prices, unlimited kilometers & 24/7 support.",
  keywords: [
    "Self drive car rental Kanyakumari",
    "Kanyakumari car rental",
    "Self drive cab service Tamil Nadu",
    "Self drive car hire Madurai",
    "Kanyakumari to Rameshwaram self drive",
    "Kanyakumari to Kerala car rental",
    "Kanyakumari self drive taxi",
    "Best car rental service in Kanyakumari",
    "Self drive rental in Nagercoil",
    "JP Cabs Kanyakumari self drive",
    "Affordable self drive cars Tamil Nadu",
    "Kanyakumari travel agency",
    "Kanyakumari to Trivandrum car hire",
  ],
  openGraph: {
    title: "JP Cabs - Self Drive Car Rental in Kanyakumari & Tamil Nadu",
    description:
      "Book reliable self drive cars and cab rentals in Kanyakumari, Madurai, Rameshwaram & Kerala. Drive your own way with JP Cabs – Affordable, clean & comfortable rides.",
    url: "https://jpacabs.com/self-drive",
    siteName: "JP Cabs",
    images: [
      {
        url: "https://jpacabs.com/assets/img/og-selfdrive.jpg",
        width: 1200,
        height: 630,
        alt: "Self Drive Car Rental in Kanyakumari - JP Cabs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Drive Car Rental in Kanyakumari | JP Cabs Tamil Nadu",
    description:
      "Drive your own car in comfort! Book self drive car rental in Kanyakumari, Madurai & Rameshwaram with JP Cabs today.",
    images: ["https://jpacabs.com/assets/img/twitter-selfdrive.jpg"],
  },
  alternates: {
    canonical: "https://jpacabs.com/self-drive",
  },
};

const LocalCabs = () => {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Self Drive"
      />
      <DestinationDetails />
      <Cta3 />
    </>
  );
};

export default LocalCabs;
