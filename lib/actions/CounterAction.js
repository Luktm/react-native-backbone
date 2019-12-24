import {INCREMENT, DECREMENT} from './types';

export const increment = (props) => {
   return {
    type: INCREMENT,
    payload: props
   }
}

export const decrement = (props) => {
  return {
   type: DECREMENT,
   payload: props
  }
}