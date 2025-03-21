import React from "react";
import styles from "./Card.module.css";

const Card = ({ namesList, type , deleteFunction }) => {
  const Cards = namesList.map(({ name, age, country, job, phone }, idx) => (
    <div
      className={styles.cardWeapper}
      key={idx}
      style= {{ backgroundColor: type === "men" ? "#fff" : "pink" }}
    >
      <div>Name:{name}</div>
      <div>Age: {age}</div>
      <div>Country: {country}</div>
      <div>Job: {job}</div>
      <div>Phone : {phone}</div>
      <div className={styles.deleteBtn} onClick={(e) => deleteFunction(e, idx)}>
        x
      </div>
      <hr />
      <button onClick={() => alert(`Hello ${name}!`)}>Say Hello</button>
    </div>
  ));
  return <div> {Cards}</div>;
};

export default Card;
