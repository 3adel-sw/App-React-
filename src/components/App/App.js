import React, { useState } from "react";
import Card from "../Card/Card";
import stylesApp from "../App/App.module.css";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const [state, setUserData] = useState([
    {
      name: "Adel Mahmoud",
      age: 26,
      country: "Egypt",
      job: "Software Developer Full Stack",
      phone: "01064620610",
    },
    {
      name: "Hassan Mahmoud ",
      age: 25,
      country: "Egypt",
      job: "Marking",
      phone: "01064620610",
    },
    {
      name: "Tahor Islam",
      age: 27,
      country: "Egypt",
      job: "Mobile",
      phone: "01064620610",
    },
    {
      name: "Ibrahim Mahmoud",
      age: 18,
      country: "Egypt",
      job: "Monter Development",
      phone: "01064620610",
    },
    {
      name: "Hamdia Naser",
      age: 27,
      country: "Egypt",
      job: "Backend Developer",
      phone: "01064620610",
    },
  ]);
    const deleteHandler = (e , idx ) => {
      // console.log(e.target.className, idx)
      // setUserData(state.filter((el , index) => index !== idx)) // remove the item with the index
   setUserData((prevState) => {
      return prevState.filter((el, index) => index !== idx);
    });
    // console.log(state);
  };
  return (
    <div className={stylesApp.minContainer}>
      <h1>Data Boys</h1>
      <Card namesList={state} type="men" deleteFunction={deleteHandler}/>
    </div>
  );
}

export default App;
