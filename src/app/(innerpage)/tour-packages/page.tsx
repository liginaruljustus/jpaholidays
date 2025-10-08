import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Destination4 from "./kanuakumariTour";
import Story1 from "../../Components/Story/Story1";
import FeaturedTour1 from "../../Components/FeaturedTour/FeaturedTour1";
import Cta3 from "../../Components/Cta/Cta3";
const destinationContent = [
  {
    img: "/assets/img/tour/family.jpg",
    location: "Meenakshi Amman Temple",
    title: "Family Tour Packages",
    url: "/tour-packages/family",
    rating: "4.9",
    day: "1 Day",
    number: "20+",
    price: "₹49.00",
  },
  {
    img: "/assets/img/tour/marriage.jpg",
    location: "Thirumalai Nayakkar Mahal",
    title: "Marriage Tour Packages",
    url: "/tour-packages/marriage",
    rating: "4.7",
    day: "1 Day",
    number: "12+",
    price: "₹39.00",
  },
  {
    img: "/assets/img/tour/honeymoon.jpg",
    location: "Gandhi Memorial Museum",
    title: "Honeymoon Tour Packages",
    url: "/tour-packages/honeymoon",
    rating: "4.6",
    day: "1 Day",
    number: "10+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/tour/corporate.jpg",
    location: "Vaigai Dam",
    title: "Corporate Tour Packages",
    url: "/tour-packages/corporate",
    rating: "4.5",
    day: "1 Day",
    number: "8+",
    price: "₹25.00",
  },
  {
    img: "/assets/img/tour/adventure.jpg",
    location: "Alagar Koil",
    title: "Adventure Tour Packages",
    url: "/tour-packages/adventure",
    rating: "4.7",
    day: "1 Day",
    number: "7+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/tour/pilgrimage.jpg",
    location: "Pazhamudhir Cholai",
    title: "Pilgrimage Tour Packages",
    url: "/tour-packages/pilgrimage",
    rating: "4.6",
    day: "1 Day",
    number: "5+",
    price: "₹25.00",
  },
 
];




const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Tour Packages"
      ></BreadCumb>
      <Destination4 destinationContent={destinationContent}></Destination4>
      {/* <Story1></Story1> */}
      {/* <FeaturedTour1 tourContent={tourContent}></FeaturedTour1> */}
      <Cta3></Cta3>
    </div>
  );
};

export default page;
