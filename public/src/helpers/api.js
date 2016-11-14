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

//Same as above function with discrete URL for testing
export function testFetchGames(date) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/api/games', {
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