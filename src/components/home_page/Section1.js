import React from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Section1() {
  let navigate = useNavigate();

  return (
    <div className="section-1">
      <div className="background">
        <Carousel>
          <Carousel.Item>
            <div>
              <video autoPlay muted loop className="video-background">
                <source src="assets/backgrounf-video.mp4" type="video/mp4" />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="section-2">
              <img
                className="d-block w-100"
                src="assets/backgrounf-2.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="section-2">
              <img
                className="d-block w-100"
                src="assets/backgrounf-4.jpg"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="title">
        <span>ag</span> CTS
      </div>

      <div className="sub-title">Cyber Tech Solution</div>

      <div className="buttons">
        <a style={{ textDecoration: "none" }} href="/#information">
          <div className="button-primary">Learn More</div>
        </a>
        <div
          className="button-secondary"
          onClick={() => {
            navigate("/services");
          }}
        >
          Services
        </div>
      </div>
    </div>
  );
}
