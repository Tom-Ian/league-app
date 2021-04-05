import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './spell-bubble.styles.scss';

const SpellBubble = ({ id, currentChampion }) =>{
    
    const [spellName, setSpellName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setSpell();
    })

    const setSpell = () => {

        //passive
        if(id === 'p'){
            setSpellName(currentChampion.passive.name);
            setDescription(currentChampion.passive.description)
        } else{
            //spells             
            var spellIndex;
            switch (id) {
                case 'q': spellIndex = 0;
                break;
                case 'w': spellIndex = 1;
                break;
                case 'e': spellIndex = 2;
                break;
                case 'r': spellIndex = 3;
            }
            setSpellName(currentChampion.spells[spellIndex].name)
            setDescription(refineDescription(currentChampion.spells[spellIndex].dynamicDescription))
        }
    }

    

    const refineDescription = (description) => {
        var refinedDescription;
        refinedDescription = description
            .replace('<magicDamage>', '<font color=#0099ff>')
            .replace('</magicDamage>', "</font>")
            .replace('<physicalDamage>', '<font color=#ffcc00>')
            .replace('</physicalDamage', '</font>')
            .replace('<keywordMajor>', '<font color=#ffffff>')
            .replace('</keywordMajor>','</font>')

        return refinedDescription;
    }

    function parser() {
        return {__html: description}
    }

    return(
        <div className='speech-bubble'>
            <p className='spell-name'>{spellName}</p>
            <p dangerouslySetInnerHTML={parser()}></p>
        </div>
    )
}

const mapStateToProps = state => {
    const { champion } = state;
    return { currentChampion: champion.currentChampion };
}

export default connect(mapStateToProps)(SpellBubble);