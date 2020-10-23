import React, { useEffect, useState } from 'react';
import Cards from './components/cards/Cards';
import Navbar from './components/navbar/Navbar';

import { getFlats } from './api/api';

import './app.css';

const App = () => {
  const [flats, setFlats] = useState([]);
  useEffect(() => {
    getFlats().then(setFlats);
  }, []);

  return (
    <>
      <Navbar />
      <Cards flats={flats} />
    </>
  );
};

export default App;
