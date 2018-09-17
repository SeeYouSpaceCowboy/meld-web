import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { signup } from '../actions/userActions'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      password_confirmation: ''
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
      <form className='signup' onSubmit={ this.handleSubmit }>
        <h1>Join Us</h1>

        <input type='text' placeholder='username'/>
        <input type='text' placeholder='firstname'/>
        <input type='text' placeholder='lastname'/>
        <input type='password' placeholder='password'/>
        <input type='password' placeholder='password confirmation'/>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>

        <button type='submit'>Sign Up</button>

        <p>By signing up, you agree to the <Link to='/terms-&-conditions'>terms & conditions</Link></p>
      </form>
    )
  }
}

Signup.propTypes = {
  history: PropTypes.object,
  login: PropTypes.func,
  signup: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signup: signup
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(withRouter(Signup))
