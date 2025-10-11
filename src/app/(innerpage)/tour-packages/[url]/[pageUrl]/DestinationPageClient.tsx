import Image from "next/image";
import React from "react";
import Faq1 from "./FAQ1"; // import your FAQ component
import Form2 from "../../../../Components/Form/Form2"

type FAQ = { title: string; content: string };

type InnerPage = {
  header: string;
  tage: string;
  img: string;
  description: string;
  description2:string;
  description3:string;
  faq?: FAQ[];
};

type Props = {
  innerpage?: InnerPage | null;
};

const DestinationDetails = ({ innerpage }: Props) => {
  if (!innerpage) {
    return <h1>Destination details not found</h1>;
  }

  const faqForAccordion = innerpage.faq?.map((item) => ({
    title: item.title,
    content: item.content,
  }));

  return (
    <section className="destination-details-section fix section-padding">
      <div className="container">
        <div className="destination-details-wrapper">
          <div className="row g-4">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="destination-details-items">
                <div className="row g-4">
<div className="col-lg-12">
  <h2>{innerpage.header}</h2>
  <p className="mb-0">
    <strong>Type:</strong>{" "}
    <span style={{ color: "#ff5722", fontWeight: "bold" }}>
      {innerpage.tage}
    </span>
  </p>
</div>

                  {innerpage.img && (
                    
                    <div className="col-lg-6">
                      <div className="details-image mb-4">
                        <Image
                          src={innerpage.img}
                          alt={innerpage.header}
                          width={856}
                          height={550}
                        />
                      </div>
                    </div>
                  )}
                 <div className="col-lg-6">
  <div className="details-content mt-0">
    {innerpage.description && (
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: innerpage.description }}
      ></div>
    )}
    {innerpage.description2 && (
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: innerpage.description2 }}
      ></div>
    )}
   
  </div>
</div>
<div className="col-lg-12 "> {innerpage.description3 && (
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: innerpage.description3 }}
      ></div>
    )}</div>

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
                   <Form2/>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sidebar */}
          </div>

          {/* FAQ Section – render after the entire row */}
          {faqForAccordion && faqForAccordion.length > 0 && (
            <div className="mt-5">
              <Faq1 faq={faqForAccordion} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;
