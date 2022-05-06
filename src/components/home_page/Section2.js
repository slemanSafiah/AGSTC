import React from "react";

import SecurityProgram from "../SecurityProgram";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Section2() {
  return (
    <div className="section-2" id="information">
      <div className="sp-title">
        <div className="sp-divider" />
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animateOnce={true}
          duration={1}
        >
          <div className="sp-title-content">
            Customer benefits of implementing cybersecurity managed services
          </div>
        </ScrollAnimation>
      </div>
      <div className="sp-content">
        <SecurityProgram />
        <div className="sp-content-image">
          <img src="assets/3.png" alt="security program" />
        </div>
      </div>
    </div>
  );
}
