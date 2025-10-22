"use client";
import React, { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const HeroBanner2 = () => {
  const [isActive, setIsActive] = useState("tour");

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="hero-section-2">
      <div
        className="hero-2 bg-cover"
        data-background="/assets/img/hero/hero2.jpg"
      >
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-lg-9">
              <div className="hero-content">
                <div className="sub-title wow fadeInUp">
                  Premium Taxi & Tour Services in Kanyakumari
                </div>

                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Explore Kanyakumari&apos;s Wonders <br />
                  With JPACabs Comfort
                </h1>

                <p className="wow fadeInUp mb-4" data-wow-delay=".5s">
                  Reliable cab services for airport transfers, temple tours,
                  beach visits, and unforgettable sightseeing experiences across
                  Kanyakumari district.
                  <br />
                  From sunrise views to cultural landmarks, we take you there
                  safely.
                </p>

               <div
  className="hero-btns wow fadeInUp flex flex-col sm:flex-row gap-4 "
  data-wow-delay=".7s"
>
  <a href="/contact" className="theme-btn">
    Book Your Taxi Now
  </a>
  {/* <a href="#tour-packages" className="theme-btn secondary-btn">
    View Kanyakumari Packages
  </a> */}
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
