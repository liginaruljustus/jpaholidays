import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Destination4 from "./kanuakumariTour";
import Story1 from "../../Components/Story/Story1";
import FeaturedTour1 from "../../Components/FeaturedTour/FeaturedTour1";
const destinationContent = [
  {
    img: "/assets/img/destination/new/Munnar.jpg",
    url: "/kerala-tour/munnar",
    location: "Munnar",
    title: "Tea Garden Paradise",
    rating: "4.8",
    day: "5 Days",
    number: "40+",
    price: "₹79.00",
  },
  {
    img: "/assets/img/destination/new/Alappuzha.jpg",
    url: "/kerala-tour/alappuzha",
    location: "Alappuzha",
    title: "Houseboat & Backwaters",
    rating: "4.7",
    day: "3 Days",
    number: "30+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Kochi.jpg",
    url: "/kerala-tour/kochi",
    location: "Kochi",
    title: "Historic Port City",
    rating: "4.7",
    day: "3 Days",
    number: "25+",
    price: "₹69.00",
  },
  {
    img: "/assets/img/destination/new/Thekkady.jpg",
    url: "/kerala-tour/thekkady",
    location: "Thekkady",
    title: "Periyar Wildlife Sanctuary & Spice Plantations",
    rating: "4.8",
    day: "4 Days",
    number: "20+",
    price: "₹89.00",
  },
  {
    img: "/assets/img/destination/new/Kumarakom.jpg",
    url: "/kerala-tour/kumarakom",
    location: "Kumarakom",
    title: "Lakeside & Bird Sanctuary",
    rating: "4.6",
    day: "2 Days",
    number: "15+",
    price: "₹69.00",
  },
  {
    img: "/assets/img/destination/new/Varkala.jpg",
    url: "/kerala-tour/varkala",
    location: "Varkala",
    title: "Cliffside Beach Town",
    rating: "4.7",
    day: "3 Days",
    number: "18+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Kovalam.jpg",
    url: "/kerala-tour/kovalam",
    location: "Kovalam",
    title: "International Beach Destination",
    rating: "4.7",
    day: "2 Days",
    number: "15+",
    price: "₹59.00",
  },
  {
    img: "/assets/img/destination/new/Wayanad.jpg",
    url: "/kerala-tour/wayanad",
    location: "Wayanad",
    title: "Hills, Waterfalls & Wildlife",
    rating: "4.8",
    day: "5 Days",
    number: "25+",
    price: "₹89.00",
  },
  {
    img: "/assets/img/destination/new/Athirappilly.jpg",
    url: "/kerala-tour/athirappilly",
    location: "Athirappilly",
    title: "Niagara of India",
    rating: "4.7",
    day: "1 Day",
    number: "12+",
    price: "₹39.00",
  },
  {
    img: "/assets/img/destination/new/Bekal-Fort.jpg",
    url: "/kerala-tour/bekal-fort",
    location: "Bekal",
    title: "Sea Fort & Scenic Views",
    rating: "4.6",
    day: "2 Days",
    number: "10+",
    price: "₹49.00",
  },
  {
    img: "/assets/img/destination/new/Thiruvananthapuram-Zoo.jpg",
    url: "/kerala-tour/thiruvananthapuram-zoo",
    location: "Thiruvananthapuram Zoo",
    title: "Oldest Zoo in India",
    rating: "4.6",
    day: "1 Day",
    number: "10+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Thrissur-Zoo.jpg",
    url: "/kerala-tour/thrissur-zoo",
    location: "Thrissur Zoo",
    title: "Zoo & State Museum",
    rating: "4.5",
    day: "1 Day",
    number: "8+",
    price: "₹25.00",
  },
  {
    img: "/assets/img/destination/new/Parassinikkadavu-Snake-Park.jpg",
    url: "/kerala-tour/parassinikkadavu-snake-park",
    location: "Parassinikkadavu Snake Park",
    title: "Reptile & Snake Conservation Center",
    rating: "4.4",
    day: "1 Day",
    number: "6+",
    price: "₹25.00",
  },
];

const tourContent = [
  {
    img: "/assets/img/feature/Munnar-Tour.jpg",
    location: "Munnar",
    title: "3-Day Tea Garden & Hill Station <br>Tour with Local Guide",
    price: "₹4,999",
  },
  {
    img: "/assets/img/feature/Alleppey-Houseboat.jpg",
    location: "Alappuzha",
    title: "Houseboat Backwater Cruise <br>All Meals Included",
    price: "₹6,499",
  },
  {
    img: "/assets/img/feature/Kochi-Heritage.jpg",
    location: "Kochi",
    title: "Heritage & Culture Walk <br>in Fort Kochi",
    price: "₹2,499",
  },
  {
    img: "/assets/img/feature/Thekkady-Wildlife.jpg",
    location: "Thekkady",
    title: "Periyar Wildlife Sanctuary <br>Jeep Safari & Spice Tour",
    price: "₹3,999",
  },
  {
    img: "/assets/img/feature/Kumarakom-BirdSanctuary.jpg",
    location: "Kumarakom",
    title: "Bird Sanctuary & Backwater <br>Day Trip",
    price: "₹2,999",
  },
  {
    img: "/assets/img/feature/Varkala-Beach.jpg",
    location: "Varkala",
    title: "Cliffside Beach & Water Sports <br>2-Day Package",
    price: "₹3,499",
  },
  {
    img: "/assets/img/feature/Wayanad-Adventure.jpg",
    location: "Wayanad",
    title: "Wayanad Hills & Wildlife <br>Adventure Tour",
    price: "₹5,499",
  },
  {
    img: "/assets/img/feature/Thiruvananthapuram-Zoo.jpg",
    location: "Thiruvananthapuram",
    title: "Thiruvananthapuram Zoo <br>Guided Wildlife Exploration",
    price: "₹1,499",
  },
  {
    img: "/assets/img/feature/Thrissur-Zoo.jpg",
    location: "Thrissur",
    title: "Thrissur Zoo & State Museum <br>One Day Cultural Trip",
    price: "₹1,299",
  },
  {
    img: "/assets/img/feature/Parassinikkadavu-Snake-Park.jpg",
    location: "Kannur",
    title: "Parassinikkadavu Snake Park <br>Reptile Encounter Tour",
    price: "₹1,199",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Kerala Tour"
      ></BreadCumb>
      <Destination4 destinationContent={destinationContent}></Destination4>
      <Story1></Story1>
      <FeaturedTour1 tourContent={tourContent}></FeaturedTour1>
    </div>
  );
};

export default page;
