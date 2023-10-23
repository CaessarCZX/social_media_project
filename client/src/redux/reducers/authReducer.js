import { TYPES } from '../actions/authActions.js'

const initialState = {}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH:
      return action.payload
    default:
      return state
  }
}
