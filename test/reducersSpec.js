import dateReducer, { date } from '../public/src/reducers/dateReducer';
import gameReducer           from '../public/src/reducers/gameReducer';
import indexReducer          from '../public/src/reducers/indexReducer';
import modalReducer          from '../public/src/reducers/modalReducer';
import spinnerReducer        from '../public/src/reducers/spinnerReducer';
import toastReducer          from '../public/src/reducers/toastReducer';
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
      const mockDate = new Date('2016-11-14');
      expect(
        dateReducer({}, {
          type: types.CHANGE_DATE,
          payload: mockDate
        })
      ).toEqual(mockDate);
    });
  });
  describe('gameReducer', () => {
    it('should return the initial state', () => {
      expect(
        gameReducer(undefined, {})
      ).toEqual([]);
    });
    it('should handle RECEIVE_GAMES', () => {
      const mockGames = ['games'];
      expect(
        gameReducer({}, {
          type: types.RECEIVE_GAMES,
          payload: mockGames
        })
      ).toEqual(mockGames);
    });
  });
    describe('indexReducer', () => {
    it('should return the initial state', () => {
      expect(
        indexReducer(undefined, {})
      ).toEqual(0);
    });
    it('should handle CHANGE_INDEX', () => {
      const mockIndex = 2;
      expect(
        indexReducer({}, {
          type: types.CHANGE_INDEX,
          payload: mockIndex
        })
      ).toEqual(mockIndex);
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
   describe('toastReducer', () => {
    it('should return the initial state', () => {
      expect(
        toastReducer(undefined, {})
      ).toEqual({
        warning: false,
        error: false,
        errMsg: null
      });
    });
    it('should handle SHOW_WARN_TOAST', () => {
      expect(
        toastReducer({}, {
          type: types.SHOW_WARN_TOAST
        })
      ).toEqual({warning: true});
    });
    it('should handle HIDE_WARN_TOAST', () => {
      expect(
        toastReducer({}, {
          type: types.HIDE_WARN_TOAST
        })
      ).toEqual({warning: false});
    });
    it('should handle SHOW_ERROR_TOAST', () => {
      const mockError = new Error('Error');
      expect(
        toastReducer({}, {
          type: types.SHOW_ERROR_TOAST,
          payload: mockError
        })
      ).toEqual({error: true, errMsg: mockError});
    });
    it('should handle HIDE_ERROR_TOAST', () => {
      expect(
        toastReducer({}, {
          type: types.HIDE_ERROR_TOAST
        })
      ).toEqual({error: false, errMsg: null});
    });
  });
});