import { combineReducers } from 'redux';
import gameReducer         from './gameReducer';
import dateReducer         from './dateReducer';
import indexReducer        from './indexReducer';
import modalReducer        from './modalReducer';
import spinnerReducer      from './spinnerReducer';

const rootReducer = combineReducers({
  showSpinner: spinnerReducer,
  showModal: modalReducer,
  index: indexReducer,
  date: dateReducer,
  games: gameReducer
});

export default rootReducer;