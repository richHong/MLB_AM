import { updateGames } from '../public/src/sagas/sagas';
import * as API        from '../public/src/helpers/api';
import { call, put }   from 'redux-saga/effects';
import { expect }      from 'chai';


describe('sagas', () => {
  describe('gameSaga', () => {  
    it('Should RECEIVE_GAMES when UPDATE_GAMES is dispatched', () => {
      const mockDate = new Date();

      const mockAction = {
        type: 'UPDATE_GAMES',
        payload: mockDate
      };

      const generator = updateGames(mockAction);
      expect( generator.next().value ).to.deep.equal( put({ type: 'SPINNER_ACTIVE'}) );
      expect( generator.next().value ).to.deep.equal( call(API.fetchGames, mockDate) );
      expect( generator.next().value ).to.deep.equal( put({ type: 'RESET_INDEX'}) );
      expect( generator.next().value ).to.deep.equal( put({ type: 'RECEIVE_GAMES', payload: [] }) );
      expect( generator.next().value ).to.deep.equal( put({ type: 'SPINNER_INACTIVE'}) );
      expect( generator.next() ).to.deep.equal( {done: true, value: undefined} );
    });
  });
});

