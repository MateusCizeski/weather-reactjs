import React, { useState } from 'react';
import fetchData from './components/service/api';
import initialData from './components/helpers/initialData';

import Card from './components/card/Card';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  }

  return (
    <div className="container">
      <form onSubmit={ handleSubmit }>
        <input 
        type="text" 
        placeholder="Cidade" 
        className="input" 
        onChange={({ target: { value } }) => setCity(value)} 
        value={city}/>
        <button type="submit" className="button">Pesquisar</button>
      </form>
      
      <Card data={data}/>
    </div>
  );
}

export default App;
