import axios from 'axios'
import { CONST } from '../common/constants'

axios.defaults.baseURL = CONST.URL
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const userAdapter = {
  fetchUser: () => {
    return axios.get('user')
      .then(response => response.data)
      .catch(error => error)
  },

  login: credentionals => {
    return axios.post('login', credentionals)
      .then(response => {
        sessionStorage.setItem('jwt', response.data.jwt)
        axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt

        return response.data
      }).catch(error => error)
  },

  signup: credentionals => {
    return axios.post('signup', credentionals)
      .then(response => {
        sessionStorage.setItem('jwt', response.data.jwt)
        axios.default.headhers.common['AUTHORIZATION'] = response.data.jwt

        return response.data
      }).catch(error => error)
  }
}
