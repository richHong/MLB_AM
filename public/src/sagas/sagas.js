import { takeLatest }   from 'redux-saga';
import { call, put }    from 'redux-saga/effects';
import * as API         from '../helpers/api';
import { resetIndex, 
        receiveGames, 
        toggleSpinner,
        showErrorToast } from '../actions/actions';
import { UPDATE_GAMES }  from '../actions/types';

export function* updateGames(action) {
  try {
    yield put(toggleSpinner());
    const games = yield call(API.fetchGames, action.payload);
    yield put(resetIndex());
    yield put(receiveGames(games));
  } catch (err) {
    yield put(showErrorToast(err));
  } finally {
    yield put(toggleSpinner());
  }
}
export function* gameSaga() {
  yield* takeLatest(UPDATE_GAMES, updateGames);
}