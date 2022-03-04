import React from "react";
import Button from "./Button";
import "../styles/header.css";
import "../styles/button.css";

const Header = ({ addCardBtn, sortCardBtn }) => {
  // const [cards, setCards] = useState([]);

  // const getRandomInt = () => {
  //   return Math.floor(Math.random() * 999);
  // };

  // const deleteCard = (id) => {
  //   for (let i = 0; i < cards.length; i++) {
  //     setCards(cards.filter((obj) => obj.id !== id));
  //   }
  // };

  // const addCard = () => {
  //   const randomNumber = getRandomInt();
  //   setCards([
  //     ...cards,
  //     {
  //       id: cards.length,
  //       number: randomNumber,
  //     },
  //   ]);

  //   for (let i = 0; i < cards.length; i++) {
  //     console.log("cards.id");
  //     console.log(cards[i].id);
  //     console.log(cards[i].number);
  //   }
  // };

  // const sortCard = () => {
  //   const sorted = [...cards].sort((a, b) => {
  //     return a.number - b.number;
  //   });
  //   setCards(sorted);
  // };

  return (
    <div className="header">
      <Button classname={"button"} text="Add Card" onclick={addCardBtn} />
      <Button classname={"button"} text="Sort Card" onclick={sortCardBtn} />
      {/* {cards.map((item, index) => (
        <DivCard
          number={item.number}
          key={index}
          button={<ButtonX text={"X"} onclick={() => deleteCard(item.id)} />}
        />
      ))} */}
    </div>
  );
};

export default Header;
