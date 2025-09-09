import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";
import Destination4 from "./kanuakumariTour";
import Story1 from "../../Components/Story/Story1";
import FeaturedTour1 from "../../Components/FeaturedTour/FeaturedTour1";

const destinationContent = [
  {
    img: "/assets/img/destination/new/Meenakshi-Amman-Temple.jpg",
    location: "Meenakshi Amman Temple",
    title: "Iconic Dravidian Architecture & Spiritual Center",
    url: "/madurai-tour/meenakshi-amman-temple",
    rating: "4.9",
    day: "1 Day",
    number: "20+",
    price: "₹49.00",
  },
  {
    img: "/assets/img/destination/new/Thirumalai-Nayakkar-Mahal.jpg",
    location: "Thirumalai Nayakkar Mahal",
    title: "Majestic 17th Century Palace",
    url: "/madurai-tour/thirumalai-nayakkar-mahal",
    rating: "4.7",
    day: "1 Day",
    number: "12+",
    price: "₹39.00",
  },
  {
    img: "/assets/img/destination/new/Gandhi-Memorial-Museum.jpg",
    location: "Gandhi Memorial Museum",
    title: "Tribute to Mahatma Gandhi",
    url: "/madurai-tour/gandhi-memorial-museum",
    rating: "4.6",
    day: "1 Day",
    number: "10+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Vaigai-Dam.jpg",
    location: "Vaigai Dam",
    title: "Scenic Reservoir & Garden",
    url: "/madurai-tour/vaigai-dam",
    rating: "4.5",
    day: "1 Day",
    number: "8+",
    price: "₹25.00",
  },
  {
    img: "/assets/img/destination/new/Alagar-Koil.jpg",
    location: "Alagar Koil",
    title: "Historic Vishnu Temple in Hills",
    url: "/madurai-tour/alagar-koil",
    rating: "4.7",
    day: "1 Day",
    number: "7+",
    price: "₹29.00",
  },
  {
    img: "/assets/img/destination/new/Pazhamudhir-Cholai.jpg",
    location: "Pazhamudhir Cholai",
    title: "Sacred Hilltop Murugan Temple",
    url: "/madurai-tour/pazhamudhir-cholai",
    rating: "4.6",
    day: "1 Day",
    number: "5+",
    price: "₹25.00",
  },
  {
    img: "/assets/img/destination/new/Koodal-Azhagar-Temple.jpg",
    location: "Koodal Azhagar Temple",
    title: "Ancient Vaishnavite Shrine",
    url: "/madurai-tour/koodal-azhagar-temple",
    rating: "4.5",
    day: "1 Day",
    number: "4+",
    price: "₹20.00",
  },
  {
    img: "/assets/img/destination/new/Teppakulam.jpg",
    location: "Mariamman Teppakulam",
    title: "Famous Temple Tank & Float Festival Site",
    url: "/madurai-tour/mariamman-teppakulam",
    rating: "4.4",
    day: "1 Day",
    number: "3+",
    price: "₹19.00",
  },
];


const tourContent = [
  {
    img: "/assets/img/feature/Meenakshi-Amman-Tour.jpg",
    location: "Madurai",
    title: "Meenakshi Temple <br>Spiritual Walk & History",
    price: "₹2,499",
  },
  {
    img: "/assets/img/feature/Thirumalai-Nayakkar-Mahal.jpg",
    location: "Madurai",
    title: "Thirumalai Nayakkar Mahal <br>Heritage Tour",
    price: "₹1,999",
  },
  {
    img: "/assets/img/feature/Madurai-Heritage.jpg",
    location: "Madurai",
    title: "Full-Day Madurai Heritage <br>and Cultural Tour",
    price: "₹3,999",
  },
  {
    img: "/assets/img/feature/Alagar-Koil-Tour.jpg",
    location: "Madurai",
    title: "Alagar Koil & Pazhamudhir Cholai <br>Temple Visit",
    price: "₹2,499",
  },
  {
    img: "/assets/img/feature/Vaigai-Dam-Tour.jpg",
    location: "Madurai",
    title: "Vaigai Dam & Scenic Gardens <br>Half-Day Trip",
    price: "₹1,499",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Madurai Tour"
      ></BreadCumb>
      <Destination4 destinationContent={destinationContent}></Destination4>
      <Story1></Story1>
      <FeaturedTour1 tourContent={tourContent}></FeaturedTour1>
    </div>
  );
};

export default page;
