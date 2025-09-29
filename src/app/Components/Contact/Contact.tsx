import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact-us-section fix section-padding">
                <div className="container">
                    <div className="row">
                        {/* Address */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/18.svg" alt="img" width={70} height={70} />
                                    </div>
                                    <div className="content">
                                        <h3>Our Address</h3>
                                        <p>
                                            5/25A1, Cape Rd, near Hotel Singaar International, <br />
                                            Kanniyakumari, Tamil Nadu 629702
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main style-2">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/19.svg" alt="img" width={70} height={70} />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <a href="mailto:jpatravelcab@gmail.com">jpatravelcab@gmail.com</a>
                                        </h3>
                                        <p>Email us anytime for any kind of query.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/20.svg" alt="img" width={70} height={70} />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <a href="tel:06379814733">Hot: 063798 14733</a>
                                        </h3>
                                        <p>Call us for any support, we are happy to help.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-us-section-2 section-bg-2 fix">
                <div className="container">
                    <div className="contact-us-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="contact-us-contact">
                                    <div className="section-title">
                                        <span className="sub-title text-white wow fadeInUp">
                                            Contact us
                                        </span>
                                        <h2 className="text-white wow fadeInUp wow" data-wow-delay=".2s">
                                            Send Message Anytime
                                        </h2>
                                    </div>
                                    <div className="comment-form-wrap">
                                        <form action="#" id="contact-form" method="POST">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="email" id="email4" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <button type="submit" className="theme-btn">
                                                        Submit Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="map-area">
                                    <div className="google-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.914158971325!2d77.546201214763!3d8.087946494189953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0496f8fc786b49%3A0xe6e49d8d9e6a8f7e!2s5%2F25A1%2C%20Cape%20Rd%2C%20near%20Hotel%20Singaar%20International%2C%20Kanniyakumari%2C%20Tamil%20Nadu%20629702!5e0!3m2!1sen!2sin!4v1695975940743!5m2!1sen!2sin"
                                            loading="lazy"
                                            width="100%"
                                            height="450"
                                            style={{ border: 0 }}
                                            
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
