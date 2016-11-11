const date = new Date(2016,4,20);
export default function dateReducer (state = date, action){
  switch (action.type) {
    default:
      return state;
  };
};