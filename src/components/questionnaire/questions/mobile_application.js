/**
 * ? type = 0 => input
 * ? type = 1 => text field
 * ? type = 2 => check list
 * ? type = 3 => radio buttons
 * ? type = 4 => select
 */

module.exports = [
  { type: 0, question: "1. What is the name of the Mobile App?" },
  {
    type: 2,
    question: "2. Select the Mobile App Platforms (Select all the apply)",
    answers: ["Android", "Apple IOS", "Windows", "Other Platform"],
  },
  { type: 1, question: "3. If other - please provide details" },
  { type: 1, question: "4. What are the versions of the App?" },
  {
    type: 3,
    question:
      "5. Has this mobile application(s) been subjected to a security assessment in the recent years?",
    answers: ["Yes", "No", "Can not Disclose"],
  },
  {
    type: 0,
    question:
      "6. If yes - please mention the year of the most recent assessment",
  },
  {
    type: 3,
    question:
      "7. For Android App - are there any code obfuscation techniques or third-party solutions for code obfuscation in the application?",
    answers: ["Yes", "No", "Not Applicable"],
  },
  {
    type: 1,
    question:
      "8. Please provide a summery of the functional aspects of the App(s)",
  },
  {
    type: 3,
    question: "9. Has this App got multiple User Roles?",
    answers: ["Yes", "No"],
  },
  {
    type: 4,
    question: "10. If Yes - how many user roles are available?",
    answers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "+11"],
  },
  {
    type: 2,
    question: "11. What types of users will be accessing this App?",
    answers: ["Customers", "Employee", "Contractors", "Others"],
  },
  { type: 1, question: "12. If other - please provide details" },
  {
    type: 1,
    question:
      "13. Has the application been developed using any third-party development framework(s) such as PhoneGap/ Apache Cordova/ Bootstrap etc?",
  },
  {
    type: 3,
    question:
      "14. Does this App requires specific hardware or device UUIDs for testing?",
    answers: ["Yes", "No"],
  },
  {
    type: 1,
    question:
      "15. If yes - please specify further details of the hardware/UUID details *",
  },
  {
    type: 0,
    question: "16. How many (Views) are available in the application?",
  },
  { type: 0, question: "17. How many of those (Views) have input fields?" },
  {
    type: 3,
    question: "18. Does the App use Authentication?",
    answers: ["Yes", "No"],
  },
  {
    type: 2,
    question:
      "19. If yes - what type(s) of authentications does the Mobile App use?",
    answers: [
      "None",
      "OAuth",
      "Facebook Auth",
      "Google SSO",
      "Basic Authentication",
      "Custom",
      "Other Types",
    ],
  },
  {
    type: 1,
    question: "20. If you chose - (Custom) or (Other) - please provide details",
  },
  {
    type: 2,
    question:
      "21. What type(s) of communications channels and protocols are in use?",
    answers: [
      "HTTP/HTTPS",
      "Socket Connections",
      "SMS",
      "SMTP",
      "Other Communication Channel",
    ],
  },
  { type: 0, question: "22. If other - please provide details" },
  {
    type: 3,
    question: "23. Does the application provide file upload functionality?",
    answers: ["Yes", "No"],
  },
  {
    type: 1,
    question: "24. If yes - please describe this functionality in detail.",
  },
  {
    type: 3,
    question:
      "25. Does the App uses any protection technologies to prevent it from functioning on (jailbroken/Root) devices?",
    answers: ["Yes", "No"],
  },
  { type: 1, question: "26. If yes - please provide the details" },
  {
    type: 3,
    question:
      "27. Will the application be available externally for testing or on-premise?",
    answers: [
      "Externally Available",
      "On-Premise Only",
      "Externally or On-Premise",
    ],
  },
  {
    type: 3,
    question:
      "28. Do you have any special remarks - notes or requirements to be mentioned?",
    answers: ["Yes", "No"],
  },
  {
    type: 1,
    question:
      "29. If yes - describe your special remarks - notes or requirements",
  },
];
