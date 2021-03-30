import React from 'react';
import { connect } from 'react-redux';

const SummonerPage = ({ currentSummoner }) => (
    <p>{currentSummoner.id}</p>
)

const mapDispatchToProps = (state) => {
    const { summoner } = state;
    return { currentSummoner: summoner.currentSummoner }
}

export default connect(mapDispatchToProps)(SummonerPage);