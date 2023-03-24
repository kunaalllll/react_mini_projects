import React from "react";

const Greeter = () => {
  let greeting;
  let time = new Date(2023, 3, 24, 22);
  let hour = time.getHours();
  let styles = {};
  console.log(hour);
  document.body.style.backgroundColor = "lightgreen";
  if (hour >= 6 && hour <= 11) {
    greeting = "Good Morning 🌻";
    styles.color = "yellow";
  } else if (hour >= 11 && hour <= 17) {
    greeting = "Good Afternoon ☀";
    styles.color = "orange";
  } else if (hour >= 17 && hour <= 20) {
    greeting = "Good Evening ☁";
    styles.color = "lightblue";
  } else {
    greeting = "Good Night 🌙";
  }
  return (
    <>
      <h1>
        Hello Sir, <span style={styles}> {greeting} </span>
      </h1>
    </>
  );
};

export default Greeter;
