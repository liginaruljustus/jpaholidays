"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Choose2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="choose-us-section section-padding bg-cover fix"
      data-background="/assets/img/choose-us-bg-2.jpg"
    >
      <div className="container">
        <div className="choose-us-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="choose-us-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Why Choose JPACabs
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Premium Cab Services in Kanyakumari
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  {`Experience hassle-free travel with Kanyakumari's most reliable taxi service.`}{" "}
                  We offer <br />
                  comfortable rides, transparent pricing, and local expertise
                  for all your travel needs.
                </p>
                <div className="choose-us-area">
                  <div className="line-shape">
                    <Image
                      src="/assets/img/line-shape2.png"
                      alt="divider"
                      width={2}
                      height={279}
                    />
                  </div>
                  <div
                    className="choose-us-items wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h3 className="number">01</h3>
                    <div className="content">
                      <h4>Safe & Comfortable Rides Across Kanyakumari</h4>
                      <p>
                        Our well-maintained AC vehicles and trained drivers
                        ensure smooth journeys to <br />
                        Vivekananda Rock, Sunset Point, and all major
                        attractions.
                      </p>
                    </div>
                  </div>
                  <div
                    className="choose-us-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h3 className="number">02</h3>
                    <div className="content">
                      <h4>24/7 Service With Local Expertise</h4>
                      <p>
                        Airport transfers, temple tours, or Kerala packages –{" "}
                        our drivers know the best <br />
                        routes and timings for perfect sightseeing experiences.
                      </p>
                    </div>
                  </div>
                  <div
                    className="choose-us-items wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h3 className="number">03</h3>
                    <div className="content">
                      <h4>Affordable Packages For Every Traveler</h4>
                      <p>
                        Choose from budget cabs, luxury cars, or tempo travelers
                        – all with fixed <br />
                        rates and no hidden charges for complete peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="choose-us-thumb">
                <Image
                  src="/assets/img/Premium Cab Services.jpg"
                  className="wow img-custom-anim-left"
                  alt="Kanyakumari taxi service"
                  width={828}
                  height={620}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose2;
