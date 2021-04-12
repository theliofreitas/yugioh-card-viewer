const initialState = [];

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'NEXT_PAGE_RESULTS':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cardListReducer;
