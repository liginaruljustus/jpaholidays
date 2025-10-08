"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

interface TourItem {
  img: string;
  location: string;
  title: string;
  price: string;
  url:string;
}

interface FeaturedTour1Props {
  tourContent: TourItem[];
}

const FeaturedTour1: React.FC<FeaturedTour1Props> = ({ tourContent }) => {
  const settings: Settings = {
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
      { breakpoint: 1399, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  return (
    <section className="featured-tour-section section-padding section-bg">
      {/* Decorative shapes */}
      <div className="left-shape">
        <Image
          src="/assets/img/feature/plane-shape.png"
          alt="decorative shape left"
          width={372}
          height={112}
          priority
        />
      </div>
      <div className="right-shape">
        <Image
          src="/assets/img/feature/plane-shape.png"
          alt="decorative shape right"
          width={372}
          height={112}
          priority
        />
      </div>

      {/* Slider Controls */}
      <div className="array-button">
        <button onClick={previous} className="array-prev" aria-label="Previous slide">
          <Image
            src="/assets/img/offer/chervon-right.png"
            alt="previous arrow"
            width={24}
            height={16}
          />
        </button>
        <button onClick={next} className="array-next" aria-label="Next slide">
          <Image
            src="/assets/img/icon/39.svg"
            alt="next arrow"
            width={24}
            height={16}
          />
        </button>
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <span className="sub-title wow fadeInUp">Popular Packages</span>
          <h2 className="wow fadeInUp" data-wow-delay=".5s">
            Explore Kanyakumari&apos;s Best Tours
          </h2>
        </div>
        <p className="wow fadeInUp" data-wow-delay=".7s">
          Discover South India&apos;s treasures with our carefully curated tour packages.
          From temple visits <br /> to beach getaways, we offer unforgettable experiences
          at competitive prices.
        </p>

        {/* Slider */}
        <div className="swiper tour-slider">
          <div className="swiper-wrapper cs_slider_gap_301">
            <Slider ref={sliderRef} {...settings}>
              {tourContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="feature-tour-items">
                    {/* Tour Image */}
                    <div className="feature-tour-image">
                      <Image
                        src={item.img}
                        alt={item.location}
                        width={294}
                        height={238}
                      />
                      <ul className="location">
                        <li>
                          <i className="bi bi-geo-alt-fill"></i>
                          {item.location}
                        </li>
                      </ul>
                    </div>

                    {/* Tour Content */}
                    <div className="feature-tour-content">
                      <h4>
                        <Link href={item.url}>{parse(item.title)}</Link>
                      </h4>
                      {/* <h5>
                        {item.price}
                        <span>/Per person</span>
                      </h5> */}
                      <Link href={item.url} className="icon" aria-label="View details">
                        <i className="bi bi-arrow-right"></i>
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

export default FeaturedTour1;
