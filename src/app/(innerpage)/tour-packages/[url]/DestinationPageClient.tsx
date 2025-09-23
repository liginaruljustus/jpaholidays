"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import Faq1 from "../../../Components/DestinationFAQ/Faq1";
import Cta3 from "../../../Components/Cta/Cta3";
import Link from 'next/link';
import Image from 'next/image';

type TourItem = {
  img: string;
  location: string;
  title: string;
  rating: string;
  day: string;
  number: string;
  price: string;
  url?:string
};

type DestinationData = {
  [key: string]: TourItem[]; // 'family', 'marriage', etc.
};

export default function DestinationPageClient() {
  const params = useParams();
  const slug = Array.isArray(params.url) ? params.url[0] : params.url;

  const [tours, setTours] = useState<TourItem[]>([]);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await fetch("/data/family.json"); // file in /public/data/family.json
        const data: DestinationData = await res.json();
        setTours(data[slug] || []); // dynamically select tours based on slug
      } catch (error) {
        console.error("Error loading destination:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!tours.length) {
    return <p className="text-center">Loading or not found...</p>;
  }

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title={slug?.charAt(0).toUpperCase() + slug?.slice(1) || "Destination"}
      />

      <section className="popular-destination-section section-padding pt-120 pb-0">
        <div className="car-shape float-bob-x">
          <Image src="/assets/img/destination/car.png" alt="img" width={134} height={124} />
        </div>
        <div className="container">
          <div className="section-title-area justify-content-between">
            <div className="section-title">
              <span className="sub-title wow fadeInUp">Best Recommended Places</span>
              <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                Popular Destination we offer for all
              </h2>
            </div>
            {/* <Link href="/tour/tour-details" className="theme-btn wow fadeInUp wow" data-wow-delay=".5s">
              View All Tour<i className="bi bi-arrow-right"></i>
            </Link> */}
          </div>

          <div className="row">
            {tours.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".2s">
                <div className="destination-card-items">
                  <div className="destination-image">
                    <Image src={item.img} alt={item.title} width={304} height={254} />
                    <div className="heart-icon">
                      <i className="bi bi-heart"></i>
                    </div>
                  </div>
                  <div className="destination-content">
                    <ul className="meta">
                      <li>
                        <i className="bi bi-geo-alt"></i> {item.location}
                      </li>
                      <li className="rating">
                        <div className="star"><i className="bi bi-star-fill"></i></div>
                        <p>{item.rating}</p>
                      </li>
                    </ul>
                    <h5>
                      <Link href="/tour/tour-details">{item.title}</Link>
                    </h5>
                    {/* <ul className="info">
                      <li><i className="bi bi-clock"></i> {item.day}</li>
                      <li><i className="bi bi-person"></i> {item.number}</li>
                    </ul> */}
              <div className="price">
  {item.url ? (
    <Link href={`./${item.url}`} className="theme-btn style-2">
      View More <i className="bi bi-arrow-right"></i>
    </Link>
  ) : (
    <span className="text-muted">Details not available</span>
  )}
</div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta3></Cta3>
    </div>
  );
}
