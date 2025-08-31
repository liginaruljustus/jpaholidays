"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Choose1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="travel-feature-section section-padding fix"
      data-background="/assets/img/travel-bg.jpg"
    >
      <div className="shape-1 float-bob-y">
        <Image
          src="/assets/img/plane-shape1.png"
          alt="plane shape 1"
          width={218}
          height={244}
        />
      </div>
      <div className="shape-2 float-bob-x">
        <Image
          src="/assets/img/plane-shape2.png"
          alt="plane shape 2"
          width={310}
          height={459}
        />
      </div>
      <div className="container">
        <div className="feature-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Ready for your journey?
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Kanyakumari&apos;s Premier Taxi &amp; Tour Service
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  Experience comfortable and reliable transportation across
                  Kanyakumari with our professional taxi services. Whether you
                  need airport transfers, temple tours, or outstation trips, we
                  provide safe and punctual service at competitive rates.
                </p>
                <div className="feature-area">
                  <div className="line-shape">
                    <Image
                      src="/assets/img/line-shape.png"
                      alt="line shape"
                      width={1}
                      height={174}
                    />
                  </div>
                  <div
                    className="feature-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="feature-icon-item">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/08.svg"
                          alt="24/7 taxi service"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="content">
                        <h5>
                          24/7 Reliable <br />
                          Taxi Service
                        </h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li>
                        <span>
                          Available round the clock for all your
                          <br />
                          transportation needs in Kanyakumari
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="feature-items wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="feature-icon-item">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/09.svg"
                          alt="local tour guides"
                          width={29}
                          height={40}
                        />
                      </div>
                      <div className="content">
                        <h5>
                          Expert Local <br />
                          Tour Guides
                        </h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li>
                        <span>
                          Knowledgeable drivers familiar with all
                          <br />
                          Kanyakumari attractions and routes
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  Book Your Ride <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-image wow img-custom-anim-left">
                <Image
                  src="/assets/img/Premium Cab Services.jpg"
                  alt="driver illustration"
                  width={636}
                  height={577}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose1;
