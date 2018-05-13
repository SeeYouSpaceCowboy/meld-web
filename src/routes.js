import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import ChatContainer from './containers/ChatContainer'

export default (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/signup' component={ Signup }/>
        <Route path='/login' render={ () => loggedIn(<Redirect to="/chats"/>) }/>
        <Route path='/chats' render={ () => loggedIn(<ChatContainer/>) }/>
        <Route path='/logout' render={ () => logout() }/>
        <Route path='/' render={ loggedIn(<ChatContainer/>) }/>
      </Switch>
    </div>
  </BrowserRouter>
)

function loggedIn(component) {
  if(sessionStorage['jwt']) return component

  return <Redirect to='/login'/>
}

function logout() {
  if(sessionStorage['jwt']) {
    sessionStorage.removeItem('jwt')
  }

  return <Redirect to='/login'/>
}
