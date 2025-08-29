import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DestinationCardProps {
  img: string;
  title: string;
  content: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ img, title, content }) => {
  return (
    <div className="new-top-desti-thumb">
      <Image
        src={img}
        alt={title || "Destination image"}
        width={400} // set a default width (adjust based on design)
        height={250} // set a default height
        className="w-100 h-auto object-cover rounded-md"
      />
      <Link href="/destination/destination-details" className="icon img-popup2">
        <i className="bi bi-plus-lg"></i>
      </Link>
      <div className="content">
        <h4>
          <Link href="/destination/destination-details">{title}</Link>
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
