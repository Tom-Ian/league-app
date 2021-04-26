import React, {  } from 'react';
import { connect } from 'react-redux';

import Match from '../match/match.component';

import './match-history.styles.scss';

const MatchHistory = ({ recentAram }) => {

    return (
        <div className='match-history-container'>
            {recentAram
                .filter((match, index) => index < 5)
                .map(match => <Match key={match.gameId} championKey={match.champion} matchId={match.gameId} timestamp={match.timestamp} />)}
        </div>
    )
}

const mapStateToProps = state => {
    const { summoner } = state;
    return { recentAram: summoner.recentAram};
}

export default connect(mapStateToProps)(MatchHistory);
