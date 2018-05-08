import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h1>Welcome Back</h1>

        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <p>Dont have an account? <a href='/signup'>Sign Up</a></p>

        <button>Login</button>

        <a href='/forgot-password'>Forgot your password?</a>
      </div>
    )
  }
}

export default Login
