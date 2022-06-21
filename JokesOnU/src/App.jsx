import React, { useState, useEffect } from 'react';
import './Styles/App.css';


import Heading from './Components/Heading';
import Joke from './Components/Joke.jsx';

function App() {
  let [setup, setSetup] = useState();
  let [punchline, setPunchline] = useState();


  let getJokeFromAPI = () => {
    let data = fetch("https://yq-joke-api.herokuapp.com/random_joke")
    .then(response => response.json())
    .then(data => {
      console.log(data.setup + " -> " + data.punchline)
      console.log(data)
      setSetup(data.setup);
      setPunchline(data.punchline);
    }
  )}

  useEffect(() => {
    getJokeFromAPI();
  }, []);

  return (
    <div className="App">
      <div onClick={() => {window.location.reload();}}>
        <Heading />  
      </div>
      <Joke setup={setup} punchline={punchline}/>
    </div>
  )
}

export default App;
