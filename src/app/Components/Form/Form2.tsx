"use client";
import { useState, useEffect } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    destination: "", // Destination / Visiting Place
    date: "",        // Date field
    message: "",
    page: "",        // Page URL
  });

  const [status, setStatus] = useState("");

  // Set the page URL dynamically
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({ ...prev, page: window.location.href }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          destination: "",
          date: "",
          message: "",
          page: window.location.href, // keep current page
        });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="form-clt">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-clt">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-clt">
            <input
              type="text"
              name="number"
              placeholder="Your Mobile"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-clt">
            <input
              type="text"
              name="destination"
              placeholder="Destination / Visiting Place"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-clt">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-clt">
            <textarea
              name="message"
              placeholder="Type Comment Here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="col-lg-12">
          <button type="submit" className="theme-btn text-center">
            Send Now <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {status && <p className="mt-2">{status}</p>}
      </div>
    </form>
  );
};

export default Form2;
