"use client";
import React, { useEffect, useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

interface ContactFormModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

interface CabForm {
  name: string;
  email: string;
  phone: string;
  destination: string;
  notes: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, handleClose }) => {
  const [cabForm, setCabForm] = useState<CabForm>({
    name: "",
    email: "",
    phone: "",
    destination: "",
    notes: "",
  });

  const [cabStatus, setCabStatus] = useState<string>("");

  if (!isOpen) return null;

  const handleCabChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCabForm({ ...cabForm, [e.target.name]: e.target.value });
  };

  const handleCabSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCabStatus("Sending...");

    try {
      const res = await fetch("/api/sendCab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cabForm),
      });

      const data = await res.json();

      if (res.ok) {
        setCabStatus("Request sent successfully!");
        setCabForm({ name: "", email: "", phone: "", destination: "", notes: "" });
      } else {
        setCabStatus(data.message || "Failed to send request");
      }
    } catch (err) {
      console.error(err);
      setCabStatus("Something went wrong");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>×</button>
        <h2 className='mb-2'>Book Your Trip</h2>
        <form className="cab-form" onSubmit={handleCabSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={cabForm.name}
            onChange={handleCabChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={cabForm.email}
            onChange={handleCabChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={cabForm.phone}
            onChange={handleCabChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination / Place to Visit"
            value={cabForm.destination}
            onChange={handleCabChange}
          />
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={cabForm.notes}
            onChange={handleCabChange}
          />
          <button type="submit" className="theme-btn w-full mt-2">
            Submit Request
          </button>
        </form>
        {cabStatus && <p className="mt-2">{cabStatus}</p>}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .modal-content {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .cab-form input, .cab-form textarea {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .cab-form button {
          width: 100%;
          padding: 0.75rem;
        }
      `}</style>
    </div>
  );
};

const Story1: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState<string>('about:blank');
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  const handleVideoOpen = (url: string = "https://www.youtube.com/embed/HC-tgFdIcB0") => {
    setIframeSrc(url);
    setVideoModalOpen(true);
  };

  const handleVideoClose = () => {
    setIframeSrc('about:blank');
    setVideoModalOpen(false);
  };

  const handleContactOpen = () => {
    setContactModalOpen(true);
  };

  const handleContactClose = () => {
    setContactModalOpen(false);
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="watch-video-section section-padding pb-0 fix">
      <div className="bg-shape">
        <Image src="/assets/img/map-bg.png" alt="img" width={1719} height={1132} />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Watch Our Story</span>
          <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
            Unforgettable Travel Experiences <br /> Get Your Guide
          </h2>
        </div>

        <div className="video-wrapper">
          <div className="watch-button">
            <Link href="/contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".5s">
              Contact Us<i className="bi bi-arrow-right"></i>
            </Link>

            {/* Book Now opens Contact Form Modal */}
            <a
              onClick={handleContactOpen}
              className="theme-btn style-2 wow fadeInUp wow"
              data-wow-delay=".7s"
              style={{ cursor: 'pointer' }}
            >
              Book Now<i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="video-image bg-cover" data-background="/assets/img/video-bg.jpg">
            <a
              onClick={() => handleVideoOpen()}
              className="video-btn video-popup"
              style={{ cursor: 'pointer' }}
            >
              <i className="bi bi-play-fill"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isTrue={videoModalOpen}
        iframeSrc={iframeSrc}
        handelClose={handleVideoClose}
      />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        handleClose={handleContactClose}
      />
    </section>
  );
};

export default Story1;
