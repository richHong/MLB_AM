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
export function updateGames(date){
  return dispatch => {
    dispatch(resetIndex());
    return fetch('/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({date})
    })
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
  games = games || [];
  return {
    type: 'RECEIVE_GAMES',
    payload: games
  };
}
export function changeDate(date){
  return {
    type: 'CHANGE_DATE',
    payload: date
  };
}
export function changeIndex(index){
  return {
    type: 'CHANGE_INDEX',
    payload: index
  };
}
export function resetIndex(){
  return {
    type: 'RESET_INDEX'
  };
}