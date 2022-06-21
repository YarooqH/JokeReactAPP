import React, { useEffect, useState } from 'react';

import Pebble from './Pebble.jsx';
import '../Styles/Joke.css'

function Joke(props) {
    let jokeSetup = props.setup;
    let jokePunchline = props.punchline;

    return (
        <div>
            <h1> {jokeSetup} </h1>
            <Pebble punchline={jokePunchline} />
        </div>
    )
}



export default Joke