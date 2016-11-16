import fetch from 'isomorphic-fetch';
// Promise used to fetch new games given a date from the server
export function fetchGames(date) {
  return new Promise((resolve, reject) => {
    fetch('/api/games', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({date})
    })
    .then(response => response.json())
    .then(json => resolve(json.data.games.game))
    .catch(err => reject(err));
  });
}
