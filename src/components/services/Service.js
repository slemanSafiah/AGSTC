import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function Service() {
  const location = useLocation();
  const { service } = location.state;
  return (
    <div className="sr-container">
      <div className="service-title">{service.content}</div>
      <div className="service-image-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="service-image"
              src={`${require("./itgc.jpg")}`}
              alt="ITGC"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="service-image"
              src={`${require("./itgc.jpg")}`}
              alt="ITGC"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {Boolean(service.desc) && (
        <div className="service-desc">{service.desc}</div>
      )}
      {service.features?.length > 0 && (
        <div>
          {service.features.map((f) => {
            return (
              <div className="feature">
                <span className="feature-title">{f.title}</span>
                <span className="feature-content">{f.content}</span>
              </div>
            );
          })}
        </div>
      )}
      <div className="advantages-title">Advantages</div>
      <div className="advantages">
        {service.advantages.map((adv) => {
          return <div className="advantage">{adv}</div>;
        })}
      </div>
    </div>
  );
}
