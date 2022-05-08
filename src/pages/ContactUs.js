import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Controller, useForm } from "react-hook-form";
import { TextField, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", message: "" }
  });

  return (
    <div>
      <Header background={true} page="contact-us" />
      <div className="contact-container">
        <div className="contact-form">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              emailjs
                .send(
                  "service_0fvgqqp",
                  "template_pkxlq1f",
                  {
                    from_name: data.firstName + " " + data.lastName,
                    from_email: data.email,
                    message: data.message,
                    from_subject: "Contact US Message",
                    email: "slemansafiah43@gmail.com"
                  },
                  "user_iPj4aB9m9VSQ5BsiqgrK3"
                )
                .then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                    console.log("FAILED...", error);
                  }
                );
              reset({ firstName: "", lastName: "", email: "", message: "" });
            })}
          >
            <div className="contact-title">Contact Us</div>
            <div className="contact-container">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{
                      marginBlockEnd: 3,
                      paddingInlineEnd: 3,
                      mt: 2,
                      minWidth: 120
                    }}
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    size="small"
                  />
                )}
              />

              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ marginBlockEnd: 3, mt: 2, minWidth: 120 }}
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{
                    marginBlockEnd: 3,
                    mt: 2,
                    minWidth: 120,
                    width: "100%"
                  }}
                  id="email"
                  label="E-Mail"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{
                    marginBlockEnd: 4,
                    mt: 2,
                    minWidth: 120,
                    width: "100%"
                  }}
                  id="messsage"
                  label="Message"
                  variant="outlined"
                  size="small"
                  multiline
                  rows={4}
                />
              )}
            />
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
                  boxShadow: "0px 1px 3px rgb(50,50,50)"
                }}
                label="SEND"
                type="submit"
              />
            </div>
          </form>
          <div
            style={{
              paddingTop: "4em",
              fontFamily: "Poppins"
            }}
          >
            <Stack columnGap={16} direction={"row"}>
              <Stack rowGap={4}>
                <div>
                  {" "}
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faFacebook}
                  />
                  facebook account
                </div>
                <div>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faTwitter}
                  />
                  twitter account
                </div>
              </Stack>
              <Stack rowGap={4}>
                <div>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faPhone}
                  />
                  phone number
                </div>
                <div>
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faLinkedin}
                  />
                  linkedin account
                </div>
              </Stack>
            </Stack>
          </div>
        </div>
        <img
          src="assets/contact.jpg"
          width={"50%"}
          className="contact-image"
          alt="contact form"
        />
      </div>
      <Footer />
    </div>
  );
}
