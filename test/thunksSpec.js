import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';
import * as thunks        from '../public/src/thunks/thunks';
import nock               from 'nock';
import expect             from 'expect';

const middlewares = [ thunk ];
const mockStore   = configureMockStore(middlewares);

describe('thunks', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates RECEIVE_GAMES when fetching initial games has been done', () => {
    nock('http://localhost:3000')
      .get('/api/games')
      .reply(200, {data:{games:{game:['games']}}});

    const expectedActions = [
      {type: 'SPINNER_ACTIVE'},
      {type: 'RECEIVE_GAMES', payload: ['games']},
      {type: 'SPINNER_INACTIVE'}
    ];
    const store = mockStore({ games: [] });

    return store.dispatch(thunks.testFetchInitGames())
      .then(() => { 
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});