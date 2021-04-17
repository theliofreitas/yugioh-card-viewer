const initialState = {
  data: [],
  offset: {
    nextPage: 0,
    rowsRemaining: 0,
  },
  loadingHeader: false,
  loadingFooter: false,
  error: false,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ASYNC_GET_CARDS': {
      return {
        ...state,
        loadingHeader: action.payload.offset ? false : true,
        loadingFooter: action.payload.offset ? true : false,
        error: false,
      };
    }
    case 'SUCCESS_GET_CARDS':
      return {
        data: action.payload.data,
        offset: action.payload.offset,
        loadingHeader: false,
        loadingFooter: false,
        error: false,
      };

    case 'GET_NEXT_PAGE':
      return {
        data: [...state.data, ...action.payload.data],
        offset: action.payload.offset,
        loadingHeader: false,
        loadingFooter: false,
        error: false,
      };

    case 'ERROR_GET_CARDS':
      return {
        ...state,
        data: [],
        loadingHeader: false,
        loadingFooter: false,
        error: true,
      };

    default:
      return state;
  }
};

export default cardsReducer;
