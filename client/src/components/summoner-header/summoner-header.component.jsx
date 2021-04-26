import React from 'react';
import { connect } from 'react-redux';

import ProfileIcon from '../profile-icon/profile-icon.component';

import './summoner-header.styles.scss';

const SummonerHeader = ({ currentSummoner }) => (
    <div className='summoner-header-container'>
        <ProfileIcon />
        <div className='text-container'>
            <span>{currentSummoner.name}</span>
            <span>Level: {currentSummoner.summonerLevel}</span>
        </div>
    </div>
)

const mapStateToProps = state => {
    const { summoner } = state;
    return { currentSummoner: summoner.currentSummoner }
}

export default connect(mapStateToProps)(SummonerHeader);