const date = new Date();

export default function dateReducer (state = date, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.payload;
    default:
      return state;
  }
}