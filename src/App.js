import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Instructions from "./components/Instructions";
import "./styles/buttonX.css";
import "./styles/section.css";
import "./styles/generalDiv.css";
import { getRandomInt } from "./functions/randomNumbers";
import { createUUID } from "./functions/randomId";

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

  return (
    <>
      <div className="generalDiv">
        <div className="section">
          <Header addCardBtn={() => addCard()} sortCardBtn={() => sortCard()} />
          <Main newArr={cards} setNewArr={setCards} />
          <Footer />
        </div>
        <div>
          <Instructions />
        </div>
      </div>
    </>
  );
};

export default App;
