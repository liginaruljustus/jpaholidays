"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Cta3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="cta-section-2 section-padding fix">
      <div className="left-shape float-bob-x">
        <Image
          src="/assets/img/tree-shape.png"
          alt="decorative shape"
          width={180}
          height={134}
        />
      </div>
      <div className="container">
        <div
          className="cta-wrapper-2 bg-cover"
          data-background="/assets/img/cta-color-bg.jpg"
        >
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="cta-content">
                <div className="section-title">
                  <span className="sub-title text-white wow fadeInUp">
                    Limited Time Offer
                  </span>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Get 20% Off On Your First Kanyakumari Cab Booking
                  </h2>
                </div>
                <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                  Book your taxi or tour package today and explore Vivekananda
                  Rock, Sunset Point, and other attractions with our expert
                  drivers.
                </p>
                <div className="app-image wow fadeInUp" data-wow-delay=".7s">
                  <Link href="/contact">
                    <Image
                      src="/assets/img/apple-shape.png"
                      alt="Download on App Store"
                      width={180}
                      height={60}
                    />
                  </Link>
                  <Link href="/contact">
                    <Image
                      src="/assets/img/google-shape.png"
                      alt="Get it on Google Play"
                      width={200}
                      height={60}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-image">
                <Image
                  src="/assets/img/Group-phone.png"
                  alt="Mobile booking app"
                  width={512}
                  height={469}
                />
                <div className="shape float-bob-y">
                  <Image
                    src="/assets/img/cta-shape.png"
                    alt="decorative shape"
                    width={254}
                    height={145}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta3;
