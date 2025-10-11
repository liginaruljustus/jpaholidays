"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
export default function Header1({ variant }: any) {
  const [cabForm, setCabForm] = useState({
  name: "",
  email: "",
  phone: "",
  destination: "",
  notes: "",
});

const [cabStatus, setCabStatus] = useState("");

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
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const [cabModal, setCabModal] = useState(false); // NEW: modal toggle state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky"); // Scrolling up
      } else {
        setIsSticky("");
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 header_style_2_0 cs_style_1 header_sticky_style1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}
      >
        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image
                    src="/assets/img/logo/logo.svg"
                    alt="img"
                    width={343}
                    height={90}
                  />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button header-btn-1">
                    {/* <a
                      onClick={() => setSearchToggle(!searchToggle)}
                      className="search-trigger search-icon"
                    >
                      <i className="bi bi-search"></i>
                    </a> */}
                    <button
                      onClick={() => setCabModal(true)}
                      className="theme-btn"
                    >
                      <span>
                        Cab Service to Visit Places{" "}
                        <i className="bi bi-car-front"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`search-wrap ${searchToggle ? "active" : ""}`}>
        <div className="search-inner">
          <i
            onClick={() => setSearchToggle(!searchToggle)}
            id="search-close"
            className="bi bi-x-lg search-close"
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
     {cabModal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="modal-close" onClick={() => setCabModal(false)}>✕</button>
      <h3>Book a Cab Service</h3>
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
        ></textarea>
        <button type="submit" className="theme-btn w-full mt-2">
          Submit Request
        </button>
      </form>
      {cabStatus && <p className="mt-2">{cabStatus}</p>}
    </div>
  </div>
)}


      {/* Simple CSS (can move to global.css / module.css) */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          width: 100%;
          max-width: 450px;
          position: relative;
        }
        .modal-close {
          position: absolute;
          right: 10px;
          top: 10px;
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
        
        .cab-form textarea {
          min-height: 80px;
        }
      `}</style>
    </div>
  );
}
