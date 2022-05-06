import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function AboutUs() {
  const employees = [
    { name: "John Doe", title: "Sales Manager", img: "assets/about/img1.jpg" },
    {
      name: "John Doe",
      title: "CEO of the AGSTC",
      img: "assets/about/img2.jpg"
    },
    {
      name: "John Doe",
      title: "CTO of the AGSTC",
      img: "assets/about/img3.jpg"
    },
    { name: "John Doe", title: "Media Manager", img: "assets/about/img4.jpg" },
    { name: "John Doe", title: "Sales Manager", img: "assets/about/img1.jpg" },
    {
      name: "John Doe",
      title: "CEO of the AGSTC",
      img: "assets/about/img2.jpg"
    },
    {
      name: "John Doe",
      title: "CTO of the AGSTC",
      img: "assets/about/img3.jpg"
    },
    { name: "John Doe", title: "Media Manager", img: "assets/about/img4.jpg" }
  ];

  return (
    <div>
      <Header background={true} page="about-us" />
      <div className="about-container">
        <div className="about-title">AG STC</div>
        <ScrollAnimation
          initiallyVisible={true}
          animateIn="fadeIn"
          animateOut="fadeOut"
          duration={1}
        >
          <div className="about-subtitle">
            Cybersecurity & IT Solutions Company
          </div>
        </ScrollAnimation>
        <div className="about-content">
          <div className="about-content-text">
            Anim amet aliquip culpa magna fugiat enim occaecat cupidatat
            incididunt consectetur commodo. Deserunt eu officia dolor commodo
            aliquip exercitation ut Lorem veniam ut nulla fugiat sint irure.
            Nisi quis mollit irure aliqua elit sunt labore Lorem exercitation.
            Consequat veniam cillum cupidatat mollit enim ex ex exercitation. Ad
            fugiat nostrud excepteur proident tempor sitm cupidatat mollit enim
            ex ex exercitation. Ad fugiat nostrud excepteur proidentxcepteur
            proident tempor sitm cupidatat molli. Ad fugiat ex tempor sit.
          </div>

          <div className="about-content-image">
            <img
              width={"100%"}
              height="380px"
              src="assets/about/about.jpg"
              alt="cybersecurity"
            />
          </div>
        </div>
      </div>
      <div className="emp-title">Team Members of AGSTC</div>
      <div className="about-slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          spaceBetween={1}
          navigation
        >
          {employees.map((emp) => (
            <SwiperSlide>
              <div className="emp-card">
                <div className="emp-image-container">
                  <img className="emp-image" src={emp.img} alt="employee" />
                </div>
                <div className="emp-background">
                  <div className="emp-info">
                    <div className="emp-text">{emp.name}</div>
                    <div className="emp-text">{emp.title}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}
