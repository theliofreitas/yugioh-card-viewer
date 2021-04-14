const initialState = [];

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'NEXT_PAGE':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default cardListReducer;
