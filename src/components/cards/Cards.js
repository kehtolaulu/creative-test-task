import React from 'react';

import Card from '../card/Card';

import './cards.css';

const Cards = ({ flats }) => (
  <div className="content">
    <div className="cards">
      {flats.map(flat =>
        <Card key={flat.id} {...flat} />
      )}
    </div>
  </div>
);

export default Cards;
