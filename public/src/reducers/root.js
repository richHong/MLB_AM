import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import dateReducer from './dateReducer';
import indexReducer from './indexReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  showModal: modalReducer,
  index: indexReducer,
  date: dateReducer,
  games: gameReducer
});

export default rootReducer;