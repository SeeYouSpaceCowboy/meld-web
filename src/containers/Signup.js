import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      <div className='signup'>
        <h1>Join Us</h1>

        <input type='text' placeholder='username'/>
        <input type='text' placeholder='firstname'/>
        <input type='text' placeholder='lastname'/>
        <input type='password' placeholder='password'/>
        <input type='password' placeholder='password confirmation'/>
        <p>Already have an account? <a href='/login'>Log In</a></p>

        <button>Sign Up</button>

        <p>By signing up, you agree to the <a href='/terms-&-conditions'>terms & conditions</a></p>
      </div>
    )
  }
}

export default Signup
