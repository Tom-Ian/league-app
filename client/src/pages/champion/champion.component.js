import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ChampionSquare from '../../components/champion-square/champion-square.component';
import SpellBar from '../../components/spell-bar/spell-bar.component';

import './champion.styles.scss'

const ChampionPage = ({ match, currentPatch }) => {

    const championKey = match.params.championKey;

    return(
        <div className='champion-page-container'>
            <div className='champion-header'>
                <ChampionSquare championKey={championKey} patch={currentPatch}/>
                <SpellBar patch={currentPatch} championKey={championKey} />
            </div>
        </div>
)}

const mapStateToProps = state => {
    const { patch } = state;
    return { 
        currentPatch: patch.currentPatch
    }
}

export default connect(mapStateToProps)(withRouter(ChampionPage));