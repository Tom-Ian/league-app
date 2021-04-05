import React from 'react';

import SpellSquare from '../spell-square/spell-square.component';

import './spell-bar.styles.scss';

const SpellBar = ({ patch, championKey }) => {

    return(
        <div className='spell-bar-container'>
            <SpellSquare patch={patch} championKey={championKey} id='p' />
            <SpellSquare patch={patch} championKey={championKey} id='q' />
            <SpellSquare patch={patch} championKey={championKey} id='w' />
            <SpellSquare patch={patch} championKey={championKey} id='e' />
            <SpellSquare patch={patch} championKey={championKey} id='r' />
        </div>
    )
}

export default SpellBar;