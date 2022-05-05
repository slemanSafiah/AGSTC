import React from "react";

import Grid from "@mui/material/Grid";

export default function Card({ src, title, desc, info }) {
  if (info) {
    return (
      <Grid item xs={4}>
        <div className="card-container">
          <div className="card-title-info">
            Find more services and description here
          </div>
          <div className="card-button">go to services</div>
        </div>
      </Grid>
    );
  }

  return (
    <Grid item xs={4}>
      <div className="card-container">
        <img src={src} alt="service" />
        <div className="card-title">{title}</div>
        <div className="card-description">{desc}</div>
      </div>
    </Grid>
  );
}
