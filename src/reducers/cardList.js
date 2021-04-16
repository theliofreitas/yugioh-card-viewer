const initialState = {
  data: [],
  offset: {
    nextPage: 0,
    rowsRemaining: 0,
  },
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;

    case 'NEXT_PAGE':
      return {
        data: [...state.data, ...action.payload.data],
        offset: action.payload.offset,
      };

    default:
      return state;
  }
};

export default cardListReducer;
