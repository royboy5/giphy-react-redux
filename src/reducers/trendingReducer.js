import { TRENDING_GIFS } from '../actions/types'

export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case TRENDING_GIFS:
      return action.payload || false;
    default: 
      return state;
  }
}