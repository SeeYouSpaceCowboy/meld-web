import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h1>Welcome Back</h1>

        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <p>Dont have an account? <Link to='/signup'>Sign Up</Link></p>

        <button>Login</button>

        <Link to='/forgot-password'>Forgot your password?</Link>
      </div>
    )
  }
}

export default Login
