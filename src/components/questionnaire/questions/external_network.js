/**
 * ? type = 0 => input
 * ? type = 1 => text field
 * ? type = 2 => check list
 * ? type = 3 => radio buttons
 * ? type = 4 => select
 */

module.exports = [
  { type: 0, question: "1. How many IP Addresses to be pentested?" },
  {
    type: 2,
    question: "2. Key objectives of this pentest",
    answers: [
      "Map out Vulnerabilities",
      "Compliance Requirement",
      "Test incident Response",
      "All of the above",
      "Other",
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
    question: "5. Do you also want phishing simulation to be performed?",
    answers: ["Yes", "No", "I don't know"],
  },
  {
    type: 3,
    question:
      "6. Do you have any special remarks - notes or requirements to be mentioned?",
    answers: ["Yes", "No"],
  },
  {
    type: 1,
    question:
      "7. If yes - describe your special remarks - notes or requirements?",
  },
];
