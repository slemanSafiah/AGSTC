/**
 * ? type = 0 => input
 * ? type = 1 => text field
 * ? type = 2 => check list
 * ? type = 3 => radio buttons
 * ? type = 4 => select
 */

module.exports = [
  { type: 0, question: "1. Application Name" },
  { type: 0, question: "2. Application Version" },
  { type: 1, question: "3. Language(s) used in development" },
  { type: 1, question: "4. What build tools are used?" },
  { type: 0, question: "5. Approx number of lines of code" },
  { type: 0, question: "6. Number of files" },
  {
    type: 3,
    question: "7. If this is an object oriented language?",
    answers: ["Yes", "No"],
  },
  { type: 0, question: "8. How many classes are defined in the application?" },
  {
    type: 3,
    question: "9. Is this a new or legacy application?",
    answers: ["New", "Legacy"],
  },
  {
    type: 3,
    question:
      "10. If it is new - multiple code reviews will be required during the software development lifecycle - or prior to releases of the application?",
    answers: ["Yes", "No", "I do not know"],
  },
  {
    type: 3,
    question:
      "11. Is software architecture and/or design documentation available and can be provided to the reviewer?",
    answers: [
      "Yes, available and can be provided to the reviewer",
      "Yes, available but can not be provided to the reviewer",
      "Not Available",
      "I do not know",
    ],
  },
  {
    type: 3,
    question:
      "12. Do you have any other special remarks - notes or requirements to be mentioned?",
    answers: ["Yes", "No"],
  },
  {
    type: 1,
    question:
      "13. If yes - describe your special remarks - notes or requirements",
  },
];
