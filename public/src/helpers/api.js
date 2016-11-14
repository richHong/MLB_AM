import fetch from 'isomorphic-fetch';

// Promise used to fetch new games given a date from the server
export function fetchGames(date) {
  return new Promise((resolve, reject) => {
    fetch('/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({date})
    })
    .then(response => {
        if(!response.ok){
          return reject(new Error('Failed to fetch games from server.'));
        }
        response.json()
        .then(json => {
          return resolve(json.data.games.game);
        });
    });
  });
}