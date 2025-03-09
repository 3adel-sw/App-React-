import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [filter, setFliter] = useState;
  return (
    <div className={styles.mp}>
      <input type="text" placeholder="filter By Name" value={filter} />
    </div>
  );
};

export default Filter;

// img: (
//   <img
//     src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//     alt="1"
//   />
// ),
{
  /* <img
className="img"
src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
alt="1"
/> */
}
