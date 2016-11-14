import { takeLatest }     from 'redux-saga';
import { call, put }      from 'redux-saga/effects';
import * as API           from '../helpers/api';
import { resetIndex, 
        receiveGames, 
        spinnerActive, 
        spinnerInactive } from '../actions/actions';
import { UPDATE_GAMES }   from '../actions/types';

function* updateGames(action) {
  try {
    yield put(spinnerActive());
    const games = yield call(API.fetchGames, action.payload);
    yield put(resetIndex());
    yield put(receiveGames(games));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(spinnerInactive());
  }
}
export function* gameSaga() {
  yield* takeLatest(UPDATE_GAMES, updateGames);
}