import React, { useState } from "react";

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
import ReCAPTCHA from "react-google-recaptcha";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Notification from "../components/Notification";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
});

export default function ContactUs() {
  const [clientToken, setClientToken] = useState("");
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", message: "" },
    resolver: yupResolver(formSchema)
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Header background={true} page="contact-us" />
      <div className="contact-container">
        <div className="contact-form">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              // let res = await axios({
              //   method: "post",
              //   url: `https://www.google.com/recaptcha/api/siteverify?secret=6LffZb4fAAAAAJ_YKcjWsETzWZDOPVzjU3XUaVSp&response=${clientToken}`,
              //   headers: {
              //     "Content-Type": "application/x-www-form-urlencoded"
              //   }
              // });

              // if (res.data.success) {
              if (true) {
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
                setOpen(true);
              } else {
                console.log("Error in Recaptcha");
              }
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
                    error={errors["firstName"] ? true : false}
                    helperText={
                      errors["firstName"] ? errors["firstName"].message : ""
                    }
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
                    error={errors["lastName"] ? true : false}
                    helperText={
                      errors["lastName"] ? errors["lastName"].message : ""
                    }
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
                  error={errors["email"] ? true : false}
                  helperText={errors["email"] ? errors["email"].message : ""}
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
                  error={errors["message"] ? true : false}
                  helperText={
                    errors["message"] ? errors["message"].message : ""
                  }
                />
              )}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div style={{ marginTop: "2em" }}>
                <ReCAPTCHA
                  sitekey="6LffZb4fAAAAAPNEVwMKaHgkNV7DehAJgQjzAemM"
                  onChange={async (value) => {
                    setClientToken(value);
                  }}
                />
              </div>
              <div className="contact-container-button">
                <input
                  className="contact-us-button"
                  label="SEND"
                  type="submit"
                />
              </div>
            </div>
            <Notification
              message={"Message has been sent"}
              open={open}
              handleClose={handleClose}
            />
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
