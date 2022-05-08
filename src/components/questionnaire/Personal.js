import React from "react";

import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function Personal({ control, errors }) {
  return (
    <div>
      <div className="q-question-title">About You</div>
      <div className="q-question-text">Your Organization Name*</div>
      <Controller
        name="Organization Name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ mt: 1, minWidth: 120, width: "40%" }}
            id="org name"
            label="Organization Name"
            variant="outlined"
            size="small"
            error={errors["Organization Name"] ? true : false}
            helperText={
              errors["Organization Name"]
                ? errors["Organization Name"].message
                : ""
            }
          />
        )}
      />

      <div className="q-question-text">Your Full Name*</div>
      <div
        style={{
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Controller
          name="First Name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ mt: 1, minWidth: 100, width: "45%" }}
              id="f-n"
              label="First Name"
              variant="outlined"
              size="small"
              error={errors["First Name"] ? true : false}
              helperText={
                errors["First Name"] ? errors["First Name"].message : ""
              }
            />
          )}
        />

        <Controller
          name="Last Name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ mt: 1, minWidth: 100, width: "45%" }}
              id="l-n"
              label="Last Name"
              variant="outlined"
              size="small"
              error={errors["Last Name"] ? true : false}
              helperText={
                errors["Last Name"] ? errors["Last Name"].message : ""
              }
            />
          )}
        />
      </div>
      <div className="q-question-text">Your Email*</div>
      <Controller
        name="Email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ mt: 1, minWidth: 120, width: "40%" }}
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            error={errors["Email"] ? true : false}
            helperText={errors["Email"] ? errors["Email"].message : ""}
          />
        )}
      />
      <div className="q-question-text">Your Phone Number*</div>
      <Controller
        name="Phone Number"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ mt: 1, minWidth: 120, width: "40%" }}
            id="number"
            label="Phone"
            variant="outlined"
            size="small"
            error={errors["Phone Number"] ? true : false}
            helperText={
              errors["Phone Number"] ? errors["Phone Number"].message : ""
            }
          />
        )}
      />
    </div>
  );
}
