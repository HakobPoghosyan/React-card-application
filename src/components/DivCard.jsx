import React from "react";
import Button from "./Button";
import "../styles/divCard.css";

const DivCard = ({ number, action, id }) => {
  return (
    <div className="divCard">
      {number}
      <Button classname="buttonX" text="X" onclick={() => action(id)} />
    </div>
  );
};

export default DivCard;
