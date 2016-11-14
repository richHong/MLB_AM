export default function gameReducer (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GAMES':
      return action.payload ? [...action.payload] : state;
    default:
      return state;
  }
}