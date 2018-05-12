import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import ChatContainer from './containers/ChatContainer'

export default (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/signup' component={ Signup } render={ () => autoHome() }/>
        <Route path='/login' render={ () => loggedIn(<Redirect to="/chats"/>) }/>
        <Route path='/chats' render={ () => loggedIn(<ChatContainer/>) }/>
        <Route path='/logout' render={ () => logout() }/>
        <Route path='/' component={ ChatContainer } render={ () => requireAuth() }/>
      </Switch>
    </div>
  </BrowserRouter>
)

function loggedIn(component) {
  if(sessionStorage['jwt']) return component

  return <Login/>
}

function requireAuth() {
  if(!sessionStorage['jwt']) <Redirect to="/login"/>
}

function logout() {
  if(sessionStorage['jwt']) {
    sessionStorage.removeItem('jwt')
  }

  <Redirect to="/login"/>
}

function autoHome() {
  if(sessionStorage['jwt']) <Redirect to="/login"/>
}
