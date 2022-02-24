import React, { useState } from 'react'

import axios from 'axios';
import './App.css';

function App() {
  const [query,setQuery]= useState('');
  const [cond,setCond]= useState([])
  const url = `http://api.weatherstack.com/current?access_key=22f6986b70a5fd011e24586f230f8e10&query=${query}`

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
        <input type="text" placeholder='Where are you?' value={query} onChange={e => setQuery(e.target.value)} />
        <button type='submit'>Result</button>
      </form>
      {cond.map((item,index) =>{
        return (

          <div key={index} >
            <div className='items'>
              <img src={item.current.weather_icons} alt=""  />
              
              <p>{item.location.country}</p>
              <p>{item.location.region}</p>
              <div className="condition">
                <p>{item.current.observation_time}</p>
                <p><span>Temperature</span>  : {item.current.temperature}</p>
                <p><span>Feels Like</span>  : {item.current.feelslike}</p>
                <p><span>Pressure</span> : {item.current.pressure}</p>
                <p><span>Wind Degree</span> : {item.current.wind_degree}</p>
                <p><span>Visibility</span> : {item.current.visibility}</p>
                <p><span>Is Day?</span> : {item.current.is_day}</p>
                <p><span>Wind Speed</span> : {item.current.wind_speed}</p>
              </div>
              </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
