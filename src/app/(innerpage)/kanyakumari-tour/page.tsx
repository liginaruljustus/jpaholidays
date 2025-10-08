import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Destination4 from "./kanuakumariTour";
import Story1 from "../../Components/Story/Story1";
import FeaturedTour1 from "../../Components/FeaturedTour/FeaturedTour1";
const destinationContent = [
  {
    img: "/assets/img/destination/new/Kanyakumari.jpg",
    location: "Kanyakumari",
    url: "/kanyakumari-tour/Kanyakumari",
    title: "Sunrise & Sunset Point",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Vivekananda Rock.jpg",
    location: "Vivekananda Rock",
    url: "/kanyakumari-tour/Vivekananda-Rock",
    title: "Memorial & Temple",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Thiruvalluvar Statue.jpg",
    location: "Thiruvalluvar Statue",
    url: "/kanyakumari-tour/Thiruvalluvar-Statue",
    title: "133ft Iconic Monument",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Padmanabhapuram Palace.jpg",
    location: "Padmanabhapuram Palace",
    url: "/kanyakumari-tour/Padmanabhapuram-Palace",
    title: "Historic Wooden Palace",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Kanyakumari Beach.jpg",
    location: "Kanyakumari Beach",
    url: "/kanyakumari-tour/Kanyakumari-Beach",
    title: "Scenic Coastal Views",
    rating: "4.7",
    day: "10 Days",
    number: "50+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Nagercoil.jpg",
    location: "Nagercoil",
    url: "/kanyakumari-tour/Nagercoil",
    title: "City of Temples & Culture",
    rating: "4.6",
    day: "5 Days",
    number: "40+",
    price: "₹49.00",
  },
  {
    img: "/assets/img/destination/new/Suchindram Temple.jpg",
    location: "Suchindram Temple",
    url: "/kanyakumari-tour/Suchindram-Temple",
    title: "Musical Pillars & Tall Hanuman Statue",
    rating: "4.7",
    day: "3 Days",
    number: "30+",
    price: "₹39.00",
  },
  {
    img: "/assets/img/destination/new/Pechiparai Dam.jpg",
    location: "Pechiparai Dam",
    url: "/kanyakumari-tour/Pechiparai-Dam",
    title: "Scenic Dam & Boating",
    rating: "4.6",
    day: "2 Days",
    number: "20+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Perunchani Dam.jpg",
    location: "Perunchani Dam",
    url: "/kanyakumari-tour/Perunchani-Dam",
    title: "Dam Amidst Lush Hills",
    rating: "4.5",
    day: "2 Days",
    number: "15+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Chittar Dam.jpg",
    location: "Chittar Dam",
    url: "/kanyakumari-tour/Chittar-Dam",
    title: "Twin Reservoir Scenic Views",
    rating: "4.5",
    day: "2 Days",
    number: "15+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Mukkadal Dam.jpg",
    location: "Mukkadal Dam",
    url: "/kanyakumari-tour/Mukkadal-Dam",
    title: "Peaceful Picnic Spot",
    rating: "4.4",
    day: "1 Day",
    number: "10+",
    price: "₹19.00",
  },
  {
    img: "/assets/img/destination/new/Mathur Aqueduct.jpg",
    location: "Mathur Aqueduct",
    url: "/kanyakumari-tour/Mathur-Aqueduct",
    title: "Asia’s Longest Trough Bridge",
    rating: "4.7",
    day: "1 Day",
    number: "10+",
    price: "₹19.00",
  },
  {
    img: "/assets/img/destination/new/Thirparappu Waterfalls.jpg",
    location: "Thirparappu Waterfalls",
    url: "/kanyakumari-tour/Thirparappu-Waterfalls",
    title: "Scenic Falls & Bathing Spot",
    rating: "4.8",
    day: "1 Day",
    number: "20+",
    price: "₹19.00",
  },
  {
    img: "/assets/img/destination/new/Wildlife Sanctuary.jpg",
    location: "Kalakkadu–Mundanthurai Tiger Reserve",
    url: "/kanyakumari-tour/Kalakkadu-Mundanthurai-Tiger-Reserve",
    title: "Wildlife & Nature Trails",
    rating: "4.6",
    day: "2 Days",
    number: "15+",
    price: "₹39.00",
  },
];

const tourContent = [
  {
    img: "/assets/img/feature/Kanyakumari-Sunrise.jpg",
    location: "Kanyakumari",
    title: "Sunrise & Sunset Point <br>Trip with Local Guide",
    price: "₹1,499",
    url:""
  },
  {
    img: "/assets/img/feature/Vivekananda-Rock.jpg",
    location: "Vivekananda Rock",
    title: "Memorial & Thiruvalluvar Statue <br>Boat Ride & Guided Tour",
    price: "₹1,999",
    url:""
  },
  {
    img: "/assets/img/feature/Padmanabhapuram-Palace.jpg",
    location: "Padmanabhapuram",
    title: "Padmanabhapuram Palace <br>Heritage & Culture Tour",
    price: "₹1,299",
    url:""
  },
  {
    img: "/assets/img/feature/Nagercoil-Temples.jpg",
    location: "Nagercoil",
    title: "Nagercoil & Suchindram Temple <br>One Day Spiritual Trip",
    price: "₹1,799",
    url:""
  },
  {
    img: "/assets/img/feature/Thirparappu-Waterfalls.jpg",
    location: "Thirparappu",
    title: "Thirparappu Waterfalls & <br>Mathur Aqueduct Adventure",
    price: "₹1,499",
    url:""
  },
  {
    img: "/assets/img/feature/Pechiparai-Dam.jpg",
    location: "Pechiparai",
    title:
      "Pechiparai, Perunchani & Chittar Dams <br>Nature & Photography Tour",
    price: "₹1,699",
    url:""
  },
  {
    img: "/assets/img/feature/Wildlife-Tour.jpg",
    location: "KMTR",
    title: "Kalakkadu–Mundanthurai Tiger Reserve <br>Wildlife Safari & Trek",
    price: "₹2,499",
    url:""
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Kanyakumari Tour"
      ></BreadCumb>
      <Destination4 destinationContent={destinationContent}></Destination4>
      <Story1></Story1>
      <FeaturedTour1 tourContent={tourContent}></FeaturedTour1>
    </div>
  );
};

export default page;
