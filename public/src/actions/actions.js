import 'isomorphic-fetch';

export function fetchGames(){
  return dispatch => {
    return fetch('/api/games')
    .then(
      response => {
        response.json()
        .then(json => {
          dispatch(receiveGames(json.data.games.game));
        });
      }, 
      error => {
        console.log(error);
    });
  };
}
export function receiveGames(games){
  return {
    type: 'RECEIVE_GAMES',
    payload: games
  };
}