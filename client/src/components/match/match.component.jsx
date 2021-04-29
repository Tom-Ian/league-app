import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ChampionSquare from '../champion-square/champion-square.component';
import Item from '../item/item.component';
import SummonerSpell from '../summoner-spell/summoner-spell.component';

import './match.styles.scss';

const Match = ({matchId, championKey, patch, summonerSpells}) => {

    const [currPtcp, setCurrPtcp] = useState({});
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [daysAgo, setDaysAgo] = useState('');
    const [gameMode, setGameMode] = useState('');
    const [result, setResult] = useState('');
    const [kda, setKda] = useState({});
    const [items, setItems] = useState([]);
    const [spells, setSpells] = useState([]);
    const [level, setLevel] = useState('');
    const [gold, setGold] = useState('');
    const [cs, setCs] = useState('');

    useEffect(() => {
        //prevent unmounting error
        let unmounted = false; 
        
        //fetch match info
        async function fetchMatch() {
            const response = await axios
                .get('/match', {
                    params: {
                        matchId
                    }
                })
            return response;
        }

        fetchMatch().then(response => {
            const data = response.data
            if(!unmounted){
                //summary
                const { 
                    gameDuration,
                    gameCreation,
                    gameMode,
                } = data;

                setMinute(Math.floor(gameDuration / 60));
                setSecond(gameDuration % 60);
                setDaysAgo(getDaysAgo(gameCreation));
                setGameMode(gameMode);
                
                //current participant
                const currPtcp = data.participants.filter(participant => participant.championId === championKey)[0]
                const { stats } = currPtcp;
                console.log('currptcp', currPtcp)
                setCurrPtcp(currPtcp);
                setKda({kills: stats.kills, deaths: stats.deaths, assists: stats.assists});
                setResult(currPtcp.stats.win ? 'VICTORY' : 'DEFEAT');
                setItems([
                    stats.item0,
                    stats.item1, 
                    stats.item2, 
                    stats.item3, 
                    stats.item4, 
                    stats.item5, 
                    stats.item6, 
                ]);
                setSpells([currPtcp.spell1Id, currPtcp.spell2Id]);
                setLevel(currPtcp.stats.champLevel);
                setGold(currPtcp.stats.goldEarned);
                setCs(currPtcp.stats.totalMinionsKilled);
            }
        });

        //clean up
        return () => { unmounted = true };
    }, [matchId])

    const getDaysAgo = gameCreation => {
        const now = Date.now();
        const gap = now - gameCreation;
        const daysAgo = Math.floor(gap / 60 / 60 / 24 / 1000)
        return daysAgo;
    }

    return(
        <div className='match-container'>
            <ChampionSquare championKey={championKey} level={level}/>
            <div className='result-container'>
                <div className={`result ${result === 'VICTORY' ? 'blue' : 'red'}`}>{result}</div>
                <div>{gameMode}</div>
                <div className='summoner-spells-container'>
                    {   
                        spells.map(spell => {
                            return Object.keys(summonerSpells).map(i => {
                                if(parseInt(summonerSpells[i].key)  === spell)
                                    return <SummonerSpell  key={i} summonerSpellId={summonerSpells[i].id}/>
                        })})
                    }
                </div>
            </div>
            <div className='items-scores-container'>
                <div className='items-container'>
                    {
                        items.map((itemId, index) => 
                            <Item key={index} itemId={itemId} />
                        )
                    }
                </div>
                <div className='scores-container'>
                    <div className='kda'>{kda.kills} / {kda.deaths} / {kda.assists}</div>
                    <div>{cs}</div>
                    <div>{gold.toLocaleString()}</div>
                </div>
            </div>
            <div className='time-container'>
                Howling Abyss
                <div>{minute}m {second}s - {daysAgo} days ago</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { patch } = state;
    const { ddragon } = state
    return { 
        patch: patch.currentPatch,
        summonerSpells: ddragon.summonerSpells 
    }
}

export default connect(mapStateToProps)(Match);