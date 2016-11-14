export default function indexReducer (state = 0, action) {
  switch (action.type) {
    case 'CHANGE_INDEX':
      return action.payload;
    case 'RESET_INDEX':
      return 0;
    default:
      return state;
  }
}