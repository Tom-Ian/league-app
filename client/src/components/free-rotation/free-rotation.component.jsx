import React from 'react';
import { connect } from 'react-redux';
import ChampionSquare from '../champion-square/champion-square.component';

import './free-rotation.styles.scss';

const FreeRotation = ({ rotationKeys }) => {

    return (
        <div className='rotation-container'>
            <h3 className='title'>Free champions this week</h3>
            <div className='grid'> 
                { rotationKeys.map(key => (<ChampionSquare key={key} championKey={key}/>)) }
            </div> 
        </div>
    )
}

const mapStateToProps = state => {
    const { freeRotation } = state;
    return { 
        rotationKeys: freeRotation.championKeys,
    }
}

export default connect(mapStateToProps)(FreeRotation);