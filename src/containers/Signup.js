import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component {
  render() {
    return (
      <form className='signup'>
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

export default Signup
