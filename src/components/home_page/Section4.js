import React from "react";

import Card from "../Card";
import Article from "../Article";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Section4() {
  let services = [
    {
      src: "assets/services/Data-Privacy.png",
      title: "Data Privacy",
      desc: "Collect, process, store data responsibly, Give control of personal data to user by managing their consent and building process to help them exercise their rights.",
    },
    {
      src: "assets/services/Data-Security.png",
      title: "Data Security",
      desc: "Can help encrypt your most critical data and organizational interests with our best-in-class Data Security services.",
    },
    {
      src: "assets/services/Microsoft.png",
      title: "Cloud Security",
      desc: "Can assist your security needs at any stages of your cloud journey with our highly experienced and certified cloud security architects and technology evangelists.",
    },
    {
      src: "assets/services/Network-Security.png",
      title: "Network Security",
      desc: "Network is the nerve of your organization's data, Paramount protects your networks against communication leaks are not happening.",
    },
  ];

  let articles = [
    {
      title: "THE GOOD 'BAD GUYS ' - WHAT IS RED TEAM ASSESSMENT?",
      desc: "Tuesday, 11, February, 2020",
    },
    {
      title:
        "Top 5 Questions You Should Ask When Evaluation An Industry Management Solution.",
      desc: "Thursday, 20, February, 2021",
    },
    {
      title:
        "What Are The Top 5 Questions Organizations Should Ask Their Potential Access Management.",
      desc: "Tuesday, 18, March, 2022",
    },
    {
      title:
        "Top 5 Questions You Should Ask When Evaluation An Industry Management Solution.",
      desc: "Thursday, 20, February, 2021",
    },
    {
      title:
        "What Are The Top 5 Questions Organizations Should Ask Their Potential Access Management.",
      desc: "Tuesday, 18, March, 2022",
    },
  ];
  return (
    <div>
      <img src="assets/10.svg" alt="01" className="zero-one-background" />
      <img src="assets/shield.svg" alt="01" className="shield-background" />
      <img
        className="cs-background"
        src="assets/cyber-back.svg"
        alt="cybersecurity"
      />
      <div className="sc-title">Building Cybersecurity</div>;
      <div className="sc-card-container">
        <Grid container spacing={8} columnSpacing={11}>
          {" "}
          {services.map((service) => (
            <Card src={service.src} title={service.title} desc={service.desc} />
          ))}
          <Card info={1} />
        </Grid>
      </div>
      <div className="articles-title">Latest Articles</div>
      <div className="articles-swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          spaceBetween={60}
        >
          {articles.map((article) => (
            <SwiperSlide>
              <Article title={article.title} desc={article.desc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
