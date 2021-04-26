import React from 'react';
import { connect } from 'react-redux';

import './item.styles.scss';

const Item = ({ itemId, patch }) => (
    <div className='item-container'>
        {
            itemId === 0 ? 
            <div className='blank'></div>
            : <img alt={`${itemId}`} src={`http://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${itemId}.png`} />

        }
    </div>
)

const mapStateToProps = state => {
    const { patch } = state;
    return { patch: patch.currentPatch }
}

export default connect(mapStateToProps)(Item);