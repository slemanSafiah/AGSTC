import React from "react";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./questionnaire.css";

export default function Main() {
  let slider = ["questionnaire.png", "questionnaire1.png"];

  return (
    <div>
      <div className="q-background">
        <Carousel>
          {slider.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="q-section-2">
                <img
                  className="d-block w-100"
                  src={`assets/questionnaire/${image}`}
                  alt="First slide"
                />
                <div className="q-main">
                  <div className="q-title">
                    Security Service Scoping Questionnaire
                  </div>
                  <div className="q-sub-title">
                    use this interactive form to submit sizing/scoping
                    information for Compromise Assessment, SIEM and Various
                    Penetration Testing Services.
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
