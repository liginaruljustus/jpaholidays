"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Destination2 = () => {
  const destinationContent = [
    {
      img: "/assets/img/destination/new/Kanyakumari.jpg",
      location: "Kanyakumari",
      url:"/kanyakumari-tour/Kanyakumari",
      title: "Sunrise & Sunset Point",
    },
    {
      img: "/assets/img/destination/new/Vivekananda Rock.jpg",
      location: "Vivekananda Rock",
      url:"/kanyakumari-tour/Vivekananda-Rock",
      title: "Memorial & Temple",
    },
    {
      img: "/assets/img/destination/new/Thiruvalluvar Statue.jpg",
      location: "Thiruvalluvar Statue",
      url:"/kanyakumari-tour/Thiruvalluvar-Statue",
      title: "133ft Iconic Monument",
    },
    {
      img: "/assets/img/destination/new/Padmanabhapuram Palace.jpg",
      location: "Padmanabhapuram Palace",
      url:"/kanyakumari-tour/Padmanabhapuram-Palace",
      title: "Historic Wooden Palace",
    },
    {
      img: "/assets/img/destination/new/Kanyakumari Beach.jpg",
      location: "Kanyakumari Beach",
      url:"/kanyakumari-tour/Kanyakumari-Beach",
      title: "Scenic Coastal Views",
    },
    {
      img: "/assets/img/destination/new/Ooty.jpg",
      location: "Ooty",
      url:"/tour-packages/honeymoon/Ooty-Couple-Retreat",
      title: "Queen of Hill Stations",
    },
    {
      img: "/assets/img/destination/new/Munnar.jpg",
      location: "Munnar",
      url:"/kerala-tour/munnar",
      title: "Tea Garden Paradise",
    },
    {
      img: "/assets/img/destination/new/Kerala.jpg",
      location: "Kerala",
      url:"/tour-packages/family/Kerala",
      title: "Backwaters & Beaches",
    },
    {
      img: "/assets/img/destination/new/Kodaikanal.jpg",
      location: "Kodaikanal",
      url:"/tour-packages/corporate/Coimbatore-Industrial-Retreat",
      title: "Princess of Hill Stations",
    },
    {
      img: "/assets/img/destination/new/Rameswaram.jpg",
      location: "Rameshwaram",
      url:"/tour-packages/family/Rameshwaram",
      title: "Sacred Pilgrimage Island",
    },
    {
      img: "/assets/img/destination/new/Madurai.jpg",
      location: "Madurai",
      url:"/madurai-tour/meenakshi-amman-temple",
      title: "Temple City of India",
    },
    {
      img: "/assets/img/destination/new/Alappuzha.jpg",
      location: "Alappuzha",
      url:"/kerala-tour/alappuzha",
      title: "Houseboat & Backwaters",
    },
    {
      img: "/assets/img/destination/new/Varkala.jpg",
      location: "Varkala",
      url:"/kerala-tour/varkala",
      title: "Cliffside Beach Town",
    },
    {
      img: "/assets/img/destination/new/Kovalam.jpg",
      location: "Kovalam",
      url:"/kerala-tour/kovalam",
      title: "International Beach",
    },
    {
      img: "/assets/img/destination/new/Tiruchendur.jpg",
      location: "Tiruchendur",
      url:"/tour-packages/pilgrimage/Thrissur-Vadakkumnathan-Tour",
      title: "Seaside Temple",
    },
    {
      img: "/assets/img/destination/new/Dhanushkodi.jpg",
      location: "Dhanushkodi",
      url:"/tour-packages/family/Rameshwaram-Adventure",
      title: "Ghost Town by the Sea",
    },
    {
      img: "/assets/img/destination/new/Poovar Island.jpg",
      location: "Poovar Island",
      url:"/kerala-tour/wayanad",
      title: "Golden Sand & Boating",
    },
    {
      img: "/assets/img/destination/new/Thekkady.jpg",
      location: "Thekkady",
      url:"/kerala-tour/thekkady",
      title: "Wildlife & Spice Plantations",
    },
    {
      img: "/assets/img/destination/new/Cochin.jpg",
      location: "Cochin",
      url:"/kerala-tour/kochi",
      title: "Historic Port City",
    },
    {
      img: "/assets/img/destination/new/Trivandrum.jpg",
      location: "Trivandrum",
      url:"/kerala-tour/thiruvananthapuram-zoo",
      title: "Capital of Kerala",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="new-destination-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-title wow fadeInUp">Explore Kanyakumari</span>
            <h2 className="wow fadeInUp" data-wow-delay=".5s">
              Top Tourist Destinations <br /> In South India
            </h2>
          </div>
          <Link href="/destination" className="theme-btn">
            View All Places <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="new-destination-wrapper">
          <div className="swiper new-destination-slider">
            <div className="swiper-wrapper cs_slider_gap_301">
              <Slider {...settings}>
                {destinationContent.map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="new-destination-items">
                      <div className="thumb">
                        <Image
                          src={item.img}
                          alt={item.location}
                          width={424}
                          height={505}
                        />
                        <div className="content">
                          <div className="title-text">
                            <h3>
                              <Link href={item.url}>
                                {item.location}
                              </Link>
                            </h3>
                            <p>{item.title}</p>
                          </div>
                          <Link
                            href={item.url}
                            className="icon"
                          >
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination2;
