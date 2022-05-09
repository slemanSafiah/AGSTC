import React from "react";

import { v4 as uuidv4 } from "uuid";
import ServiceType from "./ServiceType";
import "./services.css";

export default function ServicesComp() {
  let services = [
    {
      title: "Cyber Security Solutions",
      subServices: [
        {
          content: "IT General Control Testing (ITGC)",
          slug: "it-general-control",
          desc:
            "IT General Controls (ITGC) - ITGC can be defined as internal controls that assure the secure, stable, and reliable performance of computer hardware, software, and IT personnel connected to financial systems. ITGCs include IT risks associated with areas such as the external IT environment, change management, access controls, data backup and recovery, and third-party providers. One of the key factors about ITGC is the relevance it has on the assurance of automated controls, such as those involved with Sarbanes-Oxley Section 404 audits.In case of the absence of ITGC review, statutory auditors cannot rely upon the IT systems that are being used across the business cycles by the client. The controls tested commonly include:",
          features: [
            {
              title: "Network management : ",
              content:
                "Network management is the process of administering and managing computer networks. Services provided by this discipline include fault analysis, performance management, provisioning of networks, and maintaining the quality of service. Software that enables network administrators to perform their functions is called network management software."
            },
            {
              title: "Change management : ",
              content:
                "Change management is a collective term for all approaches to prepare, support, and help individuals, teams, and organizations in making organizational change."
            },
            {
              title: "Access security controls : ",
              content:
                "Access control is the selective restriction of access to a place or other resource while access management describes the process."
            },
            {
              title: "Access Management controls : ",
              content:
                "This involves checking the access management controls to verify the confidentiality, integrity, and availability of the system."
            }
          ],
          advantages: [
            "RELIABILITY",
            "BENCHMARKING",
            "COST SAVING",
            "EFFICIENCY"
          ],
          image: "./itgc.jpg" //? use a webpack with just require a file which is in the same folder with the component
        },
        {
          content: "Regulatory audits as per RBI/IRDA/SEBI guidelines",
          slug: "regulatory-audit"
        },
        {
          content: "Data Leakage Prevention (DLP)",
          slug: "data-leagage-prevention"
        },
        {
          content: "Privilege Access Management",
          slug: "preivilege-access-management"
        },
        {
          content: "Web Application Firewall",
          slug: "web-application-firewall"
        },
        {
          content: "Network Detection and Response (NDR)",
          slug: "network-detection-response"
        },
        {
          content: "Zero Trust Remote Access VPN",
          slug: "zero-trust-remote-access-vpn"
        },
        {
          content: "File Integrity Monitoring (FIM)",
          slug: "file-integrity-monitoring"
        },
        {
          content: "Security Information and Event Management (SIEM)",
          slug: "siem"
        },
        {
          content: "Cyber Security Awareness Platform and Phishing Simulation",
          slug: "cyber-security-awareness-platform"
        },
        {
          content: "Digital Risk Protection and Intelligence",
          slug: "digital-risk-protection"
        }
      ]
    },
    {
      title: "Technology advisory Services",
      subServices: [
        {
          content: "Vulnerability Assessment",
          slug: "vulnerability-assessment"
        },
        {
          content: "Mobile and Web Application Security",
          slug: "mobile-and-web-application-security"
        },
        {
          content: "Active Directory Penetration Testing",
          slug: "active-director"
        },
        { content: "Configuration Reviews", slug: "configuration-reviews" },
        { content: "Source Code reviews", slug: "source-code-review" },
        { content: "O365 Hardening", slug: "o365-harding" },
        {
          content: "Cyber Security Consultation",
          slug: "cyber-security-consultation"
        },
        { content: "CISO as a Service", slug: "ciso-service" },
        { content: "GDPR Assessment", slug: "gdpr-assessment" },
        { content: "IT Audit", slug: "it-audit" },
        {
          content: "ISO 22301 Implementation Assistance",
          slug: "iso-22301-implementation"
        },
        {
          content: "ISO 27001 Implementation Assistance",
          slug: "iso-27001-implementation"
        },
        { content: "Vendor Risk Assessment", slug: "vendor-risk-assessment" }
      ]
    },
    {
      title: "Cyber Process",
      subServices: [
        { content: "IT Architecture Review", slug: "it-architecture" },
        {
          content: "Cloud Security Assessment",
          slug: "cloud-security-assessment"
        },
        {
          content: "Privacy Impact Assessment",
          slug: "privacy-impact-assessment"
        }
      ]
    },
    {
      title: "Security Operation Center",
      subServices: [
        {
          content: "Digital Forensics Readiness Investigation (DFRI)",
          slug: "digital-forensics-readiness-investigation"
        },
        {
          content: "Incident Handling and Response",
          slug: "incident-handling-and-response"
        },
        { content: "Web Application Audit", slug: "web-application-audit" },
        {
          content: "Vulnerability Assessment and Penetration Testing (VAPT)",
          slug: "vapt"
        },
        {
          content: "Mobile Application Penetration Testing (MAPT)",
          slug: "mapt"
        },
        { content: "Red Team Assessment", slug: "red-team-assessment" }
      ]
    }
  ];

  return (
    <div className="sr-container">
      <div className="sr-title">We Provide To You</div>
      {services.map((type, index) => {
        return (
          <ServiceType
            key={uuidv4()}
            title={type.title}
            services={type.subServices}
            number={index}
          />
        );
      })}
    </div>
  );
}
