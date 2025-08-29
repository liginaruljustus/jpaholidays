import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div>
      <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
        {parse(subTitle)}{" "}
        <Image
          src="/assets/images/icon/fireIcon.svg"
          alt="fire icon"
          width={20}
          height={20}
        />
      </div>
      <h2 className="title wow fadeInUp" data-wow-delay=".4s">
        {parse(title)}
      </h2>
    </div>
  );
};

export default SectionTitle;
