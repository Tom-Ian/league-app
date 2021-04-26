import React from 'react';
import { connect } from 'react-redux';

import './summoner-spell.styles.scss';

const SummonerSpell = ({ patch, summonerSpellId }) => (
    <div className='summoner-spell-container'>
        <img alt='summonerSpellId' src={`http://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${summonerSpellId}.png`}/>
    </div>
)

const mapStateToProps = state => {
    const { patch } = state;
    return { patch: patch.currentPatch }
}

export default connect(mapStateToProps)(SummonerSpell);