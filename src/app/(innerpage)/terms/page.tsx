import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Terms and Conditions"
      />
      <section className="popular-destination-section section-padding">
        <div className="container">
          <div className="terms-conditions-content">
            <h2>Terms and Conditions</h2>
            <p className="mb-2">
              Welcome to <strong>JP Cabs</strong>. By using our website, services, or booking a cab through us, you agree to abide by the following terms and conditions. Please read them carefully.
            </p>

            <h3>1. Booking and Payment</h3>
            <ul className="mb-2">
              <li>✅ All bookings must be confirmed through our website, app, or official contact channels.</li>
              <li>✅ Payments must be completed before the scheduled service unless otherwise agreed.</li>
              <li>✅ JP Cabs reserves the right to cancel a booking if payment is not received on time.</li>
            </ul>

            <h3>2. Cancellations and Refunds</h3>
            <ul className="mb-2">
              <li>✅ Cancellations must be communicated via email or phone.</li>
              <li>✅ Refund policies depend on the package or service booked and may include cancellation fees.</li>
              <li>✅ JP Cabs will process refunds within a reasonable timeframe after verification.</li>
            </ul>

            <h3>3. Vehicle Use</h3>
            <ul className="mb-2">
              <li>✅ Vehicles must be used responsibly and only for the purpose stated in the booking.</li>
              <li>✅ Drivers are professionals trained for safe, courteous, and timely service.</li>
              <li>✅ Any damage caused by misuse or negligence will be charged to the customer.</li>
            </ul>

            <h3>4. Customer Responsibilities</h3>
            <ul className="mb-2">
              <li>✅ Provide accurate personal and travel information during booking.</li>
              <li>✅ Comply with local traffic and safety rules while using the service.</li>
              <li>✅ Ensure belongings are secure; JP Cabs is not responsible for lost personal items.</li>
            </ul>

            <h3>5. Limitation of Liability</h3>
            <p className="mb-2">
              JP Cabs is not liable for delays caused by weather, traffic, road conditions, or events beyond our control. We strive for timely service but cannot guarantee exact arrival times.
            </p>

            <h3>6. Outstation & Tour Services</h3>
            <ul className="mb-2">
              <li>✅ Outstation and tour packages are subject to availability and route conditions.</li>
              <li>✅ Customers are responsible for any permits, entry fees, or local taxes during tours.</li>
              <li>✅ JP Cabs reserves the right to modify itineraries for safety or operational reasons.</li>
            </ul>

            <h3>7. Intellectual Property</h3>
            <p className="mb-2">
              All content on the JP Cabs website, including images, text, and logos, is the property of JP Cabs. Unauthorized use or reproduction is prohibited.
            </p>

            <h3>8. Governing Law</h3>
            <p className="mb-2">
              These terms and conditions are governed by the laws of India. Any disputes arising from the use of JP Cabs services shall be subject to the jurisdiction of courts in Tamil Nadu.
            </p>

            <h3>9. Contact Us</h3>
            <p className="mb-2">
              For questions or clarifications regarding our Terms and Conditions, please contact us at: 
              <strong> jpatravelcab@gmail.com</strong>
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
