import { CONST } from '../common/constants'

export default function userReducer(state = { current: {} }, action) {
  switch(action.type) {
    case CONST.FETCH_USER:
      return { ...state, current: action.payload }
    case CONST.LOGIN_OR_SIGNUP:
      return state
    default: return state
  }
}
