import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';
import * as thunks        from '../public/src/thunks/thunks';
import * as types         from '../public/src/actions/types';
import nock               from 'nock';
import expect             from 'expect';

const middlewares = [ thunk ];
const mockStore   = configureMockStore(middlewares);

describe('thunks', () => {
  describe('fetchInitGames', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('should RECEIVE_GAMES when fetching initial games has been done', () => {
      nock('http://localhost:3000')
        .get('/api/games')
        .reply(200, {data:{games:{game:['games']}}});

      const expectedActions = [
        {type: types.SPINNER_ACTIVE},
        {type: types.RECEIVE_GAMES, payload: ['games']},
        {type: types.SPINNER_INACTIVE}
      ];
      const store = mockStore({ games: [] });

      return store.dispatch(thunks.testFetchInitGames())
        .then(() => { 
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});