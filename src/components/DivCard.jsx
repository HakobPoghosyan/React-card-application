import React from "react";
import Button from "./Button";
import "../styles/divCard.css";

const DivCard = ({ number, func }) => {
  return (
    <div className="divCard">
      {number}
      <Button classname="buttonX" text={"X"} onclick={func} />
    </div>
  );
};

export default DivCard;
