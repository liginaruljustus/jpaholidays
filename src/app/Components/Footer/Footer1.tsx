"use client";

import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Footer1: React.FC = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer
      className="footer-section fix bg-cover"
      data-background="/assets/img/footer/footer-bg.jpg"
    >
      <div className="container">
        <div className="footer-widget-wrapper-new">
          <div className="row">
            {/* Logo & Company Info */}
            <div
              className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-widget-items text-center text-lg-start d-flex flex-column align-items-center">
                <div className="widget-head mb-3">
                  <Link href="/" aria-label="JPACabs Home">
                    <Image
                      src="/assets/img/logo/white-logo.svg"
                      alt="JPACabs Logo"
                      width={343}
                      height={90}
                      priority
                    />
                  </Link>
                </div>
                <div className="footer-content d-flex flex-column align-items-center">
                  <p>
                    We specialize in Kanyakumari taxi services, offering
                    reliable airport cabs, local sightseeing tours, and
                    outstation packages to Trivandrum, Rameswaram, and Kerala.
                    With a fleet of well-maintained vehicles  we ensure safe, affordable, and
                    comfortable journeys for every traveler.
                  </p>
                  <div className="social-icon d-flex align-items-center mt-3">
                    <a href="https://facebook.com" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter / X">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>
                <ul className="list-items">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/kanyakumari-tours">Kanyakumari Tours</Link></li>
                  <li><Link href="/services">Our Services</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Our Services</h4>
                </div>
                <ul className="list-items">
                  <li><Link href="/airport-transfers">Airport Taxi Services</Link></li>
                  <li><Link href="/local-sightseeing">Local Sightseeing Tours</Link></li>
                  <li><Link href="/outstation-trips">Outstation Taxi Services</Link></li>
                  <li><Link href="/temple-tours">Temple Tour Packages</Link></li>
                  <li><Link href="/car-rentals">Self-Drive Car Rentals</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="contact-info">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="content">
                      <h6>
                        5/25A, Main Road, <br />
                        Near Hotel Singar International, <br />
                        Kanyakumari
                      </h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="mailto:info@jpacabs.com">info@jpacabs.com</a>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="tel:+916379814733">+91 6379814733</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p className="wow fadeInUp" data-wow-delay=".3s">
              © {new Date().getFullYear()} <span>JPAHolidays</span>, All Rights Reserved.
            </p>
            <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
              <li><Link href="/terms" className="text-white">Terms & Condition</Link></li>
              <li><Link href="/privacy" className="text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
