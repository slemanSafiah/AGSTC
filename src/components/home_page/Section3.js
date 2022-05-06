import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Section3() {
  return (
    <div className="section-3">
      <img src="assets/4.png" alt="cybersecurity" />
      <div className="audit-content">
        <div className="audit-content-details">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1}>
            <div className="audit-title">Audit and Compliance</div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1}
            delay={500}
          >
            <div className="audit-subtitle">
              {" "}
              Some dummy data about the audit and cybersecurity services and
              some description about it t the audit and cybersecurity services
              and some description about it
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1}
            delay={1000}
          >
            <span className="audit-button">Learn More</span>
          </ScrollAnimation>
        </div>
        <img src="assets/audit.png" alt="audit" />
      </div>
    </div>
  );
}
