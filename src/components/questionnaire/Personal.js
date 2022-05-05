import React from "react";

import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";

export default function Personal({ control, errors }) {
  console.log("render");
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
            // key={uuidv4()}
            sx={{ mt: 1, minWidth: 120, width: "40%" }}
            id="outlined-basic"
            label="Organization Name"
            variant="outlined"
            size="small"
            error={errors["Organization Name"]}
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
          justifyContent: "space-between",
        }}
      >
        <Controller
          name="First Name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              // key={uuidv4()}
              sx={{ mt: 1, minWidth: 100, width: "45%" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
              error={errors["First Name"]}
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
              // key={uuidv4()}
              sx={{ mt: 1, minWidth: 100, width: "45%" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
              error={errors["Last Name"]}
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
            // key={uuidv4()}
            sx={{ mt: 1, minWidth: 120, width: "40%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            error={errors["Email"]}
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
            // key={uuidv4()}
            sx={{ mt: 1, minWidth: 120, width: "40%" }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            size="small"
            error={errors["Phone Number"]}
            helperText={
              errors["Phone Number"] ? errors["Phone Number"].message : ""
            }
          />
        )}
      />
    </div>
  );
}
