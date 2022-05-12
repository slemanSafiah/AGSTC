import React, { useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CircularProgress from '@mui/material/CircularProgress';

export default function Service() {
  const location = useLocation();
  const { service } = location.state;

  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all(
      service.images.map((img) => {
        return import(`./images/${img}`);
      })
    ).then((res) => setImages(res));
  }, []);

  return (
    <div className="sr-container">
      <div className="service-title">{service.content}</div>
      <div className="service-image-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Carousel>
            {images?.length > 0 &&
              images.map((image) => (
                <Carousel.Item>
                  <img
                    className="service-image"
                    src={image.default}
                    alt="ITGC"
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </Suspense>
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
