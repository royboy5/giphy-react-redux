import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import trendingReducer from './trendingReducer'
import historyReducer from './historyReducer'

export default combineReducers({
  searchResults: searchReducer,
  trendingResults: trendingReducer,
  historyResults: historyReducer
});