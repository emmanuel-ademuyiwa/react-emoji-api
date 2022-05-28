import React, { useState, useEffect } from 'react';
import Emoji from './components/Emoji';
import './main.scss'

// const API_KEY = "1355e3942ece320d88e7aeab4157af8dbec66a2e"

function App() {

  const [query, setQuery] = useState('')
  const [emojis, setEmoji] = useState([])

  function searchEmoji(event) {
    setQuery(event.target.value)
    const list = emojis.filter(emoji => {
      return emoji[0].toLowerCase().includes(query.toLowerCase())
    })
    setEmoji(list)
  }
  
  useEffect(() => {
    fetch('https://api.github.com/emojis')
    .then(res => res.json())
    .then(result => {
      const emojis = Object.entries(result);
      setEmoji(emojis)
    })
  },[])

  const elements = emojis.map(emoji => ( 
    <Emoji 
      key={Math.random()}
      img={emoji[1]}
    />
  ))
  

  return (
    <div className="app">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="search..."
          className="search"
          onChange={searchEmoji}
          value={query}
        />
      </div>

      <div className="box">
        {elements}
      </div>

    </div>
  );
}

export default App;
