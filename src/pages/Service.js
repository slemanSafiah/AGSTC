import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceComp from "../components/services/Service";

export default function Service() {
  return (
    <div>
      <Header background={true} page="services" />
      <ServiceComp />
      <Footer />
    </div>
  );
}
