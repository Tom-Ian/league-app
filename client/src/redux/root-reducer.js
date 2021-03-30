import { combineReducers } from 'redux';

import summonerReducer from './summoner/summoner.reducer';

const rootReducer = combineReducers({
    summoner: summonerReducer
})

export default rootReducer;