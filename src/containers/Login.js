import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login } from '../actions/userActions'

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
    this.props.login({ user: this.state })
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

const mapDispatchToState = dispatch => {
  return bindActionCreators({
    login: login
  }, dispatch)
}

export default connect(null, mapDispatchToState)(Login)
