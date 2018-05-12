import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'

export default (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/signup' component={ Signup }/>
        <Route path='/login' component={ Login }/>
        <Route path='/' component={ Login }/>
      </Switch>
    </div>
  </BrowserRouter>
)



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
