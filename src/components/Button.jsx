import React from "react";
import "../styles/button.css";

const Button = ({ text, onclick, classname }) => {
  return (
    <button onClick={onclick} className={classname}>
      {text}
    </button>
  );
};

export default Button;
