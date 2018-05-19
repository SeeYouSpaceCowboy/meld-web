import React from 'react'

import ChatList from './ChatList'
import ChatMessages from './ChatMessages'

const ChatContainer = () =>
  <div className='chat-container'>
    <ChatList/>
    <ChatMessages/>
  </div>

export default ChatContainer
