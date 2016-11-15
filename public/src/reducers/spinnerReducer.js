export default function spinnerReducer (state = false, action) {
  switch (action.type){
    case 'TOGGLE_SPINNER':
      return !state;
    default:
      return state;
  }
}