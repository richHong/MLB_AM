import dateReducer, { date } from '../public/src/reducers/dateReducer';
import gameReducer           from '../public/src/reducers/gameReducer';
import indexReducer          from '../public/src/reducers/indexReducer';
import modalReducer          from '../public/src/reducers/modalReducer';
import spinnerReducer        from '../public/src/reducers/spinnerReducer';
import * as types            from '../public/src/actions/types';
import expect                from 'expect';

describe('reducers', () => {
  describe('dateReducer', () => {
    it('should return the initial state', () => {
      expect(
        dateReducer(undefined, {})
      ).toEqual(date);
    });
    it('should handle CHANGE_DATE', () => {
      expect(
        dateReducer({}, {
          type: types.CHANGE_DATE,
          payload: new Date("2016-11-14")
        })
      ).toEqual(new Date("2016-11-14"));
    });
  });
  describe('gameReducer', () => {
    it('should return the initial state', () => {
      expect(
        gameReducer(undefined, {})
      ).toEqual([]);
    });
    it('should handle RECEIVE_GAMES', () => {
      expect(
        gameReducer({}, {
          type: types.RECEIVE_GAMES,
          payload: ['games']
        })
      ).toEqual(['games']);
    });
  });
    describe('indexReducer', () => {
    it('should return the initial state', () => {
      expect(
        indexReducer(undefined, {})
      ).toEqual(0);
    });
    it('should handle CHANGE_INDEX', () => {
      expect(
        indexReducer({}, {
          type: types.CHANGE_INDEX,
          payload: 2
        })
      ).toEqual(2);
    });
    it('should handle RESET_INDEX', () => {
      expect(
        indexReducer({}, {
          type: types.RESET_INDEX
        })
      ).toEqual(0);
    });
  });
  describe('modalReducer', () => {
    it('should return the initial state', () => {
      expect(
        modalReducer(undefined, {})
      ).toEqual(false);
    });
    it('should handle TOGGLE_MODAL', () => {
      expect(
        modalReducer({}, {
          type: types.TOGGLE_MODAL
        })
      ).toEqual(false);
    });
  });
  describe('spinnerReducer', () => {
    it('should return the initial state', () => {
      expect(
        spinnerReducer(undefined, {})
      ).toEqual(false);
    });
    it('should handle TOGGLE_SPINNER', () => {
      expect(
        spinnerReducer({}, {
          type: types.TOGGLE_SPINNER
        })
      ).toEqual(false);
    });
  });

});