import React, { useState } from "react";

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
          images: ["itgc.jpg", "itgc-1.jpg"],
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
          images: ["regulatory-audit.jpg", "regulatory-audit-1.jpg"],
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
          images: ["dlp.jpg", "dlp-1.jpg"],
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
          images: ["pam.jpg", "pam-1.jpg"],
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
          images: ["waf.jpg", "waf-1.png"],
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
          images: ["ndr.jpg", "ndr-1.jpg"],
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
          images: ["vpn.jpg", "vpn-1.jpg"],
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
          images: ["fim.jpg", "fim-1.jpg"],
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
          images: ["siem.jpg", "siem-1.png"],
          desc:
            "Security Information and Event Management (SIEM) is a software solution that aggregates and analyzes activity from many different resources across your entire IT infrastructure. SIEM collects security data from network devices, servers, domain controllers, and more. SIEM stores, normalizes, aggregates, and applies analytics to that data to discover trends, detect threats, and enable organizations to investigate any alerts. SIEM is a data aggregator, search, and reporting system. SIEM gathers immense amounts of data from your entire networked environment, consolidates and makes that data human accessible. With the data categorized and laid out at your fingertips, you can research data security breaches with as much detail as needed.",
          advantages: ["THREAT DETECTION", "INVESTIGATION", "TIME TO RESPOND"]
        },
        {
          content: "Cyber Security Awareness Platform and Phishing Simulation",
          slug: "cyber-security-awareness-platform",
          images: ["csa.jpg", "csa-1.jpg"],
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
          images: ["drp.jpg", "drp-1.jpg"],
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
          slug: "vulnerability-assessment",
          images: ["va.jpg", "va-1.jpg"],
          desc:
            "A vulnerability assessment is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation, if and whenever needed. There are several types of vulnerability assessments. These include: ",
          features: [
            {
              title: "Host assessment :",
              content:
                "The assessment of critical servers, which may be vulnerable to attacks if not adequately tested or not generated from a tested machine image."
            },
            {
              title: "Network and wireless assessment :",
              content:
                "The assessment of policies and practices to prevent unauthorized access to private or public networks and network-accessible resources."
            },
            {
              title: "Database assessment :",
              content:
                "The assessment of databases or big data systems for vulnerabilities and misconfigurations, identifying rogue databases or insecure dev/test environments, and classifying sensitive data across an organization’s infrastructure."
            },
            {
              title: "Application scans :",
              content:
                "The identifying of security vulnerabilities in web applications and their source code by automated scans on the front-end or static/dynamic analysis of source code."
            }
          ],
          advantages: [
            "EFFECTIVENESS OF CURRENT SECURITY SAFEGUARDS",
            "PROVIDE A QUAANTIFIABLE VALUE TO THE RISK INTERNAL SYSTEM"
          ]
        },
        {
          content: "Mobile and Web Application Security",
          slug: "mobile-and-web-application-security",
          images: ["mwa.jpg", "mwa-1.jpg"],
          desc:
            "Mobile application security focuses on the software security posture of mobile apps on various platforms like Android, iOS, and Windows Phone. This covers applications that run both on mobile phones as well as tablets ,where Web application security (also known as Web AppSec) is the idea of building websites to function as expected, even when they are under attack. The concept involves a collection of security controls engineered into a Web application to protect its assets from potentially malicious agents.",
          advantages: [
            "PROTECT CONFIDENTIAL AND PRIVATE DATA",
            "PROTECT FROM DATA LOSS",
            "PROTECT FROM MALWARE AND VIRUS ATTACKS"
          ]
        },
        {
          content: "Active Directory Penetration Testing",
          slug: "active-directory",
          images: ["ad.jpg", "ad-1.jpg"],
          desc:
            "“Active Directory” Called as “AD” is a directory service that Microsoft developed for the Windows domain network. Using it you can to control domain computers and services that are running on every node of your domain.The importance of Active Directory in an enterprise cannot be stressed enough. Used by more than 90% of Fortune 1000 companies, the all-pervasive AD is the focal point for adversaries. Still, when it comes to AD security, there is a large gap of knowledge which security professionals and administrators struggle to fill. Over the years, we have taught numerous professionals in real world trainings on AD security and always found that there is a lack of quality material and specially, dearth of practice lab where one can practice AD attacks in a controlled environment.",
          advantages: [
            "ESTABLISH TRUST WITH YOUR CLIENTELE",
            "GAIN VALUABLE INSIGHTS INTO YOUR DIGITAL SYSTEMS"
          ]
        },
        {
          content: "Configuration Reviews",
          slug: "configuration-reviews",
          images: ["cr.jpg", "cr-1.jpg"],
          desc:
            "A Secure Configuration review is a detailed review and verification of configuration settings of IT infrastructure components including systems, network devices & applications to measure the security effectiveness of the IT environment.ypically, when deploying, maintaining or enhancing computing systems/network/network security devices, the expected secure configuration settings may not be implemented or maybe missed. Any poorly configured component of the IT environment then becomes a weak link that may allow adversaries to gain unauthorized access, leading to possible outages and security breaches. Therefore, periodically evaluating the secure configuration of the IT environment is vital to ensure ongoing security within the organization. A typical secure configuration review activity is conducted in a white-box mode where the assessment team have access to the in-scope IT infrastructure configuration files to identify misconfigurations.",
          advantages: [
            "HELPS ENSURE THAT CORPORATE SYSTEM BUILD FOR SERVERS, WORKSTATION, LAPTOPS ... ARE CONFIGURED SECURELY"
          ]
        },
        {
          content: "Source Code reviews",
          slug: "source-code-review",
          images: ["scr.jpg", "scr-1.jpg"],
          desc:
            "A secure code review is a specialized task involving manual and/or automated review of an application's source code in an attempt to identify security-related weaknesses (flaws) in the code. A secure code review does not attempt to identify every issue in the code, but instead looks to provide insight into what types of problems exist and to help the developers of the application understand what classes of issues are present. The goal is to arm the developers with information to help them make the application's source code more sound and secure.",
          advantages: [
            "AUTHENTICATION",
            "AUTHORIZATION",
            "SESSION MANAGEMENT",
            "DATA VALIDATION",
            "ERROR HANDLING"
          ]
        },
        {
          content: "O365 Hardening",
          slug: "o365-harding",
          images: ["o365.png", "o365-1.png"],
          desc:
            "Effective security is about balancing accessibility with data protection. Too much of either can compromise your systems or your processes. Luckily Microsoft has provided enhanced capabilities to both protect your privacy while allowing your team to limitlessly collaborate. Learn more about Microsoft Office 365 Hardening below.",
          features: [
            {
              title: "Azure Active Directory :",
              content:
                "Restrict access permissions and block insecure authentication protocols. Proper limitations for your team will help ensure they don’t accidentally grant permission to access your data to a malicious actor. Fake software and services rely on vulnerable employees handing over the keys to the kingdom"
            },
            {
              title: "Sharepoint and OneDrive :",
              content:
                "Limiting the duration for external data shares can help prevent data exposure weeks and months after the share was created. Versioning can help ensure protection from accidental data loss or ransomware infection."
            },
            {
              title: "Exchange Online :",
              content:
                "Email encryption, mailbox management limitations, and outbound spam filtering can help ensure your systems aren’t compromised with a persistent threat. Anti-phishing and anti-malware protections can further protect your team from email compromise."
            },
            {
              title: "Auditing and Reporting :",
              content:
                "Logging of access, policy changes, and rule creation can help keep systems secure and provide additional information should a breach occur. By reviewing malware threats and provisioning reports, intrusion attempts can be halted before sensitive data is stolen."
            },
            {
              title: "Microsoft Teams :",
              content:
                "Disabling file sharing and storage can help keep sensitive data safe. Additional steps should be taken identifying guess access limitations, external access to communication channels, and 3rd party application integration."
            }
          ],
          advantages: [
            "OFFICE 365 ADVANCE THREAT PROTECTION",
            "AZURE INFORMATION PROTECTION P1",
            "DATA LOSS PREVENTION"
          ]
        },
        {
          content: "Cyber Security Consultation",
          slug: "cyber-security-consultation",
          images: ["csc.jpg", "csc-1.jpg"],
          desc:
            "A cybersecurity consultant doesn’t work for one company exclusively, but rather is hired by a client to test the organization’s cybersecurity measures, and then design and implement a better defense. These consultants are sometimes known by different names, such as:",
          features: [
            { title: "1. ", content: "Information security consultant" },
            { title: "2. ", content: "Computer security consultant" },
            { title: "3. ", content: "Database security consultant" },
            { title: "4. ", content: "Network security consultant" }
          ],
          advantages: [
            "COST REDUCTION",
            "RISK REDUCTION",
            "NEW TECHNOLOGIES",
            "ENHANCE YOUR STAFF WITH CYBERSECURITY CONSULTING MANAGEMENT"
          ]
        },
        {
          content: "vCISO as a Service",
          slug: "vciso-service",
          images: ["ciso.jpg", "ciso-1.jpg"],
          desc:
            "CISO-as-a-Service (CISOaaS) involves outsourcing the IT security leadership responsibilities to a third-party provider. During the past  12 months, the demand for hiring a third-party provider to support implementing an IT security strategy has been growing significantly. With cyberattacks on the rise, it has now become more evident that IT security should be centered at the core of any business strategy. Therefore, CISOaaS might just be the needed solution for small and midsized companies, with a limited IT organization, competence or need. CISO service offering is defined by seven main characteristics:  ",
          features: [
            {
              title: "Security by design :",
              content:
                "ensure that information security is activated throughout all organizational levels and is aligned with the risk strategy and the business mission, right from the planning stage of any new business initiative."
            },
            {
              title: "Resource optimization :",
              content:
                "information security is aligned with financial goals and strategies to achieve higher returns in the face of change."
            },
            {
              title: "Leading-edge security :",
              content:
                " develop incident response plan on top of preventive measures to adapt to the new risk landscape, adopting zero trust architecture to critical data."
            },
            {
              title: "Next-generation threats :",
              content:
                "monitor new technological trends, such as cloud technology, surveillance, digital payments, new regulatory requirements and adapt security systems, including Identity Access Management given new risks."
            },
            {
              title: "Human-centered transformation :",
              content:
                "bridge IT, business and people to mitigate insider risk and strengthen the incident response. "
            },
            {
              title: "Skillset development :",
              content:
                " conduct education and awareness programs, as well as regular monitoring, testing and reporting of day-to-day security staff behavior to ensure the correct execution of the security plan."
            },
            {
              title: "Long-term vision :",
              content:
                "ensure knowledge sharing after the end of partnership to ensure a seamless management transition from temporary to a permanent CISO."
            }
          ],
          advantages: [
            "ELASTIC AND SCALABLE",
            "RECEIVE BURSTS OF SUPPLY ACCORDING TO DEMAND",
            "ACCESS TO SPECIALISTS YOU NORMALLY COULDN'T AFFORD"
          ]
        },
        {
          content: "GDPR Assessment",
          slug: "gdpr-assessment",
          images: ["gdbr.jpg", "gdbr-1.jpg"],
          desc:
            "General Data Protection Regulation (GDPR) is a European Union (EU) data protection law that was signed into law on the 25th of May, 2018 to replace the Data Protection Directives of 1995. The GDPR law aims to give people, mostly Europeans total control of their personal data. Data privacy has always been a major talking point over the years in the countries that make up the European Union. And so if anything,  GDPR has united the EU member states in regards to data privacy.It is not an understatement when we say that GDPR is the toughest data security law in the world. This is because this security law applies to organizations in and out of the European Union (EU). As long as those companies deal with the data of EU citizens, GDPR directives apply to them as well. When we say Organizations that deal with data, we mean any organization that collects, stores, and shares across different channels or platforms. Heavy fines and sanctions will be leveled on companies that violate this ruling. Another reason why the data privacy law is considered to be a very tough one is that it doesn’t only protect European citizens that live in EU member states, but also protects all Europeans whether you are physically present in those states or not. The data privacy law follows them around the world, at least in theory.",
          advantages: [
            "PROTECTING INFORMATIONS",
            "IMPLEMENTING SECURITY MEASURES",
            "OPERATING TO THE HIGHEST STANDARDS"
          ]
        },
        {
          content: "IT Audit",
          slug: "it-audit",
          images: ["aud.jpg", "aud-1.jpg"],
          desc:
            "An IT audit is the examination and evaluation of an organization's information technology infrastructure, policies and operations.Information technology audits determine whether IT controls protect corporate assets, ensure data integrity and are aligned with the business's overall goals. IT auditors examine not only physical security controls, but also overall business and financial controls that involve information technology systems.Because operations at modern companies are increasingly computerized, IT audits are used to ensure information-related controls and processes are working properly. The primary objectives of an IT audit include:",
          features: [
            {
              title: "1.",
              content:
                "Evaluate the systems and processes in place that secure company data."
            },
            {
              title: "2.",
              content:
                "Determine risks to a company's information assets, and help identify methods to minimize those risks."
            },
            {
              title: "3.",
              content:
                "Ensure information management processes are in compliance with IT-specific laws, policies and standards."
            },
            {
              title: "4.",
              content:
                "Determine inefficiencies in IT systems and associated management."
            }
          ],
          advantages: [
            "CHECKS SUSCEPTIBILITY TO THREAT",
            "EVALUATING THE SYSTEM",
            "DATA SECURITY"
          ]
        },
        {
          content: "ISO 22301 Implementation Assistance",
          slug: "iso-22301-implementation",
          images: ["iso-301-1.png"],
          desc:
            "ISO 22301 is the international standard that helps organizations put business continuity plans in place to protect them, and help them recover from, disruptive incidents when they happen. It also helps you to identify potential threats to your business and to build the capacity to deal with unforeseen events. It helps you to protect your business and your reputation, stay agile and resilient, and to minimize the impact of unexpected interruptions. Whether your business is large or small, the ability to respond quickly and effectively to the unexpected is the key to the survival of any organization. This is why having a robust business continuity management system in place, such as ISO 22301, can be considered as one of the most comprehensive approaches to organizational resilience.",
          advantages: ["PROTECT ASSETS, TURNOVER AND PROFITS"]
        },
        {
          content: "ISO 27001 Implementation Assistance",
          slug: "iso-27001-implementation",
          images: ["iso-001.jpg", "iso-301.jpg"],
          desc:
            "When it comes to keeping information assets secure, organizations can rely on the ISO/IEC 27000 family. ISO/IEC 27001 is widely known, providing requirements for an information security management system (ISMS), though there are more than a dozen standards in the ISO/IEC 27000 family. Using them enables organizations of any kind to manage the security of assets such as financial information, intellectual property, employee details or information entrusted by third parties.",
          advantages: [
            "PROTECT YOUR REPUTATION FROM SECURITY THREATS",
            "AVOID REGULATORY FINES",
            "IMPROVE YOUR STRUCTURE AND FOCUS"
          ]
        },
        {
          content: "Vendor Risk Assessment",
          slug: "vendor-risk-assessment",
          images: ["vra.jpg", "vra-1.jpg"],
          desc:
            "Vendor risk assessment (VRA), also known as vendor risk review, is the process of identifying and evaluating potential risks or hazards associated with a vendor's operations and products and its potential impact on your organization. When you perform a third-party vendor risk assessment, you determine the most likely effects of uncertain events, and then identify, measure, and prioritize them. Potential risks include the accuracy and reliability of operational, customer, and financial information; security breaches, operations effectiveness; and legal and regulatory compliance. By performing vendor due diligence and monitoring (particularly of those that impact your operations), you can help mitigate those risks and provide a solid foundation for productive relationships.",
          advantages: [
            "IMPROVE THE QUALITY OF YOUR SERVICES",
            "REDUCE COST",
            "EXPAND THE AVAILABILITY OF YOUR SERVICES"
          ]
        }
      ]
    },
    {
      title: "Cyber Process",
      subServices: [
        {
          content: "IT Architecture Review",
          slug: "it-architecture",
          images: ["arc.jpg", "arc-1.png"],
          desc:
            "IT architecture is a key component in supporting business goals and objectives: ",
          features: [
            {
              title:
                "Foundation for developing large, complex, distributed systems environment"
            },
            { title: "Manage and control complexity in system deployment" },
            { title: "Basis for determining software and hardware decisions" },
            { title: "Identify gaps and areas for concern or improvement" },
            { title: "Optimize return on IT /IS investment" }
          ],
          advantages: [
            "COST SAVING",
            "BUSINESS PROCESS RE-ENGINEERING",
            "ENSURE BUSINESS PROGRAM DRIVE IT PLANS"
          ]
        },
        {
          content: "Cloud Security Assessment",
          slug: "cloud-security-assessment",
          images: ["csa.png", "csass-1.jpg"],
          desc:
            "A cloud security assessment is an evaluation that tests and analyzes an organization’s cloud infrastructure to ensure the organization is protected from a variety of security risks and threats. The assessment is designed to: Identify weaknesses and potential points of entry within the organization’s cloud infrastructure.Analyze the network for evidence of exploitation. Outline approaches to prevent future attacks. A cloud security assessment typically focuses on the following seven areas:",
          features: [
            {
              title: "Overall security posture : ",
              content:
                "Conduct interviews and a documentation review to evaluate the security of enterprise cloud infrastructure"
            },
            {
              title: "Access control and management : ",
              content:
                "Review identity and access management, including user accounts, roles, and key management"
            },
            {
              title: "Network security : ",
              content:
                "Review segmentation and firewall policies against common misconfigurations"
            },
            {
              title: "Incident management : ",
              content:
                "Review incident response policy related to cloud infrastructure, including roles and processes related to an incident"
            },
            {
              title: "Storage security : ",
              content:
                "Assess posture of cloud storage including object-level storage, block-level storage, and related snapshots"
            },
            {
              title: "Platform services security : ",
              content:
                "Review security configuration of advanced service offerings specific to each cloud service provider"
            },
            {
              title: "Workload security : ",
              content:
                "Review security for workloads including virtualized servers, server-hosted containers, functions, and serverless containerized workloads"
            }
          ],
          advantages: ["REDUCE RISKS", "IMPROVED RESILIENCE", "EFFICIENT"]
        },
        {
          content: "Privacy Impact Assessment",
          slug: "privacy-impact-assessment",
          images: ["pia.jpg", "pia-1.jpg"],
          desc:
            "The instrument for a privacy impact assessment (PIA) or data protection impact assessment (DPIA) was introduced with the General Data Protection Regulation (Art. 35 of the GDPR). This refers to the obligation of the controller to conduct an impact assessment and to document it before starting the intended data processing. One can bundle the assessment for several processing procedures. Basically, a data protection impact assessment must always be conducted when the processing could result in a high risk to the rights and freedoms of natural persons. The assessment must be carried out especially if one of the rule examples set forth in Art. 35(3) of the GDPR is relevant. In order to specify the open-ended wording of the law regarding the basic obligation to perform a privacy impact assessment, the supervisory authorities are involved. In a first draft, the Article 29 Working Party created a catalogue of ten criteria which indicate that the processing bears a high risk to the rights and freedoms of a natural person. These are for example scoring/profiling, automatic decisions which lead to legal consequences for those impacted, systematic monitoring, processing of special personal data, data which is processed in a large scale, the merging or combining of data which was gathered by various processes, data about incapacitated persons or those with limited ability to act, use of newer technologies or biometric procedures, data transfer to countries outside the EU/EEC and data processing which hinders those involved in exercising their rights. A privacy impact assessment is not absolutely necessary if a processing operation only fulfils one of these criteria. However, if several criteria are met, the risk for the data subjects is expected to be high and a data protection impact assessment is always required. If there is doubt and it is difficult to determine a high risk, a DPIA should nevertheless be conducted. This process must be repeated at least every three years.",
          advantages: ["IDENTIFY AND MITIFGATE PRIVACY RISKS"]
        }
      ]
    },
    {
      title: "Security Operation Center",
      subServices: [
        {
          content: "Digital Forensics Readiness Investigation (DFRI)",
          slug: "digital-forensics-readiness-investigation",
          images: ["df.jpg", "df-1.jpg"],
          desc:
            "What is digital forensics readiness? Digital forensics readiness is the ability of organizations to respond quickly and collect digital evidence related to a security incident with minimal cost or interruption to the ongoing business.",
          features: [
            {
              title: "1. ",
              content:
                "Digital forensics readiness is the ability of organizations to respond in a timely manner along with the necessary pieces of evidence in case of an incident."
            },
            {
              title: "2. ",
              content:
                "Implementing digital forensics readiness should be incorporated in the existing security posture as per the existing processes and procedures."
            },
            {
              title: "3. ",
              content:
                "The inclusion or exclusion of any service affects the overall costing of digital forensic readiness assessment and is subjected to interpretation."
            },
            {
              title: "4. ",
              content:
                "We will evaluate the current state of logs and other evidence, verify the legitimacy of the same, and will provide a readiness score accordingly."
            }
          ],
          advantages: [
            "BLOCKING THE OPPORTUNITY FOR MALICIOUS",
            "REDUCING COST",
            "PREPARING FOR THE POTENTIAL NEED FOR DIGITAL EVIDENCE"
          ]
        },
        {
          content: "Incident Handling and Response",
          slug: "incident-handling-and-response",
          images: ["ir.jpg", "ir-1.jpg"],
          desc:
            "Incident Response :It is a set of technical activities done in order to analyze, detect, defend against, and respond to an incident. It is a part of the incident handling and incident management process. It is often used in synchrony with the term incident handling. where the refers to a set of practices, processes, and solutions that enable teams to detect, investigate, and respond to incidents. It is a critical element for businesses of all sizes and a requirement for meeting most data compliance standards. ,Both incident handling and incident response go hand in hand. It is often assumed as one function for better ease in processes. This is where incident management comes in. Incident management is the scope of having both incident response and incident handling come together to ensure the end-to-end process, right from reporting an issue to planning and resolving the issue.",
          advantages: ["INITIAL RESPONSE STATISTICS", "REPOTRING", "FEEDBACK"]
        },
        {
          content: "Web Application Audit",
          slug: "web-application-audit",
          images: ["waa.jpg", "waa-1.jpg"],
          desc:
            "web application audit is to review an application’s codebase to determine whether the code is doing something it shouldn’t. Audits may also evaluate whether code can be manipulated to do something inappropriate and whether the apps may be communicating sensitive data in the clear. A superior web application audit should identify whether developers have implemented appropriate security precautions.Typically, a web application audit will include “white box” automated testing that examines code from the inside, and “black box” testing that examines applications from the outside while in production.",
          advantages: [
            "SAVES FINANCIAL RESOURCES",
            "VALIDATE THE SECURITY POSTURE",
            "IDENTIFY AND RESOLVE ISSUES INSECURITY POLICIES"
          ]
        },
        {
          content: "Vulnerability Assessment and Penetration Testing (VAPT)",
          slug: "vapt",
          images: ["va.jpg", "va-1.jpg"],
          desc:
            "Vulnerability Assessment and Penetration Testing (VAPT) describes a broad range of security assessment services designed to identify and help address cyber security exposures across an organisation’s IT estate. To ensure that you choose the right type of assessment for your company’s needs, it’s important to understand the various types of VAPT services and the differences between them. The diverse nature of VAPT assessments means that they can vary significantly in depth, breadth, scope and price, so this understanding is critical to ensure tests deliver the best value for money.",
          advantages: [
            "PROTECTS ADATA FROM OUTBREAKS",
            "PROTECTS APPLICATION AND NETWORK",
            "DEFINES THE RISK LEVEL"
          ]
        },
        {
          content: "Mobile Application Penetration Testing (MAPT)",
          slug: "mapt",
          images: ["ma.jpg", "ma-1.jpg"],
          desc:
            "Mobile app penetration testing reveals vulnerabilities in the cyber security posture of a mobile application. Most commonly, it is the safety and security of iOS and Android applications that requires assessment.It is important for both developers and consumers of mobile applications, that appropriate levels of security exist. This is especially the case for applications that handle sensitive data and functionality. Mobile application security testing gives assurance that the expected security protections exist and are effective.",
          advantages: [
            "IDENTIFICATION OF SECURITY ISSUES",
            "IMPROVE PRODUCTIVITY",
            "SAFEGUARDING THE INTEGRITY"
          ]
        },
        {
          content: "Red Team Assessment",
          slug: "red-team-assessment",
          images: ["rda.jpg", "rda-1.jpg"],
          desc:
            "A red team assessment is a goal-based adversarial activity that requires a big-picture, holistic view of the organization from the perspective of an adversary. This assessment process is designed to meet the needs of complex organizations handling a variety of sensitive assets through technical, physical, or process-based means. The purpose of conducting a red teaming assessment is to demonstrate how real world attackers can combine seemingly unrelated exploits to achieve their goal. It is an effective way to show that even the most sophisticated firewall in the world means very little if an attacker can walk out of the data center with an unencrypted hard drive. Instead of relying on a single network appliance to secure sensitive data, it’s better to take a defense in depth approach and continuously improve your people, process, and technology.",
          advantages: [
            "DETECT, RESPOND AND PREVENT SOPHISTICATED AND TARGETED THREATS"
          ]
        }
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
