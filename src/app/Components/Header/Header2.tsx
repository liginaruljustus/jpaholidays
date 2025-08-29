"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

export default function Header2({ variant }: any) {
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
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 header_style_2_1 cs_style_1 header_sticky_style1 ${
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
                    src="/assets/img/logo/white-logo.svg"
                    alt="img"
                    width={213}
                    height={55}
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
                    {/* 🔘 Cab Service Button */}
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

      {/* 🔍 Search (unchanged) */}
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

      {/* 🚕 Cab Service Modal */}
      {cabModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setCabModal(false)}>
              ✕
            </button>
            <h3>Book a Cab Service</h3>
            <form className="cab-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Destination / Place to Visit" />
              <textarea placeholder="Additional Notes"></textarea>
              <button type="submit" className="theme-btn w-full mt-2">
                Submit Request
              </button>
            </form>
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
        .cab-form input,
        .cab-form textarea {
          width: 100%;
          margin-bottom: 12px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .cab-form textarea {
          min-height: 80px;
        }
      `}</style>
    </div>
  );
}
