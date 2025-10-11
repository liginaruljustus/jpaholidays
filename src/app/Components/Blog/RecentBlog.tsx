import Image from "next/image";
import Link from "next/link";

const RecentBlog = () => {
  return (
    <>
      <div className="recent-post-area">
        {/* Tour Package 1 */}
        <div className="recent-items">
          <div className="recent-thumb">
            <Image
             src="/assets/img/recentblog/kanyakurmai.jpg"
              alt="Kanyakumari Full Day Sightseeing"
              width={100}
              height={100}
            />
          </div>
          <div className="recent-content">
            <div className="star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <h6>
              <Link href="/tours/kanyakumari-full-day">
                Kanyakumari Full Day Sightseeing
              </Link>
            </h6>
            {/* <span className="price-text">
              From: <b>$99</b>
            </span> */}
          </div>
        </div>

        {/* Tour Package 2 */}
        <div className="recent-items">
          <div className="recent-thumb">
            <Image
             src="/assets/img/recentblog/madurai.jpg"
              alt="Madurai Temple Tour"
              width={100}
              height={100}
            />
          </div>
          <div className="recent-content">
            <div className="star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <h6>
              <Link href="/tours/madurai-temple">
                Madurai Temple Tour
              </Link>
            </h6>
            {/* <span className="price-text">
              From: <b>$120</b>
            </span> */}
          </div>
        </div>

        {/* Tour Package 3 */}
        <div className="recent-items">
          <div className="recent-thumb">
            <Image
             src="/assets/img/recentblog/rameshwaram.jpg"
              alt="Rameshwaram Pilgrimage Tour"
              width={100}
              height={100}
            />
          </div>
          <div className="recent-content">
            <div className="star">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <h6>
              <Link href="/tours/rameshwaram-pilgrimage">
                Rameshwaram Pilgrimage Tour
              </Link>
            </h6>
            {/* <span className="price-text">
              From: <b>$150</b>
            </span> */}
          </div>
        </div>

        {/* Optional: Add more tour packages here */}
      </div>
    </>
  );
};

export default RecentBlog;
