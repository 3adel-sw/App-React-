import React, { useState } from "react";
import Card from "../Card/Card";
import stylesApp from "../App/App.module.css";


function App() {
  const [cardToggele,setCardTogele] = useState(false)
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
      phone: "01117607890",
    },
    {
      name: "Tahor Islam",
      age: 27,
      country: "Egypt",
      job: "Mobile",
      phone: "01014919047",
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
   setUserData((prevState) => {
      return prevState.filter((el, index) => index !== idx);
    });
    // console.log(state);
  };
  return (
    <div className={stylesApp.minContainer}>
      <h1>Data Boys</h1>
      <button style={{ marginBottom: "20px" }}>{cardToggele ? "Hide Names" : "Show Names"} </button>
      <div className= {cardToggele ? "show" : "hide"}>
      <Card namesList={state} type="men" deleteFunction={deleteHandler}/>
      </div>
    </div>
  );
}

export default App;
