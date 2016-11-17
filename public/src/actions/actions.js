import { UPDATE_GAMES,
         RECEIVE_GAMES,
         CHANGE_DATE,
         CHANGE_INDEX,
         RESET_INDEX,
         TOGGLE_MODAL,
         TOGGLE_SPINNER,
         SHOW_WARN_TOAST,
         HIDE_WARN_TOAST,
         SHOW_ERROR_TOAST,
         HIDE_ERROR_TOAST } from './types'; 

export function updateGames(date) {
  return {
    type: UPDATE_GAMES,
    payload: date
  };
}
export function receiveGames(games) {
  return {
    type: RECEIVE_GAMES,
    payload: games || []
  };
}
export function changeDate(date) {
  return {
    type: CHANGE_DATE,
    payload: date
  };
}
export function changeIndex(index) {
  return {
    type: CHANGE_INDEX,
    payload: index
  };
}
export function resetIndex() {
  return {
    type: RESET_INDEX
  };
}
export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}
export function toggleSpinner() {
  return {
    type: TOGGLE_SPINNER
  };
}
export function showWarnToast() {
  return {
    type: SHOW_WARN_TOAST
  };
}
export function hideWarnToast() {
  return {
    type: HIDE_WARN_TOAST
  };
}
export function showErrorToast(error) {
  return {
    type: SHOW_ERROR_TOAST,
    payload: error
  };
}
export function hideErrorToast() {
  return {
    type: HIDE_ERROR_TOAST
  };
}