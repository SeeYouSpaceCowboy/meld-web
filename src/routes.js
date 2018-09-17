import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import ChatContainer from './containers/ChatContainer'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () => loggedIn ? <ChatContainer/> : <Redirect to="/login"/> }/>
      <Route path='/signup' render={ () => loggedIn ? <Redirect to="/chats"/> : <Signup/> }/>
      <Route path='/login' render={ () => loggedIn ? <Redirect to="/chats"/> : <Login/> }/>
      <Route path='/chats' component={ () => loggedIn ? <ChatContainer/> : <Redirect to="/login"/> }/>
      <Route path='/tests' component={ () => <div>github</div> }/>
      <Route path='/logout' render={ () => logout() }/>
    </Switch>
  </BrowserRouter>
)

const loggedIn = !!sessionStorage['jwt']

function logout() {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}
