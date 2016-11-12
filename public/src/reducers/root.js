import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import dateReducer from './dateReducer';
import indexReducer from './indexReducer';

const rootReducer = combineReducers({
  index: indexReducer,
  date: dateReducer,
  games: gameReducer
});

export default rootReducer;