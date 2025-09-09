import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="/tour-packages" onClick={() => setMobileToggle(false)}>
          Tour Packages
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href="/kanyakumari-tour"
                onClick={() => setMobileToggle(false)}
              >
                Kanyakumari Tours
              </Link>
            </li>
            <li>
              <Link href="/kerala-tour" onClick={() => setMobileToggle(false)}>
                Kerala Packages
              </Link>
            </li>
            <li>
              <Link
                href="/rameshwaram-tour"
                onClick={() => setMobileToggle(false)}
              >
                Rameshwaram Tours
              </Link>
            </li>
            <li>
              <Link href="/madurai-tour" onClick={() => setMobileToggle(false)}>
                Madurai Packages
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link href="/car-rental" onClick={() => setMobileToggle(false)}>
          Car Rental
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/local-cabs" onClick={() => setMobileToggle(false)}>
                Local Cabs
              </Link>
            </li>
            <li>
              <Link
                href="/outstation-cabs"
                onClick={() => setMobileToggle(false)}
              >
                Outstation Cabs
              </Link>
            </li>
            <li>
              <Link
                href="/airport-transfer"
                onClick={() => setMobileToggle(false)}
              >
                Airport Transfer
              </Link>
            </li>
            <li>
              <Link href="/self-drive" onClick={() => setMobileToggle(false)}>
                Self Drive Cars
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
  <a
    
  >
    Sightseeing
  </a>


  <div className="dropdown-menu w-100 p-4" aria-labelledby="sightseeingDropdown">
    <div className="row">
     
      <div className="col-md-3">
        <h6 className="fw-bold">Cab Services</h6>
        <ul className="list-unstyled">
          <li><a className="dropdown-item" href="/local-cabs">Local Cabs</a></li>
          <li><a className="dropdown-item" href="/outstation-cabs">Outstation Cabs</a></li>
          <li><a className="dropdown-item" href="/airport-transfer">Airport Transfer</a></li>
          <li><a className="dropdown-item" href="/self-drive">Self Drive Cars</a></li>
        </ul>
      </div>

     
      <div className="col-md-3">
        <h6 className="fw-bold">Popular Tours</h6>
        <ul className="list-unstyled">
          <li><a className="dropdown-item" href="/madurai-tour">Madurai Sightseeing</a></li>
          <li><a className="dropdown-item" href="/rameswaram-tour">Rameswaram Trip</a></li>
          <li><a className="dropdown-item" href="/kanyakumari-tour">Kanyakumari Trip</a></li>
        </ul>
      </div>

      
      <div className="col-md-3">
        <h6 className="fw-bold">Special Packages</h6>
        <ul className="list-unstyled">
          <li><a className="dropdown-item" href="/honeymoon-packages">Honeymoon Packages</a></li>
          <li><a className="dropdown-item" href="/family-trips">Family Trips</a></li>
        </ul>
      </div>

      
      <div className="col-md-3 text-center">
        <img
          src="/assets/img/destination/new/Meenakshi-Amman-Temple.jpg"
          className="img-fluid rounded shadow-sm mb-2"
          alt="Sightseeing in Tamil Nadu"
        />
        <p className="small">Discover Tamil Nadu with our curated tours.</p>
      </div>
    </div>
  </div>
</li>


      <li>
        <Link href="/customer-reviews" onClick={() => setMobileToggle(false)}>
          Customer Reviews
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
