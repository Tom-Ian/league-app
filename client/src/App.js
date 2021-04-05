import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import SummonerPage from './pages/summoner/summoner.component';
import ChampionPage from './pages/champion/champion.component';

import { setPatch } from './redux/patch/patch.actions';
import axios from 'axios';


const App = ({ setPatch }) => {
  
  

  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(response => response.json())
    .then(response => setPatch(response[1]));
  }, [setPatch])
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/summoner' component={SummonerPage}/>
        <Route exact path='/champion/:championKey' component={ChampionPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setPatch: patch => dispatch(setPatch(patch))
})

export default connect(null, mapDispatchToProps)(App);
