import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Destination4 from "../../Components/Destination/Destination4";
import Story1 from "../../Components/Story/Story1";
import FeaturedTour1 from "../../Components/FeaturedTour/FeaturedTour1";
const destinationContent = [
  {
    img: "/assets/img/destination/new/Kanyakumari.jpg",
    location: "Kanyakumari",
    title: "Sunrise & Sunset Point",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Vivekananda Rock.jpg",
    location: "Vivekananda Rock",
    title: "Memorial & Temple",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Thiruvalluvar Statue.jpg",
    location: "Thiruvalluvar Statue",
    title: "133ft Iconic Monument",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Padmanabhapuram Palace.jpg",
    location: "Padmanabhapuram Palace",
    title: "Historic Wooden Palace",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Kanyakumari Beach.jpg",
    location: "Kanyakumari Beach",
    title: "Scenic Coastal Views",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Ooty.jpg",
    location: "Ooty",
    title: "Queen of Hill Stations",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Munnar.jpg",
    location: "Munnar",
    title: "Tea Garden Paradise",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Kerala.jpg",
    location: "Kerala",
    title: "Backwaters & Beaches",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Kodaikanal.jpg",
    location: "Kodaikanal",
    title: "Princess of Hill Stations",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Rameshwaram.jpg",
    location: "Rameshwaram",
    title: "Sacred Pilgrimage Island",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Madurai.jpg",
    location: "Madurai",
    title: "Temple City of India",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Alappuzha.jpg",
    location: "Alappuzha",
    title: "Houseboat & Backwaters",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Varkala.jpg",
    location: "Varkala",
    title: "Cliffside Beach Town",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Kovalam.jpg",
    location: "Kovalam",
    title: "International Beach",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Tiruchendur.jpg",
    location: "Tiruchendur",
    title: "Seaside Temple",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Dhanushkodi.jpg",
    location: "Dhanushkodi",
    title: "Ghost Town by the Sea",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Poovar Island.jpg",
    location: "Poovar Island",
    title: "Golden Sand & Boating",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Thekkady.jpg",
    location: "Thekkady",
    title: "Wildlife & Spice Plantations",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Cochin.jpg",
    location: "Cochin",
    title: "Historic Port City",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Trivandrum.jpg",
    location: "Trivandrum",
    title: "Capital of Kerala",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
];
const tourContent = [
  {
    img: "/assets/img/feature/01.jpg",
    location: "Kanyakumari",
    title: "Sunrise & Sunset Point <br>Trip with Local Guide",
    price: "₹1,499",
  },
  {
    img: "/assets/img/feature/02.jpg",
    location: "Rameswaram",
    title: "2-Day Temple Tour <br>with AC Transport",
    price: "₹3,999",
  },
  {
    img: "/assets/img/feature/03.jpg",
    location: "Kerala",
    title: "3-Day Kerala Backwater <br>Tour Package",
    price: "₹6,499",
  },
  {
    img: "/assets/img/feature/04.jpg",
    location: "Kodaikanal",
    title: "Hill Station Escape <br>with Luxury Cab",
    price: "₹4,999",
  },
];
const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Destination"
      ></BreadCumb>
      <Destination4 destinationContent={destinationContent}></Destination4>
      <Story1></Story1>
      <FeaturedTour1 tourContent={tourContent}></FeaturedTour1>
    </div>
  );
};

export default page;
