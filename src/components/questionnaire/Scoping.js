import React, { useState, useEffect } from "react";

import CompanySizing from "./CompanySizing";

import CompanySize from "./questions/company_size";
import CyberSecurity from "./questions/cyber_security";
import ExternalNetwork from "./questions/external_network";
import InternalNetwork from "./questions/internal_network";
import MobileApplication from "./questions/mobile_application";
import SecureCode from "./questions/secure_code";
import WebApplication from "./questions/web_application";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { v4 as uuidv4 } from "uuid";
import { Controller } from "react-hook-form";

const questionsTypes = {
  0: WebApplication,
  1: SecureCode,
  2: MobileApplication,
  3: InternalNetwork,
  4: ExternalNetwork,
  5: CyberSecurity,
  6: CompanySize,
};

const questionnaireTitle = {
  0: "Web Application Pentest Scoping",
  1: "Secure Code Review Scoping",
  2: "Mobile Application Pentest Scoping",
  3: "Internal Network Pentest Scoping",
  4: "External Network Pentest Scoping",
  5: "Cyber Threat Hunting Scoping",
  6: "SIEM Solution Scoping",
};

export default function Scoping({ type, control, checked, setChecked }) {
  const [questions, setQuestions] = useState(questionsTypes[type]);

  useEffect(() => {
    setQuestions(questionsTypes[type]);
    setChecked({
      "General Public Web Site": false,
      CRM: false,
      "Online Banking": false,
      "Transaction Site": false,
      "E-Commerce": false,
      "Document Management Site": false,
      Other: false,
      "Map out Vulnerabilities": false,
      "Compliance Requirement": false,
      "Test incident Response": false,
      "All of the above": false,
      "Other Key Objectives": false,
      Android: false,
      "Apple IOS": false,
      Windows: false,
      "Other Platform": false,
      Customers: false,
      Employee: false,
      Contractors: false,
      Others: false,
      None: false,
      OAuth: false,
      "Facebook Auth": false,
      "Google SSO": false,
      "Basic Authentication": false,
      Custom: false,
      "Other Types": false,
      "HTTP/HTTPS": false,
      "Socket Connections": false,
      SMS: false,
      SMTP: false,
      "Other Communication Channel": false,
      AWS: false,
      Azure: false,
      GCP: false,
      "Oracle Cloud": false,
      "IBM Cloud": false,
      "Other Cloud Services": false,
      "Not Connected": false,
      MPLS: false,
      "Leaded Line": false,
      "IPSec VPN": false,
      "Other Connections": false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {});

  return (
    <div>
      {type === 3 && <CompanySizing control={control} />}
      <div className="q-question-title">{questionnaireTitle[type]}</div>
      <div className="q-question-sub-title">
        please note that all fields are{" "}
        <span style={{ color: "red" }}>mandatory</span> please enter 'NA' or
        choose 'None' if a field is not applicable to you.
      </div>
      {questions.map((question) => (
        <QuestionHandler
          key={uuidv4()}
          question={question}
          control={control}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </div>
  );
}

function QuestionHandler({ question, control, checked, setChecked }) {
  switch (question.type) {
    case 0:
      return (
        <div>
          <div className="q-question">{question.question}</div>
          <Controller
            name={question.question}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ mt: 2, minWidth: 120, width: "40%" }}
                id="outlined-basic"
                label="answer"
                variant="outlined"
                size="small"
              />
            )}
          />
        </div>
      );
    case 1:
      return (
        <div>
          <div className="q-question">{question.question}</div>
          <Controller
            name={question.question}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ mt: 2, minWidth: 120, width: "40%" }}
                multiline
                rows={4}
                id="outlined-basic"
                label="answer"
                variant="outlined"
                size="small"
              />
            )}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <div className="q-question">{question.question}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "0.8rem",
            }}
          >
            {question.answers.map((ans) => (
              <FormControlLabel
                value={false}
                key={uuidv4()}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  mt: 0,
                  minWidth: 120,
                  width: "40%",
                }}
                label={ans}
                labelPlacement="end"
                control={
                  <Controller
                    key={uuidv4()}
                    name={question.question + "-" + ans}
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={checked[ans]}
                        onClick={(e) => {
                          setChecked((prev) => {
                            let temp = prev;
                            temp[ans] = !temp[ans];
                            return temp;
                          });
                        }}
                        key={uuidv4()}
                        {...field}
                      />
                    )}
                  />
                }
              />
            ))}
          </div>
        </div>
      );
    case 3:
      return (
        <div>
          <div className="q-question">{question.question}</div>
          <Controller
            name={question.question}
            control={control}
            render={({ field }) => (
              <RadioGroup
                {...field}
                size="small"
                sx={{
                  mt: 0,
                  minWidth: 120,
                  width: "40%",
                  color: "rgb(85, 85, 85)",
                }}
                // aria-label={question.question}
                // name="radio-buttons-group"
              >
                {question.answers.map((ans) => (
                  <FormControlLabel
                    key={uuidv4()}
                    value={ans}
                    control={<Radio />}
                    label={ans}
                  />
                ))}
              </RadioGroup>
            )}
          />
        </div>
      );
    default:
      return (
        <div>
          <div className="q-question">{question.question}</div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">- select -</InputLabel>
            <Controller
              name={question.question}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  sx={{
                    mt: 1,
                    minWidth: 120,
                    width: "40%",
                    color: "rgb(85, 85, 85)",
                  }}
                  // value={1}
                  defaultValue="1"
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="num"
                >
                  {question.answers.map((ans) => (
                    <MenuItem key={uuidv4()} value={ans.toString()}>
                      {ans}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </div>
      );
  }
}
