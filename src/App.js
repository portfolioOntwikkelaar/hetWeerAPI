import React, { useState } from 'react'

import axios from 'axios';
import './App.css';

function App() {
  const [query,setQuery]= useState('');
  const [cond,setCond]= useState([])
  const url = `https://api.weatherstack.com/current?access_key=3d6c17c7d958719c3c26db7d5b630224&query=${query}`

  async function getData() {
    const result = await axios.get(url)
    setCond([result.data])
    console.log(result.data)
  }

  const submitForm = e => {
    e.preventDefault()
    getData()
  }

  return (
    <div className="App">
      <form onSubmit={submitForm} >
        <input type="text" placeholder='Where are you?' value={query} onChange={e => setQuery()} />
        <button></button>
      </form>
      {cond.map((item) =>{
        return (
          <div>
            <div></div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
