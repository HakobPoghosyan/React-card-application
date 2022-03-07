import React from "react";
import DivCard from "./DivCard";
import "../styles/main.css";

const Main = ({ newArr, deleteFunc }) => {
  return (
    <div className="main">
      {newArr.map((item, index) => (
        <DivCard
          number={item.number}
          key={index}
          id={item.id}
          func={deleteFunc}
        />
      ))}
    </div>
  );
};

export default Main;
