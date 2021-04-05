import React from 'react';
import { connect } from 'react-redux';

import ChampionSquare from '../../components/champion-square/champion-square.component';

import './summoner.styles.scss';

const SummonerPage = ({ currentSummoner }) => (
    <div className='summoner-page-container'>
        <p>{JSON.stringify(currentSummoner)}</p>
        <ChampionSquare name='Aatrox' />
    </div>
    
)

const mapStateToProps = (state) => {
    const { summoner } = state;
    return { currentSummoner: summoner.currentSummoner }
}

export default connect(mapStateToProps)(SummonerPage);