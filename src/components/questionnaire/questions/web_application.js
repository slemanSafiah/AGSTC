/**
 * ? type = 0 => input
 * ? type = 1 => text field
 * ? type = 2 => check list
 * ? type = 3 => radio buttons
 * ? type = 4 => select
 */

module.exports = [
  { type: 0, question: "1. Number of Web Applications to be pentested" },
  { type: 1, question: "2. List your application names" },
  {
    type: 2,
    question: "3. Applications type",
    answers: [
      "General Public Web Site",
      "CRM",
      "Online Banking",
      "Transaction Site",
      "E-Commerce",
      "Document Management Site",
      "Other",
    ],
  },
  {
    type: 3,
    question: "4. Type of pentest to be conducted",
    answers: [
      "Black Box",
      "Grey Box",
      "Black Box & Grey Box",
      "White Box (Code Review)",
      "I don't know",
    ],
  },
  {
    type: 2,
    question: "5. Key Objectives",
    answers: [
      "Map out Vulnerabilities",
      "Compliance Requirement",
      "Test incident Response",
      "All of the above",
      "Other Key Objectives",
    ],
  },
  {
    type: 1,
    question:
      "6. Provide a summary of the application and its use including some typical transactions involved",
  },
  {
    type: 1,
    question:
      "7. Technology Stack (Programming platform/ framework/ database/ hosting environment etc)",
  },
  {
    type: 3,
    question: "8. Where is the application hosted or going to be hosted?",
    answers: [
      "Public Cloud",
      "Private Cloud hosted on-premise",
      "Private Cloud hosted elsewhere",
      "Hosted internally within corporate perimeter",
      "Public/Private Hybrid Cloud",
    ],
  },
  {
    type: 3,
    question: "9. Has this application got User LOGIN?",
    answers: ["Yes", "No"],
  },
  {
    type: 3,
    question: "10. If yes - has this application got User ROLES?",
    answers: ["Yes", "No"],
  },
  {
    type: 4,
    question: "11. If yes - how many user roles has this application got?",
    answers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ">11"],
  },
  {
    type: 1,
    question:
      "12. Approximate number of Request Parameters (Input form fields + Hidden parameters) per form/webpage",
  },
  {
    type: 3,
    question:
      "13. Has this web application(s) been subjected to security assessment in the recent years?",
    answers: ["Yes", "No", "Can't Disclose"],
  },
  {
    type: 0,
    question:
      "14. If yes, please mention the year of the most recent assessment",
  },
  {
    type: 3,
    question:
      "15. Will the application be available externally for testing or on-premise?",
    answers: [
      "Externally Available",
      "On-premise",
      "Available Externally or On-premise",
    ],
  },
  {
    type: 3,
    question:
      "16. Do you have any special remarks - notes or requirements to be mentioned?",
    answers: ["Yes", "No"],
  },
  {
    type: 1,
    question:
      "17. If yes - describe your special remarks - notes or requirements",
  },
];
