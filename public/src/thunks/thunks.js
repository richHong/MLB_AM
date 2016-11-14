import { receiveGames,
         spinnerActive,
         spinnerInactive } from '../actions/actions';
import fetch               from 'isomorphic-fetch';

export function fetchInitGames() {
  return dispatch => {
    dispatch(spinnerActive());
    return fetch('/api/games')
    .then(response => response.json())
    .then(json => {
      dispatch(receiveGames(json.data.games.game));
      dispatch(spinnerInactive());
    })
    .catch(err => console.log(err));
  };
}

//Function used for testing - same as above function other than URL in fetch
export function testFetchInitGames() {
  return dispatch => {
    dispatch(spinnerActive());
    return fetch('http://localhost:3000/api/games')
    .then(response => response.json())
    .then(json => {
      dispatch(receiveGames(json.data.games.game));
      dispatch(spinnerInactive());
    })
    .catch(err => console.log(err));
  };
}