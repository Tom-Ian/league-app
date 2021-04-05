import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setCurrentChampion } from '../../redux/champion/champion.actions';

import './champion-square.styles.scss';

const ChampionSquare = ({ patch, championKey, setCurrentChampion }) => 
{

    const onClick = async () => {
        axios.get(`http://localhost:5000/champion`,{
            params: {
                patch: patch,
                championKey: championKey
            }
        })
        .then(response => setCurrentChampion(response.data))
        .catch(error => console.log(error))
    }

    return(
        <Link to={ `/champion/${championKey}`} onClick={onClick}>
            <img 
                className='champion-square' 
                src={`https://cdn.communitydragon.org/${patch}/champion/${championKey}/square`}
                alt='icon'
            />
        </Link>
)}

const mapDispatchToProps = dispatch => ({
    setCurrentChampion: champion => dispatch(setCurrentChampion(champion))
})

export default connect(null, mapDispatchToProps)(withRouter(ChampionSquare));