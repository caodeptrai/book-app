"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Banner1 from "/public/banner1.bmp";
import Banner2 from "/public/banner2.jpg";
import Banner3 from "/public/banner3.jpg";
import Banner4 from "/public/banner4.jpg";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "185px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  position: "relative",
};

const Silde: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel autoplay={true} afterChange={onChange}>
      <div>
        <div style={contentStyle}>
          <Image
            src={Banner1}
            alt=""
            className="w-full h-full object-cover"
            fill={true}
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <Image
            src={Banner2}
            alt=""
            className="w-full h-full object-cover"
            fill={true}
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <Image
            src={Banner3}
            alt=""
            className="w-full h-full object-cover"
            fill={true}
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <Image
            src={Banner4}
            alt=""
            className="w-full h-full object-cover"
            fill={true}
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Silde;
