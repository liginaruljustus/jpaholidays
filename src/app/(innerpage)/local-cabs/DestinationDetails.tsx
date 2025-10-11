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
                    src="/assets/img/cab/main-page/1.jpg"
                    alt="Kanyakumari Local Cab Services - JP Cabs"
                    width={856}
                    height={550}
                  />
                </div>
                <div className="details-content">
                  <h2>Local Cab Services in Kanyakumari – Explore South India with JP Cabs</h2>
                  <p className="mt-3">
                    Welcome to <strong>JP Cabs</strong> – your trusted local taxi and travel partner in 
                    <strong> Kanyakumari</strong>. We offer reliable, comfortable, and affordable cab services 
                    across Kanyakumari and nearby destinations including <strong>Trivandrum, Nagercoil, 
                    Madurai, Rameshwaram, and Kerala</strong>. Whether you’re traveling for business, 
                    sightseeing, or temple tours, our professional drivers and clean vehicles ensure a 
                    safe and pleasant journey.
                  </p>

                  <p className="mt-3">
                    With JP Cabs, booking a <strong>Kanyakumari local taxi</strong> is easy and convenient. 
                    We provide 24/7 service for airport transfers, railway station pickups, local sightseeing, 
                    and outstation trips. Choose from a wide range of vehicles – from economy sedans to luxury 
                    SUVs and tempo travellers – all maintained for your comfort and safety.
                  </p>

                  <div className="row g-4 mt-4 mb-4">
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/cab/inner-page/1.jpg"
                          alt="Kanyakumari to Rameshwaram Cab Service"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="details-image">
                        <Image
                          src="/assets/img/cab/inner-page/2.jpg"
                          alt="Kanyakumari to Madurai Taxi"
                          width={416}
                          height={411}
                        />
                      </div>
                    </div>
                  </div>

                  <h3>Our Popular Cab Routes</h3>
                  <ul className="mt-3 list-disc pl-5">
                    <li>Kanyakumari to Trivandrum Airport Transfer</li>
                    <li>Kanyakumari to Rameshwaram Cab Service</li>
                    <li>Kanyakumari to Madurai Taxi Booking</li>
                    <li>Kanyakumari to Nagercoil Local Trips</li>
                    <li>Kanyakumari to Kerala Tour Packages</li>
                  </ul>

                  <p className="mt-4">
                    Explore the beauty of South India with JP Cabs. From the serene beaches of Kanyakumari 
                    to the spiritual temples of Rameshwaram and Madurai, or the lush green landscapes of Kerala – 
                    we make your travel seamless and memorable. Our <strong>local cab services</strong> are ideal 
                    for families, solo travelers, and business trips alike.
                  </p>

                  <h3>Why Choose JP Cabs?</h3>
                  <ul className="mt-3 list-disc pl-5">
                    <li>✅ 24/7 Cab Service in and around Kanyakumari</li>
                    <li>✅ Professional, experienced, and polite drivers</li>
                    <li>✅ Clean, air-conditioned, GPS-enabled cars</li>
                    <li>✅ One-way and round-trip booking options</li>
                    <li>✅ Affordable prices with no hidden charges</li>
                  </ul>

                  <p className="mt-4">
                    At <strong>JP Cabs</strong>, we believe in delivering comfort, reliability, and 
                    excellent customer service. Whether you need a cab for <strong>airport transfers</strong>, 
                    <strong>local sightseeing</strong>, or <strong>outstation trips from Kanyakumari</strong>, 
                    we’ve got you covered. Book your ride now and experience smooth travel with 
                    <strong> JP Cabs – the best taxi service in Kanyakumari</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
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
                    <h4>Popular Routes & Tours</h4>
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
