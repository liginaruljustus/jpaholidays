import Image from "next/image";
import Link from "next/link";
import React from "react";

const About2 = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/assets/img/about/03.jpg"
                  className="wow img-custom-anim-left"
                  alt="Kanyakumari taxi and cab services"
                  width={330}
                  height={512}
                />
                <div className="shape-image float-bob-y">
                  <Image
                    src="/assets/img/about/04.png"
                    alt="Travel shape design"
                    width={196}
                    height={109}
                  />
                </div>
                <div className="group-image float-bob-x">
                  <Image
                    src="/assets/img/about/group.png"
                    alt="Tour group illustration"
                    width={170}
                    height={50}
                  />
                </div>
                <div className="about-image-2">
                  <Image
                    src="/assets/img/about/05.jpg"
                    className="wow img-custom-anim-top"
                    alt="Tour package showcase"
                    width={284}
                    height={411}
                  />
                  <div className="plane-shape">
                    <Image
                      src="/assets/img/about/plane-shape2.png"
                      alt="Air travel illustration"
                      width={370}
                      height={205}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Kanyakumari&apos;s Trusted Travel Partner
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Premium Taxi, Cab &amp; Tour Services in Kanyakumari
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We specialize in Kanyakumari taxi services, offering reliable
                  airport cabs, local sightseeing tours, and outstation packages
                  to Trivandrum, Rameswaram, and Kerala. With a fleet of
                  well-maintained vehicles (Innova, Tempo Travellers, luxury
                  cars), we ensure safe, affordable, and comfortable journeys
                  for every traveler.
                </p>

                <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                  <div className="about-icon-items">
                    <div className="icon">
                      <Image
                        src="/assets/img/check.png"
                        alt="Kanyakumari taxi booking"
                        width={34}
                        height={30}
                      />
                    </div>
                    <div className="content">
                      <h5>
                        Easy Booking <br /> for Kanyakumari Cabs
                      </h5>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Instant confirmation for Kanyakumari one-day tours,
                      Tiruvendur temple trips, and airport transfers.
                    </p>
                  </div>
                </div>

                <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                  <div className="about-icon-items">
                    <div className="icon">
                      <Image
                        src="/assets/img/check.png"
                        alt="Kanyakumari tour packages"
                        width={34}
                        height={30}
                      />
                    </div>
                    <div className="content">
                      <h5>
                        Best Kanyakumari <br /> Tour Packages
                      </h5>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Customized Kanyakumari–Munnar, Kovalam beach, and
                      Kodaikanal hill station itineraries.
                    </p>
                  </div>
                </div>

                <div className="about-items wow fadeInUp" data-wow-delay=".7s">
                  <div className="about-icon-items">
                    <div className="icon">
                      <Image
                        src="/assets/img/check.png"
                        alt="Kanyakumari low-price cabs"
                        width={34}
                        height={30}
                      />
                    </div>
                    <div className="content">
                      <h5>
                        Affordable <br /> Taxi Services
                      </h5>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Budget-friendly fares for Kanyakumari local sightseeing,
                      Trivandrum drops, and monthly rentals.
                    </p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  Explore Our Fleet &amp; Packages{" "}
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
