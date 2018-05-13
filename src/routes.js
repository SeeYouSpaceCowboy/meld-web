import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import ChatContainer from './containers/ChatContainer'

export default (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/signup' render={ () => loggedIn ? <Redirect to="/chats"/> : <Signup/> }/>
        <Route path='/login' render={ () => loggedIn ? <Redirect to="/chats"/> : <Login/> }/>
        <Route path='/chats' render={ () => loggedIn ? <ChatContainer/> : <Redirect to="/login"/> }/>
        <Route path='/logout' render={ () => logout() ? <Redirect to="/login"/> : null }/>
        <Route path='/' render={ () => loggedIn ? <ChatContainer/> : <Redirect to="/login"/> }/>
      </Switch>
    </div>
  </BrowserRouter>
)

const loggedIn = !!sessionStorage['jwt']

function logout() {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return !sessionStorage['jwt']
}
