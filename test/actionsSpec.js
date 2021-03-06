import expect       from 'expect';
import * as actions from '../public/src/actions/actions';
import * as types   from '../public/src/actions/types';

describe('actions', () => {
  it('should create an action to update games', () => {
    const mockDate = 'mock date';
    const expectedAction = {
      type: types.UPDATE_GAMES,
      payload: mockDate
    };
    expect(actions.updateGames(mockDate)).toEqual(expectedAction);
  });
  it('should create an action to receive games', () => {
    const mockGames = 'mock games';
    const expectedAction = {
      type: types.RECEIVE_GAMES,
      payload: mockGames
    };
    expect(actions.receiveGames(mockGames)).toEqual(expectedAction);
  });
  it('should create an action to change date', () => {
    const mockDate = 'mock date';
    const expectedAction = {
      type: types.CHANGE_DATE,
      payload: mockDate
    };
    expect(actions.changeDate(mockDate)).toEqual(expectedAction);
  });
  it('should create an action to change index', () => {
    const mockIndex = 'mock index';
    const expectedAction = {
      type: types.CHANGE_INDEX,
      payload: mockIndex
    };
    expect(actions.changeIndex(mockIndex)).toEqual(expectedAction);
  });
    it('should create an action to reset index', () => {
    const expectedAction = {
      type: types.RESET_INDEX
    };
    expect(actions.resetIndex()).toEqual(expectedAction);
  });
  it('should create an action to toggle modal', () => {
    const expectedAction = {
      type: types.TOGGLE_MODAL
    };
    expect(actions.toggleModal()).toEqual(expectedAction);
  });
  it('should create an action to toggle spinner', () => {
    const expectedAction = {
      type: types.TOGGLE_SPINNER
    };
    expect(actions.toggleSpinner()).toEqual(expectedAction);
  });
  it('should create an action to show warning toast', () => {
    const expectedAction = {
      type: types.SHOW_WARN_TOAST
    };
    expect(actions.showWarnToast()).toEqual(expectedAction);
  }); 
  it('should create an action to hide warning toast', () => {
    const expectedAction = {
      type: types.HIDE_WARN_TOAST
    };
    expect(actions.hideWarnToast()).toEqual(expectedAction);
  });
  it('should create an action to show error toast', () => {
    const mockError = new Error('Error');
    const expectedAction = {
      type: types.SHOW_ERROR_TOAST,
      payload: mockError
    };
    expect(actions.showErrorToast(mockError)).toEqual(expectedAction);
  });
  it('should create an action to hide error toast', () => {
    const expectedAction = {
      type: types.HIDE_ERROR_TOAST
    };
    expect(actions.hideErrorToast()).toEqual(expectedAction);
  });   
});
