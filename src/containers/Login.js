import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e) {
    let state = this.state
    let field = e.target.name

    state[field] = e.target.value
    this.setState({ state })
  }

  onClick(e) {
    debugger
  }

  render() {
    return (
      <div className='login'>
        <h1>Welcome Back</h1>

        <input type='text' onChange={ this.onChange } name='username' placeholder='username' value={ this.state.username }/>
        <input type='password' onChange={ this.onChange } name='password' placeholder='password' value={ this.state.password }/>
        <p>Dont have an account? <Link to='/signup'>Sign Up</Link></p>

        <button onClick={ this.onClick }>Login</button>

        <Link to='/forgot-password'>Forgot your password?</Link>
      </div>
    )
  }
}

export default Login
