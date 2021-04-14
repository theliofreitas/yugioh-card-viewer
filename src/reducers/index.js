import { combineReducers } from 'redux';
import cardListReducer from './cardList';
import cardListOffsetReducer from './cardListOffset';

const allReducers = combineReducers({
  cardList: cardListReducer,
  cardListOffset: cardListOffsetReducer,
});

export default allReducers;
