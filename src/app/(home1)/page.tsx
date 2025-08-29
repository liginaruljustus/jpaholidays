import React from "react";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import About2 from "../Components/About/About2";
import Counter1 from "../Components/Counter/Counter1";
import Destination2 from "../Components/Destination/Destination2";
import Choose2 from "../Components/Choose/Choose2";
import Story1 from "../Components/Story/Story1";
import FeaturedTour1 from "../Components/FeaturedTour/FeaturedTour1";
import Cta3 from "../Components/Cta/Cta3";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import Blog2 from "../Components/Blog/Blog2";
import Instagram1 from "../Components/Instagram/Instagram1";
const tourContent = [
  {
    img: "/assets/img/feature/Kanyakumari.jpg",
    location: "Kanyakumari",
    title: "Sunrise & Sunset Point <br>Trip with Local Guide",
    price: "₹1,499",
  },
  {
    img: "/assets/img/feature/Rameswaram.jpg",
    location: "Rameswaram",
    title: "2-Day Temple Tour <br>with AC Transport",
    price: "₹3,999",
  },
  {
    img: "/assets/img/feature/Kerala.jpg",
    location: "Kerala",
    title: "3-Day Kerala Backwater <br>Tour Package",
    price: "₹6,499",
  },
  {
    img: "/assets/img/feature/Kodaikanal.jpg",
    location: "Kodaikanal",
    title: "Hill Station Escape <br>with Luxury Cab",
    price: "₹4,999",
  },
];
const page = () => {
  return (
    <div>
      <HeroBanner2></HeroBanner2>
      <About2></About2>
      <Counter1></Counter1>
      <Destination2></Destination2>
      <Choose2></Choose2>
      <Story1></Story1>
      <FeaturedTour1 tourContent={tourContent}></FeaturedTour1>
      <Cta3></Cta3>
      <Testimonial2></Testimonial2>
      <Blog2></Blog2>
      <Instagram1></Instagram1>
    </div>
  );
};

export default page;
