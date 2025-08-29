import React from "react";

const Counter1 = () => {
  return (
    <section className="counter-section theme-bg fix">
      <div className="container">
        <div className="counter-wrapper">
          <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
            <div className="counter-content">
              <h2>
                <span className="count">15</span>+
              </h2>
              <p>Years in Kanyakumari</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
            <div className="counter-content">
              <h2>
                <span className="count">25000</span>+
              </h2>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
            <div className="counter-content">
              <h2>
                <span className="count">120</span>+
              </h2>
              <p>Daily Rides Completed</p>
            </div>
          </div>
          <div
            className="counter-items style-2 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="counter-content">
              <h2>
                <span className="count">500</span>+
              </h2>
              <p>Tour Packages Booked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter1;
