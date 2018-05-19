import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const ChatContainer = () =>
  <div>
    <p>Chats Container</p>
    <Link to='/logout'>Logout</Link>
  </div>

export default (withRouter(ChatContainer))
