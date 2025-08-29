import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Destination4 from "./kanuakumariTour";
import Story1 from "../../Components/Story/Story1";
import FeaturedTour1 from "../../Components/FeaturedTour/FeaturedTour1";
const destinationContent = [
  {
    img: "/assets/img/destination/new/Rameswaram.jpg",
    url: "/rameshwaram-tour/rameswaram",
    location: "Rameswaram",
    title: "Sacred Island & Sea Bridge",
    rating: "4.8",
    day: "3 Days",
    number: "20+",
    price: "₹79.00",
  },
  {
    img: "/assets/img/destination/new/Ramanathaswamy-Temple.jpg",
    url: "/rameshwaram-tour/ramanathaswamy-temple",
    location: "Ramanathaswamy Temple",
    title: "Famous Jyotirlinga Temple & Longest Temple Corridor",
    rating: "4.9",
    day: "1 Day",
    number: "15+",
    price: "₹49.00",
  },
  {
    img: "/assets/img/destination/new/Pamban-Bridge.jpg",
    url: "/rameshwaram-tour/pamban-bridge",
    location: "Pamban Bridge",
    title: "Engineering Marvel Over the Sea",
    rating: "4.8",
    day: "1 Day",
    number: "10+",
    price: "₹39.00",
  },
  {
    img: "/assets/img/destination/new/Dhanushkodi.jpg",
    url: "/rameshwaram-tour/dhanushkodi",
    location: "Dhanushkodi",
    title: "Ghost Town at the Edge of India",
    rating: "4.7",
    day: "1 Day",
    number: "12+",
    price: "₹39.00",
  },
  {
    img: "/assets/img/destination/new/Ram-Setu-Viewpoint.jpg",
    url: "/rameshwaram-tour/ram-setu-viewpoint",
    location: "Ram Setu Viewpoint",
    title: "Mythical Bridge to Sri Lanka",
    rating: "4.6",
    day: "1 Day",
    number: "8+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Kalam-Memorial.jpg",
    url: "/rameshwaram-tour/kalam-memorial",
    location: "APJ Abdul Kalam Memorial",
    title: "Tribute to India's Missile Man",
    rating: "4.8",
    day: "1 Day",
    number: "6+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Kothandaramaswamy-Temple.jpg",
    url: "/rameshwaram-tour/kothandaramaswamy-temple",
    location: "Kothandaramaswamy Temple",
    title: "Historic Seaside Temple",
    rating: "4.6",
    day: "1 Day",
    number: "5+",
    price: "₹25.00",
  },
  {
    img: "/assets/img/destination/new/Water-Sports-Rameswaram.jpg",
    url: "/rameshwaram-tour/ariyaman-beach",
    location: "Ariyaman Beach",
    title: "Water Sports & Family Fun Spot",
    rating: "4.5",
    day: "1 Day",
    number: "8+",
    price: "₹35.00",
  },
];

const tourContent = [
  {
    img: "/assets/img/feature/Rameswaram-Tour.jpg",
    location: "Rameswaram",
    title: "2-Day Rameswaram Temple <br>and Dhanushkodi Tour",
    price: "₹3,999",
  },
  {
    img: "/assets/img/feature/Pamban-Bridge.jpg",
    location: "Rameswaram",
    title: "Pamban Bridge & Sea View <br>Photography Tour",
    price: "₹1,999",
  },
  {
    img: "/assets/img/feature/Dhanushkodi.jpg",
    location: "Rameswaram",
    title: "Dhanushkodi Ghost Town <br>Sunrise & Beach Drive",
    price: "₹2,499",
  },
  {
    img: "/assets/img/feature/Rameswaram-Beach.jpg",
    location: "Rameswaram",
    title: "Water Sports & Beach Fun <br>Half-Day Trip",
    price: "₹1,499",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Rameshwaram Tour"
      ></BreadCumb>
      <Destination4 destinationContent={destinationContent}></Destination4>
      <Story1></Story1>
      <FeaturedTour1 tourContent={tourContent}></FeaturedTour1>
    </div>
  );
};

export default page;
