import React, { useState } from "react";

import Personal from "./Personal";
import Scoping from "./Scoping";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const formSchema = yup.object().shape({
  "Organization Name": yup.string().required(),
  "Last Name": yup.string().required(),
  "First Name": yup.string().required(),
  "Phone Number": yup.string().min(8).required(),
  Email: yup.string().email().required(),
});

export default function Form() {
  const [selected, setSelected] = useState(false);
  const [type, setType] = useState("");
  const [checked, setChecked] = useState({});
  const [clientToken, setClientToken] = useState("");

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(formSchema),
  });

  const handleSelect = (event) => {
    setType(event.target.value);
    setSelected(true);
  };

  return (
    <div className="q-form">
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log("waiting ...");
          let res = await axios({
            method: "post",
            url: `https://www.google.com/recaptcha/api/siteverify?secret=6LffZb4fAAAAAJ_YKcjWsETzWZDOPVzjU3XUaVSp&response=${clientToken}`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
          if (res.data.success) {
            console.log("Done", data);
          } else {
            console.log("Error in Recaptcha");
          }
        })}
      >
        <div className="q-question">
          1. What would you like to do scoping for?*
        </div>
        <FormControl
          sx={{ mt: 2, minWidth: 120, width: "40%", fontFamily: "Poppins" }}
          size="small"
        >
          <InputLabel id="select-type">- select -</InputLabel>
          <Select
            labelId="select-type"
            id="select-type-scoping"
            value={type}
            label="Scoping"
            onChange={handleSelect}
          >
            <MenuItem value={0}>Web Application Pentest</MenuItem>
            <MenuItem value={1}>Secure Code Review</MenuItem>
            <MenuItem value={2}>Mobile Application Pentest</MenuItem>
            <MenuItem value={3}>Internal Network Pentest</MenuItem>
            <MenuItem value={4}>External Network Pentest</MenuItem>
            <MenuItem value={5}>Cyber Threat Hunting</MenuItem>
            <MenuItem value={6}>SIEM Sizing</MenuItem>
          </Select>
        </FormControl>

        {selected && (
          <div>
            <div>
              <Personal control={control} errors={errors} />
            </div>
            <div>
              <Scoping
                type={type}
                control={control}
                checked={checked}
                setChecked={setChecked}
              />
            </div>
          </div>
        )}

        <div style={{ marginTop: "2em" }}>
          <ReCAPTCHA
            sitekey="6LffZb4fAAAAAPNEVwMKaHgkNV7DehAJgQjzAemM"
            onChange={async (value) => {
              setClientToken(value);
            }}
          />
        </div>
        <div className="q-divider" />

        <div className="q-buttons">
          <Stack direction="row" spacing={6}>
            <div className="contact-container-button">
              <input
                style={{
                  backgroundColor: "#2E7D32",
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "2px",
                  padding: "6px 26px",
                  boxShadow: "0px 1px 3px rgb(50,50,50)",
                }}
                label="SEND"
                type="submit"
              />
            </div>
            <div className="contact-container-button">
              <button
                onClick={(e) => {
                  reset();
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
                }}
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "2px",
                  padding: "6px 26px",
                  boxShadow: "0px 1px 3px rgb(50,50,50)",
                }}
                label="RESET"
                type="button"
              >
                RESET
              </button>
            </div>
          </Stack>
        </div>
      </form>
    </div>
  );
}
