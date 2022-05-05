import React from "react";

import ServicesComp from "../components/services/ServicesComp";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div>
      <Header background={true} page="services" />
      <ServicesComp />
      <Footer />
    </div>
  );
}
