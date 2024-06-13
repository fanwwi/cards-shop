import React from "react";
import Card from "./Card";

const CardList = ({ cards, buyCard }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card-wrapper">
          <Card card={card} buyCard={buyCard} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
