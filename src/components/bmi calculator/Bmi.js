import React, { useState } from "react";
import "./Bmi.css";

export const Bmi = () => {
  const [bmi, setbmi] = useState(0);
  const [height, setheight] = useState();
  const [weight, setweight] = useState();
  const [message, setmessage] = useState("");

  // logic

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Please enter valid weight and height");
    } else {
      const newBmi = (weight / height ** 2) * 10000;
      setbmi(newBmi.toFixed(1));
    }
    // health messages
    if (bmi <= 18) {
      setmessage("You are underweight");
    } else if (bmi >= 18.5 && bmi <= 25.9) {
      setmessage("You are healthy");
    } else {
      setmessage("You are overweight");
    }
  };

  return (
    <>
      <center>
        <div className="container">
          <div className="form">
            <form action="" onSubmit={calcBmi}>
              <div className="weight">
                <label htmlFor="">Weight(in kg)</label>
                <input
                  type="text"
                  placeholder="Input your weight"
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                />
              </div>

              <div className="height">
                <label htmlFor="">Height(in cm)</label>
                <input
                  type="text"
                  placeholder="Input your height"
                  value={height}
                  onChange={(e) => setheight(e.target.value)}
                />
              </div>

              <button type="submit">Calculate BMI</button>
            </form>
          </div>
        </div>

        <div className="bmi-info">
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>
      </center>
    </>
  );
};
