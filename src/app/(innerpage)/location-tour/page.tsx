import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Cta3 from "../../Components/Cta/Cta3";
import Destination4 from "./kanuakumariTour";
const destinationContent = [
  {
    img: "/assets/img/destination/new/Kanyakumari Beach.jpg",
    location: "Meenakshi Amman Temple",
    title: "Kanyakumari Tour",
    url: "/kanyakumari-tour",
    rating: "4.9",
    day: "1 Day",
    number: "20+",
    price: "₹49.00",
  },
  {
    img: "/assets/img/destination/new/Kerala.jpg",
    location: "Thirumalai Nayakkar Mahal",
    title: "Kerala Tour",
    url: "/kerala-tour",
    rating: "4.7",
    day: "1 Day",
    number: "12+",
    price: "₹39.00",
  },
  {
    img: "/assets/img/destination/new/Rameswaram.jpg",
    location: "Gandhi Memorial Museum",
    title: "Rameshwaram Tour",
    url: "/rameshwaram-tour",
    rating: "4.6",
    day: "1 Day",
    number: "10+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Madurai.jpg",
    location: "Vaigai Dam",
    title: "Madurai Tour",
    url: "/madurai-tour",
    rating: "4.5",
    day: "1 Day",
    number: "8+",
    price: "₹25.00",
  },
  
 
];

const LocationTour = ()=>{
    return(<div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Location Tour"
      ></BreadCumb>
      <Destination4 destinationContent={destinationContent}></Destination4>
      {/* <Story1></Story1> */}
      {/* <FeaturedTour1 tourContent={tourContent}></FeaturedTour1> */}
      <Cta3></Cta3>
    </div>)
}
export default LocationTour