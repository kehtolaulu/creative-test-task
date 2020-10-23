import React, { useState } from 'react';

import './card.css';

const Card = ({ title, address, area, rooms, agent }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{address.city}, ул. {address.street}, д. {address.house}, кв. {address.room}</p>
      <p><b>Площадь: </b>{area}</p>
      <p><b>Количество комнат: </b>{rooms}</p>
      <div className="button-container">
        <div>
          <b>Продавец: </b>
          <a href="#">{agent.firstName} {agent.lastName}</a>
        </div>
        <div className={"button " + (liked ? "dislike" : "like") + "-button"} onClick={handleLike}></div>
      </div>
    </div>
  );
};

export default Card;
