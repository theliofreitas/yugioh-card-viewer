import { combineReducers } from 'redux';
import cardListReducer from './cardList';

const allReducers = combineReducers({
  cardList: cardListReducer,
});

export default allReducers;
