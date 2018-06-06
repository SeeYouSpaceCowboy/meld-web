import React from 'react'

const Message = ({ type, message }) =>
  <div className={ `message ${ type }` }>
    <p>{ message }</p>
  </div>

export default Message
