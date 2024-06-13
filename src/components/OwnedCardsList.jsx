import React from "react";

function OwnedCardList({ ownedCards }) {
  return (
    <div>
      <h2>Купленные карточки:</h2>
      {ownedCards.length === 0 ? (
        <p>У вас нет купленных карточек.</p>
      ) : (
        <ul>
          {ownedCards.map((card) => (
            <li key={card.id}>
              {card.name} - {card.benefit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OwnedCardList;
