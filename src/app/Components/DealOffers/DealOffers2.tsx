"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

const DealOffers2 = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 2 } },
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const dealContent = [
    {
      name: "Qatar Airways",
      img: "/assets/img/offer/hourse.png",
      flyType: "Fastest Fly",
      seats: "05 Seats",
      location1: "New Work",
      location2: "Nepal",
      startTime: "08:30AM",
      startDate: "25 Nov 2024",
      duration: "04h 20 minutes",
      endTime: "12:50PM",
      endDate: "25 Nov 2024",
      classType: "Business Class",
      price: "$1520",
    },
    {
      name: "NOVOAIR",
      img: "/assets/img/offer/fly.png",
      flyType: "Fastest Fly",
      seats: "05 Seats",
      location1: "New Work",
      location2: "Nepal",
      startTime: "09:10AM",
      startDate: "25 Nov 2024",
      duration: "04h 15 minutes",
      endTime: "01:25PM",
      endDate: "25 Nov 2024",
      classType: "Business Class",
      price: "$1480",
    },
  ];

  return (
    <section className="deals-offer-section section-padding pb-0 fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-title wow fadeInUp">Deals & Offers</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Last Minute Deals
            </h2>
          </div>
          <div
            className="array-button justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <button onClick={previous} className="array-prev">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button onClick={next} className="array-next">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="swiper offer-slider2">
          <div className="swiper-wrapper cs_slider_gap_301">
            <Slider ref={sliderRef} {...settings}>
              {dealContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="deals-offer-items">
                    <div className="airline-wrap">
                      <div className="airline-card">
                        <div className="airline">
                          <div className="icon">
                            <Image
                              src={item.img}
                              alt={`${item.name} logo`}
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="content">
                            <h4>{item.name}</h4>
                          </div>
                        </div>
                        <Link
                          href="/tour/tour-details"
                          className="theme-btn"
                        >
                          {item.flyType}
                        </Link>
                      </div>
                      <div className="text">
                        <span>{item.seats}</span>
                      </div>
                    </div>

                    <ul className="post-meta">
                      <li>{item.location1}</li>
                      <li className="plane-shape">
                        <Image
                          src="/assets/img/offer/plane-line.png"
                          alt="plane route"
                          width={303}
                          height={16}
                        />
                      </li>
                      <li>{item.location2}</li>
                    </ul>

                    <div className="date">
                      <div className="content">
                        <h4>{item.startTime}</h4>
                        <span>{item.startDate}</span>
                      </div>
                      <span>{item.duration}</span>
                      <div className="content">
                        <h4>{item.endTime}</h4>
                        <span>{item.endDate}</span>
                      </div>
                    </div>

                    <div className="offer-business">
                      <div className="business-content">
                        <div className="icon">
                          <Image
                            src="/assets/img/icon/17.svg"
                            alt="class icon"
                            width={19}
                            height={12}
                          />
                        </div>
                        <div className="text">
                          <h6>{item.classType}</h6>
                        </div>
                      </div>
                      <span>{item.price}</span>
                      <Link
                        href="/tour/tour-details"
                        className="link-btn"
                      >
                        Flight Details <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOffers2;
