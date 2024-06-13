import React from "react";

const Card = ({ card, buyCard }) => {
  const { name, benefit, price } = card;

  return (
    <div className="card">
      <h3 className="card-name">{name}</h3>
      <p className="card-benefit">{benefit}</p>
      <p className="card-price">Цена: {price}</p>
      <button className="buy-button" onClick={() => buyCard(card)}>
        Купить
      </button>
    </div>
  );
};

export default Card;
