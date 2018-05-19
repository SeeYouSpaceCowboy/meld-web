import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { login } from '../actions/userActions'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(e) {
    let state = this.state
    let field = e.target.name

    state[field] = e.target.value
    this.setState({ state })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.login({ user: this.state })
    this.props.history.push('/')
  }

  render() {
    return (
      <form className='login' onSubmit={ this.handleSubmit }>
        <h1>Welcome Back</h1>

        <input type='text' onChange={ this.onChange } name='username' placeholder='username' value={ this.state.username }/>
        <input type='password' onChange={ this.onChange } name='password' placeholder='password' value={ this.state.password }/>
        <p>Dont have an account? <Link to='/signup'>Sign Up</Link></p>

        <button type="submit">Login</button>

        <Link to='/forgot-password'>Forgot your password?</Link>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: login
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(withRouter(Login))
