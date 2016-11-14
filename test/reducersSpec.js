import dateReducer, { date } from '../public/src/reducers/dateReducer';
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
});