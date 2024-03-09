/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Gusest");
  const [quentity, setQuentity] = useState();
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuentityChange(event) {
    setQuentity(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name:{name}</p>

      <input value={quentity} onChange={handleQuentityChange} type="number" />
      <p>Quentity:{quentity}</p>
    </div>
  );
}
export default MyComponent;
