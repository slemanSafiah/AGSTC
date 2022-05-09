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
          slug: "regulatory-audit",
          desc:
            "IT Advisory services to help clients align with Indian regulatory requirements such as RBI, SEBI, IRDA Cybersecurity circulars, advisories, and system audits.Assess and comply with global regulations such as GDPR, and other country-specific privacy regulations.With the rapid growth of the businesses, there has been an increasing demand for regulatory compliances, building underlying controls for the same, and mitigating risk effectively.As per the current regulatory landscape, there has been a never-ending prominence and necessity for higher standards of corporate governance, brand protection as well as a robust compliance framework.",
          advantages: [
            "IMPROVED SECURITY POSTURE",
            "MORE CREDABILITY",
            "RISK RATING IDENTIFICATION",
            "IDENTIFY AREAS OF IMPROVEMENT"
          ]
        },
        {
          content: "Data Leakage Prevention (DLP)",
          slug: "data-leagage-prevention",
          desc:
            "Data Loss Prevention (DLP) is the practice of detecting and preventing data breaches, exfiltration, or unwanted destruction of sensitive data. Organizations use DLP to protect and secure their data and comply with regulations.",
          features: [
            {
              title: "Securing data in motion : ",
              content:
                "technology installed at the network edge can analyze traffic to detect sensitive data sent in violation of security policies."
            },
            {
              title: "Securing endpoints : ",
              content:
                "endpoint-based agents can control information transfer between users, groups of users, and external parties. Some endpoint-based systems can block attempted communications in real time and provide user feedback."
            },
            {
              title: "Securing data at rest : ",
              content:
                "access control, encryption and data retention policies can protect archived organizational data."
            },
            {
              title: "Securing data in use : ",
              content:
                "some DLP systems can monitor and flag unauthorized activities that users may intentionally or unintentionally perform in their interactions with data."
            }
          ],
          advantages: [
            "EFFECTIVE",
            "PROVIDE CORPORATION WITH VISIBILTY",
            "USE MACHINE LEARNING ALGORITHMS"
          ]
        },
        {
          content: "Privilege Access Management",
          slug: "preivilege-access-management",
          desc:
            "Privileged access management, or PAM, is a security measure that allows organizations to control and monitor the activity of privileged users, including their access to key business systems and what they’re able to do once logged in. Most organizations order their systems in tiers according to the severity of the consequences should the system be breached or misused. Privileged accounts, such as domain admin and networking equipment accounts, provide administrative levels of access to high-tier systems, based on higher levels of permissions. PAM solutions help administrators to monitor access to critical business resources and ensure that these high-tier systems remain secure. This extra security layer protects critical business systems, but also encourages better governance and compliance with data regulations.",
          advantages: [
            "IMPROVE INCIDENT RESPONSE",
            "MONITOR",
            "AUDIT",
            "PREVENT ATTACKS FROM INSIDERS"
          ]
        },
        {
          content: "Web Application Firewall",
          slug: "web-application-firewall",
          desc:
            "A web application firewall (WAF) helps protect a company's web applications by inspecting and filtering traffic between each web application and the internet. A WAF can help defend web applications from attacks such as cross-site request forgery (CSRF), cross-site-scripting (XSS), file inclusion, and SQL injection",
          features: [
            {
              title: "Instant and Easy Setup :",
              content:
                "With fast provisioning and ease of deployment, a cloud firewall requires minimum configurations and maintenance support. Our experts handle the rest, saving you time and money."
            },
            {
              title: "Built-in Ruleset :",
              content:
                "Adopt a multi-layered defense strategy with a cloud-based web application firewall that combines threat intelligence from pre-defined OWASP Top 10 and industry-specific rules."
            },
            {
              title: "Comprehensive Threat Coverage :",
              content:
                "Far Beyond the OWASP Top 10, AppTrana empowers to identify threats, including API Abuse, Account Takeover, Malicious bots, Advanced Rate Limiting, App DDoS, and more."
            },
            {
              title: "Virtual Patching :",
              content:
                "quickly shields from newly identified vulnerabilities, which have not yet been patched in application source code."
            }
          ],
          advantages: [
            "PREVENT ATTACKS",
            "ENSURE COMPLIANCE",
            "FREE UP YOUR TEAM'S RESOURCES"
          ]
        },
        {
          content: "Network Detection and Response (NDR)",
          slug: "network-detection-response",
          desc:
            "Network Detection and response (NDR) is a cybersecurity solution that continuously monitors an organization’s network to detect cyber threats & anomalous behavior using non-signature-based tools or techniques and responds to these threats via native capabilities or by integrating with other cybersecurity tools/solutions.Highly performant NDR solutions use advanced machine learning and artificial intelligence tools to model adversary tactics, techniques and procedures that are mapped in the MITRE ATT&CK framework to detect attacker behaviors with high precision. They surface security-relevant context, extract high-fidelity data, correlate events across time, users, and applications to drastically reduce time and effort spent in investigations. They also stream security detections and threat correlations to security information event management (SIEM) solutions for comprehensive security assessments.",
          advantages: [
            "CONTINUOUS VISIBILITY",
            "BEHAVIORAL ANALYTICS",
            "AUTOMATICALLY RESPOND AND SHUT DOWN ATTACKS IN REAL-TIME"
          ]
        },
        {
          content: "Zero Trust Remote Access VPN",
          slug: "zero-trust-remote-access-vpn",
          desc:
            "Zero trust is a comprehensive, multi-layered approach to network security, especially in remote-work environments. VPNs don’t address network security as deeply as zero trust network access (ZTNA), relying mostly on broad network-based protection. This means zero trust can be an excellent and more secure replacement for a VPN.VPNs don’t provide granular network protection. On the other hand, zero trust network access (ZTNA) offers a much more stringent approach to security by providing adaptive access based on things like identity, time, and device-posture assessments. This gives end users isolated access to applications and data they need to effectively do their jobs, as well as significantly minimizes the risk of cyber threats, data breaches, or other network vulnerabilities.",
          advantages: [
            "COMPLIANCE INITIATIVE SUPPORTIVE",
            "PROVIDING ACCESS CONTROL",
            "UNMATCHED SECURITY"
          ]
        },
        {
          content: "File Integrity Monitoring (FIM)",
          slug: "file-integrity-monitoring",
          desc:
            "File integrity monitoring (FIM) refers to an IT security process and technology that tests and checks operating system (OS), database, and application software files to determine whether or not they have been tampered with or corrupted. FIM, which is a type of change auditing, verifies and validates these files by comparing the latest versions of them to a known, trusted “baseline.” If FIM detects that files have been altered, updated, or compromised, FIM can generate alerts to ensure further investigation, and if necessary, remediation, takes place. File integrity monitoring encompasses both reactive (forensic) auditing as well as proactive, rules-based active monitoring.",
          features: [
            {
              title: "Detecting Illicit Activity :",
              content:
                "If a cyber attacker intrudes upon your IT environment, you will need to know if they have tried to alter any files that are critical to your operating systems or applications. Even if log files and other detection systems are avoided or altered, FIM can still detect changes to important parts of your IT ecosystem. With FIM in place, you can monitor and protect the security of your files, applications, operating systems, and data."
            },
            {
              title: "Pinpointing Unintended Changes :",
              content:
                "Often, file changes are made inadvertently by an admin or another employee. Sometimes the ramifications of these changes may be small and go overlooked. Other times, they can create security backdoors, or result in dysfunction with business operations or continuity. File integrity monitoring simplifies forensics by helping you zero in on the errant change, so you can roll it back or take other remediation."
            },
            {
              title: "Verifying Update Status and Monitoring System Health :",
              content:
                "You can check if files have been patched to the latest version by scanning installed versions across multiple locations and machines with the post-patch checksum."
            },
            {
              title: "Meeting Compliance Mandates :",
              content:
                "The ability to audit changes, and to monitor and report certain types of activity is required for compliance with regulatory mandates such as GLBA, SOX, HIPAA and PCI DSS."
            }
          ],
          advantages: [
            "TO CONTROL DATA",
            "TO BECOME COMPLIANT",
            "TO IDENTIFY THE SOURCE OF ATTACKS"
          ]
        },
        {
          content: "Security Information and Event Management (SIEM)",
          slug: "siem",
          desc:
            "Security Information and Event Management (SIEM) is a software solution that aggregates and analyzes activity from many different resources across your entire IT infrastructure. SIEM collects security data from network devices, servers, domain controllers, and more. SIEM stores, normalizes, aggregates, and applies analytics to that data to discover trends, detect threats, and enable organizations to investigate any alerts. SIEM is a data aggregator, search, and reporting system. SIEM gathers immense amounts of data from your entire networked environment, consolidates and makes that data human accessible. With the data categorized and laid out at your fingertips, you can research data security breaches with as much detail as needed.",
          advantages: ["THREAT DETECTION", "INVESTIGATION", "TIME TO RESPOND"]
        },
        {
          content: "Cyber Security Awareness Platform and Phishing Simulation",
          slug: "cyber-security-awareness-platform",
          desc:
            "A cyber security awareness platform that enables you to easily manage and distribute training content, evaluate knowledge retention, while tracking and reporting participation and progress on learning outcomes.Enable efficient deployment and tracking of your training campaigns. This management platform enables you to enroll, manage and monitor your participants. The management platform provides a useful complement to your training program and allows you to better track and appropriately measure results. The powerful course assembly capabilities in our platform provide the ability to create modular, highly-targeted training campaigns, a critical factor in changing behavior over time.",
          advantages: [
            "PROTECT ASSETS",
            "EMPOWER EMPLOYEES",
            "PREVENT DOWNTIME",
            "INCREASE ADOPTION"
          ]
        },
        {
          content: "Digital Risk Protection and Intelligence",
          slug: "digital-risk-protection",
          desc:
            "Digital Risk Protection (DRP) safeguards digital assets. As more business operations embrace digital practices, the threats and attack surfaces that can be exploited by cybercriminals increase. Each organization is unique, but DRP can use the insights derived from Cyber Threat Intelligence (CTI) monitoring to highlight actionable and specific protections for all.DRP solutions are not merely a database of intelligence information. DRP platforms use intelligent algorithms plus multiple reconnaissance methods to find, track, and analyze threats in real time. Using both indicators of compromise (IOCs) and indicators of attack (IOAs) intelligence, a DRP solution can analyze risks and warn security teams of potential or imminent attacks.The data handling and analysis capabilities of DRP systems prevent security teams from being overwhelmed by intelligence data and therefore overlooking a relevant threat. DRP solutions can feed into automated response solutions. They can continuously find, monitor, and mitigate risks that target an organization’s digital assets in real time.",
          features: [
            {
              title: "Cyber Threats",
              content:
                "The digital environment is typically associated with cybersecurity risks. For example, vulnerabilities in software, malware or ransomware, and phishing attacks are all risks directly related to digital transformation"
            },
            {
              title: "Data Leakage",
              content:
                "Data breaches or leakages are digital risks related to cyber threats that can significantly harm the company’s operational, compliance, and reputational landscape."
            },
            {
              title: "Reputational Damage",
              content:
                "Digital risks do not have to be directed at the company to cause damage. Digital transformation also provides an opportunity for threat actors to conduct scams targeting a company’s customers through impersonation, website or email spoofing, or other tools that can affect the corporate brand image and reputation."
            }
          ],
          advantages: [
            "CYBER THREAT PREVENTION",
            "DARK WEB SURVEILLANCE",
            "BRAND PROTECTION"
          ]
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
