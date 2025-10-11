import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Privacy Policy"
      />
      <section className="popular-destination-section section-padding">
        <div className="container">
          <div className="privacy-policy-content">
            <h2>Privacy Policy</h2>
            <p className="mb-2">
              At <strong>JP Cabs</strong>, your privacy is our top priority. This Privacy Policy 
              explains how we collect, use, and protect your personal information when you use 
              our website, services, and applications.
            </p>

            <h3>1. Information We Collect</h3>
           <p className="mb-2">
              When you book a cab, contact us, or browse our website, we may collect the following 
              types of information:
            </p>
            <ul>
              <li>Personal details such as your name, email address, phone number, and billing information.</li>
              <li>Travel details including pickup and drop locations, dates, and preferences.</li>
              <li>Information automatically collected through cookies and analytics tools.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p className="mb-2">
              We use your information to provide and improve our services, including:
            </p>
           <ul className="mb-2">
  <li>✅ Processing cab bookings, payments, and confirmations.</li>
  <li>✅ Providing personalized offers, updates, and customer support.</li>
  <li>✅ Improving our website, services, and user experience.</li>
  <li>✅ Complying with legal and regulatory obligations.</li>
</ul>


            <h3>3. Data Sharing and Security</h3>
            <p className="mb-2">
              We take your privacy seriously and do not sell or rent your personal information. 
              We may share data with trusted third parties only when necessary to provide our services, 
              such as payment processors or regulatory authorities. We implement strict security measures 
              to protect your data from unauthorized access, alteration, or disclosure.
            </p>

            <h3>4. Cookies and Tracking</h3>
           <p className="mb-2">
              Our website uses cookies and similar technologies to enhance your experience. 
              Cookies help us analyze website traffic, remember preferences, and display relevant content. 
              You can manage or disable cookies through your browser settings.
            </p>

            <h3>5. Your Rights</h3>
            <p className="mb-2">
              You have the right to access, update, or delete your personal information at any time. 
              You can also opt-out of promotional communications by contacting us directly.
            </p>

            <h3>6. Children’s Privacy</h3>
            <p className="mb-2">
              JP Cabs does not knowingly collect personal information from children under 13. 
              If we become aware that we have collected information from a child without parental consent, 
              we will delete it promptly.
            </p>

            <h3>7. Changes to this Privacy Policy</h3>
           <p className="mb-2">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with the effective date. We encourage you to review the Privacy Policy periodically.
            </p>

            <h3>8. Contact Us</h3>
            <p className="mb-2">
              If you have any questions or concerns about this Privacy Policy or how we handle your personal 
              information, please contact us at: 
              <strong> jpatravelcab@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
