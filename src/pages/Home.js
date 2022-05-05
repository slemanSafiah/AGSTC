import React from "react";

import Section1 from "../components/home_page/Section1";
import Section2 from "../components/home_page/Section2";
import Section3 from "../components/home_page/Section3";
import Section4 from "../components/home_page/Section4";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header page="home" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
