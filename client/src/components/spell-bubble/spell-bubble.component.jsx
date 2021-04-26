import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './spell-bubble.styles.scss';

const SpellBubble = ({ id, currentChampion }) =>{
    
    const [spellName, setSpellName] = useState('');
    const [description, setDescription] = useState('');

    var spellIndex;

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
            switch (id) {
                case 'q': spellIndex = 0;
                break;
                case 'w': spellIndex = 1;
                break;
                case 'e': spellIndex = 2;
                break;
                case 'r': spellIndex = 3;
                break;
                default: 
                return
            }
            setSpellName(currentChampion.spells[spellIndex].name)
            setDescription(refineDescription(currentChampion.spells[spellIndex].dynamicDescription))
        }
    }

    

    const refineDescription = (dynamicDescription) => {

        //Out put format: 1/1/1/1/1
        var effect1 = stringifyArray(currentChampion.spells[spellIndex].effectAmounts.Effect1Amount);
        var effect2 = stringifyArray(currentChampion.spells[spellIndex].effectAmounts.Effect2Amount);

        var refinedDescription = dynamicDescription
            .replace('<magicDamage>', '<font color=#0099ff>')
            .replace('</magicDamage>', "</font>")
            .replace('<physicalDamage>', '<font color=#ffcc00>')
            .replace('</physicalDamage>', '</font>')
            .replace('<keywordMajor>', '<font color=#ffffff>')
            .replace('</keywordMajor>','</font>')
            .replace('<status>','<font color=red>')
            .replace('</status>','</font>')

        if(refinedDescription.includes(''))
            refinedDescription
            .replace('@TotalDamageTooltip@', effect2)
            .replace('@TotalDamage@', effect1)

        return refinedDescription;
    }

    const stringifyArray = (array) => {
        
        var result = '';
        
        for(var i = 0; i < 5; i++){
            if(i !== 4)
                result += `${array[i]}/`
            else
                result += `${array[i]}`
        }

        return result;
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
    const { ddragon } = state;
    return { currentChampion: ddragon.currentChampion };
}

export default connect(mapStateToProps)(SpellBubble);