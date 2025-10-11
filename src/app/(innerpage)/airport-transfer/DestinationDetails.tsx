import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form2 from "../../Components/Form/Form2"
import RecentBlog from "../../Components/Blog/RecentBlog"

const DestinationDetails = () => {
  return (
    <section className="destination-details-section fix section-padding pb-0">
  <div className="container">
    <div className="destination-details-wrapper">
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="destination-details-items">
            <div className="details-image">
              <Image
                src="/assets/img/cab/main-page/3.jpg"
                alt="Kanyakumari to Trivandrum Cab Service"
                width={856}
                height={550}
              />
            </div>
            <div className="details-content">
              <h2>Reliable Airport Transfer & Cab Service from Kanyakumari to Trivandrum</h2>
              <p className="mt-3">
                Looking for a comfortable and reliable cab service from <strong>Kanyakumari to Trivandrum</strong>? 
                We offer hassle-free <strong>airport transfer</strong> and one-way cab services with professional drivers, 
                clean vehicles, and transparent pricing. Whether you’re heading to Trivandrum International Airport or returning 
                from a trip, we ensure a smooth, safe, and timely ride every time.
              </p>
              <p className="mt-3">
                Our <strong>Kanyakumari to Trivandrum taxi service</strong> is ideal for family trips, business travel, or 
                airport pickup and drop. We operate 24/7, providing flexible booking options and instant confirmations. 
                Choose from a wide range of vehicles — from sedans and SUVs to tempo travellers — suited for all budgets and 
                group sizes.
              </p>

              <div className="row g-4 mt-4 mb-4">
                <div className="col-md-6">
                  <div className="details-image">
                    <Image
                      src="/assets/img/cab/inner-page/5.jpg"
                      alt="Kanyakumari to Trivandrum Airport Taxi"
                      width={416}
                      height={411}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="details-image">
                    <Image
                      src="/assets/img/cab/inner-page/6.jpg"
                      alt="Trivandrum Airport Pickup and Drop Service"
                      width={416}
                      height={411}
                    />
                  </div>
                </div>
              </div>

              <p>
                We understand how important punctuality is for airport transfers. Our drivers are well-trained, 
                courteous, and familiar with the <strong>Kanyakumari to Trivandrum route</strong>, ensuring 
                a stress-free journey. Book your cab today for a comfortable and affordable airport transfer experience.
              </p>

              <ul className="mt-3 list-disc pl-5">
                <li>✅ One-way & round-trip cab service</li>
                <li>✅ Airport pickup and drop to Trivandrum</li>
                <li>✅ Clean, air-conditioned cars</li>
                <li>✅ Professional, experienced drivers</li>
                <li>✅ 24/7 customer support and easy online booking</li>
              </ul>

              <p className="mt-4">
                Book your <strong>Kanyakumari to Trivandrum taxi</strong> now and enjoy a smooth travel experience with 
                our trusted cab service. Experience comfort, safety, and affordability — all in one ride!
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="main-sideber">
            <div className="single-sidebar-widget">
              <div className="wid-title">
                <h4>Book Your Cab</h4>
              </div>
              <div className="desti-booking-form">
                <Form2 />
              </div>
            </div>
            <div className="single-sidebar-widget">
              <div className="wid-title">
                <h4>Popular Routes</h4>
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
