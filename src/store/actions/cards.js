export const getCards = (text, offset) => ({
  type: 'ASYNC_GET_CARDS',
  payload: {
    text,
    offset,
  },
});
