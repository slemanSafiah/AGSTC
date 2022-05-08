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
import { Delete } from "@mui/icons-material";

const questionsTypes = {
  0: WebApplication,
  1: SecureCode,
  2: MobileApplication,
  3: InternalNetwork,
  4: ExternalNetwork,
  5: CyberSecurity,
  6: CompanySize
};

const questionnaireTitle = {
  0: "Web Application Pentest Scoping",
  1: "Secure Code Review Scoping",
  2: "Mobile Application Pentest Scoping",
  3: "Internal Network Pentest Scoping",
  4: "External Network Pentest Scoping",
  5: "Cyber Threat Hunting Scoping",
  6: "SIEM Solution Scoping"
};

const deviceTypes = [
  "Windows",
  "Linux/Unix",
  "NextGen Firewall",
  "UTM",
  "IDS/IPS",
  "EPP/EDR",
  "NDR",
  "Routers",
  "Switches",
  "Network Mgmt",
  "Operations Mgmt",
  "Email Security",
  "Web Security",
  "DLP",
  "PAM",
  "Load Balancers",
  "Web Application Firewall",
  "Others"
];

export default function Scoping({ type, control, checked, setChecked }) {
  const [questions, setQuestions] = useState(questionsTypes[type]);

  const [rowData] = useState([
    {
      Type: "Windows",
      Description: "Windows Active Directory Servers",
      Quantity: 3
    },
    { Type: "Load Balancers", Description: "F5 Load Balancers", Quantity: 3 },
    {
      Type: "NextGen Firewalls",
      Description: "Palo Alto NextGen Firewalls",
      Quantity: 2
    }
  ]);

  const [data, setData] = useState([]);

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
      "Other Connections": false
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (type === 6) {
    return (
      <div>
        <div className="q-question-title">{questionnaireTitle[type]}</div>
        <div className="q-question-sub-title">
          please note that all fields are{" "}
          <span style={{ color: "red" }}>mandatory</span> please enter 'NA' or
          choose 'None' if a field is not applicable to you.
        </div>
        <div className="q-question-sub-title">
          Please add the devices from which SIEM will collect logs. Please enter
          device type, a description and the quantity. Add as many entries as
          you have by using the <span style={{ color: "blue" }}>"Add New"</span>{" "}
          Button. If you don't find the device type in the list, select "Other".
        </div>

        <div className="q-question-text">Some examples below.</div>
        <div style={{ height: 200, width: 600 }}>
          <TableExample rows={rowData} />
        </div>

        <div className="q-question">1. Device Type & Quantity</div>
        <table className="q-table">
          <thead className="q-table-header">
            <tr>
              <th className="q-table-header-cell">Type</th>
              <th className="q-table-header-cell">Description</th>
              <th className="q-table-header-cell">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                {Object.values(row).map((cell) => (
                  <td className="q-table-cell-ex">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className={`q-table-button ${
            data.length === 0 ? "q-table-button-location" : ""
          }`}
          onClick={(e) => {
            setData((prev) => {
              let temp = prev;
              let idx = uuidv4().split("-").join("");
              console.log(idx);
              temp.push({
                type: <TableType control={control} num={idx} data={setData} />,
                desc: <TableText control={control} desc={true} num={idx} />,
                quantity: (
                  <TableText
                    control={control}
                    desc={false}
                    num={idx}
                    size="small"
                  />
                )
              });
              return temp;
            });
          }}
        >
          Add New{" "}
        </button>
        <CompanySizing control={control} />
      </div>
    );
  }

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
              fontSize: "0.8rem"
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
                  width: "40%"
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
                  color: "rgb(85, 85, 85)"
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
                    color: "rgb(85, 85, 85)"
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

function TableType({ control, num, data }) {
  return (
    <div>
      <button
        className="q-table-button-exit"
        onClick={(e) => {
          data((prev) => {
            let temp = prev;
            let idx = temp.findIndex((ele) => ele.type.props.num === num);
            temp.splice(idx, 1);
            return temp;
          });
        }}
      >
        <Delete color="inherit" />
      </button>
      <Controller
        key={uuidv4()}
        name={`deviceTypes.${num}.type`}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            sx={{
              mt: 1,
              mb: 1,
              minWidth: 120,
              width: "70%",
              color: "rgb(85, 85, 85)"
            }}
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="num"
          >
            {deviceTypes.map((type) => (
              <MenuItem key={uuidv4()} value={type.toString()}>
                {type}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
}

function TableText({ control, desc, num }) {
  const type = desc ? "description" : "quantity";
  return (
    <Controller
      key={uuidv4()}
      name={`deviceTypes.${num}.${type}`}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ mt: 1, mb: 1, minWidth: 120, width: "70%" }}
          id="outlined-basic"
          label="answer"
          variant="outlined"
          size="small"
        />
      )}
    />
  );
}

function TableExample({ rows }) {
  return (
    <table className="q-table-ex">
      <thead className="q-table-header">
        <tr>
          <th className="q-table-header-cell-ex">Type</th>
          <th className="q-table-header-cell-ex">Description</th>
          <th className="q-table-header-cell-ex">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {Object.values(row).map((cell) => (
              <td className="q-table-cell-ex">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
