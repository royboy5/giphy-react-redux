import { SEARCH_GIFS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case SEARCH_GIFS:
      return { history: action.query, res: action.payload.res } || false;
    default: 
      return state;
  }
}