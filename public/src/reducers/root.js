import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import dateReducer from './dateReducer';

const rootReducer = combineReducers({
  date: dateReducer,
  games: gameReducer
});

export default rootReducer;