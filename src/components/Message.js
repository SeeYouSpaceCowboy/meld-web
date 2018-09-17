import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ type, message, icon }) =>
  <div className={ `message ${ type } ${ icon }` }>
    <p>{ message }</p>
  </div>

Message.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.bool
}

export default Message
