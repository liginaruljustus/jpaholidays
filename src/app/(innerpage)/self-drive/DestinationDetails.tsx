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
                    src="/assets/img/cab/main-page/4.jpg"
                    alt="Self Drive Cab Service in Kanyakumari"
                    width={856}
                    height={550}
                  />
                </div>

                <div className="details-content">
                  <h2>Self Drive Cab Service in Tamil Nadu – Explore Kanyakumari, Madurai, Rameshwaram & Kerala</h2>

                  <p className="mt-3">
                    Welcome to <strong>JP Cabs</strong> – your trusted travel partner for 
                    <strong> self-drive car rentals and cab services</strong> across <strong>Tamil Nadu</strong>. 
                    Whether you’re planning a trip from <strong>Kanyakumari</strong> to 
                    <strong> Madurai, Rameshwaram</strong>, or <strong>Kerala</strong>, 
                    our fleet of well-maintained self-driving cars gives you the freedom, comfort, 
                    and flexibility to explore at your own pace.
                  </p>

                  <p className="mt-3">
                    With <strong>JP Cabs Self Drive Service</strong>, you can rent cars for local sightseeing, 
                    family trips, business visits, or long road journeys. Choose from our wide range of 
                    vehicles — from compact hatchbacks to premium sedans and spacious SUVs — all available 
                    with affordable daily, weekly, or monthly rental plans. Enjoy complete privacy, unlimited kilometers, 
                    and 24/7 roadside support while driving through the scenic routes of Tamil Nadu and Kerala.
                  </p>

                  <div className="row g-4 mt-4 mb-4">
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/cab/inner-page/7.jpg"
                          alt="Self Drive Cars in Madurai"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/cab/inner-page/8.jpg"
                          alt="Self Drive Car Rental in Rameshwaram"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                  </div>

                  <h3>Popular Self-Drive Routes & Destinations</h3>
                  <ul className="mt-3 list-disc pl-5">
                    <li>Kanyakumari to Madurai Self-Drive Car Rental</li>
                    <li>Kanyakumari to Rameshwaram Self-Drive Trip</li>
                    <li>Kanyakumari to Trivandrum & Kerala Road Trips</li>
                    <li>Madurai to Rameshwaram Temple Tour</li>
                    <li>Local Sightseeing in Kanyakumari and Nagercoil</li>
                  </ul>

                  <p className="mt-4">
                    Explore South India’s cultural, historical, and natural wonders in total comfort. 
                    From the breathtaking sunrise at Kanyakumari beach to the divine temples of Madurai 
                    and Rameshwaram, and the lush green backwaters of Kerala — JP Cabs ensures a smooth 
                    and memorable journey with every ride.
                  </p>

                  <h3>Why Choose JP Cabs Self Drive Service?</h3>
                  <ul className="mt-3 list-disc pl-5">
                    <li>✅ 24/7 Self-Drive Car Rentals in Tamil Nadu & Kerala</li>
                    <li>✅ Wide range of vehicles – Hatchback, Sedan, SUV & Luxury Cars</li>
                    <li>✅ Affordable pricing with no hidden costs</li>
                    <li>✅ Unlimited Kilometers and Easy Pickup/Drop Options</li>
                    <li>✅ Fully sanitized, GPS-enabled, and insured vehicles</li>
                  </ul>

                  <p className="mt-4">
                    Experience the joy of self-driving through Tamil Nadu’s most beautiful destinations 
                    with <strong>JP Cabs – the best self-drive cab service in Kanyakumari</strong>. 
                    Book your car online now and start your adventure today!
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
                    <h4>Popular Tours & Routes</h4>
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
