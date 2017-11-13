import { SEARCH_GIFS, TRENDING_GIFS } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_GIFS: {
      const newSearchItem = {
        query: action.payload.query,
        res: action.payload.res
      };

      // Prevents duplicate searches to be kept in state
      let newState = state.filter(search => search.query !== action.payload.query);
    
      return [newSearchItem, ...newState].slice(0,5) || false;
    }
    case TRENDING_GIFS:
          return [action.payload] || false;
    default: 
      return state;
  }
}