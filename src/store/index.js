import { createStore } from 'redux';
import cardListReducer from '../reducers/cardList';

export const store = createStore(cardListReducer);
