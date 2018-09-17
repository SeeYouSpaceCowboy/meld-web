import React, { Component } from 'react'

import Message from '../components/Message'
import MessageInput from '../components/MessageInput'

class ChatMessages extends Component {
  render() {
    return (
      <div className='chat-messages'>
        <div className='message-wrapper'>{ this.renderMessages() }</div>
        <MessageInput/>
      </div>
    )
  }

  renderMessages() {
    let messages = [
      { user: { id: 1 }, content: 'Hello' },
      { user: { id: 2 }, content: 'Hi' },
      { user: { id: 1 }, content: 'How are you doing?' },
      { user: { id: 2 }, content: 'Im well. How are you doing?' },
      { user: { id: 1 }, content: 'Well.' },
      { user: { id: 1 }, content: 'Did you go downtown to the parade yesterday?' },
      { user: { id: 1 }, content: 'I had a great time!' },
      { user: { id: 2 }, content: 'No, I didnt. I was able to see the parade from my rooftop.' },
      { user: { id: 2 }, content: 'It was gorgeous!' },
      { user: { id: 1 }, content: 'No way! When were you going to tell me about your roof??' },
      { user: { id: 1 }, content: 'Hello' },
      { user: { id: 2 }, content: 'Hi' },
      { user: { id: 1 }, content: 'How are you doing?' },
      { user: { id: 2 }, content: 'Im well. How are you doing?' },
      { user: { id: 1 }, content: 'Well.' },
      { user: { id: 1 }, content: 'Did you go downtown to the parade yesterday?' },
      { user: { id: 1 }, content: 'I had a great time!' },
      { user: { id: 2 }, content: 'No, I didnt. I was able to see the parade from my rooftop.' },
      { user: { id: 2 }, content: 'It was gorgeous!' },
      { user: { id: 1 }, content: 'No way! When were you going to tell me about your roof??' },
      { user: { id: 1 }, content: 'Hello' },
      { user: { id: 2 }, content: 'Hi' },
      { user: { id: 1 }, content: 'How are you doing?' },
      { user: { id: 2 }, content: 'Im well. How are you doing?' },
      { user: { id: 1 }, content: 'Well.' },
      { user: { id: 1 }, content: 'Did you go downtown to the parade yesterday?' },
      { user: { id: 1 }, content: 'I had a great time!' },
      { user: { id: 2 }, content: 'No, I didnt. I was able to see the parade from my rooftop.' },
      { user: { id: 2 }, content: 'It was gorgeous!' },
      { user: { id: 1 }, content: 'No way! When were you going to tell me about your roof??' },
    ]

    let lastType = null
    return messages.map((message, i) => {
      let type = message.user.id === 1 ? "sender" : "receiver"

      if(lastType !== type) {
        lastType = type
        return <Message key={ i } type={ type } message={ message.content } icon="message-user-shift"/>
      } else {
        return <Message key={ i } type={ type } message={ message.content } icon=""/>
      }
    })
  }
}

export default ChatMessages
