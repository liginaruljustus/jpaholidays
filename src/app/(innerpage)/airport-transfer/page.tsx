import BreadCumb from "../../Components/Common/BreadCumb";
import Cta3 from "../../Components/Cta/Cta3";
import DestinationDetails from "./DestinationDetails";

export const metadata = {
  title: {
    absolute: "Kanyakumari to Trivandrum Cab Service | Airport Transfer & Taxi Booking",
    default: "JP Cabs - Best Taxi Services in Kanyakumari",
    template: "%s | JP Cabs - Kanyakumari Taxi Service",
  },
  description:
    "Book reliable cab service from Kanyakumari to Trivandrum for airport transfers, one-way trips, and round-trip taxi bookings. JP Cabs offers 24/7 service, clean cars, professional drivers, and affordable fares.",
  keywords: [
    "Kanyakumari to Trivandrum cab service",
    "Kanyakumari to Trivandrum taxi",
    "airport transfer Kanyakumari to Trivandrum",
    "Trivandrum airport pickup drop",
    "Kanyakumari taxi booking",
    "one way cabs Kanyakumari to Trivandrum",
    "Kanyakumari airport transfer",
    "affordable cab service Kanyakumari",
    "Kanyakumari to Trivandrum car rental",
    "best taxi service in Kanyakumari",
    "Kanyakumari travel agency",
    "JP Cabs Kanyakumari",
  ],
  openGraph: {
    title: "Kanyakumari to Trivandrum Cab Service | JP Cabs - Airport Transfer & Taxi Booking",
    description:
      "Enjoy a smooth and reliable ride from Kanyakumari to Trivandrum with JP Cabs. 24/7 airport transfer, clean vehicles, professional drivers, and the best rates guaranteed.",
    url: "https://jpacabs.com/airport-transfer",
    siteName: "JP Cabs",
    images: [
      {
        url: "https://jpacabs.com/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kanyakumari to Trivandrum Cab Service - JP Cabs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanyakumari to Trivandrum Cab Service | JP Cabs",
    description:
      "Book your Kanyakumari to Trivandrum airport transfer with JP Cabs. Reliable taxi service, professional drivers, and 24/7 availability.",
    images: ["https://jpacabs.com/assets/img/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://jpacabs.com/airport-transfer",
  },
};

export default function LocalCabs() {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Airport Transfer"
      />
      <DestinationDetails />
      <Cta3 />
    </>
  );
}
