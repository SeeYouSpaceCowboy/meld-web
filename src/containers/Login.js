import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <p>Dont have an account? <a href='#'>Sign Up</a></p>

        <button>Login</button>

        <a href='#'>Forgot your password?</a>
      </div>
    )
  }
}

export default Login
