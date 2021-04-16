import { takeLatest, put, call, all } from 'redux-saga/effects';

import { getCards } from '../../services/api';

function handleSearchResult(response) {
  const meta = response.meta;
  const data = response.data;

  const nextPageOffset = meta.next_page_offset ? meta.next_page_offset : 0;
  const rowsRemaining = meta.rows_remaining;

  const offsetData = {
    nextPage: nextPageOffset,
    rowsRemaining: rowsRemaining,
  };

  const cardData = data.map(handleCardItemResult);

  return { data: cardData, offset: offsetData };
}
function handleCardItemResult(cardItem) {
  const newCardItem = {
    id: cardItem.id,
    name: cardItem.name,
    atk: cardItem.atk,
    def: cardItem.def,
    level: cardItem.level,
    race: cardItem.race,
    attribute: cardItem.attribute,
    image: cardItem.card_images[0].image_url_small,
  };

  return newCardItem;
}

function* asyncGetCards({ payload }) {
  const response = yield call(getCards, payload.text, payload.offset);

  if (response.status === 200) {
    const cardItemsResult = handleSearchResult(response.data);

    payload.offset
      ? yield put({ type: 'NEXT_PAGE', payload: cardItemsResult })
      : yield put({ type: 'GET_CARDS', payload: cardItemsResult });
  }
}

export default function* root() {
  yield all([takeLatest('ASYNC_GET_CARDS', asyncGetCards)]);
}
