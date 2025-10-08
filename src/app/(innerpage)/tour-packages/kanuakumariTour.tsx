import Image from "next/image";
import Link from "next/link";
import React from "react";

const Destination4 = ({ destinationContent }) => {
  return (
    <section className="popular-destination-section section-padding pb-0">
      <div className="car-shape float-bob-x">
        <Image
          src="/assets/img/destination/car.png"
          alt="img"
          width={134}
          height={124}
        />
      </div>
      <div className="container">
        <div className="row g-4">
          {destinationContent.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp wow"
              data-wow-delay=".2s"
            >
              <div className="destination-card-items mt-0">
                <div className="destination-image">
                  <Image src={item.img} alt="img" width={304} height={254} />
                  <div className="heart-icon">
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
                <div className="destination-content">
                  <ul className="meta">
                    {/* <li>
                      <i className="bi bi-geo-alt"></i>
                      {item.location}
                    </li> */}
                    {/* <li className="rating">
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>{item.rating}</p>
                    </li> */}
                  </ul>
                  <h5>
                    <Link href={item.url}>
                      {item.title}
                    </Link>
                  </h5>
                  {/* <ul className="info">
                    <li>
                      <i className="bi bi-clock"></i>
                      {item.day}
                    </li>
                    <li>
                      <i className="bi bi-person"></i>
                      {item.number}
                    </li>
                  </ul> */}
                  <div className="price">
                    {/* <h6>
                      {item.price}
                      <span>/Per day</span>
                    </h6> */}
                    <Link
                      href={item.url}
                      className="theme-btn style-2"
                    >
                      Book Now<i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination4;
