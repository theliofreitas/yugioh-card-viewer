const initialState = {
  data: [],
  offset: {
    nextPage: 0,
    rowsRemaining: 0,
  },
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return {
        data: action.payload.data,
        offset: action.payload.offset,
      };

    case 'NEXT_PAGE':
      return {
        data: [...state.data, ...action.payload.data],
        offset: action.payload.offset,
      };

    default:
      return state;
  }
};

export default cardsReducer;
