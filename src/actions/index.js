export const newSearch = value => ({
  type: 'NEW_SEARCH',
  payload: value,
});

export const nextPage = value => ({
  type: 'NEXT_PAGE',
  payload: value,
});

export const updateOffset = value => ({
  type: 'UPDATE_OFFSET',
  payload: value,
});

export const clearOffset = value => ({
  type: 'CLEAR_OFFSET',
  payload: value,
});
