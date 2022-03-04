import React from "react";
import "../styles/instructions.css";

const Instructions = () => {
  return (
    <div className="instructions">
      <div className="instuctions-text">
        <h1>Press the "Add card" button to add the new Card.</h1>
        <h1>Use the "Sort cards" button to sort the Cards by the increase.</h1>
        <h1>Press an X icon on the top to delete them.</h1>
      </div>
    </div>
  );
};

export default Instructions;
