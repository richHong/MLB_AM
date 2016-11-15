import { receiveGames,
         toggleSpinner } from '../actions/actions';
import fetch             from 'isomorphic-fetch';

export function fetchInitGames(testing) {
  let url = '/api/games';
  if(testing) {
    url = 'http://localhost:3000/api/games';
  }
  return dispatch => {
    dispatch(toggleSpinner());
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveGames(json.data.games.game));
      dispatch(toggleSpinner());
    })
    .catch(err => console.log(err));
  };
}
