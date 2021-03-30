import React from 'react';
import axios from 'axios';

import ChampionSquare from '../champion-square/champion-square.component';

const FreeRotation = () => {

    axios.get('http://localhost:5000/free-rotation').then(response => console.log(response))

    return (
        
    )
}

export default FreeRotation;