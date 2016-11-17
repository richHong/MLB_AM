import { SHOW_WARN_TOAST,
         HIDE_WARN_TOAST,
         SHOW_ERROR_TOAST,
         HIDE_ERROR_TOAST } from '../actions/types';

export default function toastReducer (state = {warning: false, error: false, errMsg: null}, action) {
  switch (action.type){
    case SHOW_WARN_TOAST:
      return Object.assign({}, state, {warning: true});
    case HIDE_WARN_TOAST:
      return Object.assign({}, state, {warning: false});
    case SHOW_ERROR_TOAST:
      return Object.assign({}, state, {error: true, errMsg: action.payload});
    case HIDE_ERROR_TOAST:
      return Object.assign({}, state, {error: false, errMsg: null});
    default:
      return state;
  }
}