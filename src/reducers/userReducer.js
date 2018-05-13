import { CONST } from '../common/constants'

export default function userReducer(state = { currentUser: {} }, action) {
  switch(action.type) {
    case CONST.FETCH_USER:
      return { ...state, currentUser: action.payload }
    case CONST.LOGIN_OR_SIGNUP:
      return state
    default: return state
  }
}
