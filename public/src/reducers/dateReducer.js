import { CHANGE_DATE } from '../actions/types';

export const date = new Date(); //Gets current date

export default function dateReducer (state = date, action) {
  switch (action.type) {
    case CHANGE_DATE:
      return action.payload;
    default:
      return state;
  }
}