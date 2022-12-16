import React, { useState } from "react";

function Weather() {
  const [value, setValue] = useState(10);
  const [color, setColor] = useState("cold");

  const increaseTemp = () => {
    const newTemp = value + 1;
    if (newTemp >= 15) {
      setColor("hot");
    }

    setValue(value + 1);
  };

  const decreaseTemp = () => {
    const newTemp = value -1;
    if (newTemp <= 15) {
      setColor("cold");
    }

    setValue(value -1);
  };

  return (
    <>
      <div className="container">
        <h1>Weather</h1>

        <div className="circle">
          <div className={`temp-display ${color} `}> <h1>{value}°C</h1> </div>
        </div>

        <div className="button">
          <button onClick={increaseTemp}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
      </div>
    </>
  );
}

export default Weather;
