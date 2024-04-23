import React from 'react'
import Message from '../../Generic/MessageBox/Message';
import MessageRight from '../../Generic/MessageRight/MessageRight';
import './Faq.css'

function Faq() {
    return (
        <div className='main-container faqMain'>
            <div className='subheading-text focused-color text-center'>
                <p>FAQs</p>
            </div>
            <div>
                <div className='left'>
                    <Message />
                </div>
                <div className='right'>
                    <MessageRight />
                </div>
                <div className='left'>
                    <Message />
                </div>
            </div>
        </div>
    )
}

export default Faq