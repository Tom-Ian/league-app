import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setCurrentChampion } from '../../redux/ddragon/ddragon.actions';

import './champion-square.styles.scss';

const ChampionSquare = ({ patch, championKey, setCurrentChampion, type, level }) => 
{
    const onClick = async () => {
        axios.get(`http://localhost:5000/champion`,{
            params: {
                patch: patch,
                championKey: championKey
            }
        })
        .then(response => setCurrentChampion(response.data))
        .catch(error => console.log(error))
    }

    return(
        <div className={`champion-square-container `}>
            {
                level ? 
                <React.Fragment>
                    <div className={`frame round`}>
                        <img 
                            src={`https://cdn.communitydragon.org/${patch}/champion/${championKey}/square`}
                            alt={championKey}
                        />
                    </div>
                    <span className='level round'>{level}</span>
                </React.Fragment>
                : 
                <Link className='link-container' to={ `/champion/${championKey}`} onClick={onClick}>
                    <img 
                        src={`https://cdn.communitydragon.org/${patch}/champion/${championKey}/square`}
                        alt={championKey}
                    />
                </Link>
            }
        
        </div>

    )
}

const mapStateToProps = state => {
    const { patch } = state;
    return { patch: patch.currentPatch}
}

const mapDispatchToProps = dispatch => ({
    setCurrentChampion: champion => dispatch(setCurrentChampion(champion))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChampionSquare));