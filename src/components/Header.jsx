import React from "react";
import Button from "./Button";
import "../styles/header.css";
import "../styles/button.css";

const Header = ({ addCardBtn, sortCardBtn, removeAllCards }) => {
  return (
    <div className="header">
      <Button classname="button" text="Add Card" onclick={addCardBtn} />
      <Button classname="button" text="Sort Card" onclick={sortCardBtn} />
      <Button classname="button" text="clear" onclick={removeAllCards}/>
    </div>
  );
};

export default Header;
