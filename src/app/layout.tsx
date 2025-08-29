import { Manrope, Work_Sans, Kalam } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--body-color-font",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--body-color-font",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "JP Cabs - Premium Taxi & Travel Services in Kanyakumari",
    default: "JP Cabs - Best Taxi Services in Kanyakumari",
    template: "%s | JP Cabs - Kanyakumari Taxi Service",
  },
  description:
    "JP Cabs offers premium taxi services, car rentals, and tour packages in Kanyakumari. Book reliable cabs for airport transfers, local sightseeing, and outstation trips at best prices.",
  keywords: [
    "Kanyakumari taxi",
    "Kanyakumari cabs",
    "Kanyakumari car rental",
    "Kanyakumari tour packages",
    "Kanyakumari to Trivandrum taxi",
    "Kanyakumari airport transfer",
    "Kanyakumari sightseeing",
    "Best taxi service in Kanyakumari",
    "Kanyakumari travel agency",
    "Kanyakumari taxi booking",
    "Kanyakumari local cabs",
    "Kanyakumari outstation cabs",
    "Kanyakumari temple tour",
    "Kanyakumari beach tour",
    "Kanyakumari to Rameshwaram taxi",
    "Kanyakumari to Madurai taxi",
    "Kanyakumari to Kerala tour",
    "Affordable cabs Kanyakumari",
    "Reliable taxi service Kanyakumari",
    "Kanyakumari tour operator",
  ],
  openGraph: {
    title: "JP Cabs - Premium Taxi & Travel Services in Kanyakumari",
    description:
      "Your trusted partner for taxi services, car rentals, and tour packages in Kanyakumari. Experience comfortable and reliable travel with JP Cabs.",
    url: "https://jpacabs.com/",
    siteName: "JP Cabs",
    images: [
      {
        url: "https://jpacabs.com/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JP Cabs - Kanyakumari Taxi Service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JP Cabs - Premium Taxi & Travel Services in Kanyakumari",
    description:
      "Your trusted partner for taxi services in Kanyakumari. Book now for best rates!",
    images: ["https://jpacabs.com/assets/img/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://jpacabs.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${manrope.variable} ${work_sans.variable} ${kalam.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
