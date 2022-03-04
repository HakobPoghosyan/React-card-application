import React from "react";
import Button from "./Button";
import "../styles/header.css";
import "../styles/button.css";

const Header = ({ addCardBtn, sortCardBtn }) => {
  return (
    <div className="header">
      <Button classname="button" text="Add Card" onclick={addCardBtn} />
      <Button classname="button" text="Sort Card" onclick={sortCardBtn} />
    </div>
  );
};

export default Header;
