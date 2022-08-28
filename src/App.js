import React, { useState } from "react";
import "./styles.css";

function MyControlledInput() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>Input value: {value}</div>
      <input placeholder="Type a value" value={value} onChange={onChange} />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h2>Controlled Component Demo</h2>
      <MyControlledInput />
    </div>
  );
}
