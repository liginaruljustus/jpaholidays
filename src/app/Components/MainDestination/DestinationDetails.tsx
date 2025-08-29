import Image from "next/image";
import Link from "next/link";
import React from "react";

type Destination = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  images: string[];
  mapEmbed: string;
};

type Props = {
  destination: Destination | null;
};

const DestinationDetails = ({ destination }: Props) => {
  if (!destination) {
    return <h1>Destination not found</h1>;
  }

  return (
    <section className="destination-details-section fix section-padding">
      <div className="container">
        <div className="destination-details-wrapper">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="destination-details-items">
                <div className="row g-4">
                  {" "}
                  <div className="col-lg-6">
                    {destination.images[0] && (
                      <div className="details-image mb-4">
                        <Image
                          src={destination.images[0]}
                          alt="main img"
                          width={856}
                          height={550}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <div className="details-content">
                      <h2>{destination.title}</h2>
                      <div
                        className="mt-3"
                        dangerouslySetInnerHTML={{
                          __html: destination.description1,
                        }}
                      ></div>
                      <div
                        className="mt-3"
                        dangerouslySetInnerHTML={{
                          __html: destination.description2,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Main Image */}

                {/* Description */}
                <div className="details-content">
                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{
                      __html: destination.description3,
                    }}
                  ></div>

                  {/* Other Images */}
                  {/* <div className="row g-4 mt-4 mb-4">
                    {destination.images.slice(1).map((img, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="details-image">
                          <Image
                            src={img}
                            alt={`img ${idx}`}
                            width={416}
                            height={411}
                          />
                        </div>
                      </div>
                    ))}
                  </div> */}
                </div>

                {/* Map */}
                <div className="map-area">
                  <h3>View in Map</h3>
                  <div className="google-map">
                    <iframe
                      src={destination.mapEmbed}
                      loading="lazy"
                      style={{ width: "100%", height: "450px", border: 0 }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="main-sideber">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Contact for Booking</h4>
                  </div>
                  <div className="desti-booking-form">
                    <form action="#" method="POST">
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="email"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <textarea
                              name="message"
                              placeholder="Type Comment Here"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="theme-btn text-center"
                          >
                            Send Now <i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Recent Tours (static for now) */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Recent Tours</h4>
                  </div>
                  <div className="recent-post-area">
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <Image
                          src="/assets/img/destails/pp1.jpg"
                          alt="img"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="recent-content">
                        <h6>
                          <Link href="/blog/blog-details">
                            Enrich Your Mind Envision Your Future Education for
                            Success
                          </Link>
                        </h6>
                        <span className="price-text">
                          From:<b>$171</b>
                        </span>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <Image
                          src="/assets/img/destails/pp2.jpg"
                          alt="img"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="recent-content">
                        <h6>
                          <Link href="/blog/blog-details">
                            Meet Skeleton Svelte Taile Sindey For Reactive UIs
                          </Link>
                        </h6>
                        <span className="price-text">
                          From:<b>$171</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;
