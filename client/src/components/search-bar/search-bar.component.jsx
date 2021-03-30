import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setCurrentSummoner } from '../../redux/summoner/summoner.actions';

//Get summoner name and info by search
const SearchBar = ({ setCurrentSummoner }) => {

    const [ smnName, setSmnName ] = useState('');

    const onChange = event => {
        setSmnName(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        axios
            .get(`http://localhost:5000/summoner/${smnName.replaceAll(' ', '%20')}`)
            .then(response => setCurrentSummoner(response.data))
            .catch(error => console.log(error))
    }

    return(
        <div className=''>
            <form onSubmit={onSubmit}>
                <input name='summoner' onChange={onChange}/>
                <button type='submit'>GO</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentSummoner: summoner => dispatch(setCurrentSummoner(summoner))
});

export default connect(null, mapDispatchToProps)(SearchBar);