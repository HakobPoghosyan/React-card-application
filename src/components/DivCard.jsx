import React from "react";
import Button from "./Button";
import "../styles/divCard.css";

const DivCard = ({ number, func, id }) => {
  return (
    <div className="divCard">
      {number}
      <Button classname="buttonX" text={"X"} onclick={() => func(id)} />
    </div>
  );
};

export default DivCard;
