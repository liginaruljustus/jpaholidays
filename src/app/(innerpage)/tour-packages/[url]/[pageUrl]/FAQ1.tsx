"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type FAQ = {
  title: string;
  content: string;
};


type Props = {
  faq: FAQ[];
};

const Faq1 = ({ faq }: Props) => {
  const accordionContentRef = useRef<HTMLDivElement | null>(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index: number) => {
    setOpenItemIndex(index === openItemIndex ? -1 : index);
  };

  useEffect(() => {
    if (firstItemOpen && faq.length > 0) {
      setOpenItemIndex(0); // open first item initially
      setFirstItemOpen(false);
    }
  }, [firstItemOpen, faq]);

  if (!faq || faq.length === 0) return null; // ✅ don't render if no FAQs

  return (
    <section className="faq-section  pt-0 fix">
      <div className="left-shape float-bob-y">
        <Image
          src="/assets/img/tree-shape-2.png"
          alt="img"
          width={221}
          height={241}
        />
      </div>
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Choose Your Place
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Frequently Asked Questions
                  </h2>
                </div>
                <p className="mt-3 mt-mb-0 wow fadeInUp" data-wow-delay=".5s">
                  Find answers to the most common questions travelers ask before
                  planning their trip.
                </p>
                <ul className="faq-list wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    <Image
                      src="/assets/img/icon/15.svg"
                      alt="icon"
                      width={14}
                      height={12}
                    />
                    Top quality service
                  </li>
                  <li>
                    <Image
                      src="/assets/img/icon/15.svg"
                      alt="icon"
                      width={14}
                      height={12}
                    />
                    Most Adventure Tour Ever
                  </li>
                </ul>
              </div>
            </div>

            {/* Accordion Section */}
            <div className="col-lg-6">
              <div className="faq-items">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faq.map((item, index) => {
                      const collapseId = `faq-item-${index}`;
                      return (
                        <div
                          key={index}
                          className={`accordion-item mb-3 wow fadeInUp ${
                            index === openItemIndex ? "active" : ""
                          }`}
                          data-wow-delay=".1s"
                        >
                          <h5
                            onClick={() => handleItemClick(index)}
                            className="accordion-header"
                          >
                            <button
                              className={`accordion-button ${
                                index === openItemIndex ? "" : "collapsed"
                              }`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded={index === openItemIndex}
                              aria-controls={collapseId}
                            >
                              {item.title}
                            </button>
                          </h5>
                          <div
                            ref={accordionContentRef}
                            id={collapseId}
                            className={`accordion-collapse collapse ${
                              index === openItemIndex ? "show" : ""
                            }`}
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              <div
                                className="mt-3"
                                dangerouslySetInnerHTML={{
                                  __html: item.content,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* End Accordion */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq1;
