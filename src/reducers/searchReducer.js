import { SEARCH_GIFS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case SEARCH_GIFS:
      return action.payload.res || false;
    default: 
      return state;
  }
}