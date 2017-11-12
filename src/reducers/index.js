import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import trendingReducer from './trendingReducer'

export default combineReducers({
  searchResults: searchReducer,
  trendingResults: trendingReducer
});