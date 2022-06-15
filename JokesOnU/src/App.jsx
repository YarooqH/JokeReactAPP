import Reaxt, { useState, useEffect } from 'react';
import { Center, Square, Circle } from '@chakra-ui/react';
import './Styles/App.css';


import Heading from './Components/Heading';
import Joke from './Components/Joke.jsx';

function App() {
  // const [joke, setJoke] = useState();
  let [setup, setSetup] = useState();
  let [punchline, setPunchline] = useState();
  // let joke = getJokeFromAPI();
  // let btn = document.querySelector('.btn');
  // btn.addEventListener('click', getJokeFromAPI);

  let getJokeFromAPI = () => {
    let data = fetch("http://localhost:3005/jokes/random")
    .then(response => response.json())
    .then(data => {
      console.log(data.setup + " -> " + data.punchline)
      console.log(data)
      // console.log(data.punchline)
      // setJoke(data)
      setSetup(data.setup);
      setPunchline(data.punchline);
      // return setJoke(data.joke);
      // if (a == 'joke') {
      //   return data.joke
      // } else if (a == 'punchline') {
      //   return data.punchline
      // }
    }
    // return newJoke;
  )}

  useEffect(() => {
    getJokeFromAPI();
  }, []);

  return (
    <div className="App">
      <div onClick={() => {window.location.reload();}}>
        <Heading />  
      </div>
      {/* <button className='btn'>click me</button>     */}
      <Joke setup={setup} punchline={punchline}/>
    </div>
  )
}

export default App





// useEffect(() => {
//   getJokeFromAPI();
// }, []);

