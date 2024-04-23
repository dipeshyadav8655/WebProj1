import React from 'react'
import './Message.css'

function Message() {
  return (
    <div className='msgContainer'>
        <div className='msgTitle'>
        <p>
        What is Lorem Ipsum?
        </p>
        </div>
        <div className='msgText'>
            <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
    </div>
  )
}

export default Message