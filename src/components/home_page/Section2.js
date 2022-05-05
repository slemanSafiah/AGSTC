import React from "react";

import SecurityProgram from "../SecurityProgram";

export default function Section2() {
  return (
    <div className="section-2" id="information">
      <div className="sp-title">
        <div className="sp-divider" />
        <div className="sp-title-content">
          Customer benefits of implementing cybersecurity managed services
        </div>
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
