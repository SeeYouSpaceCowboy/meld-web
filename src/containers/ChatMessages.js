import React, { Component } from 'react'

import MessageInput from '../components/MessageInput'

class ChatMessages extends Component {
  render() {
    return (
      <div className='chat-messages'>
        <MessageInput/>
      </div>
    )
  }
}

export default ChatMessages
