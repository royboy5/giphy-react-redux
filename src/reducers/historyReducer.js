import { SEARCH_HISTORY } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_HISTORY:
      return [ action.payload.query, ...state].slice(0,5) || false;
    default: 
      return state;
  }
}