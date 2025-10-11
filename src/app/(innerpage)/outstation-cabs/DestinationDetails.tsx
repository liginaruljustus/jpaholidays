import Image from "next/image";
import React from "react";
import Form2 from "../../Components/Form/Form2";
import RecentBlog from "../../Components/Blog/RecentBlog";

const DestinationDetails = () => {
  return (
    <section className="destination-details-section fix section-padding pb-0">
      <div className="container">
        <div className="destination-details-wrapper">
          <div className="row g-4">

            {/* Left Content Section */}
            <div className="col-lg-8">
              <div className="destination-details-items">
                <div className="details-image">
                  <Image
                    src="/assets/img/cab/main-page/2.jpg"
                    alt="Outstation Cab Service from Kanyakumari"
                    width={856}
                    height={550}
                  />
                </div>

                <div className="details-content">
                  <h2>Outstation Cab Service in Tamil Nadu & Kerala – Travel with JP Cabs</h2>

                  <p className="mt-3">
                    JP Cabs provides reliable <strong>outstation cab services</strong> across 
                    <strong> Kanyakumari, Madurai, Rameshwaram, Trivandrum,</strong> and <strong>Kerala</strong>. 
                    Whether you’re planning a long-distance business trip, family vacation, or temple tour, 
                    our professional drivers and comfortable vehicles ensure a safe, timely, and stress-free journey.
                  </p>

                  <p className="mt-3">
                    Our <strong>outstation taxi services</strong> include one-way trips, round trips, and flexible packages 
                    tailored to your needs. With well-maintained cars ranging from sedans to SUVs, unlimited kilometers, 
                    and 24/7 support, JP Cabs is the preferred choice for travelers seeking convenience, safety, and comfort.
                  </p>

                  <div className="row g-4 mt-4 mb-4">
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/cab/inner-page/3.jpg"
                          alt="Kanyakumari to Trivandrum Cab Service"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/cab/inner-page/4.jpg"
                          alt="Outstation Cab Service Madurai"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                  </div>

                  <h3>Popular Outstation Routes</h3>
                  <ul className="mt-3 list-disc pl-5">
                    <li>Kanyakumari to Trivandrum Airport Transfer</li>
                    <li>Kanyakumari to Madurai Outstation Taxi</li>
                    <li>Kanyakumari to Rameshwaram Long-Distance Cab</li>
                    <li>Kanyakumari to Kerala Road Trips</li>
                    <li>Madurai to Rameshwaram Temple Tours</li>
                  </ul>

                  <p className="mt-4">
                    Enjoy the freedom of travel across South India with JP Cabs’ reliable <strong>outstation cab service</strong>. 
                    From scenic coastal drives to cultural and historical destinations, we provide timely pickups, 
                    professional drivers, and clean, air-conditioned vehicles for a comfortable journey.
                  </p>

                  <h3>Why Choose JP Cabs Outstation Cabs?</h3>
                  <ul className="mt-3 list-disc pl-5">
                    <li>✅ 24/7 Outstation Cab Service in Tamil Nadu & Kerala</li>
                    <li>✅ Professional and experienced drivers</li>
                    <li>✅ Wide range of vehicles – Sedans, SUVs, Luxury Cars</li>
                    <li>✅ One-way and round-trip options</li>
                    <li>✅ Affordable fares with no hidden charges</li>
                  </ul>

                  <p className="mt-4">
                    Book your <strong>outstation taxi</strong> with JP Cabs today and experience a smooth, safe, 
                    and memorable journey from Kanyakumari to Madurai, Rameshwaram, Trivandrum, or Kerala.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4">
              <div className="main-sideber">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Contact for Booking</h4>
                  </div>
                  <div className="desti-booking-form">
                    <Form2 />
                  </div>
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Recent Tours</h4>
                  </div>
                  <RecentBlog />
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
