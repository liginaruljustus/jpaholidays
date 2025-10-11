import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form2 from "../../Components/Form/Form2"

const DestinationDetails = () => {
  return (
    <section className="destination-details-section fix section-padding">
      <div className="container">
        <div className="destination-details-wrapper">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="destination-details-items">
                <div className="details-image">
                  <Image
                    src="/assets/img/destails/desti-details.jpg"
                    alt="img"
                    width={856}
                    height={550}
                  />
                </div>
                <div className="details-content">
                  <h2>Explore the Beautiful Charm of South Africa</h2>
                  <p className="mt-3">
                    Consectetur adipisicing elit sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. ut enim ad
                    minim veniam made of owl the quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea dolor commodo
                    consequat duis aute irure and dolor in reprehenderit.Nullam
                    semper quam mauris nec mollis felis aliquam eu ut non
                    gravida mi quam mauris nec mollis felis aliquam eu ut
                    phasellus.
                  </p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At volutpat diam ut venenatis tellus in metus. Sem
                    et tortor consequat id porta. Et malesuada fames ac turpis
                    egestas sed. Condimentum vitae sapien pellentesque habitant
                    morbi tristique senectus et.
                  </p>
                  <div className="row g-4 mt-4 mb-4">
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/destails/desti-details-2.jpg"
                          alt="img"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/destails/desti-details-3.jpg"
                          alt="img"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    Consectetur adipisicing elit sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. ut enim ad
                    minim veniam made of owl the quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea dolor commodo
                    consequat duis aute irure and dolor in reprehenderit.Nullam
                    semper quam mauris nec mollis felis aliquam eu ut non
                    gravida mi quam mauris nec mollis felis aliquam eu ut
                    phasellus.
                  </p>
                </div>
                
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-sideber">
                
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Contact for Booking</h4>
                  </div>
                  <div className="desti-booking-form">
                   <Form2/>
                  </div>
                </div>
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
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
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
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
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
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <Image
                          src="/assets/img/destails/pp3.jpg"
                          alt="img"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="recent-content">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;
