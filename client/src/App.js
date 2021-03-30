import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import SearchBar from '../src/components/search-bar/search-bar.component';
import './App.css';

import SummonerPage from './pages/summoner/summoner.component';

const App = ({ currentSummoner }) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={ () => currentSummoner ? (<Redirect to='/summoner'/>) : (<SearchBar />)} />
        <Route path='/summoner' component={SummonerPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { summoner } = state;
  return { currentSummoner: summoner.currentSummoner }
}

export default connect(mapStateToProps)(App);
