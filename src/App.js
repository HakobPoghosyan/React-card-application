import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Instructions from "./components/Instructions";
import "./styles/buttonX.css";
import "./styles/section.css";
import "./styles/generalDiv.css";
import { createUUID, getRandomInt } from "./functions/randomFuncs";

const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const randomNumber = getRandomInt();
    setCards([
      ...cards,
      {
        id: createUUID(),
        number: randomNumber,
      },
    ]);
  };

  const sortCard = () => {
    const sorted = [...cards].sort((a, b) => {
      return a.number - b.number;
    });
    setCards(sorted);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((obj) => obj.id !== id));
  };

  return (
    <div className="generalDiv">
      <div className="section">
        <Header addCardBtn={addCard} sortCardBtn={sortCard} />
        <Main arr={cards} removeCard={deleteCard} />
        <Footer />
      </div>
      <div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
