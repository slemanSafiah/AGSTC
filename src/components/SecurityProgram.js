import React from "react";
import SecurityProgramService from "./SecurityProgramService";

export default function SecurityProgram() {
  let services = [
    {
      mar: 12,
      title: "1. Awareness & Training",
      content:
        "To keep educating and uphold awareness among employees about cybersecurity knowledge for current decision making",
    },
    {
      mar: 10,
      title: "2. Risk Assessment",
      content:
        "To identify the existing security risks in a prioritized order based on system vulnerabilities and incident impact level",
    },
    {
      mar: 8,
      title: "3. Policies & Procedures",
      content:
        "to define the most particular policies and procedures for avoiding any gap between three main pilars-people, processes, and applied technology at the site",
    },
    {
      mar: 8,
      title: "4. Business Case Development",
      content:
        "To create the investment business case and build a security roadmap plan for the mid to long term considering the budget and achievable goals",
    },
    {
      mar: 10,
      title: "5. Design & Implementation Phase",
      content:
        "To implement defense-in-depth security countermeasures for keeping the operation availability at the highest level",
    },
    {
      mar: 12,
      title: "6. Managed Service Phase",
      content:
        "To implement enterprise-wide security managed services for timely monitoring, protection, and response at the first view",
    },
  ];

  return (
    <div>
      {services.map((service) => (
        <SecurityProgramService
          title={service.title}
          content={service.content}
          mar={service.mar}
        />
      ))}
    </div>
  );
}
