import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function SecurityProgramService({ title, content, mar }) {
  return (
    <ScrollAnimation
      animateIn="bounceInLeft"
      animateOut="fadeOut"
      // animateOnce={true}
      duration={1}
      delay={mar * 10}
    >
      <div style={{ marginLeft: `${mar}em` }} className="sp-service">
        <div className="sp-service-title">{title}</div>
        <div className="sp-service-content">{content}</div>
      </div>
    </ScrollAnimation>
  );
}
