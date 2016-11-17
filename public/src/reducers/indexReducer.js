import { CHANGE_INDEX, RESET_INDEX } from '../actions/types';

export default function indexReducer (state = 0, action) {
  switch (action.type) {
    case CHANGE_INDEX:
      return action.payload;
    case RESET_INDEX:
      return 0;
    default:
      return state;
  }
}