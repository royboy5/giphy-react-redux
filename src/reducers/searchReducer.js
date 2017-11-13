import { SEARCH_GIFS, TRENDING_GIFS } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_GIFS:
      return [{query: action.payload.query, res: action.payload.res}, ...state].slice(0,5) || false;
    case TRENDING_GIFS:
          return [action.payload] || false;
    default: 
      return state;
  }
}