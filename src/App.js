import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Balance from "./components/Balance";

function App() {
  const [balance, setBalance] = useState(10000);
  const [cards] = useState([
    {
      id: 1,
      name: "Card 1",
      benefit: 1000,
      price: 30000,
      interval: 1000,
    },
    {
      id: 2,
      name: "Card 2",
      benefit: 2000,
      price: 15000,
      interval: 5000,
    },
    {
      id: 3,
      name: "Card 3",
      benefit: 3000,
      price: 10000,
      interval: 10000,
    },
  ]);
  const [ownedCards, setOwnedCards] = useState([]);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timers = ownedCards.map((card) => {
      return setInterval(() => {
        setBalance((prevBalance) => prevBalance + card.benefit);
      }, card.interval);
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [ownedCards]);

  const buyCard = (card) => {
    if (balance >= card.price) {
      setBalance(balance - card.price);
      setOwnedCards([...ownedCards, card]);
    } else {
      alert("Недостаточно средств");
    }
  };

  const toggleCardList = () => {
    setShowCards(!showCards);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Магазин карточек</h1>
        <Balance balance={balance} />
      </div>
      <button className="toggle-button" onClick={toggleCardList}>
        {showCards ? "Скрыть карточки" : "Показать карточки"}
      </button>
      {showCards && (
        <div className="card-list-container">
          <CardList cards={cards} buyCard={buyCard} />
        </div>
      )}
      {ownedCards.length > 0 && (
        <div className="owned-cards">
          <h2>Купленные карточки</h2>
          {ownedCards.map((card) => (
            <div key={card.id} className="owned-card">
              <p className="card-name">{card.name}</p>
              <p className="card-benefit">+{card.benefit} за интервал</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
