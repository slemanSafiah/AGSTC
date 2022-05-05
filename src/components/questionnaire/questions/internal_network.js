/**
 * ? type = 0 => input
 * ? type = 1 => text field
 * ? type = 2 => check list
 * ? type = 3 => radio buttons
 * ? type = 4 => select
 */

module.exports = [
  { type: 1, question: "1. Please provide IP ranges - netblocks in scope" },
  {
    type: 2,
    question: "2. Key objectives of this pentest",
    answers: [
      "Map out Vulnerabilities",
      "Compliance Requirement",
      "Test incident Response",
      "All of the above",
      "Others",
    ],
  },
  { type: 1, question: "3. If other - please provide details" },
  {
    type: 3,
    question: "4. Will this testing be done on a production environment?",
    answers: ["Yes", "No", "Can't Disclose"],
  },
  {
    type: 3,
    question:
      "5. Does your organization use any of the public/hybrid cloud services?",
    answers: ["Yes", "No"],
  },
  {
    type: 2,
    question:
      "6. Please provide a list of cloud services in use by your organisation",
    answers: [
      "AWS",
      "Azure",
      "GCP",
      "Oracle Cloud",
      "IBM Cloud",
      "Other Cloud Services",
    ],
  },
  { type: 1, question: "7. If other - please provide details" },
  {
    type: 3,
    question:
      "8. Do you have any other special remarks - notes or requirements to be mentioned?",
    answers: ["Yes", "No"],
  },
  {
    type: 1,
    question:
      "9. If yes - describe your special remarks - notes or requirements",
  },
];
