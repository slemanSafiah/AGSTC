/**
 * ? type = 0 => input
 * ? type = 1 => text field
 * ? type = 2 => check list
 * ? type = 3 => radio buttons
 * ? type = 4 => select
 */

module.exports = [
  { type: 0, question: "1. Number of Endpoints (Desktops and Laptops)" },
  { type: 0, question: "2. Number of Servers" },
  {
    type: 3,
    question: "3. Do you have more than one office?",
    answers: ["Yes", "No"],
  },
  {
    type: 0,
    question:
      "4. If yes - how many branch offices do you have apart from the head office?",
  },
  {
    type: 3,
    question: "5. Are these Branch office connected to the Head Office?",
    answers: ["Yes", "No"],
  },
  {
    type: 2,
    question: "6. If yes - what sort of connection has it got?",
    answers: [
      "Not Connected",
      "MPLS",
      "Leaded Line",
      "IPSec VPN",
      "Other Connections",
    ],
  },
];
