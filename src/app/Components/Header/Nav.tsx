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

      <li>
        <Link href="/sightseeing" onClick={() => setMobileToggle(false)}>
          Sightseeing
        </Link>
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
