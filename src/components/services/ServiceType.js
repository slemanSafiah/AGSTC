import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./swiper.css";

let backgrounds = [
  "assets/services/audit-1.png",
  "assets/services/advisory.png",
  "assets/services/cyber-process.png",
  "assets/services/4.png"
];

export default function ServiceType({ title, services, number }) {
  return (
    <div className="sr-type-container">
      <ul>
        <li>{title}</li>
      </ul>
      <div className="sr-type-background">
        <img width={"100%"} src={backgrounds[number]} alt="title" />
      </div>
      <div className="sr-type-slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}
          spaceBetween={0}
          navigation
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {services.map((service) => (
            <SwiperSlide>
              <div className="sr-card">
                <div className="sr-card-title">{service.content}</div>
                <div className="sr-card-desc">
                  <div className="sr-card-sub-title">{service.desc}</div>
                  <Link
                    className="sr-card-link"
                    to={`/service/${service.slug}`}
                    state={{ service }}
                  >
                    <div className="sr-card-button"> Details </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
