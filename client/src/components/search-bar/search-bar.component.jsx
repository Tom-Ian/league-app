import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setCurrentSummoner } from '../../redux/summoner/summoner.actions';

import './search-bar.styles.scss';

//Get summoner name and info by search
const SearchBar = ({ setCurrentSummoner }) => {

    const [ searchName, setSearchName ] = useState('');

    const onChange = event => {
        setSearchName(event.target.value.replaceAll(' ', '%20'));
    }

    const onSubmit = event => {
        event.preventDefault();
        axios
            .get(`http://localhost:5000/summoner/${searchName}`)
            .then(response => setCurrentSummoner(response.data))
            .catch(error => console.log(error))
    }

    return(
        <div className=''>
            <form onSubmit={onSubmit}>
                <input onChange={onChange}/>
                <button type='submit'>GO</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentSummoner: summoner => dispatch(setCurrentSummoner(summoner))
});

export default connect(null, mapDispatchToProps)(SearchBar);