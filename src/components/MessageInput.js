import React from 'react'

const MessageInput = () =>
  <form className='message-input'>
    <input type='text' placeholder='Type a message to send...'/>
    <button type='submit'>SEND</button>
  </form>

export default MessageInput
