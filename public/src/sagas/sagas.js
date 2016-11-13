import { takeEvery, takeLatest } from 'redux-saga';
import { call, put }             from 'redux-saga/effects';
import { resetIndex, receiveGames, spinnerActive, spinnerInactive, changeDate } from '../actions/actions';
import 'isomorphic-fetch';

function fetchGames(date) {
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
          return reject(new Error('Failed response from server.'));
        }
        response.json()
        .then(json => {
          return resolve(json.data.games.game);
        });
    });
  });
}
function* updateGames(action) {
  try {
    yield put(spinnerActive());
    yield put(changeDate(action.payload));
    const games = yield call(fetchGames, action.payload);
    yield put(resetIndex());
    yield put(receiveGames(games));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(spinnerInactive());
  }
}
export function* gameSaga() {
  yield* takeLatest('UPDATE_GAMES', updateGames);
}