import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import SummonerPage from './pages/summoner/summoner.component';
import ChampionPage from './pages/champion/champion.component';

import { setPatch } from './redux/patch/patch.actions';
import './app.styles.scss';
import fetch from 'node-fetch';
import { setSummonerSpells } from './redux/ddragon/ddragon.actions';

const App = ({ setPatch, setSummonerSpells }) => {
  
  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(response => response.json())
    .then(response => {
      setPatch(response[0]);
      fetch(`https://ddragon.leagueoflegends.com/cdn/${response[0]}/data/en_US/summoner.json`)
      .then(response => response.json())
      .then(response => setSummonerSpells(response.data))
    });
  }, [setPatch])
  
  return (
    <div className='app-container'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/summoner/:urlDisplayName' component={SummonerPage}/>
        <Route  path='/champion/:championKey' component={ChampionPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setPatch: patch => dispatch(setPatch(patch)),
  setSummonerSpells: data => dispatch(setSummonerSpells(data))
})

export default connect(null, mapDispatchToProps)(App);
