import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ChatItem from '../components/ChatItem'

class ChatList extends Component {
  render() {
    return (
      <div className='chat-list'>
        { this.renderChatItems() }
        <Link to='/logout'>Logout</Link>
      </div>
    )
  }

  renderChatItems() {
    let temp = [{ id: 1, name: "Bob" }, { id: 2, name: "John" }, { id: 3, name: "Scott" }]

    return temp.map(chat => <ChatItem key={ chat.id }/>)
  }
}

export default ChatList
