import React from 'react';
import { connect } from 'react-redux';

import './profile-icon.styles.scss';

const ProfileIcon = ({ currentPatch, profileIconId }) => (
    <div className='profile-icon-container'>
        <img 
            src={`https://ddragon.leagueoflegends.com/cdn/${currentPatch}/img/profileicon/${profileIconId}.png`}
            alt='profile-icon'
        />
    </div>
)

const mapStateToProps = state => {
    const { summoner, patch } = state;
    return { 
        profileIconId: summoner.currentSummoner.profileIconId,
        currentPatch: patch.currentPatch
    }
}

export default connect(mapStateToProps)(ProfileIcon);