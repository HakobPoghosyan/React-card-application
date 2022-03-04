import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Instructions from "./components/Instructions";
import DivCard from "./components/DivCard";
import Button from "./components/Button";
import "./styles/buttonX.css";
import "./styles/section.css";

const App = () => {
  const [cards, setCards] = useState([]);

  const getRandomInt = () => {
    return Math.floor(Math.random() * 999);
  };

  const deleteCard = (id) => {
    for (let i = 0; i < cards.length; i++) {
      setCards(cards.filter((obj) => obj.id !== id));
    }
  };

  const addCard = () => {
    const randomNumber = getRandomInt();
    setCards([
      ...cards,
      {
        id: cards.length,
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
      <div style={{ display: "flex" }}>
        <div className="section">
          <Header addCardBtn={() => addCard()} sortCardBtn={() => sortCard()} />
          <Main
            card={cards.map((item, index) => (
              <DivCard
                number={item.number}
                key={index}
                button={
                  <Button
                    classname={"buttonX"}
                    text={"X"}
                    onclick={() => deleteCard(item.id)}
                  />
                }
              />
            ))}
          ></Main>
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
