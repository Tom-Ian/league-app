import React from 'react';

const ChampionSquare = ({ name }) => (
    <div>
        <img src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${name}.png`}/>
    </div>
)

export default ChampionSquare;