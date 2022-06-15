import React, { useEffect, useState } from 'react';

import Pebble from './Pebble.jsx';
import '../Styles/Joke.css'

function Joke(props) {
    // let [joke, setJoke] = useState(null);
    // console.log(props.punchline + " sed")

    // useEffect(() => {
    //     setJoke(props.joke);
    //   }, []);

    // let [joke, setJoke] = useState();

    let jokeSetup = props.setup;
    let jokePunchline = props.punchline;


    return (
        <div>
            <h1> {jokeSetup} </h1>
            <Pebble punchline={jokePunchline} />
            {/* <h3> {props.punchline} </h3> */}
            {/* <h3> {jokePunchline} </h3> */}
        </div>
    )
}



export default Joke