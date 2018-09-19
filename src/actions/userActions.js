import { CONST } from '../common/constants'
import { userAdapter } from '../adapters/userAdapter'

export const fetchUser = () => {
  const response = userAdapter.fetchUser()

  return {
    type: CONST.FETCH_USER,
    payload: response
  }
}

export const login = (credentionals, callback) => {
  const response = userAdapter.login(credentionals)
  response.then(() => callback())

  return {
    type: CONST.LOGIN_OR_SIGNUP,
    payload: response
  }
}

export const signup = credentionals => {
  const response = userAdapter.signup(credentionals)

  return {
    type: CONST.LOGIN_OR_SIGNUP,
    payload: response
  }
}
