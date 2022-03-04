import React from "react";
import "../styles/divCard.css";

const DivCard = ({ number, button }) => {
  return (
    <div className="divCard">
      {number}
      {button}
    </div>
  );
};

export default DivCard;
