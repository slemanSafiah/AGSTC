import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Section1() {
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
          {/* <Carousel.Item>
            <div className="section-2">
              <img
                className="d-block w-100"
                src="assets/backgrounf-3.jpg"
                alt="Second slide"
              />
            </div>
          </Carousel.Item> */}
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

      <div className="title">AG STC</div>
      <div className="sub-title">Cyber Security & IT Solution Company</div>
      <div className="buttons">
        <a style={{ textDecoration: "none" }} href="/#information">
          <div className="button-primary">Learn More</div>
        </a>
        <Link style={{ textDecoration: "none" }} to="/services">
          <div className="button-secondary">Services</div>
        </Link>
      </div>
    </div>
  );
}
