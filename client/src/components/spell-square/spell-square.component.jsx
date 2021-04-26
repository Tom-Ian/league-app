import React, { useState } from 'react';

import SpellBubble from '../spell-bubble/spell-bubble.component';

import './spell-square.styles.scss';

const SpellSquare = ({ patch, championKey, id }) => {

    const [onHover, setOnHover] = useState(false);


    return(
        <div className='spell-container'>
            <img className='icon'
                src={`https://cdn.communitydragon.org/${patch}/champion/${championKey}/ability-icon/${id}`}
                alt='spell'
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
            />
            { id !== 'p' ?  <span className='key'>{id.toUpperCase()}</span> : ''}
            { onHover ? <SpellBubble className='spell-bubble' id={id}/> : ''}
        </div>

    )
}

export default SpellSquare;

