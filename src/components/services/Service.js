import React, { useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Service() {
  const location = useLocation();
  const { service } = location.state;

  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("loading ...");
    Promise.all(
      service.images.map((img) => {
        return import(`./images/${img}`);
      })
    ).then((res) => {
      setImages(res);
    });
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
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{ textAlign: "center", fontFamily: "Poppins" }}>
            Description About the Service
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {Boolean(service.desc) && (
            <div className="service-desc">{service.desc}</div>
          )}
        </AccordionDetails>
      </Accordion>
      {service.features?.length > 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div style={{ textAlign: "center", fontFamily: "Poppins" }}>
              Some Features About the Service
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {service.features.map((f) => {
              return (
                <div className="feature">
                  <span className="feature-title">{f.title}</span>
                  <span className="feature-content">{f.content}</span>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
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
