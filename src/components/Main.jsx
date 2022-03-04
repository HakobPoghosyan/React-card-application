import React from "react";
import DivCard from "./DivCard";
import "../styles/main.css";

const Main = ({ newArr, setNewArr }) => {
  const deleteCard = (id) => {
    for (let i = 0; i < newArr.length; i++) {
      setNewArr(newArr.filter((obj) => obj.id !== id));
      console.log(id);
      console.log(newArr);
      console.log(newArr.id);
    }
  };

  return (
    <div className="main">
      {newArr.map((item, index) => (
        <DivCard
          number={item.number}
          key={index}
          func={() => deleteCard(item.id)}
        />
      ))}
    </div>
  );
};

export default Main;
