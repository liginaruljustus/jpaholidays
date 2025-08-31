import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team1 = () => {
  const teamContent = [
    {
      img: "/assets/img/team/1.jpg",
      name: "Rajesh Kumar",
      content: "Senior Taxi Driver & Local Guide",
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      img: "/assets/img/team/1.jpg",
      name: "Vijay Anand",
      content: "Tour Package Specialist",
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      img: "/assets/img/team/1.jpg",
      name: "Arun Prakash",
      content: "Airport Transfer Expert",
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      img: "/assets/img/team/1.jpg",
      name: "Karthik Murali",
      content: "Outstation Trip Coordinator",
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="team-section fix section-padding">
      <div className="jip-shape float-bob-x">
        <Image
          src="/assets/img/team/jip.png"
          alt="img"
          width={172}
          height={135}
        />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Meet Our Team</span>
          <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
            Professional Drivers & Local Experts
          </h2>
        </div>
        <div className="row">
          {teamContent.map((item, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow"
              data-wow-delay=".2s"
            >
              <div className="team-card-item">
                <div className="team-image">
                  <Image src={item.img} alt="img" width={306} height={348} />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team/team-details">{item.name}</Link>
                  </h4>
                  <p>{item.content}</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href={item.facebook}>
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href={item.twitter}>
                          <i className="bi bi-twitter-x"></i>
                        </a>
                      </li>
                      <li>
                        <a href={item.linkedin}>
                          {" "}
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href={item.instagram}>
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="bi bi-share"></i>
                    </span>
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

export default Team1;
