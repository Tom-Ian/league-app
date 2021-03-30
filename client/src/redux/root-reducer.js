import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//use localstorage as default storage (you can use sessionStorage)
import storage from 'redux-persist/lib/storage';

import summonerReducer from './summoner/summoner.reducer';

const persistConfig = {
    key: 'root',
    storage,
    //the reducers we wanna store
    whitelist: ['summoner']
}

const rootReducer = combineReducers({
    summoner: summonerReducer
})

export default persistReducer(persistConfig, rootReducer);