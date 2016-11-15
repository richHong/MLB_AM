import { updateGames } from '../public/src/sagas/sagas';
import * as API        from '../public/src/helpers/api';
import { call, put }   from 'redux-saga/effects';
import { expect }      from 'chai';
import * as types      from '../public/src/actions/types';

describe('sagas', () => {
  describe('gameSaga', () => {  
    it('should RECEIVE_GAMES when UPDATE_GAMES is dispatched', () => {
      const mockDate = new Date();

      const mockAction = {
        type: 'UPDATE_GAMES',
        payload: mockDate
      };

      const generator = updateGames(mockAction);
      expect( generator.next().value ).to.deep.equal( put({ type: types.TOGGLE_SPINNER}) );
      expect( generator.next().value ).to.deep.equal( call(API.fetchGames, mockDate) );
      expect( generator.next().value ).to.deep.equal( put({ type: types.RESET_INDEX}) );
      expect( generator.next().value ).to.deep.equal( put({ type: types.RECEIVE_GAMES, payload: [] }) );
      expect( generator.next().value ).to.deep.equal( put({ type: types.TOGGLE_SPINNER}) );
      expect( generator.next() ).to.deep.equal( {done: true, value: undefined} );
    });
  });
});

