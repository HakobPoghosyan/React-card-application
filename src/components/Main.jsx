import React from "react";
import DivCard from "./DivCard";
import "../styles/main.css";

const Main = ({ arr, removeCard }) => {
  return (
    <div className="main">
      {arr.map((item, index) => (
        <DivCard
          number={item.number}
          key={index}
          id={item.id}
          action={removeCard}
        />
      ))}
    </div>
  );
};

export default Main;
