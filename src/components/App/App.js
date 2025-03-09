import React, { useState } from "react";
import Card from "../Card/Card";
import stylesApp from "../App/App.module.css";

function App() {
  const [state, setState] = useState([
    {
      name: "Adel",
      age: 26,
      country: "Egypt",
      job: "Software Developer Full Stack",
      phone: "01064620610",
    },
    {
      name: "Ahmed",
      age: 25,
      country: "Egypt",
      job: "Software Developer Front end",
      phone: "01064620610",
    },
    {
      name: "Ali",
      age: 24,
      country: "Egypt",
      job: "Software Developer Back end",
      phone: "01064620610",
    },
  ]);

  return (
    <div className={stylesApp.minContainer}>
      <h1>Data Boys</h1>
      <Card namesList={state} type="men" />
    </div>
  );
}

export default App;
