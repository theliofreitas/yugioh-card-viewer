const initialState = {
  nextPage: 0,
  rowsRemaining: 0,
};

const cardListOffsetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_OFFSET':
      return action.payload;
    case 'CLEAR_OFFSET':
      return initialState;
    default:
      return state;
  }
};

export default cardListOffsetReducer;
