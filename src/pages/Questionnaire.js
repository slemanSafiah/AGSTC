import React from "react";

import Header from "../components/Header";
import Main from "../components/questionnaire/Main";
import Form from "../components/questionnaire/Form";
import Footer from "../components/Footer";

export default function Questionnaire() {
  return (
    <div>
      <Header page="questionnaire" />
      <Main />
      <Form />
      <Footer />
    </div>
  );
}
