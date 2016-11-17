import { combineReducers } from 'redux';
import gameReducer         from './gameReducer';
import dateReducer         from './dateReducer';
import indexReducer        from './indexReducer';
import modalReducer        from './modalReducer';
import spinnerReducer      from './spinnerReducer';
import toastReducer        from './toastReducer'; 

const rootReducer = combineReducers({
  showSpinner: spinnerReducer,
  showModal: modalReducer,
  index: indexReducer,
  date: dateReducer,
  games: gameReducer,
  toast: toastReducer
});

export default rootReducer;