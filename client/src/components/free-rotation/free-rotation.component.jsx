import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setFreeRotation } from '../../redux/free-rotation/free-rotation.actions';
import ChampionSquare from '../champion-square/champion-square.component';

import './free-rotation.styles.scss';

const FreeRotation = ({ setFreeRotation, rotationKeys, currentPatch }) => {

    useEffect(() => {
        axios.get('http://localhost:5000/free-rotation').then(response => {setFreeRotation(response.data.freeChampionIds)})
    }, [])


    return (
        <div className='rotation-container'>
            <h3 className='title'>Free champions this week</h3>
            <div className='grid'> 
                { rotationKeys.map(key => (<ChampionSquare key={key} patch={currentPatch} championKey={key}/>)) }
            </div>   
        </div>
    )
}

const mapStateToProps = state => {
    const { freeRotation, patch } = state;
    return { 
        rotationKeys: freeRotation.championKeys,
        currentPatch: patch.currentPatch
    }
}

const mapDispatchToProps = dispatch => ({
    setFreeRotation: championKeys => dispatch(setFreeRotation(championKeys))
})

export default connect(mapStateToProps, mapDispatchToProps)(FreeRotation);