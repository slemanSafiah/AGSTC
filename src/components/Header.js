import React from "react";
import { Link } from "react-router-dom";

export default function Header({ page, background }) {
  console.log(page);
  return (
    <div style={{ position: "fixed", top: "0px" }} className={`header`}>
      <div className="logo">
        <span>ag</span> CTS
      </div>
      <nav className="nav-bar">
        <ul>
          <Link
            className={page === "home" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            <li>HOME</li>
          </Link>
          <Link
            className={page === "services" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/services"}
          >
            <li>SERVICES</li>
          </Link>

          <Link
            className={page === "questionnaire" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/questionnaire"}
          >
            <li>QUESTIONNAIRE</li>
          </Link>

          <Link
            className={page === "about-us" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/about-us"}
          >
            <li>ABOUT US</li>
          </Link>

          <Link
            className={page === "contact-us" ? "nav-bar-focus" : ""}
            style={{ textDecoration: "none" }}
            to={"/contact-us"}
          >
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
