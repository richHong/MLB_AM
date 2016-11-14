import expect       from 'expect';
import * as actions from '../public/src/actions/actions';

describe('actions', () => {
  it('should create an action to update games', () => {
    const mockDate = 'mock date';
    const expectedAction = {
      type: 'UPDATE_GAMES',
      payload: mockDate
    };
    expect(actions.updateGames(mockDate)).toEqual(expectedAction);
  });
  it('should create an action to receive games', () => {
    const mockGames = 'mock games';
    const expectedAction = {
      type: 'RECEIVE_GAMES',
      payload: mockGames
    };
    expect(actions.receiveGames(mockGames)).toEqual(expectedAction);
  });
  it('should create an action to change date', () => {
    const mockDate = 'mock date';
    const expectedAction = {
      type: 'CHANGE_DATE',
      payload: mockDate
    };
    expect(actions.changeDate(mockDate)).toEqual(expectedAction);
  });
  it('should create an action to change index', () => {
    const mockIndex = 'mock index';
    const expectedAction = {
      type: 'CHANGE_INDEX',
      payload: mockIndex
    };
    expect(actions.changeIndex(mockIndex)).toEqual(expectedAction);
  });
    it('should create an action to reset index', () => {
    const expectedAction = {
      type: 'RESET_INDEX'
    };
    expect(actions.resetIndex()).toEqual(expectedAction);
  });
  it('should create an action to toggle modal', () => {
    const expectedAction = {
      type: 'TOGGLE_MODAL'
    };
    expect(actions.toggleModal()).toEqual(expectedAction);
  });
  it('should create an action to start spinner', () => {
    const expectedAction = {
      type: 'SPINNER_ACTIVE'
    };
    expect(actions.spinnerActive()).toEqual(expectedAction);
  });
  it('should create an action to stop spinner', () => {
    const expectedAction = {
      type: 'SPINNER_INACTIVE'
    };
    expect(actions.spinnerInactive()).toEqual(expectedAction);
  });  
});
