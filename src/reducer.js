import {  SHOW_ALL_TIME, SHOW_RECENT } from './actions.js'

const userReducer = (state = [], action) => {
  console.log('Action received');
  switch (action.type) {
    case SHOW_ALL_TIME:
      return action.payload.data
    case SHOW_RECENT:
      return action.payload.data
    default:
      return state
  }
}

export default userReducer;
