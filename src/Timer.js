import React, { useState } from "react";
import "./timer.css";

let time = new Date().toLocaleTimeString();

const Timer = () => {
  const [timer, settimer] = useState(time);

  setTimeout(() => {
    time = new Date().toLocaleTimeString();
    settimer(time);
  }, 1000);
  return (
    <>
      <h1> {timer} </h1>
    </>
  );
};
export default Timer;
