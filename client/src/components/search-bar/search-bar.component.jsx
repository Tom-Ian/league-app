import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';

import { fetchCurrentSummonerStartAsync } from '../../redux/summoner/summoner.actions';

import './search-bar.styles.scss';

//Get summoner name and info by search
const SearchBar = ({ history }) => {

    const [ urlDisplayName, setUrlDisplayName ] = useState('');

    // input showing: 'summoner name'
    const [ placeholder, setPlaceholder ] = useState('summoner name');

    const onChange = event => {
        //replace ' ' with '+', still works in api as '%20'
        setUrlDisplayName(event.target.value.replaceAll('%', '&#37').replaceAll(' ', '+'));
    }

    const onSubmit = event => {
        event.preventDefault();
        history.push(`/summoner/${urlDisplayName}`);
    }

    return(
        <div className='search-bar-container'>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange} 
                    placeholder={placeholder} 
                    onFocus={() => setPlaceholder('')} 
                    onBlur={() => setPlaceholder('summoner name')}
                />
                <button type='submit' className='button'>GO</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCurrentSummonerStartAsync: searchName => dispatch(fetchCurrentSummonerStartAsync(searchName))
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));